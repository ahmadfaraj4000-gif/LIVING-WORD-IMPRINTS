const form = document.getElementById('invoiceForm');
const itemsEditor = document.getElementById('itemsEditor');
const previewPaper = document.getElementById('previewPaper');
const databaseBody = document.getElementById('databaseBody');
const customerSelect = document.getElementById('customerSelect');
const searchInput = document.getElementById('searchInput');
const customerHistory = document.getElementById('customerHistory');
const archivedBody = document.getElementById('archivedBody');
const archivedSearchInput = document.getElementById('archivedSearchInput');
const autosaveStatus = document.getElementById('autosaveStatus');
const activeDatabaseFilter = document.getElementById('activeDatabaseFilter');
const activeDatabaseFilterText = document.getElementById('activeDatabaseFilterText');
const clearDatabaseFilterBtn = document.getElementById('clearDatabaseFilterBtn');
const databaseFilterSelect = document.getElementById('databaseFilterSelect');
const dashboardPanelTitle = document.getElementById('dashboardPanelTitle');
const clearDashboardFilterBtn = document.getElementById('clearDashboardFilterBtn');
const voucherModal = document.getElementById('voucherModal');
const voucherIdInput = document.getElementById('voucherIdInput');
const voucherProviderInput = document.getElementById('voucherProviderInput');
const voucherAmountInput = document.getElementById('voucherAmountInput');
const dashboardIds = {
  dueToday: document.getElementById('dashDueToday'),
  lateOrders: document.getElementById('dashLateOrders'),
  inProgress: document.getElementById('dashInProgress'),
  revenueMonth: document.getElementById('dashRevenueMonth'),
  openOrders: document.getElementById('dashOpenOrders'),
  pickupToday: document.getElementById('dashPickupToday'),
  attentionList: document.getElementById('dashboardAttentionList')
};
const STORAGE_KEY = 'lwi_invoices_frontend_v2';
const INTERNAL_META_MARKER = 'LWI_INTERNAL_META:';
const SUPABASE_URL = 'https://wwawmmnckibtamquillt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YXdtbW5ja2lidGFtcXVpbGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MTk1NjEsImV4cCI6MjA5NDM5NTU2MX0.kfc9UXmvm1jfYIhW3vHaKbpEBupu1xurQxlYCKoupPY';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
let itemCount = 3;
let editingInvoiceId = null;
let autosaveTimer = null;
let isAutosaving = false;
let dashboardFilter = '';
let databaseFilter = '';

function money(n){return `$${(Number(n)||0).toFixed(2)}`}
function today(){return new Date().toISOString().slice(0,10)}
function invoiceNo(){return String(Date.now()).slice(-6)}
function esc(v){return String(v ?? '').replace(/[&<>"]/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[s]))}
function formatParentName(lastName, firstName){
  const last = String(lastName || '').trim();
  const first = String(firstName || '').trim();
  if (last && first) return `${last}, ${first}`;
  return last || first;
}
function splitParentName(data, meta = {}){
  if (meta.parentLastName || meta.parentFirstName) {
    return {
      lastName: meta.parentLastName || '',
      firstName: meta.parentFirstName || ''
    };
  }

  const fullName = String(data.parent_name || data.parentName || '').trim();
  if (!fullName) return { lastName: '', firstName: '' };

  if (fullName.includes(',')) {
    const [lastName, ...firstParts] = fullName.split(',');
    return {
      lastName: lastName.trim(),
      firstName: firstParts.join(',').trim()
    };
  }

  const parts = fullName.split(/\s+/);
  if (parts.length === 1) return { lastName: parts[0], firstName: '' };

  return {
    lastName: parts.pop(),
    firstName: parts.join(' ')
  };
}
function formatPhoneNumber(value){
  const digits = String(value || '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}
function splitStoredNotes(value){
  const notes = String(value || '');
  const markerIndex = notes.indexOf(INTERNAL_META_MARKER);

  if (markerIndex === -1) {
    return { notes, meta: {} };
  }

  const visibleNotes = notes.slice(0, markerIndex).trimEnd();
  const encoded = notes.slice(markerIndex + INTERNAL_META_MARKER.length).trim();

  try {
    return {
      notes: visibleNotes,
      meta: JSON.parse(decodeURIComponent(escape(atob(encoded))))
    };
  } catch (error) {
    console.warn('Could not read saved internal details.', error);
    return { notes: visibleNotes, meta: {} };
  }
}
function packStoredNotes(notes, meta){
  const cleanNotes = String(notes || '').trimEnd();
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(meta))));
  return `${cleanNotes}${cleanNotes ? '\n\n' : ''}${INTERNAL_META_MARKER}${encoded}`;
}
let cachedInvoices = [];
let cachedAllInvoices = [];

async function getAllInvoices(){
  const { data, error } = await supabaseClient
    .from('invoices')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return cachedAllInvoices;
  }

  cachedAllInvoices = data || [];
  archiveCompletedOldOrders(cachedAllInvoices);
  return cachedAllInvoices;
}

async function getInvoices(){
  const rows = await getAllInvoices();
  cachedInvoices = rows.filter(row => row.archived !== true);
  return cachedInvoices;
}

async function getArchivedInvoices(){
  const rows = await getAllInvoices();
  return rows.filter(row => row.archived === true);
}

async function saveInvoice(row){
  const { data, error } = await supabaseClient
    .from('invoices')
    .insert([row])
    .select()
    .single();

  if (error) {
    console.error(error);
    alert('Supabase save failed. Check console.');
    return null;
  }

  return data;
}
async function archiveCompletedOldOrders(rows){
  const oldCompleted = rows.filter(row => {
    if (row.archived === true) return false;
    if (row.status !== 'Completed') return false;
    return daysSince(row.date_submitted || row.created_at) > 30;
  });

  if (!oldCompleted.length) return;

  for (const row of oldCompleted) {
    const { error } = await supabaseClient
      .from('invoices')
      .update({ archived: true })
      .eq('id', row.id);

    if (error) {
      console.warn('Archive skipped. Make sure the archived column exists in Supabase.', error);
      return;
    }
  }
}

function sameCustomer(a, b){
  const phoneA = String(a.phone || '').replace(/\D/g, '');
  const phoneB = String(b.phone || '').replace(/\D/g, '');
  const emailA = String(a.email || '').toLowerCase().trim();
  const emailB = String(b.email || '').toLowerCase().trim();
  const nameA = String(a.parent_name || a.parentName || '').toLowerCase().trim();
  const nameB = String(b.parent_name || b.parentName || '').toLowerCase().trim();

  return Boolean(
    (phoneA && phoneA === phoneB) ||
    (emailA && emailA === emailB) ||
    (nameA && nameA === nameB)
  );
}

function duplicateOrder(order){
  setForm(order);
  editingInvoiceId = null;
  form.invoiceNumber.value = invoiceNo();
  form.orderDate.value = today();
  form.pickupDate.value = '';
  form.status.value = 'Received';
  setAutosaveStatus('Duplicated order. Manual save required.');
  calculate();
  document.querySelector('[data-view="edit"]').click();
}

function renderCustomerHistory(selectedOrder, allRows = cachedAllInvoices.length ? cachedAllInvoices : cachedInvoices){
  if (!customerHistory) return;

  if (!selectedOrder) {
    customerHistory.innerHTML = '<p class="history-empty">Select a returning customer to view order history.</p>';
    return;
  }

  const orders = allRows.filter(row => sameCustomer(row, selectedOrder));
  const totalSpent = orders.reduce((sum, row) => sum + (Number(row.total) || 0), 0);
  const lastPickup = orders
    .map(row => row.pickup_date)
    .filter(Boolean)
    .sort()
    .pop() || 'None yet';

  const recentOrders = orders.slice(0, 3).map(row => `
    <div class="history-order">
      <strong>${esc(row.invoice_number || '')} - ${money(row.total)}</strong>
      <span>${esc(row.order_date || '')} / Pickup: ${esc(row.pickup_date || 'TBD')}</span>
    </div>
  `).join('');

  customerHistory.innerHTML = `
    <h3>${esc(selectedOrder.parent_name || 'Customer History')}</h3>
    <div class="history-stats">
      <p><strong>Previous Orders:</strong> ${orders.length}</p>
      <p><strong>Total Spent:</strong> ${money(totalSpent)}</p>
      <p><strong>Last Pickup Date:</strong> ${esc(lastPickup)}</p>
    </div>
    <button class="duplicate-order-btn" type="button">Duplicate Last Order</button>
    ${recentOrders}
  `;

  customerHistory.querySelector('.duplicate-order-btn').onclick = () => duplicateOrder(selectedOrder);
}

async function renderDashboard(){
  const rows = await getInvoices();
  const todayValue = today();
  const currentMonth = todayValue.slice(0, 7);

  const openRows = rows.filter(row => row.status !== 'Completed');
  const dueToday = openRows.filter(row => row.pickup_date === todayValue);
  const lateOrders = openRows.filter(row => row.pickup_date && row.pickup_date < todayValue);
  const inProgress = rows.filter(row => row.status === 'In Progress');
  const pickupToday = rows.filter(row => row.pickup_date === todayValue);
  const revenueThisMonth = rows
    .filter(row => String(row.order_date || row.created_at || '').slice(0, 7) === currentMonth)
    .reduce((sum, row) => sum + (Number(row.total) || 0), 0);

  if (dashboardIds.dueToday) dashboardIds.dueToday.textContent = dueToday.length;
  if (dashboardIds.lateOrders) dashboardIds.lateOrders.textContent = lateOrders.length;
  if (dashboardIds.inProgress) dashboardIds.inProgress.textContent = inProgress.length;
  if (dashboardIds.revenueMonth) dashboardIds.revenueMonth.textContent = money(revenueThisMonth);
  if (dashboardIds.openOrders) dashboardIds.openOrders.textContent = openRows.length;
  if (dashboardIds.pickupToday) dashboardIds.pickupToday.textContent = pickupToday.length;

  if (dashboardIds.attentionList) {
    const panelRows = dashboardFilter ? rows.filter(row => rowMatchesOrderFilter(row, dashboardFilter)) : lateOrders;
    const emptyMessage = dashboardFilter
      ? `No ${String(databaseFilterLabels[dashboardFilter] || 'orders').toLowerCase()} right now.`
      : 'No late orders right now.';

    document.querySelectorAll('.filter-card').forEach(card => {
      card.classList.toggle('active-filter-card', card.dataset.dashboardFilter === dashboardFilter);
    });
    if (dashboardPanelTitle) dashboardPanelTitle.textContent = dashboardFilter ? databaseFilterLabels[dashboardFilter] : 'Needs Attention';
    if (clearDashboardFilterBtn) clearDashboardFilterBtn.hidden = !dashboardFilter;

    dashboardIds.attentionList.innerHTML = panelRows.length
      ? panelRows.slice(0, 10).map(row => `
          <div class="attention-item">
            <div>
              <strong>${esc(row.parent_name || 'Unknown Customer')}</strong><br>
              <small>Invoice ${esc(row.invoice_number || '')} / Status ${esc(row.status || 'Received')} / Pickup ${esc(row.pickup_date || 'TBD')}</small>
            </div>
            <span class="badge ${ageClass(daysSince(row.date_submitted || row.created_at))}">${daysSince(row.date_submitted || row.created_at)} days</span>
          </div>
        `).join('')
      : `<p>${esc(emptyMessage)}</p>`;
  }
}

function daysSince(date){return Math.max(0, Math.floor((new Date()-new Date(date))/(1000*60*60*24)))}
function ageClass(days){return days<=7?'green':days<=14?'yellow':'red'}
const databaseFilterLabels = {
  dueToday: 'Open Due Today',
  lateOrders: 'Late Orders',
  inProgress: 'Orders In Progress',
  openOrders: 'Total Open Orders',
  pickupToday: 'All Pickups Today'
};

function rowMatchesOrderFilter(row, filter){
  const todayValue = today();
  const isOpen = row.status !== 'Completed';

  if (filter === 'dueToday') return isOpen && row.pickup_date === todayValue;
  if (filter === 'lateOrders') return isOpen && row.pickup_date && row.pickup_date < todayValue;
  if (filter === 'inProgress') return row.status === 'In Progress';
  if (filter === 'openOrders') return isOpen;
  if (filter === 'pickupToday') return row.pickup_date === todayValue;

  return true;
}

function rowMatchesDatabaseFilter(row){
  return rowMatchesOrderFilter(row, databaseFilter);
}

function updateFilterDisplay(){
  if (!activeDatabaseFilter || !activeDatabaseFilterText) return;

  if (!databaseFilter) {
    activeDatabaseFilter.hidden = true;
    activeDatabaseFilterText.textContent = '';
    if (databaseFilterSelect) databaseFilterSelect.value = '';
    return;
  }

  activeDatabaseFilter.hidden = false;
  activeDatabaseFilterText.textContent = `Showing: ${databaseFilterLabels[databaseFilter] || 'Filtered Orders'}`;
  if (databaseFilterSelect) databaseFilterSelect.value = databaseFilter;
}

function createRows(existingItems=[]){
  itemsEditor.innerHTML='';
  for(let i=0;i<itemCount;i++){
    const row=document.createElement('div');
    row.className='item-edit-row';
    row.innerHTML=`
      <label><small>Amount</small><input name="amount_${i}" type="number" min="0"></label>
      <label><small>Item Description</small><input name="description_${i}"></label>
      <label><small>Color</small><input name="color_${i}"></label>
      <label><small>Size</small><input name="size_${i}"></label>
      <label><small>Price Ea</small><input name="price_${i}" type="number" step="0.01" min="0"></label>
      <label><small>Line Total</small><input name="line_${i}" readonly></label>`;
    itemsEditor.appendChild(row);
  }
  existingItems.forEach((item,i)=>Object.keys(item).forEach(k=>{const el=form.elements[`${k}_${i}`]; if(el) el.value=item[k]??'';}));
}
function formData(){
  const data=Object.fromEntries(new FormData(form).entries());
  data.emailList = form.emailList.checked;
  data.parentName = formatParentName(data.parentLastName, data.parentFirstName);
  data.phone = formatPhoneNumber(data.phone);
  data.items=[];
  for(let i=0;i<itemCount;i++){
    data.items.push({amount:data[`amount_${i}`]||'',description:data[`description_${i}`]||'',color:data[`color_${i}`]||'',size:data[`size_${i}`]||'',price:data[`price_${i}`]||'',line:data[`line_${i}`]||''});
  }
  return data;
}

function invoiceRowFromForm(){
  const d = formData();
  const internalMeta = {
    parentFirstName: d.parentFirstName || '',
    parentLastName: d.parentLastName || '',
    orderTakenBy: d.orderTakenBy || '',
    paymentType: d.paymentType || '',
    voucherId: d.voucherId || '',
    voucherProvider: d.voucherProvider || '',
    voucherAmount: d.voucherAmount || ''
  };

  return {
    invoice_number: d.invoiceNumber,
    order_date: d.orderDate || null,
    pickup_date: d.pickupDate || null,

    school: d.school || '',

    parent_name: d.parentName || '',
    student_name: d.studentName || '',

    phone: d.phone || '',
    email: d.email || '',

    address: d.address || '',
    apt: d.apt || '',
    city: d.city || '',
    zip: d.zip || '',

    email_list: !!d.emailList,

    items: d.items || [],

    subtotal: Number(d.subtotal) || 0,
    discount: Number(d.discount) || 0,
    tax: Number(d.tax) || 0,
    total: Number(d.total) || 0,
    payment: Number(d.payment) || 0,
    balance: Number(d.balance) || 0,

    status: d.status || 'Received',
    notes: packStoredNotes(d.notes || '', internalMeta),
    archived: false
  };
}

function setAutosaveStatus(message, state = ''){
  if (!autosaveStatus) return;

  autosaveStatus.textContent = message;
  autosaveStatus.className = 'autosave-status';

  if (state) autosaveStatus.classList.add(state);
}

function queueAutosave(){
  calculate();

  if (!editingInvoiceId) {
    setAutosaveStatus('Manual save required for new invoices.');
    return;
  }

  clearTimeout(autosaveTimer);
  setAutosaveStatus('Unsaved changes...', 'saving');
  autosaveTimer = setTimeout(autosaveExistingInvoice, 900);
}

async function autosaveExistingInvoice(){
  if (!editingInvoiceId || isAutosaving) return;

  isAutosaving = true;
  setAutosaveStatus('Saving...', 'saving');

  const { error } = await supabaseClient
    .from('invoices')
    .update(invoiceRowFromForm())
    .eq('id', editingInvoiceId);

  isAutosaving = false;

  if (error) {
    console.error(error);
    setAutosaveStatus('Autosave failed. Use Submit / Save.', 'error');
    return;
  }

  setAutosaveStatus('Saved automatically.', 'saved');
  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
}

function setForm(data){
  const storedNotes = splitStoredNotes(data.notes || '');
  const parentName = splitParentName(data, storedNotes.meta);

  form.invoiceNumber.value = data.invoice_number || data.invoiceNumber || '';
  form.orderDate.value = data.order_date || data.orderDate || '';
  form.pickupDate.value = data.pickup_date || data.pickupDate || '';

  form.school.value = data.school || '';
  form.parentLastName.value = parentName.lastName || '';
  form.parentFirstName.value = parentName.firstName || '';
  form.studentName.value = data.student_name || data.studentName || '';

  form.phone.value = formatPhoneNumber(data.phone || '');
  form.email.value = data.email || '';

  form.address.value = data.address || '';
  form.apt.value = data.apt || '';
  form.city.value = data.city || '';
  form.zip.value = data.zip || '';

  form.emailList.checked = !!(data.email_list || data.emailList);

  form.discount.value = data.discount || 0;
  form.payment.value = data.payment || 0;
  form.paymentType.value = storedNotes.meta.paymentType || data.payment_type || data.paymentType || '';
  form.voucherId.value = storedNotes.meta.voucherId || data.voucher_id || data.voucherId || '';
  form.voucherProvider.value = storedNotes.meta.voucherProvider || data.voucher_provider || data.voucherProvider || '';
  form.voucherAmount.value = storedNotes.meta.voucherAmount || data.voucher_amount || data.voucherAmount || '';

  form.status.value = data.status || 'Received';
  form.orderTakenBy.value = storedNotes.meta.orderTakenBy || data.order_taken_by || data.orderTakenBy || '';
  form.notes.value = storedNotes.notes || '';

  itemCount = Math.max(3, (data.items || []).length);

  createRows(data.items || []);

  editingInvoiceId = data.id || null;

  calculate();
}
function calculate(){
  let subtotal=0;
  for(let i=0;i<itemCount;i++){
    const amount=Number(form.elements[`amount_${i}`].value)||0;
    const price=Number(form.elements[`price_${i}`].value)||0;
    const line=amount*price;
    form.elements[`line_${i}`].value=line?line.toFixed(2):'';
    subtotal+=line;
  }
  const discount=Number(form.discount.value)||0, payment=Number(form.payment.value)||0;
  const taxable=Math.max(subtotal-discount,0);
  const tax=taxable*0.0635;
  const total=Math.max(taxable+tax,0);
  form.subtotal.value=subtotal.toFixed(2); form.tax.value=tax.toFixed(2); form.total.value=total.toFixed(2); form.balance.value=(total-payment).toFixed(2);
  renderPreview();
}
function renderPreview(){
  const d=formData();
  const previewItems = [...d.items];
  while (previewItems.length < 10) previewItems.push({amount:'',description:'',color:'',size:'',price:'',line:''});
  const rows=previewItems.map(x=>`<tr><td>${esc(x.amount)}</td><td>${esc(x.description)}</td><td>${esc(x.color)}</td><td>${esc(x.size)}</td><td>${x.price?money(x.price):''}</td><td>${x.line?money(x.line):''}</td></tr>`).join('');
  previewPaper.innerHTML=`
    <div class="invoice-top">
      <div class="left-top">
        <div class="title-bar">SCHOOL UNIFORM ORDER FORM</div>
        <div class="brand-block">
          <img src="assets/logo.png" class="invoice-logo" alt="Living Word Imprints">
          <p class="tagline">CONNECTICUT'S 1-STOP PRINT SHOP</p>
          <div class="locations">
            <span>450 Homestead Ave,<br>Hartford, CT 06112<br>Ph. 860-882-1679<br>Hours: Mon. - Fri. 10 am - 6 pm</span>
            <span>775 Silver Lane<br>(back of plaza)<br>East Hartford, CT 06118<br>Ph. 959-888-3120<br>Hours: Mon. - Fri. 10 am - 6 pm</span>
          </div>
        </div>
      </div>
      <div class="customer-card">
        <div class="date-row"><div class="date-box"><strong>DATE</strong> ${esc(d.orderDate||'____/____/____')}</div><div class="num-box"><strong>${esc(d.invoiceNumber||'')}</strong></div></div>
        <div class="preview-line">SCHOOL ${esc(d.school)}</div>
        <div class="preview-line">PARENT ${esc(d.parentName)}</div>
        <div class="preview-line">STUDENT ${esc(d.studentName)}</div>
        <div class="preview-line split"><span>ADDRESS ${esc(d.address)}</span><span>APT ${esc(d.apt)}</span></div>
        <div class="preview-line split"><span>CITY ${esc(d.city)}</span><span>ZIP ${esc(d.zip)}</span></div>
        <div class="preview-line">PHONE ${esc(d.phone)}</div>
        <div class="preview-line">EMAIL ${esc(d.email)}</div>
        <div class="email-check"><span class="fakebox">${d.emailList?'✓':''}</span><span>Please add me to your e-mail list<br>for sales and special offers</span></div>
      </div>
    </div>
    <table class="items-table"><thead><tr><th>Amount</th><th>Item Description</th><th>Color</th><th>Size</th><th>Price<br>EA</th><th>Line<br>Total</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="middle-bottom">
      <div class="thank-you"><h2>Thank You for your order</h2><p><em>If you are happy with our products and services, please let others know by giving us a review. If not, please tell us.</em></p></div>
      <div class="totals">
        <div class="total-row"><span>SUB TOTAL</span><span>${money(d.subtotal)}</span></div>
        <div class="total-row"><span>DISCOUNT</span><span>${money(d.discount)}</span></div>
        <div class="total-row"><span>TAX</span><span>${money(d.tax)}</span></div>
        <div class="total-row"><span>TOTAL</span><span>${money(d.total)}</span></div>
        <div class="total-row"><span>PAYMENT</span><span>${money(d.payment)}</span></div>
        <div class="total-row"><span>PAY TYPE</span><span>${esc(d.paymentType || '')}</span></div>
        <div class="total-row"><span>BALANCE</span><span>${money(d.balance)}</span></div>
      </div>
    </div>
    <div class="footer-strip">
      <div class="save-time">
        <h2>SAVE TIME!</h2>
        <div><strong>ORDER ONLINE AT:</strong> <span class="site">www.livingwordimprints.com</span></div>
        <small>24 HRS 7 DAYS</small>
        <div class="social"><div class="social-title">Follow Us on</div><div class="social-row"><span class="social-icon">f</span> living word imprints</div><div class="social-row"><span class="social-icon">◎</span> livingwordimprints</div></div>
      </div>
      <div class="important"><strong>Important!</strong><p>Order status will be sent by text or email</p><div class="wait-box">Please wait for “Pickup Date”<br>before calling - Thank you</div></div>
      <div class="pickup-box"><h2>PICKUP DATE</h2><div class="pickup-date-line">${esc(d.pickupDate||'____/____/____')}</div></div>
    </div>
    <div class="admin-preview no-print"><strong>Status:</strong> ${esc(d.status||'Received')} &nbsp; <strong>Internal Notes:</strong> ${esc(d.notes||'')}</div>`;
}
async function renderDatabase(){
  const rows = await getInvoices();
  const q = (searchInput.value || '').toLowerCase();

  databaseBody.innerHTML = '';
  updateFilterDisplay();

  rows
    .filter(rowMatchesDatabaseFilter)
    .filter(x => [x.school, x.parent_name, x.phone, x.email].join(' ').toLowerCase().includes(q))
    .forEach((x, idx) => {
      const days = daysSince(x.date_submitted || x.created_at);
      const storedNotes = splitStoredNotes(x.notes || '');

      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${esc(x.invoice_number)}</td>
        <td>${esc(x.parent_name || '')}</td>
        <td>${esc(x.phone || '')}</td>
        <td>${esc(x.email || '')}</td>
        <td>
          <select class="status-select" data-index="${idx}" data-id="${x.id}">
            <option ${x.status === 'Received' ? 'selected' : ''}>Received</option>
            <option ${x.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
            <option ${x.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>
        </td>
        <td><span class="badge ${ageClass(days)}">${days} days</span></td>
        <td>${esc(x.pickup_date || '')}</td>
        <td><input class="note-input" data-index="${idx}" data-id="${x.id}" value="${esc(storedNotes.notes || '')}"></td>
        <td>
          <button class="edit-invoice-btn" data-id="${x.id}">
            Edit
          </button>
        </td>
        <td>
          <button class="archive-invoice-btn" data-id="${x.id}">
            Archive
          </button>
        </td>
      `;

      databaseBody.appendChild(tr);
    });
}
async function renderArchivedDatabase(){
  if (!archivedBody) return;

  const rows = await getArchivedInvoices();
  const q = (archivedSearchInput?.value || '').toLowerCase();

  archivedBody.innerHTML = '';

  rows
    .filter(x => [x.school, x.parent_name, x.phone, x.email].join(' ').toLowerCase().includes(q))
    .forEach(x => {
      const days = daysSince(x.date_submitted || x.created_at);
      const storedNotes = splitStoredNotes(x.notes || '');
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${esc(x.invoice_number)}</td>
        <td>${esc(x.parent_name || '')}</td>
        <td>${esc(x.phone || '')}</td>
        <td>${esc(x.email || '')}</td>
        <td>${esc(x.status || '')}</td>
        <td><span class="badge ${ageClass(days)}">${days} days</span></td>
        <td>${esc(x.pickup_date || '')}</td>
        <td>${esc(storedNotes.notes || '')}</td>
        <td>
          <button class="edit-invoice-btn" data-id="${x.id}">
            Edit
          </button>
        </td>
        <td>
          <button class="restore-invoice-btn" data-id="${x.id}">
            Restore
          </button>
        </td>
      `;

      archivedBody.appendChild(tr);
    });
}

async function populateCustomers(){
  const rows = await getAllInvoices();

  customerSelect.innerHTML = '<option value="">Select saved customer...</option>';

  rows.forEach((x, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${x.parent_name || 'Unknown'} - ${x.phone || x.email || x.invoice_number}`;
    customerSelect.appendChild(opt);
  });
}
function validateInvoice(){
  form.phone.value = formatPhoneNumber(form.phone.value);

  const requiredFields = [
    form.school,
    form.parentLastName,
    form.parentFirstName,
    form.email,
    form.phone
  ];
  const missingField = requiredFields.find(field => !String(field.value || '').trim());

  if (missingField) {
    missingField.focus();
    form.reportValidity();
    return false;
  }

  return form.reportValidity();
}
async function submitInvoice(){

  calculate();
  if (!validateInvoice()) return;

  const invoiceRow = invoiceRowFromForm();
  const wasEditing = Boolean(editingInvoiceId);

  let error;

  if (editingInvoiceId) {

    const result = await supabaseClient
      .from('invoices')
      .update(invoiceRow)
      .eq('id', editingInvoiceId);

    error = result.error;

  } else {

    const result = await supabaseClient
      .from('invoices')
      .insert([invoiceRow]);

    error = result.error;
  }

  if (error) {
    console.error(error);
    alert('Save failed.');
    return;
  }

  if (!wasEditing) editingInvoiceId = null;

  setAutosaveStatus(wasEditing ? 'Saved manually. Autosave still on.' : 'Invoice saved. Manual save required for new invoices.', wasEditing ? 'saved' : '');

  await populateCustomers();
  await renderDatabase();
  await renderDashboard();

  alert('Invoice saved successfully.');
}
function newInvoice(){
  form.reset();
  editingInvoiceId = null;
  itemCount = 3;
  createRows();
  form.orderDate.value = today();
  form.invoiceNumber.value = invoiceNo();
  form.status.value = 'Received';
  form.discount.value = '0';
  form.tax.value = '0';
  form.payment.value = '0';
  form.paymentType.value = '';
  form.voucherId.value = '';
  form.voucherProvider.value = '';
  form.voucherAmount.value = '';
  renderCustomerHistory(null);
  setAutosaveStatus('Manual save required for new invoices.');
  calculate();
}

function switchView(view){
  document.querySelectorAll('.tab,.view').forEach(x=>x.classList.remove('active'));
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
  document.getElementById(view+'View').classList.add('active');
  renderPreview();
  renderDatabase();
  renderArchivedDatabase();
  renderDashboard();
}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab,.view').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.view+'View').classList.add('active');renderPreview();renderDatabase();renderArchivedDatabase();renderDashboard();}));
document.querySelectorAll('.filter-card').forEach(card => {
  card.addEventListener('click', () => {
    dashboardFilter = card.dataset.dashboardFilter;
    renderDashboard();
  });
});
if (clearDashboardFilterBtn) {
  clearDashboardFilterBtn.addEventListener('click', () => {
    dashboardFilter = '';
    renderDashboard();
  });
}
if (databaseFilterSelect) {
  databaseFilterSelect.addEventListener('change', () => {
    databaseFilter = databaseFilterSelect.value;
    renderDatabase();
  });
}
if (clearDatabaseFilterBtn) {
  clearDatabaseFilterBtn.addEventListener('click', () => {
    databaseFilter = '';
    if (databaseFilterSelect) databaseFilterSelect.value = '';
    renderDatabase();
  });
}
form.addEventListener('input', queueAutosave);
form.phone.addEventListener('input', () => {
  const start = form.phone.selectionStart;
  const beforeLength = form.phone.value.length;
  form.phone.value = formatPhoneNumber(form.phone.value);
  const lengthDelta = form.phone.value.length - beforeLength;
  form.phone.setSelectionRange(Math.max(0, start + lengthDelta), Math.max(0, start + lengthDelta));
});
form.paymentType.addEventListener('change', () => {
  if (form.paymentType.value === 'Voucher') openVoucherModal();
  queueAutosave();
});
document.getElementById('submitBtn').onclick=submitInvoice;
document.getElementById('printBtn').onclick=()=>{renderPreview();document.querySelector('[data-view="preview"]').click();setTimeout(()=>window.print(),60)};
document.getElementById('printTopBtn').onclick=()=>{renderPreview();document.querySelector('[data-view="preview"]').click();setTimeout(()=>window.print(),60)};
document.getElementById('newInvoiceBtn').onclick=newInvoice;
document.getElementById('addLineBtn').onclick=()=>{const current=formData().items; itemCount++; createRows(current); calculate();};
document.getElementById('emailBtn').onclick=()=>{const d=formData(); const subject=encodeURIComponent(`Living Word Imprints Order ${d.invoiceNumber}`); const body=encodeURIComponent(`Hi ${d.parentName||''},\n\nYour order has been received. Pickup date: ${d.pickupDate||'TBD'}.\n\nThank you,\nLiving Word Imprints`); if(d.email) location.href=`mailto:${d.email}?subject=${subject}&body=${body}`; else alert('Add customer email first.');};
document.getElementById('voucherCancelBtn').onclick = () => closeVoucherModal();
document.getElementById('voucherSaveBtn').onclick = () => saveVoucherModal();
voucherModal.addEventListener('click', e => {
  if (e.target === voucherModal) closeVoucherModal();
});
customerSelect.onchange = async () => {
  const rows = await getAllInvoices();

  if (customerSelect.value !== '') {
    const selected = rows[customerSelect.value];

    // Returning customer shortcut: copy their last order into a NEW invoice.
    // The Edit button in the database is still used when Hermin wants to edit an old saved invoice.
    setForm(selected);
    editingInvoiceId = null;
    form.invoiceNumber.value = invoiceNo();
    form.orderDate.value = today();
    form.pickupDate.value = '';
    form.status.value = 'Received';
    setAutosaveStatus('Returning customer loaded as a new invoice. Manual save required.');
    calculate();

    renderCustomerHistory(selected, rows);
  } else {
    renderCustomerHistory(null, rows);
  }
};
searchInput.addEventListener('input', renderDatabase);
if (archivedSearchInput) archivedSearchInput.addEventListener('input', renderArchivedDatabase);
databaseBody.addEventListener('change', async e => {

  if (e.target.className.includes('status-select')) {

    const id = e.target.dataset.id;

    const { error } = await supabaseClient
      .from('invoices')
      .update({
        status: e.target.value
      })
      .eq('id', id);

    if (error) {
      console.error(error);
      alert('Failed to update status');
      return;
    }

    await renderDashboard();
    await renderArchivedDatabase();
  }
});

databaseBody.addEventListener('input', async e => {

  if (e.target.className.includes('note-input')) {

    const id = e.target.dataset.id;
    const row = cachedAllInvoices.find(invoice => String(invoice.id) === String(id)) || {};
    const storedNotes = splitStoredNotes(row.notes || '');

    const { error } = await supabaseClient
      .from('invoices')
      .update({
        notes: packStoredNotes(e.target.value, storedNotes.meta || {})
      })
      .eq('id', id);

    if (error) {
      console.error(error);
      alert('Failed to update notes');
    }
  }
});

async function loadInvoiceForEdit(id){
  const { data, error } = await supabaseClient
    .from('invoices')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    alert('Failed to load invoice.');
    return;
  }

  setForm(data);
  setAutosaveStatus('Autosave is on for this invoice.', 'saved');
  renderCustomerHistory(data, cachedAllInvoices.length ? cachedAllInvoices : cachedInvoices);

  document.querySelector('[data-view="edit"]').click();
}

async function setArchivedStatus(id, archived){
  const { error } = await supabaseClient
    .from('invoices')
    .update({ archived })
    .eq('id', id);

  if (error) {
    console.error(error);
    alert(archived ? 'Failed to archive invoice.' : 'Failed to restore invoice.');
    return;
  }

  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
}

function openVoucherModal(){
  voucherIdInput.value = form.voucherId.value || '';
  voucherProviderInput.value = form.voucherProvider.value || '';
  voucherAmountInput.value = form.voucherAmount.value || '';
  voucherModal.hidden = false;
  setTimeout(() => voucherIdInput.focus(), 0);
}

function closeVoucherModal(){
  voucherModal.hidden = true;
}

function saveVoucherModal(){
  form.voucherId.value = voucherIdInput.value.trim();
  form.voucherProvider.value = voucherProviderInput.value.trim();
  form.voucherAmount.value = voucherAmountInput.value;

  if (form.voucherAmount.value && (!form.payment.value || Number(form.payment.value) === 0)) {
    form.payment.value = Number(form.voucherAmount.value).toFixed(2);
  }

  form.paymentType.value = 'Voucher';
  closeVoucherModal();
  queueAutosave();
}

async function normalizeStoredPhoneNumbers(){
  const rows = await getAllInvoices();
  const updates = rows
    .map(row => ({ row, phone: formatPhoneNumber(row.phone || '') }))
    .filter(item => item.phone && item.phone !== item.row.phone);

  for (const item of updates) {
    const { error } = await supabaseClient
      .from('invoices')
      .update({ phone: item.phone })
      .eq('id', item.row.id);

    if (error) {
      console.warn('Could not normalize saved phone number.', error);
      return;
    }
  }

  if (updates.length) await getAllInvoices();
}

databaseBody.addEventListener('click', async e => {
  if (e.target.className.includes('edit-invoice-btn')) {
    await loadInvoiceForEdit(e.target.dataset.id);
    return;
  }

  if (e.target.className.includes('archive-invoice-btn')) {
    await setArchivedStatus(e.target.dataset.id, true);
  }
});

if (archivedBody) {
  archivedBody.addEventListener('click', async e => {
    if (e.target.className.includes('edit-invoice-btn')) {
      await loadInvoiceForEdit(e.target.dataset.id);
      return;
    }

    if (e.target.className.includes('restore-invoice-btn')) {
      await setArchivedStatus(e.target.dataset.id, false);
    }
  });
}


async function init(){
  createRows();
  newInvoice();
  await normalizeStoredPhoneNumbers();
  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
}

init();

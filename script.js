const form = document.getElementById('invoiceForm');
const itemsEditor = document.getElementById('itemsEditor');
const previewPaper = document.getElementById('previewPaper');
const databaseBody = document.getElementById('databaseBody');
const customerSelect = document.getElementById('customerSelect');
const searchInput = document.getElementById('searchInput');
const STORAGE_KEY = 'lwi_invoices_frontend_v2';
const SUPABASE_URL = 'https://wwawmmnckibtamquillt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YXdtbW5ja2lidGFtcXVpbGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MTk1NjEsImV4cCI6MjA5NDM5NTU2MX0.kfc9UXmvm1jfYIhW3vHaKbpEBupu1xurQxlYCKoupPY';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
let itemCount = 3;

function money(n){return `$${(Number(n)||0).toFixed(2)}`}
function today(){return new Date().toISOString().slice(0,10)}
function invoiceNo(){return String(Date.now()).slice(-6)}
function esc(v){return String(v ?? '').replace(/[&<>"]/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[s]))}
let cachedInvoices = [];

async function getInvoices(){
  const { data, error } = await supabaseClient
    .from('invoices')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return cachedInvoices;
  }

  cachedInvoices = data || [];
  return cachedInvoices;
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
function daysSince(date){return Math.max(0, Math.floor((new Date()-new Date(date))/(1000*60*60*24)))}
function ageClass(days){return days<=7?'green':days<=14?'yellow':'red'}

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
  data.items=[];
  for(let i=0;i<itemCount;i++){
    data.items.push({amount:data[`amount_${i}`]||'',description:data[`description_${i}`]||'',color:data[`color_${i}`]||'',size:data[`size_${i}`]||'',price:data[`price_${i}`]||'',line:data[`line_${i}`]||''});
  }
  return data;
}
function setForm(data){
  Object.keys(data).forEach(k=>{ if(form.elements[k] && k!=='emailList') form.elements[k].value=data[k]??''; });
  form.emailList.checked=!!data.emailList;
  itemCount = Math.max(3, (data.items||[]).length);
  createRows(data.items||[]);
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

  rows
    .filter(x => [x.parent_name, x.phone, x.email].join(' ').toLowerCase().includes(q))
    .forEach((x, idx) => {
      const days = daysSince(x.date_submitted || x.created_at);

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
        <td><input class="note-input" data-index="${idx}" data-id="${x.id}" value="${esc(x.notes || '')}"></td>
      `;

      databaseBody.appendChild(tr);
    });
}
async function populateCustomers(){
  const rows = await getInvoices();

  customerSelect.innerHTML = '<option value="">Select saved customer...</option>';

  rows.forEach((x, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${x.parent_name || 'Unknown'} - ${x.phone || x.email || x.invoice_number}`;
    customerSelect.appendChild(opt);
  });
}
async function submitInvoice(){
  calculate();

  const d = formData();

  const invoiceRow = {
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
    notes: d.notes || ''
  };

  const saved = await saveInvoice(invoiceRow);

  if (!saved) return;

  await populateCustomers();
  await renderDatabase();

  alert('Invoice saved to Supabase. You can now switch to Preview and print or email the customer.');
}
function newInvoice(){form.reset(); itemCount=3; createRows(); form.orderDate.value=today(); form.invoiceNumber.value=invoiceNo(); form.status.value='Received'; form.discount.value='0'; form.tax.value='0'; form.payment.value='0'; calculate();}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab,.view').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.view+'View').classList.add('active');renderPreview();renderDatabase();}));
form.addEventListener('input', calculate);
document.getElementById('submitBtn').onclick=submitInvoice;
document.getElementById('printBtn').onclick=()=>{renderPreview();document.querySelector('[data-view="preview"]').click();setTimeout(()=>window.print(),60)};
document.getElementById('printTopBtn').onclick=()=>{renderPreview();document.querySelector('[data-view="preview"]').click();setTimeout(()=>window.print(),60)};
document.getElementById('newInvoiceBtn').onclick=newInvoice;
document.getElementById('addLineBtn').onclick=()=>{const current=formData().items; itemCount++; createRows(current); calculate();};
document.getElementById('emailBtn').onclick=()=>{const d=formData(); const subject=encodeURIComponent(`Living Word Imprints Order ${d.invoiceNumber}`); const body=encodeURIComponent(`Hi ${d.parentName||''},\n\nYour order has been received. Pickup date: ${d.pickupDate||'TBD'}.\n\nThank you,\nLiving Word Imprints`); if(d.email) location.href=`mailto:${d.email}?subject=${subject}&body=${body}`; else alert('Add customer email first.');};
customerSelect.onchange=()=>{const rows=getInvoices(); if(customerSelect.value!=='') setForm(rows[customerSelect.value]);};
searchInput.addEventListener('input', renderDatabase);
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
    }
  }
});

databaseBody.addEventListener('input', async e => {

  if (e.target.className.includes('note-input')) {

    const id = e.target.dataset.id;

    const { error } = await supabaseClient
      .from('invoices')
      .update({
        notes: e.target.value
      })
      .eq('id', id);

    if (error) {
      console.error(error);
      alert('Failed to update notes');
    }
  }
});

createRows();
newInvoice();
populateCustomers();
renderDatabase();

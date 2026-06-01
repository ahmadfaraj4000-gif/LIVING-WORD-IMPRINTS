const form = document.getElementById('invoiceForm');
const authView = document.getElementById('authView');
const siteHeader = document.getElementById('siteHeader');
const appShell = document.getElementById('appShell');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminUsername = document.getElementById('adminUsername');
const adminPassword = document.getElementById('adminPassword');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLoginError = document.getElementById('adminLoginError');
const logoutBtn = document.getElementById('logoutBtn');
const itemsEditor = document.getElementById('itemsEditor');
const previewPaper = document.getElementById('previewPaper');
const editOnlyControls = document.getElementById('editOnlyControls');
const databaseBody = document.getElementById('databaseBody');
const customerSelect = document.getElementById('customerSelect');
const customerDropdown = document.getElementById('customerDropdown');
const customerDropdownBtn = document.getElementById('customerDropdownBtn');
const customerDropdownMenu = document.getElementById('customerDropdownMenu');
const customerDropdownResults = document.getElementById('customerDropdownResults');
const customerSearch = document.getElementById('customerSearch');
const customerSearchBtn = document.getElementById('customerSearchBtn');
const searchInput = document.getElementById('searchInput');
const customerHistory = document.getElementById('customerHistory');
const archivedBody = document.getElementById('archivedBody');
const archivedSearchInput = document.getElementById('archivedSearchInput');
const autosaveStatus = document.getElementById('autosaveStatus');
const activeDatabaseFilter = document.getElementById('activeDatabaseFilter');
const activeDatabaseFilterText = document.getElementById('activeDatabaseFilterText');
const clearDatabaseFilterBtn = document.getElementById('clearDatabaseFilterBtn');
const databaseFilterSelect = document.getElementById('databaseFilterSelect');
const databaseSchoolSelect = document.getElementById('databaseSchoolSelect');
const schoolSuggestions = document.getElementById('schoolSuggestions');
const dashboardPanelTitle = document.getElementById('dashboardPanelTitle');
const clearDashboardFilterBtn = document.getElementById('clearDashboardFilterBtn');
const voucherModal = document.getElementById('voucherModal');
const voucherIdInput = document.getElementById('voucherIdInput');
const voucherProviderInput = document.getElementById('voucherProviderInput');
const voucherAmountInput = document.getElementById('voucherAmountInput');
const editVoucherBtn = document.getElementById('editVoucherBtn');
const voucherDetailsModal = document.getElementById('voucherDetailsModal');
const voucherDetailsId = document.getElementById('voucherDetailsId');
const voucherDetailsProvider = document.getElementById('voucherDetailsProvider');
const voucherDetailsAmount = document.getElementById('voucherDetailsAmount');
const appMessageModal = document.getElementById('appMessageModal');
const appMessageCard = appMessageModal?.querySelector('.app-message-card');
const appMessageTitle = document.getElementById('appMessageTitle');
const appMessageText = document.getElementById('appMessageText');
const appMessageCancelBtn = document.getElementById('appMessageCancelBtn');
const appMessageConfirmBtn = document.getElementById('appMessageConfirmBtn');
const inventoryBody = document.getElementById('inventoryBody');
const inventorySearchInput = document.getElementById('inventorySearchInput');
const inventoryReorderFilterBtn = document.getElementById('inventoryReorderFilterBtn');
const inventoryShowAllBtn = document.getElementById('inventoryShowAllBtn');
const inventoryReorderCount = document.getElementById('inventoryReorderCount');
const inventorySaveStatus = document.getElementById('inventorySaveStatus');
const addInventoryRowBtn = document.getElementById('addInventoryRowBtn');
const deleteInventoryBtn = document.getElementById('deleteInventoryBtn');
const inventorySelectedCount = document.getElementById('inventorySelectedCount');
const inventorySelectAll = document.getElementById('inventorySelectAll');
const inventoryAddModal = document.getElementById('inventoryAddModal');
const inventoryAddForm = document.getElementById('inventoryAddForm');
const inventoryAddCancelBtn = document.getElementById('inventoryAddCancelBtn');
const inventoryDeleteModal = document.getElementById('inventoryDeleteModal');
const inventoryDeleteMessage = document.getElementById('inventoryDeleteMessage');
const inventoryDeleteCancelBtn = document.getElementById('inventoryDeleteCancelBtn');
const inventoryDeleteConfirmBtn = document.getElementById('inventoryDeleteConfirmBtn');
const exportInventoryCsvBtn = document.getElementById('exportInventoryCsvBtn');
const uploadInventoryCsvBtn = document.getElementById('uploadInventoryCsvBtn');
const inventoryCsvModal = document.getElementById('inventoryCsvModal');
const inventoryCsvForm = document.getElementById('inventoryCsvForm');
const inventoryCsvFile = document.getElementById('inventoryCsvFile');
const inventoryCsvMode = document.getElementById('inventoryCsvMode');
const inventoryCsvStatus = document.getElementById('inventoryCsvStatus');
const inventoryCsvCancelBtn = document.getElementById('inventoryCsvCancelBtn');
const invoiceDeleteModal = document.getElementById('invoiceDeleteModal');
const invoiceDeleteMessage = document.getElementById('invoiceDeleteMessage');
const invoiceDeleteRestoreInventory = document.getElementById('invoiceDeleteRestoreInventory');
const invoiceDeleteCancelBtn = document.getElementById('invoiceDeleteCancelBtn');
const invoiceDeleteConfirmBtn = document.getElementById('invoiceDeleteConfirmBtn');
const invoiceDeleteRequestModal = document.getElementById('invoiceDeleteRequestModal');
const invoiceDeleteRequestMessage = document.getElementById('invoiceDeleteRequestMessage');
const invoiceDeleteRequestReason = document.getElementById('invoiceDeleteRequestReason');
const invoiceDeleteRequestCancelBtn = document.getElementById('invoiceDeleteRequestCancelBtn');
const invoiceDeleteRequestSubmitBtn = document.getElementById('invoiceDeleteRequestSubmitBtn');
const deleteRequestsPanel = document.getElementById('deleteRequestsPanel');
const deleteRequestsList = document.getElementById('deleteRequestsList');
const refreshDeleteRequestsBtn = document.getElementById('refreshDeleteRequestsBtn');
const reportDateFilter = document.getElementById('reportDateFilter');
const reportSchoolSelect = document.getElementById('reportSchoolSelect');
const reportLimitSelect = document.getElementById('reportLimitSelect');
const reportIncludeArchived = document.getElementById('reportIncludeArchived');
const exportReportBtn = document.getElementById('exportReportBtn');
const reportDemandChart = document.getElementById('reportDemandChart');
const reportDemandBody = document.getElementById('reportDemandBody');
const reportSizeBody = document.getElementById('reportSizeBody');
const reportSchoolBody = document.getElementById('reportSchoolBody');
const reportsSummary = document.getElementById('reportsSummary');
const employeeForm = document.getElementById('employeeForm');
const employeeNameInput = document.getElementById('employeeNameInput');
const employeeList = document.getElementById('employeeList');
const taxSettingsForm = document.getElementById('taxSettingsForm');
const taxRateInput = document.getElementById('taxRateInput');
const taxRateLabel = document.getElementById('taxRateLabel');
const sendReceivedEmailSetting = document.getElementById('sendReceivedEmailSetting');
const askReceivedEmailSetting = document.getElementById('askReceivedEmailSetting');
const sendCompletedEmailSetting = document.getElementById('sendCompletedEmailSetting');
const askCompletedEmailSetting = document.getElementById('askCompletedEmailSetting');
const paymentTypeForm = document.getElementById('paymentTypeForm');
const paymentTypeInput = document.getElementById('paymentTypeInput');
const paymentTypeList = document.getElementById('paymentTypeList');
const orderStatusForm = document.getElementById('orderStatusForm');
const orderStatusInput = document.getElementById('orderStatusInput');
const orderStatusList = document.getElementById('orderStatusList');
const dashboardIds = {
  dueToday: document.getElementById('dashDueToday'),
  lateOrders: document.getElementById('dashLateOrders'),
  inProgress: document.getElementById('dashInProgress'),
  revenueMonth: document.getElementById('dashRevenueMonth'),
  openOrders: document.getElementById('dashOpenOrders'),
  pickupToday: document.getElementById('dashPickupToday'),
  attentionList: document.getElementById('dashboardAttentionList')
};
const INTERNAL_META_MARKER = 'LWI_INTERNAL_META:';
const ADMIN_USERNAME = 'livingwordimprints';
const ADMIN_AUTH_EMAIL = 'lwimprints@gmail.com';
const STAFF_LOGIN_ACCOUNTS = {
  employee1: 'employee1@livingwordimprints.com',
  employee2: 'employee2@livingwordimprints.com',
  employee3: 'employee3@livingwordimprints.com',
  manager1: 'manager1@livingwordimprints.com'
};
const STAFF_ROLE_VIEWS = {
  admin: ['dashboard', 'edit', 'preview', 'reports', 'inventory', 'database', 'archived', 'settings'],
  manager: ['edit', 'preview', 'database'],
  employee: ['edit', 'preview', 'database']
};
const SUPABASE_URL = 'https://wwawmmnckibtamquillt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YXdtbW5ja2lidGFtcXVpbGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MTk1NjEsImV4cCI6MjA5NDM5NTU2MX0.kfc9UXmvm1jfYIhW3vHaKbpEBupu1xurQxlYCKoupPY';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
let itemCount = 3;
let editingInvoiceId = null;
let editingInvoiceArchived = false;
let autosaveTimer = null;
const noteAutosaveTimers = new Map();
let isAutosaving = false;
let dashboardFilter = '';
let databaseFilter = '';
let databaseSchoolFilter = '';
let inventoryItems = [];
let inventoryBackendAvailable = true;
let inventoryShowReorderOnly = false;
let inventorySaveTimer = null;
let selectedInventoryIds = new Set();
let stockAdjustmentsByInvoice = new Map();
let appInitialized = false;
let returningCustomers = [];
let pendingInvoiceDeleteId = null;
let pendingInvoiceDeleteRequestId = null;
let inventoryChangesPending = false;
let reportDateRange = 'thisYear';
let reportSchoolFilter = '';
let reportChartLimit = '20';
let reportIncludesArchived = true;
let latestReportRows = [];
let currentSession = null;
let currentStaffProfile = null;
let invoiceStaffColumnsAvailable = true;
const INVENTORY_STORAGE_KEY = 'lwi_inventory_items_v1';
const INVENTORY_DELETED_KEY = 'lwi_inventory_deleted_products_v1';
const STOCK_META_KEY = 'stockAdjustments';
const EMPLOYEES_STORAGE_KEY = 'lwi_employee_names_v1';
const DEFAULT_EMPLOYEES = ['Herman Todd', 'Serina Todd'];
const SETTINGS_STORAGE_KEY = 'lwi_invoice_settings_v1';
const DEFAULT_SETTINGS = {
  taxRate: 6.35,
  paymentTypes: ['Card', 'Cash', 'Voucher'],
  orderStatuses: ['Received', 'In Progress', 'Completed'],
  sendReceivedEmail: true,
  askReceivedEmail: true,
  sendCompletedEmail: true,
  askCompletedEmail: true
};
const REQUIRED_STATUSES = ['Received', 'In Progress', 'Completed'];
const REQUIRED_PAYMENT_TYPES = ['Voucher'];
const INVENTORY_COLUMNS = [
  'Product Code',
  'Product',
  'Price',
  'Status',
  'Minimum stock',
  'Available Stock',
  'Supplier',
  'Report Color'
];

function money(n){return `$${(Number(n)||0).toFixed(2)}`}
function today(){return new Date().toISOString().slice(0,10)}
function invoiceNo(){return String(Date.now()).slice(-6)}
function esc(v){return String(v ?? '').replace(/[&<>"]/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[s]))}
function uniqueClean(values){
  return [...new Set(values.map(value => String(value || '').replace(/\s+/g, ' ').trim()).filter(Boolean))];
}
function appSettings(){
  try {
    const stored = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY) || '{}');
    const taxRate = Number(stored.taxRate ?? DEFAULT_SETTINGS.taxRate);

    return {
      ...DEFAULT_SETTINGS,
      ...stored,
      taxRate: Number.isFinite(taxRate) && taxRate >= 0 ? taxRate : DEFAULT_SETTINGS.taxRate,
      paymentTypes: uniqueClean([...(stored.paymentTypes || DEFAULT_SETTINGS.paymentTypes), ...REQUIRED_PAYMENT_TYPES]),
      orderStatuses: uniqueClean([...REQUIRED_STATUSES, ...(stored.orderStatuses || DEFAULT_SETTINGS.orderStatuses)]),
      sendReceivedEmail: stored.sendReceivedEmail ?? DEFAULT_SETTINGS.sendReceivedEmail,
      askReceivedEmail: stored.askReceivedEmail ?? DEFAULT_SETTINGS.askReceivedEmail,
      sendCompletedEmail: stored.sendCompletedEmail ?? DEFAULT_SETTINGS.sendCompletedEmail,
      askCompletedEmail: stored.askCompletedEmail ?? DEFAULT_SETTINGS.askCompletedEmail
    };
  } catch (error) {
    console.warn('Could not read invoice settings.', error);
    return { ...DEFAULT_SETTINGS };
  }
}
function saveAppSettings(nextSettings){
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify({
    ...appSettings(),
    ...nextSettings
  }));
}
function currentRole(){
  return currentStaffProfile?.role || 'employee';
}
function currentStaffName(){
  return currentStaffProfile?.name || currentSession?.user?.email || '';
}
function isAdmin(){
  return currentRole() === 'admin';
}
function isManagerOrAdmin(){
  return currentRole() === 'manager' || currentRole() === 'admin';
}
function canOverridePrices(){
  return isManagerOrAdmin();
}
function allowedViews(){
  return STAFF_ROLE_VIEWS[currentRole()] || STAFF_ROLE_VIEWS.employee;
}
function canAccessView(view){
  return allowedViews().includes(view);
}
function applyRoleAccess(){
  const views = allowedViews();
  document.querySelectorAll('.tab').forEach(tab => {
    const allowed = views.includes(tab.dataset.view);
    tab.hidden = !allowed;
    tab.disabled = !allowed;
  });

  const activeTab = document.querySelector('.tab.active');
  if (activeTab && !canAccessView(activeTab.dataset.view)) {
    document.querySelector(`.tab[data-view="${views[0]}"]`)?.click();
  }

  if (deleteRequestsPanel) deleteRequestsPanel.hidden = !isManagerOrAdmin();
  updatePriceAccess();
  renderEmployees();
}
function updatePriceAccess(){
  if (!form) return;
  const locked = !canOverridePrices();
  for (let i = 0; i < itemCount; i++) {
    const input = form.elements[`price_${i}`];
    if (!input) continue;
    input.readOnly = locked;
    input.classList.toggle('role-locked-price', locked);
    input.title = locked ? 'Managers can override prices.' : '';
  }
}
async function loadStaffProfile(session){
  if (!session?.user) return null;

  const email = String(session.user.email || '').toLowerCase();
  const { data, error } = await supabaseClient
    .from('staff_profiles')
    .select('*')
    .eq('id', session.user.id)
    .maybeSingle();

  if (!error && data?.active) return data;

  if (email === ADMIN_AUTH_EMAIL) {
    return {
      id: session.user.id,
      username: ADMIN_USERNAME,
      email: ADMIN_AUTH_EMAIL,
      name: 'Living Word Admin',
      role: 'admin',
      active: true
    };
  }

  console.warn('Staff profile unavailable.', error);
  return null;
}
function showAppModal({
  title = 'Message',
  message = '',
  confirmText = 'OK',
  cancelText = '',
  tone = ''
} = {}) {
  if (!appMessageModal) return Promise.resolve(true);

  appMessageTitle.textContent = title;
  appMessageText.textContent = message;
  appMessageConfirmBtn.textContent = confirmText;
  appMessageCancelBtn.textContent = cancelText || 'Cancel';
  appMessageCancelBtn.hidden = !cancelText;
  appMessageCard.classList.toggle('is-error', tone === 'error');
  appMessageCard.classList.toggle('is-success', tone === 'success');
  appMessageModal.hidden = false;

  return new Promise(resolve => {
    const close = result => {
      appMessageModal.hidden = true;
      appMessageConfirmBtn.removeEventListener('click', onConfirm);
      appMessageCancelBtn.removeEventListener('click', onCancel);
      appMessageModal.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onKeydown);
      resolve(result);
    };
    const onConfirm = () => close(true);
    const onCancel = () => close(false);
    const onBackdrop = event => {
      if (event.target === appMessageModal) close(false);
    };
    const onKeydown = event => {
      if (event.key === 'Escape') close(false);
    };

    appMessageConfirmBtn.addEventListener('click', onConfirm);
    appMessageCancelBtn.addEventListener('click', onCancel);
    appMessageModal.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onKeydown);
    setTimeout(() => appMessageConfirmBtn.focus(), 0);
  });
}
function appNotice(title, message, tone = '') {
  return showAppModal({ title, message, tone, confirmText: 'OK' });
}
function appConfirm(title, message, confirmText = 'Yes', cancelText = 'Cancel') {
  return showAppModal({ title, message, confirmText, cancelText });
}
function normalizedText(value){return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim()}
function inventoryKey(item){return String(item?.product || item?.product_code || item?.id || '').trim()}
function inventoryRowId(){return `local-${Date.now()}-${Math.random().toString(16).slice(2)}`}
function deletedInventoryProducts(){
  try {
    return new Set(JSON.parse(localStorage.getItem(INVENTORY_DELETED_KEY) || '[]'));
  } catch (error) {
    console.warn('Could not read deleted inventory products.', error);
    return new Set();
  }
}
function rememberDeletedInventory(items){
  const deleted = deletedInventoryProducts();
  items.forEach(item => {
    const product = normalizedText(item.product);
    if (product) deleted.add(product);
  });
  localStorage.setItem(INVENTORY_DELETED_KEY, JSON.stringify([...deleted]));
}
function forgetDeletedInventory(product){
  const deleted = deletedInventoryProducts();
  deleted.delete(normalizedText(product));
  localStorage.setItem(INVENTORY_DELETED_KEY, JSON.stringify([...deleted]));
}
function setInventoryStatus(message, state = ''){
  if (!inventorySaveStatus) return;
  inventorySaveStatus.textContent = message;
  inventorySaveStatus.className = 'autosave-status';
  if (state) inventorySaveStatus.classList.add(state);
}
function setLoginError(message = ''){
  if (!adminLoginError) return;
  adminLoginError.textContent = message;
  adminLoginError.hidden = !message;
}
function setAuthScreen(session){
  const signedIn = Boolean(session && currentStaffProfile);
  if (authView) authView.hidden = signedIn;
  if (siteHeader) siteHeader.hidden = !signedIn;
  if (appShell) appShell.hidden = !signedIn;
  if (!signedIn) {
    setLoginError('');
    if (adminPassword) adminPassword.value = '';
    setTimeout(() => adminUsername?.focus(), 0);
  }
}
function parseCsv(text){
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      i++;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ',' && !quoted) {
      row.push(value);
      value = '';
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i++;
      row.push(value);
      if (row.some(cell => String(cell).trim())) rows.push(row);
      row = [];
      value = '';
    } else {
      value += char;
    }
  }

  row.push(value);
  if (row.some(cell => String(cell).trim())) rows.push(row);
  return rows;
}
function csvRowsToInventory(csvText){
  const rows = parseCsv(csvText);
  const headers = rows.shift() || [];
  const missingHeaders = INVENTORY_COLUMNS.filter(header => !headers.includes(header));
  if (missingHeaders.length) {
    throw new Error(`Missing required columns: ${missingHeaders.join(', ')}`);
  }

  return rows.map(row => {
    const source = Object.fromEntries(headers.map((header, index) => [header, row[index] || '']));
    return normalizeInventoryItem({
      product_code: source['Product Code'],
      product: source.Product,
      price: source.Price,
      status: source.Status,
      minimum_stock: source['Minimum stock'],
      available_stock: source['Available Stock'],
      supplier: source.Supplier,
      report_color: source['Report Color']
    });
  }).filter(item => item.product);
}
function csvEscape(value){
  const text = String(value ?? '');
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}
function inventoryToCsv(items){
  const rows = [
    INVENTORY_COLUMNS,
    ...items.map(item => [
      item.product_code,
      item.product,
      item.price,
      item.status,
      item.minimum_stock,
      item.available_stock,
      item.supplier,
      item.report_color
    ])
  ];

  return rows.map(row => row.map(csvEscape).join(',')).join('\n');
}
function sizeTokenIndex(parts){
  const sizeTokens = new Set(['YXS','YS','YM','YL','YXL','XS','S','M','L','XL','XXL','2XL','3XL','4XL','5XL','6XL','SM','MD','MED','LG']);
  return parts.findIndex(part => {
    const token = String(part || '').toUpperCase().replace(/[.,]/g, '');
    return sizeTokens.has(token) || /^\d+(\/\d+)?$/.test(token) || /^\d+X$/.test(token) || /^\d+-\d+$/.test(token);
  });
}
function inventoryProductParts(product){
  const parts = String(product || '').trim().split(/\s+/);
  const sizeIndex = sizeTokenIndex(parts);

  if (sizeIndex > 0) {
    return {
      color: parts.slice(0, sizeIndex).join(' '),
      size: parts[sizeIndex],
      description: parts.slice(sizeIndex + 1).join(' ') || product
    };
  }

  return {
    color: parts[0] || '',
    size: '',
    description: parts.slice(1).join(' ') || product
  };
}
function deriveInventoryColor(product){
  return inventoryProductParts(product).color;
}
function normalizeInventoryItem(item = {}){
  return {
    id: item.id || inventoryRowId(),
    product_code: item.product_code || item.productCode || '',
    product: item.product || '',
    price: item.price === '' || item.price == null ? '' : Number(item.price),
    status: item.status || 'Active',
    minimum_stock: Number(item.minimum_stock ?? item.minimumStock ?? 0) || 0,
    available_stock: Number(item.available_stock ?? item.availableStock ?? 0) || 0,
    supplier: item.supplier || '',
    report_color: item.report_color || item.reportColor || 'No'
  };
}
function findInventoryItem(value){
  const needle = normalizedText(value);
  if (!needle) return null;
  return inventoryItems.find(item =>
    normalizedText(item.product) === needle ||
    normalizedText(item.product_code) === needle ||
    normalizedText(inventoryKey(item)) === needle
  ) || null;
}
function stockWarningForLine(item, amount){
  if (!item || !amount) return '';
  const available = Number(item.available_stock) || 0;
  const requested = Number(amount) || 0;
  if (available <= 0) return `Out of stock: ${item.product}`;
  if (requested > available) return `Only ${available} in stock for ${item.product}`;
  return '';
}
function voucherDetailsFromRow(row, storedNotes = splitStoredNotes(row.notes || '')){
  return {
    paymentType: storedNotes.meta.paymentType || row.payment_type || '',
    id: storedNotes.meta.voucherId || row.voucher_id || '',
    provider: storedNotes.meta.voucherProvider || row.voucher_provider || '',
    amount: storedNotes.meta.voucherAmount || row.voucher_amount || ''
  };
}
function paymentTypeCell(row, storedNotes){
  const details = voucherDetailsFromRow(row, storedNotes);
  if (details.paymentType !== 'Voucher') return esc(details.paymentType);
  if (!details.id && !details.provider && !details.amount) return 'Voucher';
  return `<button class="voucher-details-btn payment-voucher-btn" data-id="${esc(row.id)}" type="button">Voucher</button>`;
}
function statusSelectCell(row){
  const settings = appSettings();
  const currentStatus = row.status || 'Received';
  const statuses = uniqueClean([...settings.orderStatuses, currentStatus]);

  return `
    <select class="status-select" data-id="${esc(row.id)}">
      ${statuses.map(status => `<option ${status === currentStatus ? 'selected' : ''}>${esc(status)}</option>`).join('')}
    </select>
  `;
}
function databaseArchiveCell(row){
  if (!isManagerOrAdmin()) return '';
  return `
    <button class="archive-invoice-btn" data-id="${esc(row.id)}">
      Archive
    </button>
  `;
}
function databaseDeleteCell(row){
  if (isManagerOrAdmin()) {
    return `
      <button class="delete-invoice-btn" data-id="${esc(row.id)}">
        Delete
      </button>
    `;
  }

  return `
    <button class="request-delete-invoice-btn" data-id="${esc(row.id)}">
      Request Delete
    </button>
  `;
}
function showVoucherDetails(row){
  const details = voucherDetailsFromRow(row);
  voucherDetailsId.textContent = details.id || 'Not entered';
  voucherDetailsProvider.textContent = details.provider || 'Not entered';
  voucherDetailsAmount.textContent = details.amount ? money(details.amount) : 'Not entered';
  voucherDetailsModal.hidden = false;
}
function closeVoucherDetails(){
  voucherDetailsModal.hidden = true;
}
function hasVoucherDetails(){
  return Boolean(
    form.paymentType.value === 'Voucher' ||
    form.voucherId.value ||
    form.voucherProvider.value ||
    form.voucherAmount.value
  );
}
function updateVoucherEditControl(){
  if (!editVoucherBtn) return;
  editVoucherBtn.hidden = !hasVoucherDetails();
}
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
  await archiveCompletedOldOrders(cachedAllInvoices);
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

    row.archived = true;
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

function customerKey(row){
  const phone = String(row.phone || '').replace(/\D/g, '');
  const email = String(row.email || '').toLowerCase().trim();
  const name = String(row.parent_name || row.parentName || '').toLowerCase().trim();
  return phone ? `phone:${phone}` : email ? `email:${email}` : `name:${name}`;
}

function customerOptionLabel(row){
  return `${row.parent_name || 'Unknown'} - ${row.phone || row.email || row.invoice_number || 'No contact'}`;
}

function closeCustomerDropdown(){
  if (customerDropdownMenu) customerDropdownMenu.hidden = true;
}

function resetCustomerDropdown(){
  if (customerDropdownBtn) customerDropdownBtn.textContent = 'Select saved customer...';
  if (customerSearch) customerSearch.value = '';
  if (customerSelect) customerSelect.value = '';
  closeCustomerDropdown();
  renderReturningCustomerResults('');
}

function openCustomerDropdown(){
  if (!customerDropdownMenu) return;
  customerDropdownMenu.hidden = false;
  renderReturningCustomerResults(customerSearch?.value || '');
  setTimeout(() => customerSearch?.focus(), 0);
}

function renderReturningCustomerResults(query = ''){
  if (!customerDropdownResults) return;

  const needle = normalizedText(query);
  const matches = returningCustomers
    .filter(customer => !needle || normalizedText(customerOptionLabel(customer)).includes(needle))
    .slice(0, 80);

  customerDropdownResults.innerHTML = matches.length
    ? matches.map(customer => `
        <button class="customer-result" data-customer-id="${esc(customer.id)}" type="button">
          <strong>${esc(customer.parent_name || 'Unknown')}</strong>
          <span>${esc(customer.phone || customer.email || 'No contact')} / Last invoice ${esc(customer.invoice_number || 'N/A')}</span>
        </button>
      `).join('')
    : '<p class="customer-result-empty">No saved customers found.</p>';
}

function clearOrderFieldsForNewCustomerOrder(){
  itemCount = 3;
  createRows();
  form.invoiceNumber.value = invoiceNo();
  form.orderDate.value = today();
  form.pickupDate.value = '';
  form.discount.value = '0';
  form.discountMode.value = 'dollar';
  form.tax.value = '0';
  form.subtotal.value = '0';
  form.total.value = '0';
  form.payment.value = '0';
  form.balance.value = '0';
  form.paymentType.value = '';
  form.voucherId.value = '';
  form.voucherProvider.value = '';
  form.voucherAmount.value = '';
  form.status.value = 'Received';
  setLoggedInOrderTaker();
  form.notes.value = '';
}

function loadCustomerInfoForNewOrder(customer){
  const storedNotes = splitStoredNotes(customer.notes || '');
  const parentName = splitParentName(customer, storedNotes.meta);

  editingInvoiceId = null;
  editingInvoiceArchived = false;
  inventoryChangesPending = false;
  clearOrderFieldsForNewCustomerOrder();

  form.school.value = customer.school || '';
  form.parentLastName.value = parentName.lastName || '';
  form.parentFirstName.value = parentName.firstName || '';
  form.studentName.value = customer.student_name || customer.studentName || '';
  form.phone.value = formatPhoneNumber(customer.phone || '');
  form.email.value = customer.email || '';
  form.address.value = customer.address || '';
  form.apt.value = customer.apt || '';
  form.city.value = customer.city || '';
  form.zip.value = customer.zip || '';
  form.emailList.checked = !!(customer.email_list || customer.emailList);

  updateVoucherEditControl();
  setAutosaveStatus('Returning customer info loaded. Manual save required.');
  calculate();
  document.querySelector('[data-view="edit"]')?.click();
}

function duplicateOrder(order){
  setForm(order);
  editingInvoiceId = null;
  editingInvoiceArchived = false;
  inventoryChangesPending = true;
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

  const orders = allRows
    .filter(row => sameCustomer(row, selectedOrder))
    .sort((a, b) => String(b.order_date || b.created_at || '').localeCompare(String(a.order_date || a.created_at || '')));
  const totalSpent = orders.reduce((sum, row) => sum + (Number(row.total) || 0), 0);
  const lastPickup = orders
    .map(row => row.pickup_date)
    .filter(Boolean)
    .sort()
    .pop() || 'None yet';

  const recentOrders = orders.map(row => {
    const itemCount = Array.isArray(row.items)
      ? row.items.filter(item => item?.amount || item?.description).length
      : 0;

    return `
    <button class="history-order" data-history-order-id="${esc(row.id)}" type="button">
      <strong>${esc(row.invoice_number || '')} - ${money(row.total)}</strong>
      <span>${esc(row.order_date || '')} / Pickup: ${esc(row.pickup_date || 'TBD')}</span>
      <span>${esc(row.status || 'Received')} / ${itemCount} item${itemCount === 1 ? '' : 's'} / Balance ${money(row.balance)}</span>
    </button>
  `;
  }).join('');

  customerHistory.innerHTML = `
    <h3>${esc(selectedOrder.parent_name || 'Customer History')}</h3>
    <div class="history-stats">
      <p><strong>Previous Orders:</strong> ${orders.length}</p>
      <p><strong>Total Spent:</strong> ${money(totalSpent)}</p>
      <p><strong>Last Pickup Date:</strong> ${esc(lastPickup)}</p>
    </div>
    ${recentOrders}
  `;

  customerHistory.querySelectorAll('[data-history-order-id]').forEach(button => {
    button.addEventListener('click', async () => {
      await loadInvoiceForEdit(button.dataset.historyOrderId);
    });
  });
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
  const schoolMatches = !databaseSchoolFilter || normalizedText(row.school) === normalizedText(databaseSchoolFilter);
  return schoolMatches && rowMatchesOrderFilter(row, databaseFilter);
}

function updateFilterDisplay(){
  if (!activeDatabaseFilter || !activeDatabaseFilterText) return;

  if (!databaseFilter && !databaseSchoolFilter) {
    activeDatabaseFilter.hidden = true;
    activeDatabaseFilterText.textContent = '';
    if (databaseFilterSelect) databaseFilterSelect.value = '';
    if (databaseSchoolSelect) databaseSchoolSelect.value = '';
    return;
  }

  activeDatabaseFilter.hidden = false;
  const labels = [];
  if (databaseFilter) labels.push(databaseFilterLabels[databaseFilter] || 'Filtered Orders');
  if (databaseSchoolFilter) labels.push(databaseSchoolSelect?.selectedOptions[0]?.textContent || databaseSchoolFilter);
  activeDatabaseFilterText.textContent = `Showing: ${labels.join(' / ')}`;
  if (databaseFilterSelect) databaseFilterSelect.value = databaseFilter;
  if (databaseSchoolSelect) databaseSchoolSelect.value = databaseSchoolFilter;
}

function populateDatabaseSchools(rows){
  if (!databaseSchoolSelect) return;

  const selected = databaseSchoolFilter;
  const schoolMap = new Map();
  rows.forEach(row => {
    const school = String(row.school || '').trim();
    const key = normalizedText(school);
    if (!key || schoolMap.has(key)) return;
    schoolMap.set(key, school);
  });
  const schools = [...schoolMap.values()].sort((a, b) => a.localeCompare(b));
  const selectedKey = normalizedText(selected);

  databaseSchoolSelect.innerHTML = '<option value="">All Schools</option>';
  schools.forEach(school => {
    const option = document.createElement('option');
    option.value = normalizedText(school);
    option.textContent = school;
    databaseSchoolSelect.appendChild(option);
  });

  databaseSchoolSelect.value = schoolMap.has(selectedKey) ? selectedKey : '';
  if (selected && databaseSchoolSelect.value !== selectedKey) databaseSchoolFilter = '';
}

function populateSchoolSuggestions(rows = cachedAllInvoices){
  if (!schoolSuggestions) return;

  const schoolMap = new Map();
  rows.forEach(row => {
    const school = String(row.school || '').replace(/\s+/g, ' ').trim();
    const key = normalizedText(school);
    if (!key) return;
    schoolMap.set(key, school);
  });

  schoolSuggestions.innerHTML = [...schoolMap.values()]
    .sort((a, b) => a.localeCompare(b))
    .map(school => `<option value="${esc(school)}"></option>`)
    .join('');
}

function populateReportSchools(rows){
  if (!reportSchoolSelect) return;

  const selected = reportSchoolFilter;
  const schoolMap = new Map();
  rows.forEach(row => {
    const school = String(row.school || '').trim();
    const key = normalizedText(school);
    if (!key || schoolMap.has(key)) return;
    schoolMap.set(key, school);
  });

  reportSchoolSelect.innerHTML = '<option value="">All Schools</option>';
  [...schoolMap.values()].sort((a, b) => a.localeCompare(b)).forEach(school => {
    const option = document.createElement('option');
    option.value = normalizedText(school);
    option.textContent = school;
    reportSchoolSelect.appendChild(option);
  });

  reportSchoolSelect.value = schoolMap.has(normalizedText(selected)) ? normalizedText(selected) : '';
  if (selected && reportSchoolSelect.value !== normalizedText(selected)) reportSchoolFilter = '';
}

function reportDateForRow(row){
  return String(row.order_date || row.date_submitted || row.created_at || '').slice(0, 10);
}

function rowMatchesReportFilters(row){
  const orderDate = reportDateForRow(row);
  const year = Number(orderDate.slice(0, 4));
  const currentYear = new Date().getFullYear();
  const schoolMatches = !reportSchoolFilter || normalizedText(row.school) === normalizedText(reportSchoolFilter);

  if (!schoolMatches) return false;
  if (reportDateRange === 'thisYear') return year === currentYear;
  if (reportDateRange === 'lastYear') return year === currentYear - 1;
  return true;
}

function reportItemDisplay(item){
  const inventoryMatch = item.inventory_id
    ? inventoryItems.find(row => String(inventoryKey(row)) === String(item.inventory_id))
    : null;
  const description = String(inventoryMatch?.product || item.description || '').trim();
  const color = String(item.color || '').trim();
  const size = String(item.size || '').trim();

  return {
    description: description || 'Unnamed Item',
    color,
    size,
    label: [description || 'Unnamed Item', color, size].filter(Boolean).join(' / ')
  };
}

function reportItemsForRow(row){
  if (Array.isArray(row.items)) return row.items;

  try {
    const parsed = JSON.parse(row.items || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Could not read report items for invoice.', row.invoice_number, error);
    return [];
  }
}

function demandReportRows(rows){
  const totals = new Map();

  rows.filter(rowMatchesReportFilters).forEach(row => {
    const invoiceKey = row.id || row.invoice_number || `${row.parent_name || ''}-${reportDateForRow(row)}`;
    const items = reportItemsForRow(row);

    items.forEach(item => {
      const quantity = Number(item.amount) || 0;
      if (quantity <= 0) return;

      const display = reportItemDisplay(item);
      const key = item.inventory_id
        ? `inventory:${item.inventory_id}`
        : `typed:${normalizedText(display.description)}|${normalizedText(display.color)}|${normalizedText(display.size)}`;
      const existing = totals.get(key) || {
        ...display,
        quantity: 0,
        orders: new Set()
      };

      existing.quantity += quantity;
      existing.orders.add(String(invoiceKey));
      totals.set(key, existing);
    });
  });

  return [...totals.values()]
    .map(row => ({ ...row, orderCount: row.orders.size }))
    .sort((a, b) => b.quantity - a.quantity || a.label.localeCompare(b.label));
}

function filteredReportInvoices(rows){
  return rows.filter(rowMatchesReportFilters);
}

function sizeBreakdownRows(demandRows, totalQuantity){
  const totals = new Map();

  demandRows.forEach(row => {
    const size = row.size || 'Not listed';
    const existing = totals.get(size) || { size, quantity: 0 };
    existing.quantity += row.quantity;
    totals.set(size, existing);
  });

  return [...totals.values()]
    .map(row => ({
      ...row,
      percent: totalQuantity ? Math.round((row.quantity / totalQuantity) * 100) : 0
    }))
    .sort((a, b) => b.quantity - a.quantity || a.size.localeCompare(b.size));
}

function schoolDemandRows(rows){
  const totals = new Map();

  filteredReportInvoices(rows).forEach(row => {
    const school = String(row.school || 'Not listed').trim() || 'Not listed';
    const schoolKey = normalizedText(school);
    const invoiceKey = String(row.id || row.invoice_number || `${row.parent_name || ''}-${reportDateForRow(row)}`);
    const existing = totals.get(schoolKey) || {
      school,
      quantity: 0,
      invoices: new Set(),
      itemTotals: new Map()
    };

    reportItemsForRow(row).forEach(item => {
      const quantity = Number(item.amount) || 0;
      if (quantity <= 0) return;

      const display = reportItemDisplay(item);
      existing.quantity += quantity;
      existing.invoices.add(invoiceKey);
      existing.itemTotals.set(display.label, (existing.itemTotals.get(display.label) || 0) + quantity);
    });

    if (existing.quantity > 0) totals.set(schoolKey, existing);
  });

  return [...totals.values()]
    .map(row => {
      const topItem = [...row.itemTotals.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0] || 'None';

      return {
        school: row.school,
        quantity: row.quantity,
        invoiceCount: row.invoices.size,
        topItem
      };
    })
    .sort((a, b) => b.quantity - a.quantity || a.school.localeCompare(b.school));
}

function visibleChartRows(demandRows){
  if (reportChartLimit === 'all') return demandRows;
  return demandRows.slice(0, Number(reportChartLimit) || 20);
}

function csvCell(value){
  return `"${String(value ?? '').replace(/"/g, '""')}"`;
}

function downloadReportCsv(){
  if (!latestReportRows.length) {
    appNotice('No Report Rows', 'No report rows to export.', 'error');
    return;
  }

  const header = ['Item', 'Color', 'Size', 'Quantity Ordered', 'Orders'];
  const rows = latestReportRows.map(row => [
    row.description,
    row.color || '',
    row.size || '',
    row.quantity,
    row.orderCount
  ]);
  const csv = [header, ...rows].map(row => row.map(csvCell).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `living-word-demand-report-${today()}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function renderReports(){
  if (!reportDemandChart || !reportDemandBody || !reportSizeBody || !reportSchoolBody) return;

  const rows = reportIncludesArchived ? await getAllInvoices() : await getInvoices();
  populateReportSchools(rows);

  if (reportDateFilter) reportDateFilter.value = reportDateRange;
  if (reportLimitSelect) reportLimitSelect.value = reportChartLimit;
  if (reportIncludeArchived) reportIncludeArchived.checked = reportIncludesArchived;
  const demandRows = demandReportRows(rows);
  latestReportRows = demandRows;
  const chartRows = visibleChartRows(demandRows);
  const sizeRows = sizeBreakdownRows(demandRows, demandRows.reduce((sum, row) => sum + row.quantity, 0));
  const schoolRows = schoolDemandRows(rows);
  const totalQuantity = demandRows.reduce((sum, row) => sum + row.quantity, 0);
  const topItem = demandRows[0]?.label || 'None';
  const topSize = sizeRows[0]?.size || 'None';
  const topSchool = schoolRows[0]?.school || 'None';
  const invoiceCount = new Set(filteredReportInvoices(rows).map(row => String(row.id || row.invoice_number))).size;
  const averagePerOrder = invoiceCount ? Math.round(totalQuantity / invoiceCount) : 0;
  const maxQuantity = Math.max(...chartRows.map(row => row.quantity), 0);

  if (reportsSummary) {
    reportsSummary.innerHTML = `
      <div><span>Total Items Ordered</span><strong>${esc(totalQuantity)}</strong></div>
      <div><span>Unique Ordered Items</span><strong>${esc(demandRows.length)}</strong></div>
      <div><span>Top Item</span><strong>${esc(topItem)}</strong></div>
      <div><span>Top Size</span><strong>${esc(topSize)}</strong></div>
      <div><span>Top School</span><strong>${esc(topSchool)}</strong></div>
      <div><span>Avg Items Per Invoice</span><strong>${esc(averagePerOrder)}</strong></div>
    `;
  }

  reportDemandChart.innerHTML = chartRows.length
    ? chartRows.map(row => {
        const height = maxQuantity ? Math.max(8, Math.round((row.quantity / maxQuantity) * 100)) : 0;
        return `
          <div class="report-bar-item">
            <div class="report-bar-track">
              <div class="report-bar" style="height:${height}%"><span>${esc(row.quantity)}</span></div>
            </div>
            <div class="report-bar-label" title="${esc(row.label)}">${esc(row.label)}</div>
          </div>
        `;
      }).join('')
    : '<p class="report-empty">No ordered items match these filters.</p>';

  reportSizeBody.innerHTML = sizeRows.length
    ? sizeRows.map(row => `
        <tr>
          <td>${esc(row.size)}</td>
          <td>${esc(row.quantity)}</td>
          <td>${esc(row.percent)}%</td>
        </tr>
      `).join('')
    : '<tr><td colspan="3">No size demand matches these filters.</td></tr>';

  reportSchoolBody.innerHTML = schoolRows.length
    ? schoolRows.map(row => `
        <tr>
          <td>${esc(row.school)}</td>
          <td>${esc(row.quantity)}</td>
          <td>${esc(row.invoiceCount)}</td>
          <td>${esc(row.topItem)}</td>
        </tr>
      `).join('')
    : '<tr><td colspan="4">No school demand matches these filters.</td></tr>';

  reportDemandBody.innerHTML = demandRows.length
    ? demandRows.map(row => `
        <tr>
          <td>${esc(row.description)}</td>
          <td>${esc(row.color || '')}</td>
          <td>${esc(row.size || '')}</td>
          <td>${esc(row.quantity)}</td>
          <td>${esc(row.orderCount)}</td>
        </tr>
      `).join('')
    : '<tr><td colspan="5">No ordered items match these filters.</td></tr>';
}

function refreshInventoryDatalists(){
  itemsEditor.querySelectorAll('.inventory-picker-search').forEach(search => {
    renderInventoryPickerResults(search.dataset.inventoryPickerSearch, search.value);
  });
}

function inventorySearchMatches(item, query){
  if (!query) return true;
  return normalizedText([
    item.product,
    item.product_code,
    item.supplier,
    deriveInventoryColor(item.product)
  ].join(' ')).includes(normalizedText(query));
}

function renderInventoryPickerResults(index, query = ''){
  const results = itemsEditor.querySelector(`[data-inventory-results="${index}"]`);
  if (!results) return;

  const matches = inventoryItems
    .filter(item => item.status !== 'Inactive')
    .filter(item => inventorySearchMatches(item, query))
    .sort((a, b) => String(a.product).localeCompare(String(b.product)))
    .slice(0, 80);

  results.innerHTML = matches.length
    ? matches.map(item => {
        const parts = inventoryProductParts(item.product);
        return `
          <button class="inventory-result" data-inventory-choice="${esc(inventoryKey(item))}" data-inventory-index="${esc(index)}" type="button">
            <strong>${esc(item.product)}</strong>
            <span>${esc(parts.description)} / Color ${esc(parts.color || 'None')} / Size ${esc(parts.size || 'None')} / Price ${item.price === '' ? 'Not set' : money(item.price)} / Stock ${esc(item.available_stock)}</span>
          </button>
        `;
      }).join('')
    : '<p class="inventory-picker-empty">No inventory matches.</p>';
}

function closeInventoryPickers(){
  itemsEditor.querySelectorAll('.inventory-picker').forEach(picker => {
    picker.hidden = true;
  });
}

function openInventoryPicker(index){
  closeInventoryPickers();
  const picker = itemsEditor.querySelector(`[data-inventory-picker="${index}"]`);
  const search = itemsEditor.querySelector(`[data-inventory-picker-search="${index}"]`);
  if (!picker || !search) return;
  picker.hidden = false;
  search.value = '';
  renderInventoryPickerResults(index);
  search.focus();
}

function handleInventoryLineSelection(input){
  const match = findInventoryItem(input.value);
  const index = input.name.split('_').pop();
  const keyField = form.elements[`inventory_id_${index}`];

  if (!match) {
    if (keyField) keyField.value = '';
    updateStockWarnings();
    return;
  }

  selectInventoryItem(index, match);
}

function selectInventoryItem(index, match){
  const descriptionField = form.elements[`description_${index}`];
  const keyField = form.elements[`inventory_id_${index}`];
  const parts = inventoryProductParts(match.product);
  if (descriptionField) descriptionField.value = parts.description;
  if (keyField) keyField.value = inventoryKey(match);
  if (form.elements[`color_${index}`]) form.elements[`color_${index}`].value = parts.color;
  if (form.elements[`size_${index}`]) form.elements[`size_${index}`].value = parts.size;
  if (form.elements[`price_${index}`] && match.price !== '' && match.price != null) {
    form.elements[`price_${index}`].value = Number(match.price).toFixed(2);
  }
  updateStockWarnings();
  calculate();
}

function lineInventoryItem(index){
  const key = form.elements[`inventory_id_${index}`]?.value;
  const description = form.elements[`description_${index}`]?.value;
  return inventoryItems.find(item => String(inventoryKey(item)) === String(key)) || findInventoryItem(description);
}

function updateStockWarnings(){
  for (let i = 0; i < itemCount; i++) {
    const warningEl = itemsEditor.querySelector(`[data-stock-warning="${i}"]`);
    if (!warningEl) continue;

    const item = lineInventoryItem(i);
    const amount = Number(form.elements[`amount_${i}`]?.value) || 0;
    const warning = stockWarningForLine(item, amount);
    warningEl.textContent = warning;
    warningEl.hidden = !warning;
  }
}

function createRows(existingItems=[]){
  itemsEditor.innerHTML='';
  for(let i=0;i<itemCount;i++){
    const row=document.createElement('div');
    row.className='item-edit-row';
    row.innerHTML=`
      <label><small>Amount</small><input name="amount_${i}" type="number" min="0"></label>
      <label class="inventory-description-field"><small>Item Description</small><input name="description_${i}" autocomplete="off"><button class="ghost inventory-picker-toggle" data-open-inventory-picker="${i}" type="button">Search Inventory</button><input name="inventory_id_${i}" type="hidden"><span class="stock-warning" data-stock-warning="${i}"></span><span class="inventory-picker" data-inventory-picker="${i}" hidden><input class="inventory-picker-search" data-inventory-picker-search="${i}" placeholder="Search inventory..." autocomplete="off"><span class="inventory-picker-results" data-inventory-results="${i}"></span></span></label>
      <label><small>Color</small><input name="color_${i}"></label>
      <label><small>Size</small><input name="size_${i}"></label>
      <label><small>Price Ea</small><input name="price_${i}" type="number" step="0.01" min="0"></label>
      <label><small>Line Total</small><input name="line_${i}" readonly></label>`;
    itemsEditor.appendChild(row);
  }
  existingItems.forEach((item,i)=>Object.keys(item).forEach(k=>{const el=form.elements[`${k}_${i}`]; if(el) el.value=item[k]??'';}));
  updatePriceAccess();
  updateStockWarnings();
}
function setLoggedInOrderTaker(){
  if (!form?.orderTakenBy) return;
  const name = currentStaffName();
  if (name) setOrderTakenByValue(name);
}
function normalizeEmployeeLineItem(item){
  if (canOverridePrices()) return item;

  const inventoryItem = item.inventory_id
    ? inventoryItems.find(row => String(inventoryKey(row)) === String(item.inventory_id))
    : findInventoryItem(item.description);

  if (!inventoryItem || inventoryItem.price === '' || inventoryItem.price == null) {
    return { ...item, price: '', line: '' };
  }

  const price = Number(inventoryItem.price);
  const amount = Number(item.amount) || 0;
  return {
    ...item,
    inventory_id: inventoryKey(inventoryItem),
    price: price.toFixed(2),
    line: amount ? (amount * price).toFixed(2) : ''
  };
}
function formData(){
  const data=Object.fromEntries(new FormData(form).entries());
  data.emailList = form.emailList.checked;
  data.parentName = formatParentName(data.parentLastName, data.parentFirstName);
  data.phone = formatPhoneNumber(data.phone);
  data.items=[];
  for(let i=0;i<itemCount;i++){
    data.items.push(normalizeEmployeeLineItem({amount:data[`amount_${i}`]||'',description:data[`description_${i}`]||'',color:data[`color_${i}`]||'',size:data[`size_${i}`]||'',price:data[`price_${i}`]||'',line:data[`line_${i}`]||'',inventory_id:data[`inventory_id_${i}`]||''}));
  }
  return data;
}

function invoiceRowFromForm(){
  const d = formData();
  const discountAmount = calculateDiscountAmount(Number(d.subtotal) || 0, Number(d.discount) || 0, d.discountMode);
  const savedStockAdjustments = editingInvoiceId ? stockAdjustmentsByInvoice.get(String(editingInvoiceId)) || {} : {};
  const internalMeta = {
    parentFirstName: d.parentFirstName || '',
    parentLastName: d.parentLastName || '',
    orderTakenBy: d.orderTakenBy || currentStaffName() || '',
    paymentType: d.paymentType || '',
    discountMode: d.discountMode || 'dollar',
    discountValue: Number(d.discount) || 0,
    voucherId: d.voucherId || '',
    voucherProvider: d.voucherProvider || '',
    voucherAmount: d.voucherAmount || '',
    [STOCK_META_KEY]: savedStockAdjustments
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
    discount: discountAmount,
    tax: Number(d.tax) || 0,
    total: Number(d.total) || 0,
    payment: Number(d.payment) || 0,
    payment_type: d.paymentType || '',
    voucher_id: d.voucherId || '',
    voucher_provider: d.voucherProvider || '',
    voucher_amount: Number(d.voucherAmount) || 0,
    balance: Number(d.balance) || 0,

    status: d.status || 'Received',
    notes: packStoredNotes(d.notes || '', internalMeta),
    taken_by_user_id: currentSession?.user?.id || null,
    taken_by_name: d.orderTakenBy || currentStaffName() || '',
    archived: editingInvoiceId ? editingInvoiceArchived : false
  };
}
function missingStaffInvoiceColumns(error){
  const message = String(error?.message || error?.details || '');
  return message.includes('taken_by_user_id') || message.includes('taken_by_name');
}
function invoiceRowForWrite(row){
  if (invoiceStaffColumnsAvailable) return row;

  const cleanRow = { ...row };
  delete cleanRow.taken_by_user_id;
  delete cleanRow.taken_by_name;
  return cleanRow;
}

function setAutosaveStatus(message, state = ''){
  if (!autosaveStatus) return;

  autosaveStatus.textContent = message.toUpperCase();
  autosaveStatus.className = 'autosave-status';

  if (state) autosaveStatus.classList.add(state);
  updateAutosaveVisibility();
}
function updateAutosaveVisibility(){
  const editActive = document.getElementById('editView')?.classList.contains('active');
  if (autosaveStatus) autosaveStatus.hidden = !editActive;
  if (editOnlyControls) editOnlyControls.hidden = !editActive;
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

function isInventoryAffectingField(target){
  const name = target?.name || '';
  return /^amount_\d+$/.test(name) ||
    /^description_\d+$/.test(name) ||
    /^color_\d+$/.test(name) ||
    /^size_\d+$/.test(name) ||
    /^price_\d+$/.test(name) ||
    /^inventory_id_\d+$/.test(name);
}

function queueFormChange(target){
  calculate();

  if (editingInvoiceId && isInventoryAffectingField(target)) {
    inventoryChangesPending = true;
    clearTimeout(autosaveTimer);
    setAutosaveStatus('Item changes require Submit / Save.', 'caution');
    return;
  }

  queueAutosave();
}

function invoiceRowForAutosave(){
  const row = invoiceRowFromForm();

  if (inventoryChangesPending) {
    delete row.items;
    delete row.subtotal;
    delete row.discount;
    delete row.tax;
    delete row.total;
    delete row.balance;
  }

  return row;
}

async function autosaveExistingInvoice(){
  if (!editingInvoiceId || isAutosaving) return;

  isAutosaving = true;
  setAutosaveStatus('Saving...', 'saving');

  let row = invoiceRowForAutosave();
  let { error } = await supabaseClient
    .from('invoices')
    .update(invoiceRowForWrite(row))
    .eq('id', editingInvoiceId);

  if (error && missingStaffInvoiceColumns(error)) {
    invoiceStaffColumnsAvailable = false;
    error = (await supabaseClient
      .from('invoices')
      .update(invoiceRowForWrite(row))
      .eq('id', editingInvoiceId)).error;
  }

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
  await renderReports();
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

  form.discountMode.value = storedNotes.meta.discountMode || data.discountMode || 'dollar';
  form.discount.value = storedNotes.meta.discountValue ?? data.discount ?? 0;
  form.payment.value = data.payment || 0;
  form.paymentType.value = storedNotes.meta.paymentType || data.payment_type || data.paymentType || '';
  form.voucherId.value = storedNotes.meta.voucherId || data.voucher_id || data.voucherId || '';
  form.voucherProvider.value = storedNotes.meta.voucherProvider || data.voucher_provider || data.voucherProvider || '';
  form.voucherAmount.value = storedNotes.meta.voucherAmount || data.voucher_amount || data.voucherAmount || '';

  form.status.value = data.status || 'Received';
  setOrderTakenByValue(data.taken_by_name || storedNotes.meta.orderTakenBy || data.order_taken_by || data.orderTakenBy || '');
  form.notes.value = storedNotes.notes || '';

  itemCount = Math.max(3, (data.items || []).length);

  createRows(data.items || []);

  editingInvoiceId = data.id || null;
  editingInvoiceArchived = data.archived === true;
  inventoryChangesPending = false;
  if (editingInvoiceId) {
    stockAdjustmentsByInvoice.set(String(editingInvoiceId), storedNotes.meta[STOCK_META_KEY] || {});
  }

  calculate();
  updateVoucherEditControl();
}
function calculateDiscountAmount(subtotal, discountValue, mode){
  if (mode === 'percent') {
    const percent = Math.min(Math.max(Number(discountValue) || 0, 0), 100);
    return subtotal * (percent / 100);
  }

  return Math.max(Number(discountValue) || 0, 0);
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
  const discountValue=Number(form.discount.value)||0, payment=Number(form.payment.value)||0;
  const discount=calculateDiscountAmount(subtotal, discountValue, form.discountMode.value);
  const taxable=Math.max(subtotal-discount,0);
  const tax=taxable*(appSettings().taxRate / 100);
  const total=Math.max(taxable+tax,0);
  form.subtotal.value=subtotal.toFixed(2); form.tax.value=tax.toFixed(2); form.total.value=total.toFixed(2); form.balance.value=(total-payment).toFixed(2);
  updateStockWarnings();
  renderPreview();
}
async function functionErrorMessage(error) {
  const fallback = error?.message || 'Unknown email service error.';

  try {
    const context = error?.context;
    if (context?.json) {
      const body = await context.json();
      const resendError = body?.error;
      if (typeof resendError === 'string') return resendError;
      if (resendError?.message) return resendError.message;
      if (body?.message) return body.message;
      if (body?.error) return JSON.stringify(body.error);
    }
  } catch (parseError) {
    console.warn('Could not parse email function error response.', parseError);
  }

  return fallback;
}
async function sendInvoiceEmail(type, invoiceOverride = null) {
  const invoice = invoiceOverride || invoiceRowFromForm();

  if (!invoice.email) {
    await appNotice('Email Not Sent', 'No customer email found on this invoice.', 'error');
    return false;
  }

  const invoiceHtml =
    document.getElementById('previewPaper')?.innerHTML || '';

  const { data, error } =
    await supabaseClient.functions.invoke(
      'send-invoice-email',
      {
        body: {
          type,
          invoice,
          invoiceHtml
        }
      }
    );

  if (error) {
    console.error('Email error:', error);

    const details = await functionErrorMessage(error);
    await appNotice('Email Failed', details, 'error');

    return false;
  }

  console.log('Email sent:', data);

  await appNotice('Email Sent', `Customer email sent to ${invoice.email}.`, 'success');
  return true;
}

function renderPreview(){
  const d=formData();
  const discountAmount = calculateDiscountAmount(Number(d.subtotal) || 0, Number(d.discount) || 0, d.discountMode);
  const discountLabel = d.discountMode === 'percent'
    ? `${Number(d.discount) || 0}% (${money(discountAmount)})`
    : money(discountAmount);
  const previewItems = [...d.items];
  while (previewItems.length < 10) previewItems.push({amount:'',description:'',color:'',size:'',price:'',line:''});
  const rows=previewItems.map(x=>`<tr><td><span class="printed-entry">${esc(x.amount)}</span></td><td><span class="printed-entry">${esc(x.description)}</span></td><td><span class="printed-entry">${esc(x.color)}</span></td><td><span class="printed-entry">${esc(x.size)}</span></td><td><span class="printed-entry">${x.price?money(x.price):''}</span></td><td><span class="printed-entry">${x.line?money(x.line):''}</span></td></tr>`).join('');
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
        <div class="date-row"><div class="date-box"><strong>DATE</strong> <span class="printed-entry">${esc(d.orderDate||'____/____/____')}</span></div><div class="num-box"><strong class="printed-entry">${esc(d.invoiceNumber||'')}</strong></div></div>
        <div class="preview-line">SCHOOL <span class="printed-entry">${esc(d.school)}</span></div>
        <div class="preview-line">PARENT <span class="printed-entry">${esc(d.parentName)}</span></div>
        <div class="preview-line">STUDENT <span class="printed-entry">${esc(d.studentName)}</span></div>
        <div class="preview-line split"><span>ADDRESS <span class="printed-entry">${esc(d.address)}</span></span><span>APT <span class="printed-entry">${esc(d.apt)}</span></span></div>
        <div class="preview-line split"><span>CITY <span class="printed-entry">${esc(d.city)}</span></span><span>ZIP <span class="printed-entry">${esc(d.zip)}</span></span></div>
        <div class="preview-line">PHONE <span class="printed-entry">${esc(d.phone)}</span></div>
        <div class="preview-line">EMAIL <span class="printed-entry">${esc(d.email)}</span></div>
        <div class="email-check"><span class="fakebox">${d.emailList?'✓':''}</span><span>Please add me to your e-mail list<br>for sales and special offers</span></div>
      </div>
    </div>
    <table class="items-table"><thead><tr><th>Amount</th><th>Item Description</th><th>Color</th><th>Size</th><th>Price<br>EA</th><th>Line<br>Total</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="middle-bottom">
      <div class="thank-you">
        <h2>Thank You for your order</h2>
        <p><em>If you are happy with our products and services, please let others know by giving us a review. If not, please tell us.</em></p>
        <div class="order-status-qr">
          <span>Scan to check<br>your order status</span>
          <img src="assets/lam-status.png" alt="Scan to check your order status">
        </div>
      </div>
      <div class="totals">
        <div class="total-row"><span>SUB TOTAL</span><span class="printed-entry">${money(d.subtotal)}</span></div>
        <div class="total-row"><span>DISCOUNT</span><span class="printed-entry">${esc(discountLabel)}</span></div>
        <div class="total-row"><span>TAX</span><span class="printed-entry">${money(d.tax)}</span></div>
        <div class="total-row"><span>TOTAL</span><span class="printed-entry">${money(d.total)}</span></div>
        <div class="total-row"><span>PAYMENT</span><span class="printed-entry">${money(d.payment)}</span></div>
        <div class="total-row"><span>PAY TYPE</span><span class="printed-entry">${esc(d.paymentType || '')}</span></div>
        <div class="total-row"><span>BALANCE</span><span class="printed-entry">${money(d.balance)}</span></div>
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
      <div class="pickup-box"><h2>PICKUP DATE</h2><div class="pickup-date-line printed-entry">${esc(d.pickupDate||'____/____/____')}</div></div>
    </div>
    <div class="admin-preview no-print"><strong>Status:</strong> ${esc(d.status||'Received')} &nbsp; <strong>Internal Notes:</strong> ${esc(d.notes||'')}</div>`;
}
async function renderDatabase(){
  const rows = await getInvoices();
  const q = (searchInput.value || '').toLowerCase();

  databaseBody.innerHTML = '';
  populateDatabaseSchools(rows);
  updateFilterDisplay();
  renderDeleteRequests();

  rows
    .filter(rowMatchesDatabaseFilter)
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
        <td>${statusSelectCell(x)}</td>
        <td>${paymentTypeCell(x, storedNotes)}</td>
        <td><span class="badge ${ageClass(days)}">${days} days</span></td>
        <td>${esc(x.pickup_date || '')}</td>
        <td><input class="note-input" data-id="${x.id}" value="${esc(storedNotes.notes || '')}"></td>
        <td>
          <button class="edit-invoice-btn" data-id="${x.id}">
            Edit
          </button>
        </td>
        <td>${databaseArchiveCell(x)}</td>
        <td>${databaseDeleteCell(x)}</td>
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
        <td>${paymentTypeCell(x, storedNotes)}</td>
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
        <td>
          <button class="delete-invoice-btn" data-id="${x.id}">
            Delete
          </button>
        </td>
      `;

      archivedBody.appendChild(tr);
    });
}

async function loadSeedInventory(){
  const deleted = deletedInventoryProducts();
  const stored = localStorage.getItem(INVENTORY_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored)
        .map(normalizeInventoryItem)
        .filter(item => !deleted.has(normalizedText(item.product)));
    } catch (error) {
      console.warn('Could not read local inventory.', error);
    }
  }

  try {
    const response = await fetch('data/inventory.csv');
    if (!response.ok) throw new Error('Inventory CSV not found.');
    return csvRowsToInventory(await response.text())
      .filter(item => !deleted.has(normalizedText(item.product)));
  } catch (error) {
    console.warn('Could not load inventory seed file.', error);
    return [];
  }
}

async function loadInventory(){
  setInventoryStatus('Inventory loading...', 'saving');

  try {
    const { data, error } = await supabaseClient
      .from('inventory')
      .select('*')
      .order('product', { ascending: true });

    if (error) throw error;

    inventoryBackendAvailable = true;
    const deleted = deletedInventoryProducts();
    inventoryItems = (data || [])
      .map(normalizeInventoryItem)
      .filter(item => !deleted.has(normalizedText(item.product)));

    if (!inventoryItems.length) {
      inventoryItems = await loadSeedInventory();
      if (inventoryItems.length) await saveInventorySeedToSupabase();
    }

    localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));
    setInventoryStatus('Inventory synced.', 'saved');
  } catch (error) {
    inventoryBackendAvailable = false;
    inventoryItems = await loadSeedInventory();
    setInventoryStatus('Using local inventory. Add the Supabase table to sync.', 'error');
    console.warn('Inventory table unavailable. Using local storage.', error);
  }

  renderInventory();
  refreshInventoryDatalists();
}

async function saveInventorySeedToSupabase(){
  const rows = inventoryItems.map(item => ({
    product_code: item.product_code,
    product: item.product,
    price: item.price === '' ? null : Number(item.price),
    status: item.status,
    minimum_stock: Number(item.minimum_stock) || 0,
    available_stock: Number(item.available_stock) || 0,
    supplier: item.supplier,
    report_color: item.report_color
  }));

  const { error } = await supabaseClient
    .from('inventory')
    .upsert(rows, { onConflict: 'product' });

  if (error) throw error;
}

async function syncInventoryToSupabase(items, mode = 'merge', previousItems = []){
  if (!inventoryBackendAvailable) return true;

  let syncItems = items;

  if (mode === 'replace') {
    const uploadedProducts = new Set(items.map(item => normalizedText(item.product)));
    const inactiveMissingItems = previousItems
      .filter(item => item.product && !uploadedProducts.has(normalizedText(item.product)))
      .map(item => ({ ...item, status: 'Inactive' }));

    syncItems = [...items, ...inactiveMissingItems];
  }

  const rows = syncItems.map(item => ({
    product_code: item.product_code,
    product: item.product,
    price: item.price === '' ? null : Number(item.price),
    status: item.status,
    minimum_stock: Number(item.minimum_stock) || 0,
    available_stock: Number(item.available_stock) || 0,
    supplier: item.supplier,
    report_color: item.report_color
  }));

  if (!rows.length) return true;

  const { error } = await supabaseClient
    .from('inventory')
    .upsert(rows, { onConflict: 'product' });

  if (error) throw error;
  return true;
}

function downloadInventoryCsv(){
  const csv = inventoryToCsv(inventoryItems);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `living-word-inventory-${today()}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function openInventoryCsvModal(){
  if (!inventoryCsvModal || !inventoryCsvForm) return;
  inventoryCsvForm.reset();
  if (inventoryCsvStatus) {
    inventoryCsvStatus.textContent = 'Choose a CSV file to upload.';
    inventoryCsvStatus.className = 'autosave-status';
  }
  inventoryCsvModal.hidden = false;
  setTimeout(() => inventoryCsvFile?.focus(), 0);
}

function closeInventoryCsvModal(){
  if (inventoryCsvModal) inventoryCsvModal.hidden = true;
}

async function importInventoryCsv(event){
  event.preventDefault();
  const file = inventoryCsvFile?.files?.[0];
  if (!file) return;
  const previousInventoryItems = [...inventoryItems];

  try {
    if (inventoryCsvStatus) {
      inventoryCsvStatus.textContent = 'Reading CSV...';
      inventoryCsvStatus.className = 'autosave-status saving';
    }

    const importedItems = csvRowsToInventory(await file.text());
    if (!importedItems.length) {
      throw new Error('No inventory rows found in this CSV.');
    }

    const mode = inventoryCsvMode?.value || 'merge';

    if (mode === 'replace') {
      inventoryItems = importedItems;
      selectedInventoryIds.clear();
      localStorage.removeItem(INVENTORY_DELETED_KEY);
    } else {
      const byProduct = new Map(inventoryItems.map(item => [normalizedText(item.product), item]));
      importedItems.forEach(item => {
        const key = normalizedText(item.product);
        const existing = byProduct.get(key);
        if (existing) {
          Object.assign(existing, {
            product_code: item.product_code,
            product: item.product,
            price: item.price,
            status: item.status,
            minimum_stock: item.minimum_stock,
            available_stock: item.available_stock,
            supplier: item.supplier,
            report_color: item.report_color
          });
        } else {
          inventoryItems.push(item);
        }
        forgetDeletedInventory(item.product);
      });
    }

    localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));
    await syncInventoryToSupabase(importedItems, mode, previousInventoryItems);
    renderInventory();
    refreshInventoryDatalists();
    updateStockWarnings();
    setInventoryStatus(`Imported ${importedItems.length} inventory item${importedItems.length === 1 ? '' : 's'}.`, 'saved');
    closeInventoryCsvModal();
  } catch (error) {
    console.error(error);
    inventoryItems = previousInventoryItems;
    localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));
    renderInventory();
    refreshInventoryDatalists();
    if (inventoryCsvStatus) {
      inventoryCsvStatus.textContent = error instanceof Error ? error.message : 'CSV import failed.';
      inventoryCsvStatus.className = 'autosave-status error';
    }
  }
}

function inventoryNeedsReorder(item){
  return Number(item.available_stock) <= Number(item.minimum_stock);
}

function renderInventory(){
  if (!inventoryBody) return;

  const q = normalizedText(inventorySearchInput?.value || '');
  const rows = inventoryItems
    .filter(item => !inventoryShowReorderOnly || inventoryNeedsReorder(item))
    .filter(item => normalizedText([
      item.product_code,
      item.product,
      deriveInventoryColor(item.product),
      item.supplier,
      item.status
    ].join(' ')).includes(q))
    .sort((a, b) => String(a.product).localeCompare(String(b.product)));

  const reorderCount = inventoryItems.filter(inventoryNeedsReorder).length;
  if (inventoryReorderCount) inventoryReorderCount.textContent = reorderCount;
  if (inventoryShowAllBtn) inventoryShowAllBtn.hidden = !inventoryShowReorderOnly;
  if (inventoryReorderFilterBtn) inventoryReorderFilterBtn.classList.toggle('active-filter-card', inventoryShowReorderOnly);

  inventoryBody.innerHTML = rows.map(item => {
    const key = esc(item.id);
    return `
      <tr class="${inventoryNeedsReorder(item) ? 'inventory-low-row' : ''}" data-inventory-id="${key}">
        <td class="inventory-select-column"><input class="inventory-row-select" type="checkbox" aria-label="Select ${esc(item.product)}" ${selectedInventoryIds.has(String(item.id)) ? 'checked' : ''}></td>
        <td><input data-inventory-field="product_code" value="${esc(item.product_code)}"></td>
        <td><input data-inventory-field="product" value="${esc(item.product)}"></td>
        <td><input data-inventory-field="price" type="number" step="0.01" min="0" value="${esc(item.price)}"></td>
        <td>
          <select data-inventory-field="status">
            <option ${item.status === 'Active' ? 'selected' : ''}>Active</option>
            <option ${item.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
          </select>
        </td>
        <td><input data-inventory-field="minimum_stock" type="number" min="0" value="${esc(item.minimum_stock)}"></td>
        <td><input data-inventory-field="available_stock" type="number" min="0" value="${esc(item.available_stock)}"></td>
        <td><input data-inventory-field="supplier" value="${esc(item.supplier)}"></td>
        <td>
          <select data-inventory-field="report_color">
            <option ${item.report_color === 'No' ? 'selected' : ''}>No</option>
            <option ${item.report_color === 'Yes' ? 'selected' : ''}>Yes</option>
          </select>
        </td>
      </tr>
    `;
  }).join('');

  updateInventorySelection(rows);
}

function updateInventorySelection(visibleRows = null){
  const rows = visibleRows || [...inventoryBody.querySelectorAll('[data-inventory-id]')]
    .map(row => inventoryItems.find(item => String(item.id) === String(row.dataset.inventoryId)))
    .filter(Boolean);
  const selectedCount = selectedInventoryIds.size;
  const visibleSelectedCount = rows.filter(item => selectedInventoryIds.has(String(item.id))).length;

  if (inventorySelectedCount) inventorySelectedCount.textContent = selectedCount;
  if (deleteInventoryBtn) deleteInventoryBtn.disabled = !selectedCount;
  if (inventorySelectAll) {
    inventorySelectAll.checked = Boolean(rows.length && visibleSelectedCount === rows.length);
    inventorySelectAll.indeterminate = Boolean(visibleSelectedCount && visibleSelectedCount < rows.length);
  }
}

function inventoryItemFromEvent(target){
  const row = target.closest('[data-inventory-id]');
  if (!row) return null;
  const key = row.dataset.inventoryId;
  return inventoryItems.find(item => String(item.id) === String(key));
}

function queueInventorySave(item){
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));
  refreshInventoryDatalists();
  updateStockWarnings();

  clearTimeout(inventorySaveTimer);
  setInventoryStatus(inventoryBackendAvailable ? 'Inventory changes saving...' : 'Inventory saved locally.', inventoryBackendAvailable ? 'saving' : 'error');
  inventorySaveTimer = setTimeout(() => saveInventoryItem(item), 600);
}

async function saveInventoryItem(item){
  if (!item) return;

  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));

  if (!inventoryBackendAvailable) {
    return;
  }

  const row = {
    product_code: item.product_code,
    product: item.product,
    price: item.price === '' ? null : Number(item.price),
    status: item.status,
    minimum_stock: Number(item.minimum_stock) || 0,
    available_stock: Number(item.available_stock) || 0,
    supplier: item.supplier,
    report_color: item.report_color
  };

  const request = String(item.id || '').startsWith('local-')
    ? supabaseClient.from('inventory').upsert(row, { onConflict: 'product' })
    : supabaseClient.from('inventory').update(row).eq('id', item.id);
  const { error } = await request;

  if (error) {
    console.error(error);
    inventoryBackendAvailable = false;
    setInventoryStatus('Inventory sync failed. Changes saved locally.', 'error');
    return;
  }

  setInventoryStatus('Inventory saved.', 'saved');
}

function openInventoryDeleteModal(){
  const itemsToDelete = inventoryItems.filter(item => selectedInventoryIds.has(String(item.id)));
  if (!itemsToDelete.length) return;

  if (inventoryDeleteMessage) {
    inventoryDeleteMessage.textContent = itemsToDelete.length === 1
      ? 'This item will be removed from inventory and invoice search.'
      : `These ${itemsToDelete.length} items will be removed from inventory and invoice search.`;
  }
  if (inventoryDeleteModal) inventoryDeleteModal.hidden = false;
}

function closeInventoryDeleteModal(){
  if (inventoryDeleteModal) inventoryDeleteModal.hidden = true;
}

async function deleteSelectedInventory(){
  const itemsToDelete = inventoryItems.filter(item => selectedInventoryIds.has(String(item.id)));
  if (!itemsToDelete.length) {
    closeInventoryDeleteModal();
    return;
  }

  rememberDeletedInventory(itemsToDelete);
  inventoryItems = inventoryItems.filter(item => !selectedInventoryIds.has(String(item.id)));
  selectedInventoryIds = new Set();
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));
  renderInventory();
  refreshInventoryDatalists();
  updateStockWarnings();

  if (!inventoryBackendAvailable) {
    setInventoryStatus('Inventory items deleted locally.', 'error');
    closeInventoryDeleteModal();
    return;
  }

  setInventoryStatus('Deleting inventory items...', 'saving');
  const products = itemsToDelete.map(item => item.product).filter(Boolean);
  const { error } = await supabaseClient
    .from('inventory')
    .delete()
    .in('product', products);

  if (error) {
    console.error(error);
    setInventoryStatus('Deleted locally, but Supabase delete failed. Add the inventory delete policy.', 'error');
    closeInventoryDeleteModal();
    return;
  }

  setInventoryStatus('Inventory items deleted.', 'saved');
  closeInventoryDeleteModal();
}

function openInventoryAddModal(){
  if (!inventoryAddModal || !inventoryAddForm) return;
  inventoryAddForm.reset();
  inventoryAddForm.status.value = 'Active';
  inventoryAddForm.minimum_stock.value = '0';
  inventoryAddForm.available_stock.value = '0';
  inventoryAddForm.report_color.value = 'No';
  inventoryAddModal.hidden = false;
  setTimeout(() => inventoryAddForm.product.focus(), 0);
}

function closeInventoryAddModal(){
  if (inventoryAddModal) inventoryAddModal.hidden = true;
}

async function addInventoryFromForm(event){
  event.preventDefault();
  if (!inventoryAddForm.reportValidity()) return;

  const values = Object.fromEntries(new FormData(inventoryAddForm).entries());
  const product = String(values.product || '').trim();
  const duplicate = inventoryItems.find(item => normalizedText(item.product) === normalizedText(product));

  if (duplicate) {
    await appNotice('Inventory Item Exists', 'That product is already in inventory. Edit the existing inventory row instead.', 'error');
    return;
  }

  const item = normalizeInventoryItem({
    product_code: String(values.product_code || '').trim(),
    product,
    price: values.price === '' ? '' : Number(values.price),
    status: values.status || 'Active',
    minimum_stock: values.minimum_stock,
    available_stock: values.available_stock,
    supplier: String(values.supplier || '').trim(),
    report_color: values.report_color || 'No'
  });

  inventoryItems.unshift(item);
  forgetDeletedInventory(item.product);
  renderInventory();
  refreshInventoryDatalists();
  updateStockWarnings();
  setInventoryStatus('Saving new inventory item...', 'saving');

  const saved = await saveInventoryItemImmediate(item);
  if (!saved) {
    setInventoryStatus('New inventory item saved locally. Supabase sync failed.', 'error');
  } else {
    setInventoryStatus(inventoryBackendAvailable ? 'Inventory item added.' : 'New inventory item saved locally.', inventoryBackendAvailable ? 'saved' : 'error');
  }

  closeInventoryAddModal();
}

async function populateCustomers(){
  const rows = await getAllInvoices();

  customerSelect.innerHTML = '<option value="">Select saved customer...</option>';
  populateSchoolSuggestions(rows);

  const customers = [...rows]
    .filter(row => row.parent_name || row.phone || row.email)
    .sort((a, b) => String(b.order_date || b.created_at || '').localeCompare(String(a.order_date || a.created_at || '')))
    .reduce((map, row) => {
      const key = customerKey(row);
      if (!map.has(key)) map.set(key, row);
      return map;
    }, new Map());

  returningCustomers = [...customers.values()];

  returningCustomers.forEach((x, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = customerOptionLabel(x);
    opt.dataset.customerId = String(x.id || '');
    customerSelect.appendChild(opt);
  });

  renderReturningCustomerResults(customerSearch?.value || '');
}

function employeeNames(){
  try {
    const stored = JSON.parse(localStorage.getItem(EMPLOYEES_STORAGE_KEY) || '[]');
    const names = Array.isArray(stored) ? stored : [];
    return [...new Set([...DEFAULT_EMPLOYEES, currentStaffName(), ...names].map(name => String(name || '').trim()).filter(Boolean))];
  } catch (error) {
    console.warn('Could not read employee names.', error);
    return [...new Set([...DEFAULT_EMPLOYEES, currentStaffName()].filter(Boolean))];
  }
}

function saveEmployeeNames(names){
  const customNames = names.filter(name => !DEFAULT_EMPLOYEES.includes(name));
  localStorage.setItem(EMPLOYEES_STORAGE_KEY, JSON.stringify(customNames));
}

function renderEmployees(){
  const names = employeeNames();
  const currentValue = form.orderTakenBy.value;

  form.orderTakenBy.innerHTML = '<option value="">Select name...</option>';
  names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    form.orderTakenBy.appendChild(option);
  });

  if (currentValue && !names.includes(currentValue)) {
    const option = document.createElement('option');
    option.value = currentValue;
    option.textContent = currentValue;
    form.orderTakenBy.appendChild(option);
  }
  form.orderTakenBy.value = currentValue || '';

  if (!employeeList) return;
  if (employeeForm) employeeForm.hidden = !isAdmin();
  if (form.orderTakenBy) form.orderTakenBy.disabled = !isAdmin();
  employeeList.innerHTML = names.map(name => `
    <div class="employee-row">
      <span>${esc(name)}</span>
      <button class="ghost employee-remove-btn" data-employee-name="${esc(name)}" type="button"${DEFAULT_EMPLOYEES.includes(name) ? ' disabled' : ''}>Remove</button>
    </div>
  `).join('');
}

function setOrderTakenByValue(value){
  const name = String(value || '').trim();
  if (name && ![...form.orderTakenBy.options].some(option => option.value === name)) {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    form.orderTakenBy.appendChild(option);
  }
  form.orderTakenBy.value = name;
}

function setSelectOptions(select, options, placeholder, currentValue = ''){
  if (!select) return;
  const value = String(currentValue || select.value || '');
  select.innerHTML = `<option value="">${placeholder}</option>`;
  options.forEach(optionValue => {
    const option = document.createElement('option');
    option.value = optionValue;
    option.textContent = optionValue;
    select.appendChild(option);
  });
  if (value && !options.includes(value)) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }
  select.value = value;
}

function renderPaymentTypes(){
  const settings = appSettings();
  setSelectOptions(form.paymentType, settings.paymentTypes, 'Select payment type...');

  if (!paymentTypeList) return;
  paymentTypeList.innerHTML = settings.paymentTypes.map(type => `
    <div class="settings-row">
      <span>${esc(type)}</span>
      <button class="ghost setting-remove-btn" data-setting-kind="payment" data-setting-value="${esc(type)}" type="button"${REQUIRED_PAYMENT_TYPES.includes(type) ? ' disabled' : ''}>Remove</button>
    </div>
  `).join('');
}

function renderOrderStatuses(){
  const settings = appSettings();
  setSelectOptions(form.status, settings.orderStatuses, 'Select status...');

  if (!orderStatusList) return;
  orderStatusList.innerHTML = settings.orderStatuses.map(status => `
    <div class="settings-row">
      <span>${esc(status)}</span>
      <button class="ghost setting-remove-btn" data-setting-kind="status" data-setting-value="${esc(status)}" type="button"${REQUIRED_STATUSES.includes(status) ? ' disabled' : ''}>Remove</button>
    </div>
  `).join('');
}

function renderEmailSettings(){
  const settings = appSettings();
  if (sendReceivedEmailSetting) sendReceivedEmailSetting.checked = Boolean(settings.sendReceivedEmail);
  if (askReceivedEmailSetting) askReceivedEmailSetting.checked = Boolean(settings.askReceivedEmail);
  if (sendCompletedEmailSetting) sendCompletedEmailSetting.checked = Boolean(settings.sendCompletedEmail);
  if (askCompletedEmailSetting) askCompletedEmailSetting.checked = Boolean(settings.askCompletedEmail);
}

function renderTaxSettings(){
  const settings = appSettings();
  if (taxRateInput) taxRateInput.value = settings.taxRate;
  if (taxRateLabel) taxRateLabel.textContent = `CT Tax ${settings.taxRate}%`;
}

function renderInvoiceSettings(){
  renderTaxSettings();
  renderPaymentTypes();
  renderOrderStatuses();
  renderEmailSettings();
  calculate();
}

function addListSetting(event, key, input){
  event.preventDefault();
  const value = input.value.replace(/\s+/g, ' ').trim();
  if (!value) return;

  const settings = appSettings();
  const values = uniqueClean([...(settings[key] || []), value]);
  saveAppSettings({ [key]: values });
  input.value = '';
  renderInvoiceSettings();
}

function removeListSetting(kind, value){
  const settings = appSettings();
  const key = kind === 'payment' ? 'paymentTypes' : 'orderStatuses';
  const required = kind === 'payment' ? REQUIRED_PAYMENT_TYPES : REQUIRED_STATUSES;
  if (required.includes(value)) return;

  saveAppSettings({
    [key]: (settings[key] || []).filter(item => item !== value)
  });
  renderInvoiceSettings();
}

function addEmployee(event){
  event.preventDefault();
  const name = employeeNameInput.value.replace(/\s+/g, ' ').trim();
  if (!name) return;

  const names = employeeNames();
  if (!names.some(existing => existing.toLowerCase() === name.toLowerCase())) {
    names.push(name);
    saveEmployeeNames(names);
  }

  employeeNameInput.value = '';
  renderEmployees();
}

function removeEmployee(name){
  const names = employeeNames().filter(existing => existing !== name);
  saveEmployeeNames(names);
  if (form.orderTakenBy.value === name) form.orderTakenBy.value = '';
  renderEmployees();
}
function validateInvoice(){
  form.phone.value = formatPhoneNumber(form.phone.value);
  form.school.value = String(form.school.value || '').replace(/\s+/g, ' ').trim();

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

function currentStockAdjustments(){
  const adjustments = {};

  formData().items.forEach(item => {
    const key = item.inventory_id;
    const amount = Number(item.amount) || 0;
    if (!key || amount <= 0) return;
    adjustments[key] = (adjustments[key] || 0) + amount;
  });

  return adjustments;
}

async function saveInventoryItemImmediate(item){
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));

  if (!inventoryBackendAvailable || !item) return true;

  const row = {
      product_code: item.product_code,
      product: item.product,
      price: item.price === '' ? null : Number(item.price),
      status: item.status,
      minimum_stock: Number(item.minimum_stock) || 0,
      available_stock: Number(item.available_stock) || 0,
      supplier: item.supplier,
      report_color: item.report_color
    };
  const request = String(item.id || '').startsWith('local-')
    ? supabaseClient.from('inventory').upsert(row, { onConflict: 'product' })
    : supabaseClient.from('inventory').update(row).eq('id', item.id);
  const { error } = await request;

  if (error) {
    console.error(error);
    setInventoryStatus('Inventory stock update failed. Check Supabase inventory table.', 'error');
    return false;
  }

  return true;
}

async function reconcileInvoiceInventory(invoiceId){
  if (!invoiceId) return true;

  const previousAdjustments = stockAdjustmentsByInvoice.get(String(invoiceId)) || {};
  const nextAdjustments = currentStockAdjustments();
  const keys = new Set([...Object.keys(previousAdjustments), ...Object.keys(nextAdjustments)]);

  for (const key of keys) {
    const delta = (Number(nextAdjustments[key]) || 0) - (Number(previousAdjustments[key]) || 0);
    if (!delta) continue;

    const item = inventoryItems.find(row => String(inventoryKey(row)) === String(key));
    if (!item) continue;

    item.available_stock = Math.max(0, (Number(item.available_stock) || 0) - delta);
    const saved = await saveInventoryItemImmediate(item);
    if (!saved) return false;
  }

  stockAdjustmentsByInvoice.set(String(invoiceId), nextAdjustments);

  const row = invoiceRowFromForm();
  const { error } = await supabaseClient
    .from('invoices')
    .update({ notes: row.notes, items: row.items })
    .eq('id', invoiceId);

  if (error) {
    console.error(error);
    await appNotice('Inventory Tracking Warning', 'Invoice saved, but the inventory tracking note could not be updated.', 'error');
    return false;
  }

  renderInventory();
  refreshInventoryDatalists();
  updateStockWarnings();
  return true;
}

async function submitInvoice(){

  calculate();
  if (!validateInvoice()) return;

  const invoiceRow = invoiceRowFromForm();
  const wasEditing = Boolean(editingInvoiceId);

  let error;
  let savedInvoice = null;

  if (editingInvoiceId) {

    const result = await supabaseClient
      .from('invoices')
      .update(invoiceRowForWrite(invoiceRow))
      .eq('id', editingInvoiceId);

    error = result.error;

    if (error && missingStaffInvoiceColumns(error)) {
      invoiceStaffColumnsAvailable = false;
      const retry = await supabaseClient
        .from('invoices')
        .update(invoiceRowForWrite(invoiceRow))
        .eq('id', editingInvoiceId);
      error = retry.error;
    }

  } else {

    const result = await supabaseClient
      .from('invoices')
      .insert([invoiceRowForWrite(invoiceRow)])
      .select('id, archived')
      .single();

    error = result.error;
    savedInvoice = result.data;

    if (error && missingStaffInvoiceColumns(error)) {
      invoiceStaffColumnsAvailable = false;
      const retry = await supabaseClient
        .from('invoices')
        .insert([invoiceRowForWrite(invoiceRow)])
        .select('id, archived')
        .single();
      error = retry.error;
      savedInvoice = retry.data;
    }
  }

  if (error) {
    console.error(error);
    await appNotice('Save Failed', 'The invoice could not be saved.', 'error');
    return;
  }

  if (!wasEditing && savedInvoice) {
    editingInvoiceId = savedInvoice.id;
    editingInvoiceArchived = savedInvoice.archived === true;
  }

  const inventoryTracked = await reconcileInvoiceInventory(editingInvoiceId);
  if (inventoryTracked) inventoryChangesPending = false;
  if (!inventoryTracked) {
    await appNotice('Inventory Warning', 'Invoice saved, but inventory stock was not fully updated. Please check the Inventory tab.', 'error');
  }

  setAutosaveStatus(wasEditing ? 'Saved manually. Autosave still on.' : 'Invoice saved. Autosave is on for this invoice.', 'saved');

  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
  await renderReports();
  
  if (!wasEditing) {
    const settings = appSettings();
    let shouldEmail = Boolean(settings.sendReceivedEmail);

    if (shouldEmail && settings.askReceivedEmail) {
      shouldEmail = await appConfirm(
        'Invoice Saved',
        'Send confirmation email to the customer?',
        'Send Email',
        'Not Now'
      );
    }

    if (shouldEmail) {
      await sendInvoiceEmail('order_received');
    }
  }
}
function newInvoice(){
  form.reset();
  editingInvoiceId = null;
  editingInvoiceArchived = false;
  inventoryChangesPending = false;
  itemCount = 3;
  createRows();
  form.orderDate.value = today();
  form.invoiceNumber.value = invoiceNo();
  form.status.value = 'Received';
  form.discount.value = '0';
  form.tax.value = '0';
  form.payment.value = '0';
  form.discountMode.value = 'dollar';
  form.paymentType.value = '';
  form.voucherId.value = '';
  form.voucherProvider.value = '';
  form.voucherAmount.value = '';
  setLoggedInOrderTaker();
  stockAdjustmentsByInvoice.delete('');
  resetCustomerDropdown();
  renderCustomerHistory(null);
  setAutosaveStatus('Manual save required for new invoices.');
  calculate();
  renderTaxSettings();
  updateVoucherEditControl();
  document.querySelector('[data-view="edit"]')?.click();
}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  if (!canAccessView(btn.dataset.view)) return;
  document.querySelectorAll('.tab,.view').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.view+'View').classList.add('active');
  updateAutosaveVisibility();
  renderPreview();
  renderDatabase();
  renderArchivedDatabase();
  renderDashboard();
  renderReports();
  renderInventory();
  renderDeleteRequests();
}));
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
if (databaseSchoolSelect) {
  databaseSchoolSelect.addEventListener('change', () => {
    databaseSchoolFilter = databaseSchoolSelect.value;
    renderDatabase();
  });
}
if (reportDateFilter) {
  reportDateFilter.addEventListener('change', () => {
    reportDateRange = reportDateFilter.value;
    renderReports();
  });
}
if (reportSchoolSelect) {
  reportSchoolSelect.addEventListener('change', () => {
    reportSchoolFilter = reportSchoolSelect.value;
    renderReports();
  });
}
if (reportLimitSelect) {
  reportLimitSelect.addEventListener('change', () => {
    reportChartLimit = reportLimitSelect.value;
    renderReports();
  });
}
if (reportIncludeArchived) {
  reportIncludeArchived.addEventListener('change', () => {
    reportIncludesArchived = reportIncludeArchived.checked;
    renderReports();
  });
}
if (exportReportBtn) exportReportBtn.addEventListener('click', downloadReportCsv);
if (clearDatabaseFilterBtn) {
  clearDatabaseFilterBtn.addEventListener('click', () => {
    databaseFilter = '';
    databaseSchoolFilter = '';
    if (databaseFilterSelect) databaseFilterSelect.value = '';
    if (databaseSchoolSelect) databaseSchoolSelect.value = '';
    renderDatabase();
  });
}
form.addEventListener('input', e => {
  if (e.target.classList.contains('inventory-picker-search')) return;
  if (e.target.name?.startsWith('description_')) handleInventoryLineSelection(e.target);
  if (e.target.name?.startsWith('amount_')) updateStockWarnings();
  queueFormChange(e.target);
});
form.addEventListener('change', e => {
  if (e.target.name?.startsWith('description_')) handleInventoryLineSelection(e.target);
  if (e.target.name?.startsWith('amount_')) updateStockWarnings();
  queueFormChange(e.target);
});
itemsEditor.addEventListener('click', e => {
  const openButton = e.target.closest('[data-open-inventory-picker]');
  if (openButton) {
    openInventoryPicker(openButton.dataset.openInventoryPicker);
    return;
  }

  const choice = e.target.closest('[data-inventory-choice]');
  if (!choice) return;

  const item = inventoryItems.find(row => String(inventoryKey(row)) === String(choice.dataset.inventoryChoice));
  if (!item) return;
  selectInventoryItem(choice.dataset.inventoryIndex, item);
  closeInventoryPickers();
  queueFormChange(form.elements[`description_${choice.dataset.inventoryIndex}`]);
});
itemsEditor.addEventListener('input', e => {
  if (!e.target.classList.contains('inventory-picker-search')) return;
  renderInventoryPickerResults(e.target.dataset.inventoryPickerSearch, e.target.value);
});
document.addEventListener('click', e => {
  if (!e.target.closest('.inventory-description-field')) closeInventoryPickers();
});
form.phone.addEventListener('input', () => {
  const start = form.phone.selectionStart;
  const beforeLength = form.phone.value.length;
  form.phone.value = formatPhoneNumber(form.phone.value);
  const lengthDelta = form.phone.value.length - beforeLength;
  form.phone.setSelectionRange(Math.max(0, start + lengthDelta), Math.max(0, start + lengthDelta));
});
form.paymentType.addEventListener('change', () => {
  if (form.paymentType.value === 'Voucher') {
    openVoucherModal();
  } else {
    form.voucherId.value = '';
    form.voucherProvider.value = '';
    form.voucherAmount.value = '';
  }
  updateVoucherEditControl();
  queueAutosave();
});
document.getElementById('submitBtn').onclick=submitInvoice;
document.getElementById('printBtn').onclick=()=>{renderPreview();document.querySelector('[data-view="preview"]').click();setTimeout(()=>window.print(),60)};
document.getElementById('printTopBtn').onclick=()=>{renderPreview();document.querySelector('[data-view="preview"]').click();setTimeout(()=>window.print(),60)};
document.getElementById('newInvoiceBtn').onclick=newInvoice;
document.getElementById('addLineBtn').onclick=()=>{const current=formData().items; itemCount++; createRows(current); calculate();};
document.getElementById('voucherCancelBtn').onclick = () => closeVoucherModal();
document.getElementById('voucherSaveBtn').onclick = () => saveVoucherModal();
editVoucherBtn.onclick = () => openVoucherModal();
voucherModal.addEventListener('click', e => {
  if (e.target === voucherModal) closeVoucherModal();
});
document.getElementById('voucherDetailsCloseBtn').onclick = () => closeVoucherDetails();
voucherDetailsModal.addEventListener('click', e => {
  if (e.target === voucherDetailsModal) closeVoucherDetails();
});
if (invoiceDeleteCancelBtn) invoiceDeleteCancelBtn.addEventListener('click', closeInvoiceDeleteModal);
if (invoiceDeleteConfirmBtn) invoiceDeleteConfirmBtn.addEventListener('click', deleteSavedInvoice);
if (invoiceDeleteModal) {
  invoiceDeleteModal.addEventListener('click', e => {
    if (e.target === invoiceDeleteModal) closeInvoiceDeleteModal();
  });
}
if (invoiceDeleteRequestCancelBtn) invoiceDeleteRequestCancelBtn.addEventListener('click', closeInvoiceDeleteRequestModal);
if (invoiceDeleteRequestSubmitBtn) invoiceDeleteRequestSubmitBtn.addEventListener('click', submitInvoiceDeleteRequest);
if (invoiceDeleteRequestModal) {
  invoiceDeleteRequestModal.addEventListener('click', e => {
    if (e.target === invoiceDeleteRequestModal) closeInvoiceDeleteRequestModal();
  });
}
if (refreshDeleteRequestsBtn) refreshDeleteRequestsBtn.addEventListener('click', renderDeleteRequests);
if (deleteRequestsList) {
  deleteRequestsList.addEventListener('click', async e => {
    const approve = e.target.closest('.approve-delete-request-btn');
    const deny = e.target.closest('.deny-delete-request-btn');
    if (approve) {
      await resolveDeleteRequest(approve.dataset.requestId, approve.dataset.invoiceId, true);
    } else if (deny) {
      await resolveDeleteRequest(deny.dataset.requestId, '', false);
    }
  });
}
async function loadReturningCustomerById(id) {
  const rows = await getAllInvoices();
  const selected = rows.find(row => String(row.id) === String(id));

  if (selected) {
    if (customerDropdownBtn) customerDropdownBtn.textContent = customerOptionLabel(selected);
    if (customerSearch) customerSearch.value = '';
    closeCustomerDropdown();
    loadCustomerInfoForNewOrder(selected);
    renderCustomerHistory(selected, rows);
  } else {
    renderCustomerHistory(null, rows);
  }
}

customerSelect.onchange = async () => {
  const option = customerSelect.selectedOptions[0];
  if (option?.dataset.customerId) {
    await loadReturningCustomerById(option.dataset.customerId);
  } else {
    renderCustomerHistory(null);
  }
};
if (customerSearch) {
  customerSearch.addEventListener('input', () => {
    renderReturningCustomerResults(customerSearch.value);
  });
}
if (customerSearchBtn) {
  customerSearchBtn.addEventListener('click', () => {
    renderReturningCustomerResults(customerSearch?.value || '');
  });
}
if (customerDropdownBtn) {
  customerDropdownBtn.addEventListener('click', () => {
    if (customerDropdownMenu?.hidden) openCustomerDropdown();
    else closeCustomerDropdown();
  });
}
if (customerDropdownResults) {
  customerDropdownResults.addEventListener('click', async event => {
    const button = event.target.closest('[data-customer-id]');
    if (!button) return;
    await loadReturningCustomerById(button.dataset.customerId);
  });
}
document.addEventListener('click', event => {
  if (customerDropdown && !customerDropdown.contains(event.target)) {
    closeCustomerDropdown();
  }
});
searchInput.addEventListener('input', renderDatabase);
if (archivedSearchInput) archivedSearchInput.addEventListener('input', renderArchivedDatabase);
if (inventorySearchInput) inventorySearchInput.addEventListener('input', renderInventory);
if (inventoryReorderFilterBtn) {
  inventoryReorderFilterBtn.addEventListener('click', () => {
    inventoryShowReorderOnly = !inventoryShowReorderOnly;
    renderInventory();
  });
}
if (inventoryShowAllBtn) {
  inventoryShowAllBtn.addEventListener('click', () => {
    inventoryShowReorderOnly = false;
    renderInventory();
  });
}
if (addInventoryRowBtn) addInventoryRowBtn.addEventListener('click', openInventoryAddModal);
if (deleteInventoryBtn) deleteInventoryBtn.addEventListener('click', openInventoryDeleteModal);
if (inventoryDeleteConfirmBtn) inventoryDeleteConfirmBtn.addEventListener('click', deleteSelectedInventory);
if (inventoryDeleteCancelBtn) inventoryDeleteCancelBtn.addEventListener('click', closeInventoryDeleteModal);
if (exportInventoryCsvBtn) exportInventoryCsvBtn.addEventListener('click', downloadInventoryCsv);
if (uploadInventoryCsvBtn) uploadInventoryCsvBtn.addEventListener('click', openInventoryCsvModal);
if (inventoryCsvForm) inventoryCsvForm.addEventListener('submit', importInventoryCsv);
if (inventoryCsvCancelBtn) inventoryCsvCancelBtn.addEventListener('click', closeInventoryCsvModal);
if (inventoryDeleteModal) {
  inventoryDeleteModal.addEventListener('click', e => {
    if (e.target === inventoryDeleteModal) closeInventoryDeleteModal();
  });
}
if (inventoryCsvModal) {
  inventoryCsvModal.addEventListener('click', e => {
    if (e.target === inventoryCsvModal) closeInventoryCsvModal();
  });
}
if (inventorySelectAll) {
  inventorySelectAll.addEventListener('change', () => {
    inventoryBody.querySelectorAll('[data-inventory-id]').forEach(row => {
      if (inventorySelectAll.checked) {
        selectedInventoryIds.add(String(row.dataset.inventoryId));
      } else {
        selectedInventoryIds.delete(String(row.dataset.inventoryId));
      }
    });
    renderInventory();
  });
}
if (inventoryAddForm) inventoryAddForm.addEventListener('submit', addInventoryFromForm);
if (inventoryAddCancelBtn) inventoryAddCancelBtn.addEventListener('click', closeInventoryAddModal);
if (inventoryAddModal) {
  inventoryAddModal.addEventListener('click', e => {
    if (e.target === inventoryAddModal) closeInventoryAddModal();
  });
}
if (inventoryBody) {
  inventoryBody.addEventListener('change', e => {
    if (!e.target.classList.contains('inventory-row-select')) return;

    const item = inventoryItemFromEvent(e.target);
    if (!item) return;
    if (e.target.checked) {
      selectedInventoryIds.add(String(item.id));
    } else {
      selectedInventoryIds.delete(String(item.id));
    }
    updateInventorySelection();
  });
  inventoryBody.addEventListener('input', e => {
    const field = e.target.dataset.inventoryField;
    if (!field) return;

    const item = inventoryItemFromEvent(e.target);
    if (!item) return;

    if (field === 'price') {
      item[field] = e.target.value === '' ? '' : Number(e.target.value);
    } else if (field === 'minimum_stock' || field === 'available_stock') {
      item[field] = Number(e.target.value) || 0;
    } else {
      item[field] = e.target.value;
    }

    queueInventorySave(item);
    if (inventoryReorderCount) inventoryReorderCount.textContent = inventoryItems.filter(inventoryNeedsReorder).length;
  });
  inventoryBody.addEventListener('change', e => {
    const field = e.target.dataset.inventoryField;
    if (!field) return;

    const item = inventoryItemFromEvent(e.target);
    if (!item) return;
    item[field] = e.target.value;
    queueInventorySave(item);
    renderInventory();
  });
}
databaseBody.addEventListener('change', async e => {
  if (e.target.classList.contains('status-select')) {
    const id = e.target.dataset.id;
    const newStatus = e.target.value;

    const { error } = await supabaseClient
      .from('invoices')
      .update({
        status: newStatus
      })
      .eq('id', id);

    if (error) {
      console.error(error);
      await appNotice('Status Update Failed', 'Failed to update status.', 'error');
      return;
    }

    const invoice =
      cachedAllInvoices.find(row => String(row.id) === String(id)) ||
      cachedInvoices.find(row => String(row.id) === String(id));

    if (newStatus === 'Completed' && invoice) {
      invoice.status = newStatus;

      const settings = appSettings();
      let shouldNotify = Boolean(settings.sendCompletedEmail);

      if (shouldNotify && settings.askCompletedEmail) {
        shouldNotify = await appConfirm(
          'Order Completed',
          'Notify the customer that this order is complete?',
          'Notify Customer',
          'Not Now'
        );
      }

      if (shouldNotify) {
        await sendInvoiceEmail('order_completed', invoice);
      }
    }

    await renderDatabase();
    await renderArchivedDatabase();
    await renderDashboard();
    await renderReports();
  }
});

databaseBody.addEventListener('input', async e => {

  if (e.target.classList.contains('note-input')) {

    const id = e.target.dataset.id;
    const row = cachedAllInvoices.find(invoice => String(invoice.id) === String(id)) || {};
    const storedNotes = splitStoredNotes(row.notes || '');
    const nextNotes = packStoredNotes(e.target.value, storedNotes.meta || {});

    clearTimeout(noteAutosaveTimers.get(id));
    noteAutosaveTimers.set(id, setTimeout(async () => {
      const { error } = await supabaseClient
        .from('invoices')
        .update({
          notes: nextNotes
        })
        .eq('id', id);

      if (error) {
        console.error(error);
        await appNotice('Notes Update Failed', 'Failed to update notes.', 'error');
        return;
      }

      row.notes = nextNotes;
      noteAutosaveTimers.delete(id);
    }, 600));
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
    await appNotice('Load Failed', 'Failed to load invoice.', 'error');
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
    await appNotice('Update Failed', archived ? 'Failed to archive invoice.' : 'Failed to restore invoice.', 'error');
    return;
  }

  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
  await renderReports();

  if (String(editingInvoiceId) === String(id)) {
    editingInvoiceArchived = archived;
  }
}

function openInvoiceDeleteModal(id){
  if (!isManagerOrAdmin()) {
    openInvoiceDeleteRequestModal(id);
    return;
  }

  const invoice = cachedAllInvoices.find(row => String(row.id) === String(id)) || {};
  pendingInvoiceDeleteId = id;

  if (invoiceDeleteMessage) {
    invoiceDeleteMessage.textContent = `Invoice ${invoice.invoice_number || ''} for ${invoice.parent_name || 'this customer'} will be permanently deleted.`;
  }
  if (invoiceDeleteRestoreInventory) invoiceDeleteRestoreInventory.checked = false;

  if (invoiceDeleteModal) invoiceDeleteModal.hidden = false;
}

function closeInvoiceDeleteModal(){
  pendingInvoiceDeleteId = null;
  if (invoiceDeleteModal) invoiceDeleteModal.hidden = true;
}

function openInvoiceDeleteRequestModal(id){
  const invoice = cachedAllInvoices.find(row => String(row.id) === String(id)) || {};
  pendingInvoiceDeleteRequestId = id;

  if (invoiceDeleteRequestMessage) {
    invoiceDeleteRequestMessage.textContent = `Ask a manager to delete invoice ${invoice.invoice_number || ''} for ${invoice.parent_name || 'this customer'}.`;
  }
  if (invoiceDeleteRequestReason) invoiceDeleteRequestReason.value = '';

  if (invoiceDeleteRequestModal) invoiceDeleteRequestModal.hidden = false;
  setTimeout(() => invoiceDeleteRequestReason?.focus(), 0);
}

function closeInvoiceDeleteRequestModal(){
  pendingInvoiceDeleteRequestId = null;
  if (invoiceDeleteRequestModal) invoiceDeleteRequestModal.hidden = true;
}

async function submitInvoiceDeleteRequest(){
  if (!pendingInvoiceDeleteRequestId || !currentSession?.user) return;

  const invoiceId = pendingInvoiceDeleteRequestId;
  const reason = String(invoiceDeleteRequestReason?.value || '').trim();
  closeInvoiceDeleteRequestModal();

  const { error } = await supabaseClient
    .from('invoice_delete_requests')
    .insert([{
      invoice_id: invoiceId,
      requested_by: currentSession.user.id,
      requested_by_name: currentStaffName(),
      reason,
      status: 'pending'
    }]);

  if (error) {
    console.error(error);
    await appNotice('Request Failed', 'Could not send the delete request. Check the Supabase staff access setup.', 'error');
    return;
  }

  const invoice = cachedAllInvoices.find(row => String(row.id) === String(invoiceId));
  if (invoice) {
    await supabaseClient
      .from('invoices')
      .update({ delete_requested_at: new Date().toISOString() })
      .eq('id', invoiceId);
  }

  await appNotice('Request Sent', 'A manager can now approve or deny this delete request.', 'success');
  await renderDeleteRequests();
}

async function getPendingDeleteRequests(){
  if (!isManagerOrAdmin()) return [];

  const { data, error } = await supabaseClient
    .from('invoice_delete_requests')
    .select('*')
    .eq('status', 'pending')
    .order('created_at', { ascending: true });

  if (error) {
    console.warn('Could not load delete requests.', error);
    return [];
  }

  return data || [];
}

async function renderDeleteRequests(){
  if (!deleteRequestsPanel || !deleteRequestsList) return;
  deleteRequestsPanel.hidden = !isManagerOrAdmin();
  if (!isManagerOrAdmin()) return;

  const requests = await getPendingDeleteRequests();
  const invoiceMap = new Map(cachedAllInvoices.map(row => [String(row.id), row]));

  deleteRequestsList.innerHTML = requests.length
    ? requests.map(request => {
        const invoice = invoiceMap.get(String(request.invoice_id)) || {};
        return `
          <div class="delete-request-row">
            <div>
              <strong>Invoice ${esc(invoice.invoice_number || request.invoice_id)}</strong>
              <p>${esc(invoice.parent_name || 'Unknown customer')} / Requested by ${esc(request.requested_by_name || '')}</p>
              <p>${esc(request.reason || 'No reason provided.')}</p>
            </div>
            <div class="delete-request-actions">
              <button class="ghost deny-delete-request-btn" data-request-id="${esc(request.id)}" type="button">Deny</button>
              <button class="primary approve-delete-request-btn" data-request-id="${esc(request.id)}" data-invoice-id="${esc(request.invoice_id)}" type="button">Approve</button>
            </div>
          </div>
        `;
      }).join('')
    : '<p class="history-empty">No pending delete requests.</p>';
}

async function resolveDeleteRequest(requestId, invoiceId, approved){
  if (!isManagerOrAdmin()) return;

  const now = new Date().toISOString();
  const request = {
    status: approved ? 'approved' : 'denied',
    resolved_by: currentSession?.user?.id || null,
    resolved_by_name: currentStaffName(),
    resolved_at: now
  };

  if (approved) {
    const invoice = cachedAllInvoices.find(row => String(row.id) === String(invoiceId)) || {};
    const deleteReason = `Approved delete request by ${currentStaffName()}`;

    const { error: invoiceError } = await supabaseClient
      .from('invoices')
      .update({
        archived: true,
        deleted_at: now,
        deleted_by: currentSession?.user?.id || null,
        deleted_by_name: currentStaffName(),
        delete_reason: deleteReason
      })
      .eq('id', invoiceId);

    if (invoiceError) {
      console.error(invoiceError);
      await appNotice('Approval Failed', `Could not archive invoice ${invoice.invoice_number || ''}.`, 'error');
      return;
    }
  }

  const { error } = await supabaseClient
    .from('invoice_delete_requests')
    .update(request)
    .eq('id', requestId);

  if (error) {
    console.error(error);
    await appNotice('Request Update Failed', 'The delete request could not be updated.', 'error');
    return;
  }

  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
  await renderReports();
  await renderDeleteRequests();
}

async function restoreInventoryForDeletedInvoice(invoice){
  const storedNotes = splitStoredNotes(invoice.notes || '');
  const adjustments = storedNotes.meta[STOCK_META_KEY] || {};
  const keys = Object.keys(adjustments);
  if (!keys.length) return true;

  let restored = true;

  for (const key of keys) {
    const amount = Number(adjustments[key]) || 0;
    if (!amount) continue;

    const item = inventoryItems.find(row => String(inventoryKey(row)) === String(key));
    if (!item) continue;

    item.available_stock = (Number(item.available_stock) || 0) + amount;
    const saved = await saveInventoryItemImmediate(item);
    if (!saved) restored = false;
  }

  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventoryItems));
  renderInventory();
  refreshInventoryDatalists();
  updateStockWarnings();
  return restored;
}

async function deleteSavedInvoice(){
  if (!pendingInvoiceDeleteId) return;

  const id = pendingInvoiceDeleteId;
  const invoice = cachedAllInvoices.find(row => String(row.id) === String(id));
  closeInvoiceDeleteModal();

  if (!invoice) {
    await appNotice('Delete Failed', 'Could not find this saved order.', 'error');
    return;
  }

  const shouldRestoreInventory = Boolean(invoiceDeleteRestoreInventory?.checked);

  const { error } = await supabaseClient
    .from('invoices')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    await appNotice('Delete Failed', 'Supabase could not delete this saved order. Check delete permissions for the invoices table.', 'error');
    return;
  }

  const inventoryRestored = shouldRestoreInventory
    ? await restoreInventoryForDeletedInvoice(invoice)
    : true;

  cachedAllInvoices = cachedAllInvoices.filter(row => String(row.id) !== String(id));
  cachedInvoices = cachedInvoices.filter(row => String(row.id) !== String(id));
  stockAdjustmentsByInvoice.delete(String(id));

  if (String(editingInvoiceId) === String(id)) {
    newInvoice();
  }

  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
  await renderReports();

  if (shouldRestoreInventory && !inventoryRestored) {
    await appNotice('Order Deleted', 'The order was deleted, but inventory stock was not fully restored. Please check Inventory.', 'error');
  } else if (shouldRestoreInventory) {
    await appNotice('Order Deleted', 'Saved order deleted and inventory stock restored.', 'success');
  } else {
    await appNotice('Order Deleted', 'Saved order deleted. Inventory was left unchanged.', 'success');
  }
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
  updateVoucherEditControl();
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

async function submitAdminLogin(event){
  event.preventDefault();

  const username = String(adminUsername?.value || '').trim();
  const password = adminPassword?.value || '';
  const normalizedUsername = normalizedText(username);
  const loginEmail = normalizedUsername === ADMIN_USERNAME
    ? ADMIN_AUTH_EMAIL
    : STAFF_LOGIN_ACCOUNTS[normalizedUsername];

  if (!loginEmail) {
    setLoginError('Incorrect username or password.');
    return;
  }

  if (adminLoginBtn) adminLoginBtn.disabled = true;
  setLoginError('');

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: loginEmail,
    password
  });

  if (adminLoginBtn) adminLoginBtn.disabled = false;

  if (error || !data.session) {
    console.error(error);
    setLoginError('Incorrect username or password.');
    adminPassword?.focus();
    return;
  }

  if (adminPassword) adminPassword.value = '';
  await handleAuthSession(data.session);
}

async function signOutAdmin(){
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    console.error(error);
    setAutosaveStatus('Log out failed. Try again.', 'error');
    return;
  }

  currentSession = null;
  currentStaffProfile = null;
  appInitialized = false;
  handleAuthSession(null);
}

databaseBody.addEventListener('click', async e => {
  if (e.target.classList.contains('voucher-details-btn')) {
    const row = cachedAllInvoices.find(invoice => String(invoice.id) === String(e.target.dataset.id)) || {};
    showVoucherDetails(row);
    return;
  }

  if (e.target.classList.contains('edit-invoice-btn')) {
    await loadInvoiceForEdit(e.target.dataset.id);
    return;
  }

  if (e.target.classList.contains('archive-invoice-btn')) {
    if (!isManagerOrAdmin()) return;
    await setArchivedStatus(e.target.dataset.id, true);
    return;
  }

  if (e.target.classList.contains('delete-invoice-btn')) {
    openInvoiceDeleteModal(e.target.dataset.id);
    return;
  }

  if (e.target.classList.contains('request-delete-invoice-btn')) {
    openInvoiceDeleteRequestModal(e.target.dataset.id);
  }
});

if (archivedBody) {
  archivedBody.addEventListener('click', async e => {
    if (e.target.classList.contains('voucher-details-btn')) {
      const row = cachedAllInvoices.find(invoice => String(invoice.id) === String(e.target.dataset.id)) || {};
      showVoucherDetails(row);
      return;
    }

    if (e.target.classList.contains('edit-invoice-btn')) {
      await loadInvoiceForEdit(e.target.dataset.id);
      return;
    }

    if (e.target.classList.contains('restore-invoice-btn')) {
      await setArchivedStatus(e.target.dataset.id, false);
      return;
    }

    if (e.target.classList.contains('delete-invoice-btn')) {
      openInvoiceDeleteModal(e.target.dataset.id);
    }
  });
}


async function init(){
  createRows();
  renderInvoiceSettings();
  renderEmployees();
  applyRoleAccess();
  newInvoice();
  await loadInventory();
  await normalizeStoredPhoneNumbers();
  await populateCustomers();
  await renderDatabase();
  await renderArchivedDatabase();
  await renderDashboard();
  await renderReports();
  await renderDeleteRequests();
}

async function handleAuthSession(session){
  currentSession = session;
  currentStaffProfile = session ? await loadStaffProfile(session) : null;

  if (session && !currentStaffProfile) {
    await supabaseClient.auth.signOut();
    currentSession = null;
    currentStaffProfile = null;
    setAuthScreen(null);
    setLoginError('This login is not active for staff access.');
    return;
  }

  setAuthScreen(session);
  applyRoleAccess();

  if (!session || appInitialized) return;

  appInitialized = true;
  await init();
}

if (adminLoginForm) adminLoginForm.addEventListener('submit', submitAdminLogin);
if (logoutBtn) logoutBtn.addEventListener('click', signOutAdmin);
if (employeeForm) employeeForm.addEventListener('submit', addEmployee);
if (taxSettingsForm) {
  taxSettingsForm.addEventListener('submit', event => {
    event.preventDefault();
    const taxRate = Number(taxRateInput.value);
    saveAppSettings({ taxRate: Number.isFinite(taxRate) && taxRate >= 0 ? taxRate : DEFAULT_SETTINGS.taxRate });
    renderInvoiceSettings();
  });
}
[
  [sendReceivedEmailSetting, 'sendReceivedEmail'],
  [askReceivedEmailSetting, 'askReceivedEmail'],
  [sendCompletedEmailSetting, 'sendCompletedEmail'],
  [askCompletedEmailSetting, 'askCompletedEmail']
].forEach(([input, key]) => {
  if (!input) return;
  input.addEventListener('change', () => {
    saveAppSettings({ [key]: input.checked });
    renderEmailSettings();
  });
});
if (paymentTypeForm) {
  paymentTypeForm.addEventListener('submit', event => addListSetting(event, 'paymentTypes', paymentTypeInput));
}
if (orderStatusForm) {
  orderStatusForm.addEventListener('submit', event => addListSetting(event, 'orderStatuses', orderStatusInput));
}
if (paymentTypeList) {
  paymentTypeList.addEventListener('click', event => {
    const button = event.target.closest('.setting-remove-btn');
    if (!button || button.disabled) return;
    removeListSetting(button.dataset.settingKind, button.dataset.settingValue);
  });
}
if (orderStatusList) {
  orderStatusList.addEventListener('click', event => {
    const button = event.target.closest('.setting-remove-btn');
    if (!button || button.disabled) return;
    removeListSetting(button.dataset.settingKind, button.dataset.settingValue);
  });
}
if (employeeList) {
  employeeList.addEventListener('click', event => {
    const button = event.target.closest('.employee-remove-btn');
    if (!button || button.disabled) return;
    removeEmployee(button.dataset.employeeName);
  });
}

supabaseClient.auth.onAuthStateChange((event, session) => {
  setTimeout(() => {
    handleAuthSession(session);
  }, 0);
});

supabaseClient.auth.getSession().then(({ data }) => handleAuthSession(data.session));

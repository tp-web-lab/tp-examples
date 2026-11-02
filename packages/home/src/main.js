import './style.css';

const initialized = new WeakSet();

async function initializeFilters(filters) {
  if (initialized.has(filters)) return;
  initialized.add(filters);
  await Promise.all(['tp-dropdown', 'tp-button'].map(name => customElements.whenDefined(name)));
  if (!filters.isConnected) return;
  const grid = filters.nextElementSibling;
  if (!grid?.matches('tp-grid[data-example-grid]')) return;
  const cards = [...grid.querySelectorAll(':scope > tp-card')];
  const selection = { markup: 'all', category: 'all', type: 'all' };
  const french = filters.dataset.filterLanguage === 'fr';
  const status = filters.querySelector('[data-example-filter-status]');
  const update = () => {
    let count = 0;
    for (const card of cards) {
      const visible = Object.entries(selection).every(([key, value]) =>
        value === 'all' || (card.dataset[key] ?? '').split(/\s+/).includes(value));
      card.hidden = !visible;
      if (visible) count++;
    }
    status.textContent = count
      ? `${count} ${french ? 'exemple' : 'example'}${count > 1 ? 's' : ''}`
      : french ? 'Aucun exemple ne correspond à ces filtres.' : 'No examples match these filters.';
  };
  for (const menu of filters.querySelectorAll('tp-dropdown[data-example-filter]')) {
    const key = menu.dataset.exampleFilter;
    const host = filters.querySelector(`#example-${key}-button`);
    const button = host.querySelector('button');
    const label = host.querySelector('[data-filter-label]');
    const prefix = label.textContent.replace(/: all$/, '');
    const items = [...menu.querySelectorAll('li')];
    for (const item of items) {
      item.dataset.filterValue = item.textContent.trim();
      const check = document.createElement('tp-icon');
      check.setAttribute('name', 'check');
      check.setAttribute('aria-hidden', 'true');
      check.setAttribute('data-filter-check', '');
      item.prepend(check);
    }
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-controls', menu.id);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      menu.toggle();
      if (menu.open) (items.find(item => item.dataset.filterValue === selection[key]) ?? items[0]).focus();
    });
    menu.addEventListener('tp-dropdown-toggle', () => {
      button.setAttribute('aria-expanded', String(menu.open));
      if (!menu.open && menu.contains(document.activeElement)) button.focus();
    });
    const choose = event => {
      const item = event.target.closest('li');
      if (!items.includes(item)) return;
      selection[key] = item.dataset.filterValue;
      label.textContent = `${prefix}: ${selection[key]}`;
      for (const choice of items) {
        if (choice === item) choice.setAttribute('aria-current', 'true');
        else choice.removeAttribute('aria-current');
      }
      update();
      menu.hide();
      button.focus();
    };
    menu.addEventListener('click', choose);
    menu.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        choose(event);
      }
    });
    items[0].setAttribute('aria-current', 'true');
  }
  update();
}

function scan(root) {
  if (!(root instanceof Element)) return;
  if (root.matches('[data-example-filters]')) void initializeFilters(root);
  for (const filters of root.querySelectorAll('[data-example-filters]')) void initializeFilters(filters);
}
// Handle newly rendered documents without rescanning existing plots on every mutation.
new MutationObserver(records => {
  for (const record of records) for (const node of record.addedNodes) scan(node);
}).observe(document.body, { childList: true, subtree: true });
scan(document.body);

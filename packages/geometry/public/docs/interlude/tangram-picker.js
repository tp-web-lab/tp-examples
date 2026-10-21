(() => {
  const script = document.currentScript;
  const picker = script?.closest('[data-tangram-picker]');
  if (!picker || picker.dataset.ready) return;
  picker.dataset.ready = 'true';
  const base = new URL('.', script.src);
  const trigger = picker.querySelector('#tangram-example-trigger');
  const menu = picker.querySelector('#tangram-example-menu');
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    menu.toggleAttribute('open');
    trigger.setAttribute('aria-expanded', String(menu.hasAttribute('open')));
  });
  menu.addEventListener('tp-dropdown-toggle', () => {
    trigger.setAttribute('aria-expanded', String(menu.hasAttribute('open')));
  });
  trigger.setAttribute('aria-haspopup', 'menu');
  trigger.setAttribute('aria-expanded', 'false');
  const select = (event) => {
    if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
    const item = event.target.closest('[data-tangram-example]');
    if (!item || !picker.contains(item)) return;
    const tangram = document.getElementById('tangram');
    if (!tangram) return;
    event.preventDefault();
    event.stopPropagation();
    tangram.setAttribute('src', new URL(`codes/${item.dataset.tangramExample}.txt`, base).href);
    trigger.querySelector('[data-tp-button-content]').textContent = `Figure : ${item.dataset.label}`;
    for (const option of picker.querySelectorAll('[data-tangram-example]')) {
      if (option === item) option.setAttribute('aria-current', 'true');
      else option.removeAttribute('aria-current');
    }
  };
  picker.addEventListener('click', select);
  picker.addEventListener('keydown', select);
})();

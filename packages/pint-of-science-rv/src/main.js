import './style.css';

// Resolve the repository from the entry page, including a Pages subdirectory.
const slides = document.querySelector('tp-asciidoc-multi-slides');
if (slides) slides.setAttribute('repository', new URL('./docs', document.baseURI).pathname);

// Restore the selected mode from the URL; the component owns playback.
const mode = new URL(document.URL).searchParams.get('mode');
if (slides && mode === 'manual') slides.removeAttribute('auto');
else if (slides && (mode === 'notes' || mode === 'timing')) slides.setAttribute('auto', mode);

// Change modes in place so the current slide and fullscreen session are retained.
const modeMenu = document.querySelector('[data-slide-mode-menu]');
let menuBrand = null;
slides?.addEventListener('tp-color-change', syncPresentationControls);
modeMenu?.addEventListener('tp-menu-item-select', (event) => {
  if (event.detail.item.dataset.action === 'toggle-note') {
    const note = slides?.querySelector('tp-slide-note');
    if (note) note.toggleAttribute('open');
    syncPresentationControls();
    return;
  }
  const selected = event.detail.item.dataset.mode;
  if (!slides || !['manual', 'notes', 'timing'].includes(selected)) return;
  if (selected === 'manual') slides.removeAttribute('auto');
  else slides.setAttribute('auto', selected);
  const url = new URL(document.URL);
  url.searchParams.set('mode', selected);
  history.replaceState(null, '', url);
  syncPresentationControls();
});

function syncPresentationControls() {
  const configured = slides?.getAttribute('auto');
  const selected = configured === 'notes' || configured === 'timing' ? configured : 'manual';
  for (const item of modeMenu?.querySelectorAll('[data-mode]') ?? []) {
    if (item.dataset.mode === selected) item.setAttribute('aria-current', 'true');
    else item.removeAttribute('aria-current');
  }
  const note = slides?.querySelector('tp-slide-note');
  const noteItem = modeMenu?.querySelector('[data-action="toggle-note"]');
  if (noteItem) {
    noteItem.setAttribute('aria-expanded', String(note?.hasAttribute('open') ?? false));
    noteItem.setAttribute('aria-disabled', String(!note));
    if (note) {
      if (!note.id) note.id = 'presentation-current-note';
      noteItem.setAttribute('aria-controls', note.id);
    } else noteItem.removeAttribute('aria-controls');
  }
  // Keep the page's native color scope and apply its preset to the external menu.
  const color = slides?.querySelector('tp-color[data-role="brand"]');
  const preset = color?.getAttribute('preset');
  if (modeMenu && preset && preset !== menuBrand) {
    if (menuBrand) modeMenu.classList.remove(menuBrand);
    modeMenu.classList.add(preset);
    menuBrand = preset;
  }
  // The official fullscreen control targets the presentation together with its menu.
  const fullscreen = slides?.querySelector('tp-fullscreen');
  if (fullscreen && fullscreen.getAttribute('anchor') !== '#presentation') {
    fullscreen.setAttribute('anchor', '#presentation');
  }
}
syncPresentationControls();
if (slides) new MutationObserver(syncPresentationControls).observe(slides, {
  attributes: true, attributeFilter: ['auto', 'open'], childList: true, subtree: true,
});

// The Markdown owns the player, image, buttons and video URLs.
// This script only connects those visible elements to the public player API.
export function setupVideoChoices(root) {
  const player = root.querySelector('tp-video-player');
  const menu = root.querySelector('[data-video-menu]');
  const status = root.querySelector('[data-video-status]');
  const introduction = player.getAttribute('src');
  const abort = new AbortController();

  function showChoices() {
    player.pause();
    const fullscreen = document.fullscreenElement;
    if (fullscreen && player.contains(fullscreen)) {
      document.exitFullscreen().catch(() => {});
    }
    player.hidden = true;
    menu.hidden = false;
    status.textContent = 'Choose one of the three previews or a destination below.';
  }

  player.addEventListener('tp-video-player-ended', () => {
    if (player.src === introduction) showChoices();
    else status.textContent = 'Video finished. Choose another destination or return to the choices.';
  }, { signal: abort.signal });

  root.addEventListener('click', event => {
    const button = event.target.closest('tp-button');
    if (!button || !root.contains(button)) return;
    if (button.hasAttribute('data-show-menu')) showChoices();
    if (!button.dataset.videoSrc) return;
    menu.hidden = true;
    player.hidden = false;
    player.src = button.dataset.videoSrc;
    player.label = button.textContent.trim();
    player.seekTo(0);
    status.textContent = player.label;
    player.play().catch(() => { status.textContent = 'Press Play in the video controls to continue.'; });
  }, { signal: abort.signal });

  return () => abort.abort();
}

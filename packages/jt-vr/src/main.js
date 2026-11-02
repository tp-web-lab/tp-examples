import './style.css';
import { setupVideoChoices } from './choices.js';

let disconnectChoices;
document.addEventListener('tp-markdown-single-page-rendered', async event => {
  const root = event.target.querySelector('#jt-vr-example');
  if (!root) return;
  await customElements.whenDefined('tp-video-player');
  if (!root.isConnected) return;
  disconnectChoices?.();
  disconnectChoices = setupVideoChoices(root);
});

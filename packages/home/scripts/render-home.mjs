import { renderDocuments } from '../../../scripts/render-markdown.mjs';

export async function renderHome(root, output, base) {
  return renderDocuments(root, output, base, ['docs/index.md']);
}

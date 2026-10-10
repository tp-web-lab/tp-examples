import { access, readdir } from 'node:fs/promises';
import path from 'node:path';
import { renderDocuments } from '../../../scripts/render-markdown.mjs';

export async function renderHome(root, output, base) {
  const files = ['docs/index.md'];
  for (const entry of await readdir(path.join(output, 'docs'), { withFileTypes: true })) {
    if (!entry.isDirectory() || !/^[a-z]{2,3}(?:-[a-z0-9]+)*$/.test(entry.name)) continue;
    const file = `docs/${entry.name}/index.md`;
    try {
      await access(path.join(output, file));
      files.push(file);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return renderDocuments(root, output, base, files.sort());
}

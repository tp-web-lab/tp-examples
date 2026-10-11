import { execFileSync } from 'node:child_process';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Keep originals for attribution and future edits. Generated WebP files are
// committed, so publication needs no native image tool or conversion step.
const images = fileURLToPath(new URL('../packages/derivatives/public/docs/images/', import.meta.url));
const sources = [
  ['spirometre.png', [480, 768, 1536]],
  ['circuit-electrique-off.jpg', [400, 800]],
  ['circuit-electrique-on.jpg', [400, 800]],
  ['glacon-1.jpg', [400, 709]],
  ['glacon-2.jpg', [400, 709]],
  ['goutte-encre-1.jpg', [255]],
  ['goutte-encre-2.jpg', [255]],
];
for (const [source, widths] of sources) {
  const input = path.join(images, source);
  for (const width of widths) {
    const target = `${path.parse(source).name}-${width}.webp`;
    const output = path.join(images, target);
    execFileSync('cwebp', ['-quiet', '-q', '85', '-m', '6', '-metadata', 'none', '-resize', String(width), '0', input, '-o', output]);
    console.log(`${source} (${(await stat(input)).size} bytes) -> ${target} (${(await stat(output)).size} bytes)`);
  }
}

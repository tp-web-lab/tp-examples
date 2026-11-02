import assert from 'node:assert/strict';
import { copyFile, mkdir, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import test from 'node:test';

for (const name of ['derivatives', 'toeic']) {
  test(`${name} builds with a published runtime without the local AI server`, async () => {
    const fixture = await mkdtemp(join(tmpdir(), 'tp-static-runtime-'));
    try {
      const source = new URL(`../packages/${name}/`, import.meta.url);
      const runtime = join(fixture, 'node_modules/@tp/tp-components');
      await mkdir(join(runtime, 'dist'), { recursive: true });
      await writeFile(join(runtime, 'package.json'), JSON.stringify({ name: '@tp/tp-components', type: 'module' }));
      await writeFile(join(runtime, 'dist/tp-loader.js'), '');
      await writeFile(join(fixture, 'package.json'), '{"type":"module"}');
      for (const dependency of ['vite', 'vite-plugin-static-copy']) {
        await symlink(new URL(`node_modules/${dependency}`, source), join(fixture, 'node_modules', dependency));
      }
      const configPath = join(fixture, 'vite.config.js');
      await copyFile(new URL('vite.config.js', source), configPath);
      const { default: config } = await import(pathToFileURL(configPath).href);
      const result = await config({ command: 'build', mode: 'production', isPreview: false });
      assert.ok(result.plugins.flat().some(plugin => plugin.name.startsWith('vite-plugin-static-copy')));
      assert.ok(!result.plugins.flat().some(plugin => plugin.name.includes('question-ai')));
    } finally {
      await rm(fixture, { recursive: true, force: true });
    }
  });
}

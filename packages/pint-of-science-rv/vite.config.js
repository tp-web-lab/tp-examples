import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ isPreview }) => {
  const runtime = fileURLToPath(new URL('./node_modules/@tp/tp-components/dist/tp-loader.js', import.meta.url));
  if (!isPreview && (!existsSync(runtime))) throw new Error('Build tp-components and run pnpm install first.');
  const port = Number(process.env.PORT ?? 4319);
  const open = process.env.OPEN_BROWSER !== '0';
  return {
    base: './', appType: 'mpa',
    server: { host: '127.0.0.1', port, open },
    preview: { host: '127.0.0.1', port, open },
    build: { rollupOptions: { input: { main: fileURLToPath(new URL('./index.html', import.meta.url)), notes: fileURLToPath(new URL('./notes.html', import.meta.url)) } } },
    plugins: !isPreview ? [viteStaticCopy({ targets: [{
      src: 'node_modules/@tp/tp-components/dist/**/*', dest: '@tp/tp-components', rename: { stripBase: 4 },
    }] })] : [],
  };
});

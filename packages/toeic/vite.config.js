import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const runtime = fileURLToPath(
	new URL("./node_modules/@tp/tp-components/dist/", import.meta.url),
);

export default defineConfig(async ({ command, isPreview }) => {
	// The AI bridge is server-only; published static runtimes do not include it.
	const aiPlugins = command === "serve"
		? [(await import("@tp/tp-components/vite-ai")).questionAiPlugin()]
		: [];
	if (!isPreview && !existsSync(`${runtime}/tp-loader.js`)) {
		throw new Error(
			"Build tp-components and run pnpm install before starting this example.",
		);
	}
	const port = Number(process.env.PORT ?? 4315);
	const open = process.env.OPEN_BROWSER !== "0";
	return {
		// Missing documents must return 404 instead of the application shell.
		appType: "mpa",
		server: { host: "127.0.0.1", port, open },
		preview: { host: "127.0.0.1", port, open },
		plugins: isPreview
			? aiPlugins
			: [
					...aiPlugins,
					viteStaticCopy({
						targets: [
							{
								src: "node_modules/@tp/tp-components/dist/**/*",
								dest: "@tp/tp-components",
								rename: { stripBase: 4 },
							},
						],
					}),
				],
	};
});

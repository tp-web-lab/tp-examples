// Optional macOS regeneration; generated WAV files are bundled for all platforms.
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { tasks } from "./content/tasks.js";
for (const task of tasks.filter((t) => t.audio)) {
	execFileSync("say", [
		"-v",
		task.id === "l-talk" ? "Daniel" : "Samantha",
		"-r",
		"155",
		"--file-format=WAVE",
		"--data-format=LEI16@22050",
		"-o",
		fileURLToPath(
			new URL(`../public/audio/${task.audio}.wav`, import.meta.url),
		),
		task.script,
	]);
}

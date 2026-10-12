import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
	parseGeometry,
	evaluateGeometry,
	serializeGeometry,
} from "../node_modules/@tp/tp-components/dist/components/graph-geometry/geometry.js";
const root = fileURLToPath(new URL("../", import.meta.url));
const docs = path.join(root, "public/docs");
const manifest = JSON.parse(
	fs.readFileSync(path.join(root, "scripts/constructions.json"), "utf8"),
);
const near = (a, b, label) =>
	assert.ok(
		Math.abs(a - b) < 1e-7 * Math.max(1, Math.abs(a), Math.abs(b)),
		`${label}: ${a} != ${b}`,
	);
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
let fixtures = 0,
	properties = 0;
for (const entry of manifest) {
	const page = fs.readFileSync(path.join(docs, entry.key + ".md"), "utf8");
	assert.equal(/src="[^"]+" built-in/.test(page), entry.builtin, entry.key);
	for (const suffix of [".start.txt", ".txt"]) {
		const source = fs.readFileSync(
			path.join(docs, "constructions", entry.key + suffix),
			"utf8",
		);
		const objects = parseGeometry(source);
		const result = evaluateGeometry(objects);
		assert.deepEqual([...result.errors], [], entry.key + suffix);
		assert.deepEqual(
			[...evaluateGeometry(parseGeometry(serializeGeometry(objects))).errors],
			[],
			entry.key + " round trip",
		);
		if (/^(constructions|polygones)\//.test(entry.key)) {
			const forbidden = [
				"midpoint",
				"perpendicularBisector",
				"parallel",
				"perpendicular",
				"bisector",
				"tangent",
				"regularPolygon",
				"transform",
			];
			assert.ok(
				objects.every((o) => !forbidden.includes(o.definition.kind)),
				entry.key + " must use only ruler and compass recipes",
			);
		}
		fixtures++;
		if (suffix !== ".txt") continue;
		// Translate, scale and rotate the free seed points. Dependents must keep their properties.
		for (const variant of [0, 1, 2, 3]) {
			const changed = structuredClone(objects);
			if (variant && variant < 3)
				for (const o of changed) {
					const d = o.definition;
					if (d.kind === "point") {
						const a = variant === 1 ? 0.12 : -0.08;
						const k = variant === 1 ? 1.3 : 0.8;
						const x = d.x,
							y = d.y;
						d.x = 2 + k * (x * Math.cos(a) - y * Math.sin(a));
						d.y = -1 + k * (x * Math.sin(a) + y * Math.cos(a));
					}
				}
			if (variant === 3)
				for (const o of changed) {
					const d = o.definition;
					if (d.kind === "on") d.parameter *= 0.7;
				}
			const r = evaluateGeometry(changed);
			assert.deepEqual([...r.errors], [], entry.key + " transformed");
			const v = (id) => {
				const value = r.values.get(id);
				assert.ok(value, entry.key + ": " + id);
				return value;
			};
			const p = (id) => v(id).point;
			const len = (a, b) => distance(p(a), p(b));
			const area = (id) => {
				const vs = v(id).vertices;
				return (
					Math.abs(
						vs.reduce((s, p, i) => {
							const q = vs[(i + 1) % vs.length];
							return s + p.x * q.y - p.y * q.x;
						}, 0),
					) / 2
				);
			};
			for (const check of entry.checks) {
				if (check.type === "equalLengths")
					near(len(...check.pairs[0]), len(...check.pairs[1]), entry.key);
				if (check.type === "parallel" || check.type === "perpendicular") {
					const [a, b] = check.lines
						.map(v)
						.map((l) => ({
							x: l.second.x - l.first.x,
							y: l.second.y - l.first.y,
						}));
					near(
						check.type === "parallel"
							? a.x * b.y - a.y * b.x
							: a.x * b.x + a.y * b.y,
						0,
						entry.key,
					);
				}
				if (check.type === "angle") {
					const [a, o, b] = check.points.map(p);
					const u = { x: a.x - o.x, y: a.y - o.y },
						w = { x: b.x - o.x, y: b.y - o.y };
					near(
						(Math.atan2(
							Math.abs(u.x * w.y - u.y * w.x),
							u.x * w.x + u.y * w.y,
						) *
							180) /
							Math.PI,
						check.degrees,
						entry.key,
					);
				}
				if (check.type === "polygon") {
					const vs = v(check.id).vertices;
					assert.equal(vs.length, check.sides);
					const ls = vs.map((p, i) => distance(p, vs[(i + 1) % vs.length]));
					if (check.regular) {
						for (const l of ls) near(l, ls[0], entry.key);
						const diagonals = vs.map((p, i) =>
							distance(p, vs[(i + 2) % vs.length]),
						);
						for (const l of diagonals)
							near(l, diagonals[0], entry.key + " diagonals");
					} else {
						assert.ok(
							Math.abs(ls.at(-1) - ls[0]) > 0.001,
							"Heptagon must remain labelled approximate",
						);
						for (const l of ls.slice(0, -1)) near(l, ls[0], entry.key);
					}
				}
				if (check.type === "areas")
					near(
						area(check.whole),
						check.parts.reduce((s, id) => s + area(id), 0),
						entry.key,
					);
				if (check.type === "areaDifference")
					near(
						area("remaining"),
						area("outer") -
							area("leftStrip") -
							area("bottomStrip") +
							area("overlap"),
						entry.key,
					);
				if (check.type === "differenceSquares") {
					near(
						area("outer") - area("removed"),
						area("strip1") + area("moved"),
						entry.key,
					);
					near(area("moved"), area("strip2"), entry.key + " moved piece");
					const rect = v("moved").vertices;
					const shared = v("strip1").vertices;
					assert.ok(rect.some((q) => distance(q, shared[1]) < 1e-7));
					assert.ok(rect.some((q) => distance(q, shared[2]) < 1e-7));
				}
				if (check.type === "thales") {
					near(
						len("O", "M") / len("O", "B"),
						len("O", "N") / len("O", "C"),
						entry.key,
					);
					near(
						len("M", "N") / len("B", "C"),
						len("O", "M") / len("O", "B"),
						entry.key,
					);
				}
				if (check.type === "bisectorTheorem") {
					near(
						len("B", "D") / len("D", "C"),
						len("A", "B") / len("A", "C"),
						entry.key,
					);
					near(
						area("left") / area("rightPart"),
						len("A", "B") / len("A", "C"),
						entry.key,
					);
				}
				properties++;
			}
		}
	}
}
let pages = 0;
function links(dir) {
	for (const file of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, file.name);
		if (file.isDirectory()) {
			links(full);
			continue;
		}
		if (!file.name.endsWith(".md")) continue;
		pages++;
		const source = fs.readFileSync(full, "utf8");
		for (const m of source.matchAll(
			/\]\(([^)#]+)(?:#[^)]*)?\)|src="([^"]+)"/g,
		)) {
			const ref = m[1] ?? m[2];
			if (/^https?:/.test(ref)) continue;
			const target = ref.startsWith("/docs/")
				? path.join(docs, ref.slice(6))
				: path.resolve(path.dirname(full), ref);
			assert.ok(fs.existsSync(target), `${full}: missing ${ref}`);
		}
	}
}
links(docs);
console.log(
	`Validated ${fixtures} constructions, ${properties} geometric invariants and links in ${pages} Markdown pages.`,
);

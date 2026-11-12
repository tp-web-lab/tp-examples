import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";
const root = new URL("../", import.meta.url);
const original = readFileSync(new URL("source/notes1.tex", root), "utf8");
const pages = ["deterministic", "stochastic", "business-cycle", "theory"];
const sections = original
	.slice(original.indexOf("\\section{"))
	.replace(/\\end\{document\}\s*$/, "")
	.split(/(?=\\section\{)/);
assert.equal(sections.length, 4);
const refs = new Map();
let number = 0;
function group(s, i, open = "{", close = "}") {
	while (/\s/.test(s[i] ?? "") && i < s.length) i++;
	if (s[i] !== open) return null;
	let start = ++i,
		depth = 1;
	for (; i < s.length; i++) {
		if (s[i] === "\\") {
			i++;
			continue;
		}
		if (s[i] === open) depth++;
		if (s[i] === close && !--depth)
			return { value: s.slice(start, i), end: i + 1 };
	}
	throw Error("Unclosed group");
}
function expand(s) {
	let out = "";
	for (let i = 0; i < s.length; ) {
		const m = /^\\([a-zA-Z]+)/.exec(s.slice(i));
		if (!m) {
			out += s[i++];
			continue;
		}
		const name = m[1];
		i += m[0].length;
		const simple = {
			a: "\\alpha",
			k: "\\kappa",
			d: "\\delta",
			e: "\\epsilon",
			g: "\\gamma",
			r: "\\rho",
			s: "\\sigma",
			t: "\\theta",
			Nc: "\\mathcal{N}",
			b: "\\beta",
			l: "\\lambda",
			Lc: "\\mathcal{L}",
			argmax: "\\operatorname*{argmax}",
		};
		if (simple[name]) {
			out += simple[name];
			continue;
		}
		if (
			["bc", "bs", "bp", "of", "abs", "od", "pd", "odx", "pdx"].includes(name)
		) {
			const a = group(s, i);
			assert(a, name);
			i = a.end;
			const x = expand(a.value);
			if (name === "bc") out += "\\left\\{" + x + "\\right\\}";
			else if (name === "bs") out += "\\left[" + x + "\\right]";
			else if (name === "bp" || name === "of")
				out += "\\left(" + x + "\\right)";
			else if (name === "abs") out += "\\left\\lvert " + x + "\\right\\rvert";
			else {
				const b = group(s, i);
				assert(b);
				i = b.end;
				const y = expand(b.value);
				out +=
					name === "pd"
						? `\\frac{\\partial ${x}}{\\partial ${y}}`
						: name === "pdx"
							? `\\partial ${x}/\\partial ${y}`
							: name === "od"
								? `\\frac{d ${x}}{d ${y}}`
								: `d ${x}/d ${y}`;
			}
			continue;
		}
		if (name === "ln" || name === "max" || name === "E" || name === "P") {
			out +=
				name === "E" || name === "P" ? "\\mathbb{" + name + "}" : "\\" + name;
			if (name === "max" || name === "E" || name === "P") {
				const a = group(s, i, "[", "]");
				if (a) {
					out += "_{" + expand(a.value) + "}";
					i = a.end;
				}
			}
			const b = group(s, i);
			if (b) {
				out += "\\!\\left(" + expand(b.value) + "\\right)";
				i = b.end;
			}
			continue;
		}
		out += m[0];
	}
	return out;
}

const output = sections.map((text, index) => {
	let sourceNote = "";
	let source = expand(text)
		.replaceAll("\\{", "\\lbrace ")
		.replaceAll("\\}", "\\rbrace ")
		.replaceAll("\\!", "")
		.replaceAll("\\;", " ");
	source = source.replace(
		/\\begin\{(equation\*?|align\*?)\}([\s\S]*?)\\end\{\1\}/g,
		(_, env, body) => {
			const first = number + 1;
			const anchors = [];
			const numbered = !env.endsWith("*");
			const rows = body.split("\\\\").map((row) => {
				const skip = row.includes("\\nonumber");
				row = row.replace(/\\nonumber/g, "");
				const n = numbered && !skip ? ++number : null;
				row = row.replace(/\\label\{([^}]+)\}/g, (_, key) => {
					assert(n, key);
					anchors.push(
						`\\setcounter{tpequation}{${n - 1}}\\refstepcounter{tpequation}\\label{${key}}`,
					);
					refs.set(key, {
						number: n,
						page: pages[index],
						id: "equation-" + first,
					});
					return "";
				});
				return row.trim() + (n ? "\\tag{" + n + "}" : "");
			});
			const math = env.startsWith("align")
				? "\\begin{align*}\n" + rows.join("\\\\\n") + "\n\\end{align*}"
				: rows.join("");
			return (
				(numbered ? "\\wcSpan*[id=equation-" + first + "]{}\n" : "") +
				anchors.join("\n") +
				"\n" +
				"\\[\n" +
				math +
				"\n\\]"
			);
		},
	);
	let subsection = 0;
	let current = String(index + 1);
	source = source.replace(
		/\\(section|subsection)\{([^}]+)\}|\\label\{([^}]+)\}/g,
		(all, kind, title, key) => {
			if (kind) {
				current =
					kind === "section"
						? String(index + 1)
						: `${index + 1}.${++subsection}`;
				return all;
			}
			if (refs.has(key)) return all;
			const id = "ref-" + key.replace(/[^a-zA-Z0-9-]/g, "-");
			refs.set(key, { number: current, page: pages[index], id });
			return all + "\\wcSpan*[id=" + id + "]{}";
		},
	);
	source = source
		.replace("\\begin{definition}", "\\subsubsection*{Definition 1}")
		.replace("\\end{definition}", "");
	source = source.replace(/\\footnote\{([^}]+)\}/g, (_, note) => {
		sourceNote = note;
		return "\\wcTpRef*[href=^principle-of-optimality]{}";
	});
	if (sourceNote)
		source +=
			"\n\\wcTpNote[ref=principle-of-optimality,title=Principle of optimality]{" +
			sourceNote +
			"}\n\\subsection*{Note}\n\\wcTpListof[selector=tp-note]{}\n";
	return source;
});
for (const [index, body] of output.entries()) {
	const content = body.replace(/\\(eqref|ref)\{([^}]+)\}/g, (_, kind, key) => {
		const ref = refs.get(key);
		assert(ref, key);
		if (ref.page === pages[index]) {
			const local = `\\ref{${key}}`;
			return kind === "eqref" ? `(${local})` : local;
		}
		const target =
			(ref.page === pages[index] ? "" : ref.page + ".tex") + "#" + ref.id;
		return (
			"\\href{" +
			target +
			"}{" +
			(kind === "eqref" ? "(" + ref.number + ")" : ref.number) +
			"}"
		);
	});
	const document = `% Adapted from Dynamic Programming by Pascal Michaillat. CC BY 4.0.
% See cover.tex for sources and adaptation details.
\\documentclass{article}
\\usepackage{hyperref}
\\begin{document}
\\newcounter{tpequation}
\\setcounter{section}{${index}}
${content}
\\end{document}
`;
	writeFileSync(
		new URL("public/docs/" + pages[index] + ".tex", root),
		document,
	);
}
console.log(
	`Generated ${pages.length} pages, preserving ${number} numbered equations.`,
);

// Keep the published problem statements, including the apparent rho-bound typo.
const problemsOriginal = readFileSync(new URL("source/ps1.tex", root), "utf8");
let problems = expand(
	problemsOriginal.slice(problemsOriginal.indexOf("\\section*{Problem 1}")),
)
	.replace(/\\end\{document\}\s*$/, "")
	.replaceAll("\\{", "\\lbrace ")
	.replaceAll("\\}", "\\rbrace ")
	.replaceAll("\\!", "")
	.replaceAll("\\;", " ")
	.replace(
		/\\begin\{(equation\*|align\*)\}([\s\S]*?)\\end\{\1\}/g,
		(_, env, body) =>
			"\\[\n" +
			(env === "align*" ? "\\begin{aligned}" + body + "\\end{aligned}" : body) +
			"\n\\]",
	)
	.replaceAll("\\section*{Problem", "\\subsection*{Problem");
// The print stylesheet labels questions A–G; retain this and the E–F continuation.
problems = problems
	.replace(
		/\\begin\{enumerate\}(\\setcounter\{enumi\}\{4\})?/g,
		(_, continuation) =>
			continuation ? "\\wcOl[type=A,start=5]{" : "\\wcOl[type=A]{",
	)
	.replaceAll("\\end{enumerate}", "}");
// Each exercise list is flat in this source; wrap its items in native list elements.
problems = problems.replace(
	/\\wcOl\[([^\]]+)\]\{([\s\S]*?)\n\}/g,
	(_, attrs, body) =>
		"\\wcOl[" +
		attrs +
		"]{\n" +
		body
			.split(/\\item\s*/)
			.slice(1)
			.map((item) => "\\wcLi{" + item.trim() + "}\n")
			.join("") +
		"}",
);
writeFileSync(
	new URL("public/docs/ps1.tex", root),
	String.raw`% Pascal Michaillat, Problem Set on Dynamic Programming. CC BY 4.0.
% Adapted for tp-latex; see cover.tex and the editorial note below.
\documentclass{article}
\usepackage{hyperref}
\begin{document}
\section*{Problem Set on Dynamic Programming}
Pascal Michaillat. \href{https://github.com/pmichaillat/math-for-macro/blob/main/ps1.tex}{Original LaTeX source}.

` +
		problems +
		String.raw`
\subsection*{Editorial note}
The source writes the bound on the transition probability in Problem 2 as $0.5<\rho 1$. This apparent typographical error is retained here; the expected upper-bound condition is $\rho<1$. The original question labels and their continuation from D to E in Problem 3 are preserved. Suggested solutions prepared for this adaptation are available on a separate page. They are not an official answer key by the original author.
\href{solutions.tex}{Read the suggested solutions}
\end{document}
`,
);
console.log(
	"Generated ps1.tex with all three problems and their 17 questions.",
);

// Keep the independently authored answer key separate from the original exercises.
writeFileSync(
	new URL("public/docs/solutions.tex", root),
	readFileSync(new URL("source/solutions.tex", root), "utf8"),
);

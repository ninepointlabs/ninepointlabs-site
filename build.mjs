#!/usr/bin/env node
// Stamps the shared header/footer into every page in src/pages/ and
// writes plain HTML to the repo root. Run: node build.mjs
// GitHub Pages serves the committed output; this script is only for
// keeping nine copies of the nav from drifting apart.

import fs from "node:fs";
import path from "node:path";

const root = path.dirname(new URL(import.meta.url).pathname);
const pagesDir = path.join(root, "src", "pages");
const header = fs.readFileSync(path.join(root, "src", "header.html"), "utf8");
const footer = fs.readFileSync(path.join(root, "src", "footer.html"), "utf8");

const NAV = [
  ["index.html", "Home"],
  ["work.html", "Work"],
  ["how-i-build.html", "How I build"],
  ["services.html", "Services"],
  ["recommends.html", "Recommends"],
  ["about.html", "About"],
];

function render(file) {
  const src = fs.readFileSync(path.join(pagesDir, file), "utf8");
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing front matter`);
  const meta = Object.fromEntries(
    m[1].split("\n").map((l) => {
      const i = l.indexOf(":");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
  );
  const depth = file.split("/").length - 1;
  const base = depth ? "../".repeat(depth) : "";
  const nav = NAV.map(([href, label]) => `<li><a href="${base}${href}" data-page="${href}">${label}</a></li>`).join("\n            ");
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="https://ninepointlabs.com/${file === "index.html" ? "" : file}" />
    <link rel="icon" href="${base}assets/npl-mark-ninepoint.svg" type="image/svg+xml" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ninepointlabs.com/${file === "index.html" ? "" : file}" />
    <meta property="og:image" content="https://ninepointlabs.com/assets/Lightt_npl_logo.png" />
    <meta name="theme-color" content="#0f6b6e" />
    <link rel="stylesheet" href="${base}css/styles.css" />
    <script src="${base}js/main.js" defer></script>
  </head>
  <body>
${header.replaceAll("{{base}}", base).replace("{{nav}}", nav)}
${m[2].trim()}
${footer.replaceAll("{{base}}", base)}
  </body>
</html>
`;
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
  fs.writeFileSync(path.join(root, file), html);
  return file;
}

function walk(dir, prefix = "") {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name), prefix + d.name + "/") : prefix + d.name
  );
}

const out = walk(pagesDir).filter((f) => f.endsWith(".html")).map(render);
console.log(`built ${out.length} pages: ${out.join(", ")}`);

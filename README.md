# Nine Point Labs

Static website for [ninepointlabs.com](https://ninepointlabs.com), served by GitHub Pages.

There is no framework, package install, or production build step. GitHub Pages serves the committed HTML files at the repository root. The small local build script only stamps the shared header and footer around each page so navigation does not drift between files.

## Edit

Page content lives in `src/pages/`. Shared markup lives in `src/header.html` and `src/footer.html`. Styling and behavior are in `css/styles.css` and `js/main.js`.

After an edit:

```bash
node build.mjs
python -m http.server 8765
```

Then open <http://127.0.0.1:8765>.

Commit both the source files and the generated root HTML. `CNAME` must remain `ninepointlabs.com`.

Old page URLs (`omarchy.html`, `partners.html`, `education.html`, and the former `services/` pages) are retained as static redirects so existing links do not break.

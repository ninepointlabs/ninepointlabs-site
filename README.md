# Nine Point Labs

Static landing page for [ninepointlabs.com](https://ninepointlabs.com), served by GitHub Pages.

One hand-written page, `index.html`, linking to every Nine Point Labs blog, product and project site. Styles are in `css/styles.css`. There is no framework, package install, or build step.

To preview:

```bash
python -m http.server 8765
```

Then open <http://127.0.0.1:8765>.

`CNAME` must remain `ninepointlabs.com`.

Old page URLs (`work.html`, `services.html`, `about.html`, the `services/` pages and the rest) are kept as static redirects to the home page so existing links do not break.

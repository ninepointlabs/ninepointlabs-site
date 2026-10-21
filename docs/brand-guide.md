# Nine Point Labs brand guide

What the brand looks and sounds like today, taken from this repo (`css/styles.css`, `assets/`, `index.html`) and from the live properties. Values marked **Current** were checked against this repo. Values marked **Recommended / target** are not current practice anywhere yet. Facts about the blog, the Omarchy hub and the Shopify store come from a read-only audit (2026-10-16) and can't be checked from this repo; they're marked **Observed elsewhere**.

## 1. Identity

- **Name:** "Nine Point Labs", three words. Use `ninepointlabs` only in handles, domains and repo names.
  - Current exceptions: the footer of this site links "The Word from Ninepoint Labs" (the blog's own title); the GitHub repo description says "Ninepointlabs website and project launcher". The blog masthead also uses "Ninepoint Labs" (observed elsewhere).
  - **Recommended / target:** "Nine Point Labs" everywhere, including the blog title.
- **Positioning (current home page H1):** "Small, useful software for Linux, and for people who like to write."
- **Place and founder:** Whitehouse, Texas. Tim Apple.
- **Product names:** lowercase for CLIs and small tools (omaforge, omasync, fm-cli, autonomix-cli, folderblog); capitalised for apps and services (Repokase, Jubako, Rune, Speakeasy, Persistwise). "Bahá’í Reader" keeps the accents and the curly apostrophe.

## 2. Logo: the nine-line 9

### What it means
The mark is a blocky **9 built from nine short horizontal lines**.

In the Army, a nine-line is a short report with nine items. You fill it in, send it, and help is on the way. It has no fluff and nothing extra, and it works when it counts. Tim carried that idea from the infantry into building software. Nine Point Labs makes small, clear tools for Linux and the open web that do their job and stay out of your way.

The nine lines are the nine items. Together they make the 9 in the name. (And "Labs" is a small nod to Bell Labs and Plan 9.)

Keep it light. The mark is about a clear, disciplined format. It isn't a military emblem. Never pair it with stars, crosses, medical symbols, insignia or anything that suggests official endorsement.

### Construction
- Unit grid: one unit **u** = 8 at master size. Lines are 2u tall with 1u gaps. The mark is 18u wide and 26u tall (144 × 208), and each stem is 5u wide. Corners are rounded at 0.375u, or left square below u = 4.
- Rows from top to bottom: full bar, then three split rows (left and right stems), then a full bar, then three right-stem rows, then a full bar. That makes nine lines.
- **Small mark, 16 px:** 5 lines (bar, posts, bar, post, bar). The posts are 3 px tall so the bowl still reads as a 9.
- **Small mark, 24 px:** 7 lines (bar, 2 split rows, bar, 2 right-stem rows, bar).
- The 32 px favicon uses the full 9-line mark at u = 1, which lands on exact pixels.

### Colour
| Use | Mark | Wordmark |
|---|---|---|
| On light (paper `#faf6ef` or white) | gradient `#0a536a` → `#2aa4cf` | dark `#0c0e11` |
| On dark (`#0c0e11`) | gradient `#2aa4cf` → `#4cc3e0` | paper `#faf6ef` |
| Blog / paper style | teal `#0f6b6e`, or gradient `#0a536a` → `#0f6b6e` | dark `#0c0e11`, tagline teal |
| One colour (tray, dock, print, emboss) | `currentColor`: any single brand colour, black or white | same colour |

The gradient runs diagonally across the whole mark, from top left to bottom right. It's never applied per line.

### Type
- Wordmark: **Inter Bold**, tracking −0.02em. It's shipped as outlined paths in the lockup SVGs, so no font is needed.
- Tagline and labels: **JetBrains Mono** Medium. The tagline is "small, clear tools for Linux", always in lower case except for "Linux".

### Lockups
- **Horizontal** (default): the mark on the left, with "Nine Point Labs" vertically centred on it. The gap is 7u, and the cap height is about 39% of the mark's height.
- **Stacked:** the mark centred above the wordmark, with a 6u gap. Use it for square spaces, the Shopify square and social avatars with room.
- **Mark only:** favicons, app icons and avatars.

### Clear space and minimum size
- **Clear space:** keep one stem width (5u, about 19% of the mark's height) clear on every side. The lockup SVGs already include it.
- **Full 9-line mark:** at least 26 px tall on screen and 8 mm in print.
- **16–24 px:** switch to the small 5- or 7-line mark, never a shrunken master.
- **Horizontal lockup:** at least 140 px wide. **Stacked lockup:** at least 96 px wide.

### Don'ts
- Don't add stars, crosses, medical or military symbols, insignia, flags or badges.
- Don't change the number of lines on the full mark, which is always nine.
- Don't rotate, skew, outline, add drop shadows, or put a gradient on each line.
- Don't recolour outside the palette, or set the wordmark in another font.
- Don't put the gradient mark on busy photos. Use the one-colour glyph instead.

### Secondary pattern
The 3×3 grid of dots (`pattern/npl-grid-tile-*.svg`, a 96 px tile) is a quiet background texture only: teal at about 18% on paper, or accent at about 12% on dark. It never replaces the logo. On its own, a plain 3×3 grid looks like the "show apps" launcher icon.

### Files

**In this repo (ninepointlabs.com):** `assets/npl-mark.svg` (header in light mode), `assets/npl-mark-on-dark.svg` (header in dark mode); at the site root `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-192.png`, `icon-maskable-512.png`, `site.webmanifest` and `og-default.png` (share image). The hero mark is drawn inline in `index.html` (class `.hero-mark`), static, at low opacity.

**Full source set** (kept with the designer's rebrand files, `final/`, not in this repo):
- `mark/`: `npl-mark.svg` (master, on light), `npl-mark-on-dark.svg`, `npl-mark-small-16*.svg`, `npl-mark-small-24*.svg`, plus PNGs
- `glyph/`: `npl-glyph.svg` (currentColor master), `npl-glyph-16.svg`, `npl-glyph-24.svg`, `nine-point-labs-symbolic.svg` (16 px, GNOME `#2e3436` convention)
- `lockup/`: horizontal and stacked, each in dark-on-light and light-on-dark, as SVG, PNG and @2x PNG (transparent background)
- `icons/`: `favicon.svg`, `favicon.ico` (16/32/48), `favicon-16/32/48.png`, `apple-touch-icon.png` (180), `icon-192/512.png`, `icon-maskable-192/512.png`, `app-icon-256/512.png` (rounded square) and `site.webmanifest`
- `social/`: `og-default.png` (main site, dark) and `og-blog.png` (paper/teal), both 1200×630
- `shopify/`: `shopify-logo.png` (1200 wide, on light), `shopify-logo-on-dark.png` and `shopify-logo-square.png` (1024)
- `pattern/`: the 3×3 grid tiles and previews
- `logo-sheet.png`: the one-page overview
- `build.py` and `sheet.py` rebuild everything (`/workspace/.venvs/rebrand/bin/python build.py && … sheet.py`)

#### HTML head snippet
```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:image" content="https://ninepointlabs.com/og-default.png">
<meta property="og:image:alt" content="Nine Point Labs: small, clear tools for Linux">
```

## 3. Colour

### Brand blues

| Role | Hex | Where (current) |
|---|---|---|
| Brand blue, deep | `#0a536a` | Mark gradient on light, light-mode headline gradient |
| Brand blue, dark | `#0b5f7b` | Older artwork only |
| Brand blue, mid | `#1f98c3` | Light-mode headline gradient |
| Brand blue, bright | `#2aa4cf` | Mark gradient (both schemes), hero mark, dark-mode headline gradient |
| Headline highlight, dark | `#2aa4cf → #8fe0ef` | `h1 .hl`, 100° |
| Headline highlight, light | `#0a536a → #1f98c3` | `h1 .hl`, 100° |

### Site tokens (`:root` in `css/styles.css`)

Dark is the default; light comes from `prefers-color-scheme: light`.

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0c0e11` | `#f6f2ea` (warm paper) |
| `--ink` | `#ece8e1` | `#1b1f23` |
| `--ink-soft` | `#9ba1a8` | `#545b62` |
| `--ink-faint` | `#646b73` | `#8a8f94` |
| `--line` | `#20252b` | `#e2d9c8` |
| `--surface` | `#13161a` | `#fffdf8` |
| `--surface-2` | `#181c21` | `#f1ebdf` |
| `--accent` | `#4cc3e0` | `#0b6e8a` |
| `--focus` | `#f3bd55` | `#8a5b00` |

- `theme-color` meta: `#0c0e11`.
- The body has a soft radial glow at the top right: `--accent` at 14%.
- A few colours are hard-coded rather than tokens: the screenshot backdrop `#111`, the Rune art panel `#0d0b0a` / `#e9e1d2`, the terminal art `#0b0d0f` / `#d6dde3`, and the terminal art's small label `#6c757d`.

### Project colours (`--c` on each card)

| Project | `--c` |
|---|---|
| Repokase | `#f38d70` |
| Jubako | `#e2b65e` |
| Rune | `#d98f4e` |
| omaforge | `#7aa2f7` |
| Bahá’í Reader | `#d9ae5b` |
| Speakeasy | `#e0574f` |
| omasync | `#f5a524` |
| fm-cli | `#1fd1b0` |
| autonomix-cli | `#8fd16a` |
| folderblog | `#c8392b` |
| Persistwise | `#9fb4c7` |

They drive card hover borders and glows, the meta numeral, the "go" link and the drawn art panels. In light mode, text uses are darkened with `color-mix(in srgb, var(--c) 62%, #1b1f23)`. These are product colours, not brand colours: keep them inside their own card.

### Contrast (WCAG 2 ratios, computed from the hex values above)

| Pair | Ratio | Small text (4.5:1) |
|---|---|---|
| `--ink-soft` on `--bg`, dark | 7.42 | Pass |
| `--ink-soft` on `--bg`, light | 6.17 | Pass |
| `--accent` on `--bg`, dark | 9.38 | Pass |
| `--accent` on `--bg`, light | 5.21 | Pass |
| `--ink-faint` on `--bg`, dark | 3.58 | **Fail** |
| `--ink-faint` on `--surface`, dark | 3.36 | **Fail** |
| `--ink-faint` on `--bg`, light | 2.92 | **Fail** |
| `--ink-faint` on `--surface`, light | 3.21 | **Fail** |
| folderblog `#c8392b` on `--surface`, dark | 3.52 | **Fail** |
| Speakeasy `#e0574f` on `--surface`, dark | 4.88 | Pass |
| `#6c757d` on terminal art `#0b0d0f` | 4.15 | **Fail** |

`--ink-faint` is used for small text in six places: the hero index numerals, band descriptions (0.85rem), card meta labels (0.75rem), the Persistwise art label, footer headings (0.75rem) and the sign-off line (0.75rem).

In light mode, several darkened project colours also fall just under 4.5:1 on `--surface` (Jubako 3.88, autonomix-cli 3.79, fm-cli 4.02, Bahá’í Reader 4.15, omasync 4.16, Persistwise 4.26).

**Recommended / target:** every small-text pair at 4.5:1 or better, in both schemes.

## 4. Typography

**Current (ninepointlabs.com)**

| Stack | Value |
|---|---|
| `--sans` | `"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--mono` | `"JetBrainsMono Nerd Font", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace` |
| `--serif` | `"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif` |

There is no `@font-face`: Inter and JetBrains Mono render only if they're installed on the visitor's machine. Everyone else gets Segoe UI or the system font.

| Element | Setting |
|---|---|
| Body | 1rem / 1.55, `--sans` |
| H1 | `clamp(2.5rem, 6.6vw, 5.6rem)`, weight 750, line-height 1.02, letter-spacing −0.045em, max 17ch, balanced wrap |
| Band H2 | `clamp(1.5rem, 2.6vw, 2rem)`, weight 700, letter-spacing −0.03em |
| Card H3 | `clamp(1.5rem, 2.4vw, 1.9rem)`, weight 700, line-height 1.1, letter-spacing −0.035em |
| Lede | `clamp(1.05rem, 1.6vw, 1.25rem)`, `--ink-soft`, max 38rem |
| Tagline | `--serif`, italic, 1.1rem |
| Eyebrow | `--mono`, 0.78rem, uppercase, letter-spacing 0.12em, `--accent` |
| Nav | `--mono`, 0.82rem |
| Card meta | `--mono`, 0.75rem, uppercase, letter-spacing 0.06em |

Mono is used for the nav, eyebrow, index, meta labels and "go" links. The serif is used only for italic taglines and the small-caps line on the Rune art.

**Observed elsewhere:** the blog uses a system stack (Segoe UI first) at 1.0625rem / 1.65 with a 40rem measure and no Inter or serif. The Omarchy hub loads JetBrains Mono from Google Fonts. The Shopify theme uses Inter.

**Recommended / target:** Inter and JetBrains Mono on every property, self-hosted as WOFF2 subsets. Keep the serif for taglines only.

## 5. Layout and components (ninepointlabs.com)

- **Container:** `width: min(78rem, 100% - 2.5rem)`, centred.
- **Grid:** 12 columns, 1.25rem gaps. Cards span 5, 7 or 12 columns. Breakpoints at 60rem (everything goes full width; wide cards stack) and 36rem.
- **Spacing:** there are no spacing tokens. Common values are 1rem, 1.25rem and 1.5rem. Section padding is fluid: the hero uses `clamp(3rem, 9vw, 7.5rem)` on top and bands use `clamp(2.5rem, 5vw, 4rem)`.
- **Cards:** radius 1.25rem (`--radius`), 1px `--line` border, `--surface` background. On hover or focus they lift 3px and pick up a border, shadow and glow in their project colour.
- **Screenshots:** WebP in `assets/projects/`, set inside a framed panel with a `#111` backdrop and an inner radius of 0.75rem. Aspect ratios vary by project (1200×675, 1200×720, 1200×773, 1200×750, 1200×290, 994×831, 850×530, 476×764). Every image has explicit `width` and `height`.
- **Drawn art:** projects without a screenshot get a drawn panel instead (the Rune glyph, the autonomix-cli terminal, the Persistwise archive list).
- **Hero:** eyebrow, then the H1 with gradient-highlighted keywords ("Linux", "write"), then the lede, then a numbered mono index (01–11 today) that links to each card.
- **Focus:** a 3px solid `--focus` outline with a 3px offset (4px on cards).
- **Motion:** respects `prefers-reduced-motion` (stops card transitions; the hero mark is static).
- **Observed elsewhere:** the blog is a single narrow column with a topics sidebar, white cards, 1px rules and inline code on a surface background.

## 6. Tone of voice

Taken from live copy on the home page and the blog.

- Plain, warm and a little wry. First person ("I've been building…"). Short declarative sentences. Concrete verbs, no hype. For example: "Save a Markdown file into a folder and it’s live seconds later. No front matter, no build step, no deploy command."
- Taglines are short and often idiomatic: "Your repos, chef’s choice." · "The back room for your AI agents." · "A folder is a blog." · "Writing that outlasts the platform." · "A simple database for your own computer."
- Pattern: what it is, who it's for, then what you *don't* have to do. Familiar comparisons help: "Like the old Microsoft Access, without the hard parts."
- Blog openers are second-person hooks ("You know the feeling…"), with occasional humour (observed elsewhere).
- Audience: Linux and Omarchy users, terminal people, writers and bloggers, and the World of Warcraft community.

## 7. Do and don't

**Do**

- Use the brand blue gradient on the dark background (`#0c0e11`) or on warm paper (`#f6f2ea`).
- Keep one accent per surface: brand blue for the site, a project's colour only inside its card.
- Lead with the benefit in one sentence. Mention open source and Omarchy-native where true.
- Keep focus rings visible (amber `#f3bd55` dark, `#8a5b00` light) and honour `prefers-color-scheme` and `prefers-reduced-motion`.
- Write alt text that describes what the screenshot shows (the site already does this well).

**Don't**

- Don't use `Lightt_npl_logo.png` in new work.
- Don't use the current `--ink-faint` for small text until it reaches 4.5:1.
- Don't mix "Ninepoint" and "Nine Point".
- Don't hard-code project counts ("Eleven things") in copy or meta unless something keeps them up to date.
- Don't use product colours as brand colours.

## 8. Shopify store

**Observed elsewhere** (read-only, password page only): the shop name is "Nine Point Labs" and the storefront is password-protected ("Opening soon"). The page `<title>` is blank, `og:title` and `og:description` are both just "Nine Point Labs", and `theme-color` is empty. It uses the stock theme palette (white background, black text, `#DFDFDF` borders) and Inter, with no star mark found. The store's contact address is tim@ninepointlabs.com; this site uses hello@ninepointlabs.com.

**Recommended / target:** apply the §3 tokens, upload the SVG-derived mark, set Inter, add a description and `theme-color` `#0c0e11`, and use one contact address.

## 9. Open questions

1. ~~Is the star in the PNG logo an older mark? Should it be retired?~~ Resolved Oct 2026: the star is retired; see §2.
2. Should the blog adopt the site's blue and dark default, or keep teal (`#0f6b6e`, observed elsewhere) as a separate "writing" look?
3. Which contact address is canonical, hello@ or tim@?
4. Will the Shopify store launch, and under what name and domain?

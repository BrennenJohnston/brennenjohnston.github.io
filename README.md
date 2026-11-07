# DIY Assistive Technology created by Brennen

A free, accessible static website showcasing open-source 3D-printed assistive technology by Brennen Johnston, lead of WATAP's 3D Printed Assistive Technology Program. The site presents ready-to-print devices, works in progress seeking collaboration, and completed custom builds, plus a curated hub of assistive technology maker resources.

Built with [Jekyll](https://jekyllrb.com/) and hosted for free on GitHub Pages. There is no JavaScript, no build pipeline to maintain, and no framework: adding a project is just adding one Markdown file.

## Adding or editing projects

See **[HOW-TO-ADD-A-PROJECT.md](HOW-TO-ADD-A-PROJECT.md)**, a step-by-step guide that uses only the github.com web editor in your browser.

## How this site is built

The look of this site is a collage of pieces other people made and shared under licenses that allow reuse. I chose the pieces and set their colors, sizes and names; the design itself was not written from scratch. The page is light sky glass with a thin dark edge and a white line inside it, the way Windows 7 drew its windows, so the leaves and bubbles of the photograph show through the frame, the title banner and the glossy nav buttons. Every paragraph sits on a deep blue reading pane inside its window, and the titles and buttons on the glass carry a dark glow behind their letters, which is what keeps them readable over the photograph. The home page shows the latest projects as tiles, the smaller boxes in rows, and the categories as round glossy bubbles.

| Piece | By | License |
| --- | --- | --- |
| The glass windows, [7.css](https://khang-nd.github.io/7.css/) | Khang Nguyen Duy | MIT License |
| The box layout, [Cyanobacteria](https://ribo.zone/free/layouts/) | ribo.zone | ribo.zone's terms of use |
| The page templates, [Minima](https://github.com/jekyll/minima) | Parker Moore and the minima contributors | MIT License |
| The typeface, [M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c) | Coji Morishita and the M+ Fonts Project | SIL Open Font License 1.1 |
| The icons, [Nuvola](http://web.archive.org/web/20090831103737/http://www.icon-king.com/projects/nuvola/) | David Vignoni | GNU LGPL 2.1 |
| The bubble wallpaper, [Bubble Rain](https://www.flickr.com/photos/44124348109@N01/10525957/), edited for brightness and color | Steve Jurvetson | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| The feed link, [jekyll-feed](https://github.com/jekyll/jekyll-feed) | Ben Balter and jekyll-feed contributors | MIT License |
| The skip link and the hidden heading, [a11y-boilerplate](https://github.com/jbmoelker/a11y-boilerplate) | Jasper Moelker | MIT License |
| The two KEMi symposium photographs on the collaborations page | Kren Engineering-based Medicine Initiative (KEMi), University of Washington | used with KEMi's permission |

The project photographs are my own; the two symposium photographs on the collaborations page are KEMi's. The footer of every page names each author, and the Credits page (`credits.md`, published at /credits/) lists every piece with its license.

- **The untouched copies.** Every borrowed file is kept exactly as it was downloaded, with its license, in `vendor/pristine/`, which is left out of the published site. `vendor/pristine/PROVENANCE.md` records each piece's source, author, license, the date it was fetched, its SHA-256 hash, and where its adapted copy lives.
- **The adapted copies.** The site itself uses copies: the stylesheets in `assets/css/borrowed/` and `assets/css/fonts.css`, and Minima's templates in `_layouts/` and `_includes/`. Each borrowed stylesheet begins with a comment that lists every change from the original, and PROVENANCE.md lists the changes to the templates.
- **The rule for code.** Pieces are copied, and only their values, names and paths change. A line that had to be newly written is in the ledger below, and I approved each one before it went in.

| Line | What it does | Where |
| --- | --- | --- |
| L1 | Tells screen readers which nav link is the current page | `_includes/header.html` |
| L4 | Links the projects feed from each page's head | `_includes/head.html` |
| L9 | The breadcrumb on project and category pages | `_layouts/project.html`, `_includes/category-page.html` |
| L10 | Forwards the four old addresses to their new pages | `_includes/head.html`, `_layouts/redirect.html` |
| L11 | Names the site nav "Main" | `_includes/header.html` |
| L12 | Sets the home page's boxes side by side | `assets/css/borrowed/cyanobacteria.css` |
| L13 | Makes list links, card titles and the site title at least 44 px tall | `assets/css/borrowed/cyanobacteria.css` |
| L14 | Lets a long word break in the main column, so no page scrolls sideways at 320 px | `assets/css/borrowed/cyanobacteria.css` |
| L15 | Sets the text outside the glass windows to 17 px at weight 500 | `assets/css/borrowed/cyanobacteria.css` |
| L16 | Gives three links that stand alone in a paragraph Minima's `post-link` class | `_layouts/project.html`, `_includes/category-page.html`, `_includes/footer.html`, `_includes/home-sidebar.html` |
| L17 | Keeps a wrapped list link's bullet beside its first line | `assets/css/borrowed/cyanobacteria.css` |
| L18 | Keeps each photo's shape now that it carries its width and height | `assets/css/borrowed/cyanobacteria.css` |
| L19 | The look's settings: the sky glass, the frame, the boxes, the pills, the panes, the two-tone edge, the lift, the gloss and the glows | `assets/css/borrowed/cyanobacteria.css` |
| L20 | Puts the glow behind the words on the glass and the lift and gloss on the frame, the banner, the nav and the boxes | `assets/css/borrowed/cyanobacteria.css` |
| L21 | The title banner | `assets/css/borrowed/cyanobacteria.css` |
| L22 | The glossy nav buttons with their icons at the left | `assets/css/borrowed/cyanobacteria.css` |
| L23 | Makes the window titles bold and at least 19 px, so they count as large text | `assets/css/borrowed/cyanobacteria.css` |
| L24 | The reading panes under the footer's words and the breadcrumb, and no glass inside a pane | `assets/css/borrowed/cyanobacteria.css` |
| L25 | The denser glow on titles, and no glow on a pane or in the code box | `assets/css/borrowed/cyanobacteria.css` |
| L26 | The banner heading over the project tiles | `assets/css/borrowed/cyanobacteria.css` |
| L27 | Makes every piece of glass solid when the reader asks for more contrast | `assets/css/borrowed/cyanobacteria.css`, `assets/css/borrowed/7css.css` |
| L28 | Marks the home page's project tiles as a list for screen readers once their bullets are hidden | `index.md` |
| L29 | The latest projects as tiles in a row | `assets/css/borrowed/cyanobacteria.css` |
| L30 | The home page's smaller boxes in rows, and the update log across the width | `assets/css/borrowed/cyanobacteria.css` |
| L31 | The categories as round glossy bubbles | `assets/css/borrowed/cyanobacteria.css` |

The missing numbers were never needed in the site: licensed pieces covered L2, L6 and L7, L3 and L5 were dropped, and L8 was a one-off script outside the site. L19 to L31 came in a second pass, after I tested the first version and wanted the light glass and the arrangement of the site I took inspiration from back without losing the accessibility work.

- **Adding a piece.** First save it untouched, with its license text, in `vendor/pristine/`; then add its row to `vendor/pristine/PROVENANCE.md`; then add its author to `_data/credits.yml`, so the footer and the Credits page name them; only then use it in a stylesheet or a template.
- **Photo sizes.** `_data/image-sizes.yml` holds every project photo's width and height, so a page holds each photo's space while it loads. A new photo missing from that list still shows, just without the held space; to add it, copy an entry with the photo's path, width and height.

## Site structure

```
├── _config.yml            # Site settings (title, URL, collections, feed)
├── index.md               # Home page
├── projects.md            # All projects, grouped by status (/projects/)
├── collaborations.md      # Partners and contributors, prose only (/collaborations/)
├── resources.md           # Resource Hub (curated AT maker resources)
├── about.md               # Bio, profile links, contact
├── accessibility.md       # Accessibility statement (/accessibility/)
├── credits.md             # Credits: every borrowed piece and its author (/credits/)
├── 404.html               # Page-not-found page
├── _projects/             # ONE FILE PER DEVICE: this is where projects live
├── projects/category/     # One stub per category (/projects/category/<name>/)
├── guides/
│   └── onshape-quick-start.md   # Beginner CAD guide (/guides/onshape/)
├── _data/                 # Credits, project statuses, categories, photo sizes
├── _layouts/              # Page templates adapted from Minima (default, home, page, project, redirect)
├── _includes/             # Head, header, footer, project card/links/list, home sidebar, category page
├── .github/workflows/     # Pull-request QA checks (links, a11y, markup)
├── vendor/pristine/       # Untouched copies of every borrowed piece, with PROVENANCE.md (not published)
└── assets/
    ├── css/fonts.css      # The typeface's font faces
    ├── css/borrowed/      # The adapted stylesheets: 7.css, Cyanobacteria, a11y-boilerplate
    ├── fonts/             # M PLUS Rounded 1c, self-hosted, with its license
    ├── docs/              # PDFs (tactile map guide)
    └── images/
        ├── icons/nuvola/  # Nuvola icons, with their license
        ├── collaborations/   # The two KEMi symposium photographs
        ├── site/          # The Bubble Rain wallpaper and its edit settings
        └── projects/<slug>/   # Photos, one folder per project
```

Project cards render only on `/`, `/projects/`, and `/projects/category/*`. Organisation
descriptions live only on `/collaborations/`, and third-party link listings only on
`/resources/`. Everywhere else links out instead of repeating, so the same facts do not
drift apart in two places.

## Accessibility

The site targets WCAG 2.2 AA: semantic HTML with landmarks and a skip link, one `h1` per page, alt text on every meaningful image, each project's status written out in words, 4.5:1+ text contrast and 3:1+ for borders and outlines (measured on the rendered pages and over the lightest and darkest parts of the wallpaper photograph), 44px+ targets for every link or button that stands on its own, a 3px white focus ring with a black halo, glass that turns opaque when the reader asks for more contrast, box borders and a system focus ring that stay visible in Windows High Contrast Mode, text of at least 17px at weight 500, reflow down to 320px (400% zoom), and nothing that moves.

The published statement, including known exceptions, is at [/accessibility/](accessibility.md).

## Quality checks

`.github/workflows/qa.yml` runs on pull requests:

| Tool | What it catches |
| --- | --- |
| html-proofer | Broken internal links, missing images, missing alt text |
| pa11y-ci (axe-core + HTML_CodeSniffer) | WCAG 2.2 AA violations in the built pages |
| html-validate | Invalid markup |

External links are checked by a separate weekly job, because Thingiverse, MakerWorld, and Printables block datacenter IP addresses and would fail every pull request for reasons unrelated to the change.

Two rules are deliberately relaxed, both because a tool cannot see what a human can:

- `axe/color-contrast` is off in `.pa11yci`. Every surface in this design is translucent glass over the wallpaper photograph, drawn with gradient and pseudo-element layers, so axe reports that it cannot determine the background of text on the glass. Contrast was measured instead, in two ways. A script composites each color pair over the photograph's lightest and darkest parts, and a second tool reads the rendered pages and compares every piece of text with the pixels within 2 px of its letters, glows included, which is what a reader sees: every text pair is at least 4.5:1 (large titles at least 3:1, the lowest 3.09:1 on the light glass with its glow) and every box edge at least 3:1 (the lowest 3.29:1, the better of the dark line and the white line inside it). The two stylesheets for the glass and the layout, in `assets/css/borrowed/`, list their changes and the measured ratios in their header comments.
- `no-redundant-role` is off in `.htmlvalidate.json`. `role="list"` on a `<ul>` is redundant per spec, but it is the standard workaround for Safari and VoiceOver dropping list semantics from a list styled with `list-style: none`.

Run them locally with `bundle exec jekyll build`, then `bundle exec htmlproofer ./_site --disable-external` and `npx html-validate "_site/**/*.html"`.

## Deployment

Hosted on GitHub Pages with the native Jekyll build (no Actions workflow needed):

1. Push to the `main` branch.
2. Repository Settings → Pages → Source: "Deploy from a branch" → `main` / root.
3. After the first deploy, set `url:` in `_config.yml` to the live URL (and `baseurl:` to `/<repo-name>` if the repo is not `<username>.github.io`).

Local preview is optional and requires Ruby: `bundle install && bundle exec jekyll serve`.

## Future enhancement ideas (not built yet)

- Client-side category filter buttons on the Projects page (progressive-enhancement JavaScript).
- Dark mode via `prefers-color-scheme` (needs a second round of contrast checks).
- A CMS admin panel (e.g. Decap CMS) if browser Markdown editing ever feels limiting.
- A custom domain (works with GitHub Pages for just the domain registration cost).
- Site search (e.g. Pagefind; it would require moving to a GitHub Actions build).

# Brennen's 3D Printed Assistive Technology Hub

A free, accessible static website showcasing open-source 3D-printed assistive technology by Brennen Johnston, lead of WATAP's 3D Printed Assistive Technology Program. The site presents ready-to-print devices, works in progress seeking collaboration, and completed custom builds, plus a curated hub of assistive technology maker resources.

Built with [Jekyll](https://jekyllrb.com/) and hosted for free on GitHub Pages. There is no JavaScript, no build pipeline to maintain, and no framework — adding a project is just adding one Markdown file.

## Adding or editing projects

See **[HOW-TO-ADD-A-PROJECT.md](HOW-TO-ADD-A-PROJECT.md)** — a step-by-step guide that uses only the github.com web editor in your browser.

## Site structure

```
├── _config.yml            # Site settings (title, URL, collections, feed)
├── index.md               # Home page
├── projects.md            # All projects, grouped by status (/projects/)
├── collaborations.md      # Partners and contributors, prose only (/collaborations/)
├── resources.md           # Resource Hub (curated AT maker resources)
├── about.md               # Bio, profile links, contact
├── accessibility.md       # Accessibility statement (/accessibility/)
├── 404.html               # Page-not-found page
├── _projects/             # ONE FILE PER DEVICE — this is where projects live
├── projects/category/     # One stub per category (/projects/category/<name>/)
├── guides/
│   └── onshape-quick-start.md   # Beginner CAD guide (/guides/onshape/)
├── _layouts/              # Page templates (default, page, project)
├── _includes/             # Header, footer, project card/links/list, category page
├── .github/workflows/     # Pull-request QA checks (links, a11y, markup)
└── assets/
    ├── css/style.css      # The single stylesheet
    ├── docs/              # PDFs (tactile map guide)
    └── images/
        ├── site/          # Favicon
        └── projects/<slug>/   # Photos, one folder per project
```

Project cards render only on `/`, `/projects/`, and `/projects/category/*`. Organisation
descriptions live only on `/collaborations/`, and third-party link listings only on
`/resources/`. Everywhere else links out instead of repeating, so the same facts do not
drift apart in two places.

## Accessibility

The site targets WCAG 2.2 AA: semantic HTML with landmarks and a skip link, one `h1` per page, alt text on every meaningful image, status badges that never rely on color alone, 4.5:1+ text contrast, 44px+ touch targets, a two-tone focus ring that clears 3:1 on every surface in the design, a `forced-colors` block for Windows High Contrast Mode, `rem`-based sizing that survives 200% zoom, reflow down to 320px, and motion wrapped in `prefers-reduced-motion`.

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

- `axe/color-contrast` is off in `.pa11yci`. Every surface in this design is a gradient or a translucent panel over one, so axe answers "background could not be determined" for every text node on every page. Contrast is verified by hand instead; each pair and its measured ratio is listed at the top of `assets/css/style.css`.
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
- Site search (e.g. Pagefind — would require moving to a GitHub Actions build).

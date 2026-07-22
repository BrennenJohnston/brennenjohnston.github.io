# Brennen's 3D Printed Assistive Technology Hub

A free, accessible static website showcasing open-source 3D-printed assistive technology by Brennen Johnston, lead of WATAP's 3D Printed Assistive Technology Program. The site presents ready-to-print devices, works in progress seeking collaboration, and completed custom builds, plus a curated hub of assistive technology maker resources.

Built with [Jekyll](https://jekyllrb.com/) and hosted for free on GitHub Pages. There is no JavaScript, no build pipeline to maintain, and no framework — adding a project is just adding one Markdown file.

## Adding or editing projects

See **[HOW-TO-ADD-A-PROJECT.md](HOW-TO-ADD-A-PROJECT.md)** — a step-by-step guide that uses only the github.com web editor in your browser.

## Site structure

```
├── _config.yml            # Site settings (title, URL, collections)
├── index.md               # Home page
├── projects.md            # Timeline of all projects, grouped by year
├── collaborate.md         # Prototypes + how to collaborate
├── resources.md           # Resource Hub (curated AT maker resources)
├── about.md               # Bio, profile links, contact
├── 404.html               # Page-not-found page
├── _projects/             # ONE FILE PER DEVICE — this is where projects live
├── guides/
│   └── onshape-quick-start.md   # Beginner CAD guide (/guides/onshape/)
├── _layouts/              # Page templates (default, page, project)
├── _includes/             # Header, footer, project card, project links
└── assets/
    ├── css/style.css      # The single stylesheet
    ├── docs/              # PDFs (tactile map guide)
    └── images/
        ├── site/          # Favicon
        └── projects/<slug>/   # Photos, one folder per project
```

## Accessibility

The site targets WCAG 2.2 AA: semantic HTML with landmarks and a skip link, one `h1` per page, alt text on every image, status badges that never rely on color alone, 4.5:1+ text contrast, 44px+ touch targets, visible keyboard focus, `rem`-based sizing that survives 200% zoom, and motion wrapped in `prefers-reduced-motion`.

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

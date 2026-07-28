# How to add a project to your website

You can do everything in this guide in your web browser at github.com — no software to install, no coding required. Adding a project is just adding one text file (and optionally some photos).

## Add a new project (step by step)

1. Go to your repository on **github.com** and sign in.
2. Click the **`_projects`** folder.
3. Click the **"Add file"** button (top right of the file list), then **"Create new file"**.
4. In the filename box, type a short name for your device, all lowercase, with hyphens instead of spaces, ending in `.md`. Example: `adaptive-spoon-grip.md`. This becomes the page address: `/projects/adaptive-spoon-grip/`.
5. Copy the template below and paste it into the big text box.
6. Fill in each field (explanations are in the comments).
7. Click **"Commit changes..."** (green button), then **"Commit changes"** again in the dialog.
8. Wait about 2 minutes. GitHub rebuilds the site automatically. Refresh your website and the new project appears on the Projects page.

## The template (copy everything between the lines)

```markdown
---
# The device name shown as the page title and on cards:
title: Adaptive Spoon Grip

# The date used to sort and group the timeline (format: YYYY-MM-DD):
date: 2026-07-22

# Must be EXACTLY one of: ready, prototype, custom
#   ready     = published design with downloadable files
#   prototype = work in progress, seeking feedback
#   custom    = a completed one-off build for a specific person
status: ready

# Pick from: daily-living, eating-drinking, communication, computer-access,
#            gaming-recreation, mobility, writing-drawing, other
# (You can list more than one, separated by commas.)
categories: [eating-drinking]

# One plain-language sentence shown on the project card (about 140 characters max):
summary: A wide, soft-grip handle that snaps onto standard spoons for easier holding.

# The cover photo. Upload the photo first (see "How to add photos" below),
# then put its path here:
cover_image: /assets/images/projects/adaptive-spoon-grip/cover.jpg

# Describe what is VISIBLE in the photo, for people using screen readers.
# Still required even though project cards no longer read it: this is what the
# big cover photo on the project page itself uses.
cover_alt: "Blue 3D-printed grip with finger grooves attached to a metal spoon, on a kitchen table."

# Download / related links. Delete any lines you don't need.
# Label words matter — the button text is built from the label:
#   "Printables" / "MakerWorld" / "Thingiverse"  ->  "Download the <project title> on Printables"
#   a label starting with "GitHub"               ->  "Source files on GitHub (...)"
#   a label starting with "Video"                ->  shown exactly as written
#   any other label containing "video"           ->  "Watch: <label>"
#   anything else                                ->  shown exactly as written
# So if a label is already self-describing (an app name, a guide title, the
# title of a specific model listing), just write it out and it is used as-is.
links:
  - label: Printables
    url: https://www.printables.com/model/XXXXXX
  - label: MakerWorld
    url: https://makerworld.com/en/models/XXXXXX
  - label: Thingiverse
    url: https://www.thingiverse.com/thing:XXXXXX

# Optional extra photos shown at the bottom of the page. Delete this whole
# section if you don't have any. Every photo needs alt text.
gallery:
  - image: /assets/images/projects/adaptive-spoon-grip/in-use.jpg
    alt: "A hand holding the spoon by the printed grip while eating soup."
    caption: The grip in use.

# Optional print details — delete any line you don't want shown:
print_time: "1 hour 45 minutes"
material: "PLA or PETG, about 30 g"
supports: "None required"

# Only used when status is "prototype" — what feedback do you want?
help_wanted: "Looking for feedback on grip diameter and dishwasher durability."
---

Write the story of the device here, in plain language. Who is it for? What
problem does it solve? How did the design come about? Include print settings,
assembly steps, and safety notes if they matter.

Blank lines separate paragraphs. You can make links like
[this text](https://example.com).
```

## How to add photos

1. From the repository home page, click through to **`assets/images/projects/`**.
2. Click **"Add file"** → **"Create new file"**. In the filename box type your project's folder name, then a slash, then `.gitkeep` (for example `adaptive-spoon-grip/.gitkeep`) and commit — this creates the folder. (Skip this step if you use "Upload files", which lets you type the folder name too.)
3. Easier way: click **"Add file"** → **"Upload files"** and drag your photos in.
4. Reference the photo in your project file as `/assets/images/projects/your-folder-name/your-photo.jpg`.

Photo tips:

- Use JPEG, at most 1600 pixels wide, ideally under 500 KB each (phone photo apps and free tools like Squoosh can resize).
- Every photo needs **alt text** describing what is actually visible — write it as if describing the photo to someone over the phone.
- To replace a photo, upload a new file with the same name.

## Before you commit: check every link you pasted

No automated check can tell that a video link points at the wrong project — that
is a human-only check, and it is how two Charm Customizer videos ended up on the
braille embosser page. So, for each link in `links:`:

1. Open it in a new tab.
2. Read the destination page's own title.
3. Confirm that title is about the project you are editing, not a neighbouring one.
4. Confirm the label you wrote matches what the destination actually is (the
   original design or a remix, the tiles or the tray, v1 or v2).

The same goes for links you write in the body text.

## Rules that keep the site healthy

- `status` must be exactly `ready`, `prototype`, or `custom` — nothing else.
- Every image needs alt text describing what's visible. Never leave `cover_alt` empty.
- Dates use the `YYYY-MM-DD` format.
- Categories come from the controlled list: `daily-living`, `eating-drinking`, `communication`, `computer-access`, `gaming-recreation`, `mobility`, `writing-drawing`, `other`.
- If a new category is ever added to that controlled list, create its matching page under `projects/category/` **in the same commit** — copy an existing one, change the three lines in its front matter. Without it, the category link on every card 404s.
- In text fields containing a colon (`:`) or quote marks, wrap the whole value in double quotes — like the `cover_alt` examples above.
- Spell out an abbreviation the first time a page uses it, with the short form in parentheses — "augmentative and alternative communication (AAC)". Braille displays show about 40 characters at a time, and a bare acronym costs the reader a guess.
- **Privacy**: refer to other individuals by first name and last initial only (for example "Daniel K."), with a general job title at most and no locations or other identifying details.

## Editing or removing a project

- **Edit**: open the file in `_projects`, click the **pencil icon** (top right of the file view), make changes, commit.
- **Unpublish**: open the file, click the **"..."** menu → **"Delete file"**, commit. The page disappears on the next rebuild (about 2 minutes).

## Troubleshooting

- **Where do I see build status?** Repository → **Actions** tab. Every commit triggers a "pages build and deployment" run. Pull requests additionally run a "QA" check for broken links, accessibility problems, and invalid markup.
- **Red X?** The build failed — almost always a typo in the front matter (the section between the `---` lines). Check that every `:` has a space after it, quotes are closed, and the indentation of `links:` and `gallery:` entries matches the template exactly.
- **Changes not showing?** Wait 2 minutes, then hard-refresh (Ctrl+F5). Check the Actions tab for a green check.
- **Image not showing?** The path is case-sensitive and must start with `/assets/`. Compare the filename letter for letter.

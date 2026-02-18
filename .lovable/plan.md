
# Homepage: Remove Search Bar + Pi Deployment Answer

## Your Two Questions Answered

### 1. The Search Bar

The search is genuinely useful during an emergency — a stressed person can type "generator" or "mold" or "shelter" and jump straight to the right page without reading anything. However, you are right that it takes up visual space and adds clutter at the top.

**Recommendation: Keep search, but move it inside the description card** — place it at the bottom of the "Welcome to CariPrep" card, below the description text, as a compact single-line input. This way it is accessible when needed but does not dominate the top of the page. The header stays clean, and the first thing a user sees is the title and description — not a search box.

If you would rather remove it entirely, that is also a clean choice since the tabs and quick links already cover all 8 sections. Just let me know and I will strip it out instead.

### 2. Will Everything Load on the Pi?

Yes — completely. Here is why:

The project has two separate parts:

```text
public/          ← This is what the Pi serves
  index.html
  before/index.html
  during/index.html
  after/index.html
  contacts/index.html
  shelters/index.html
  checklist/index.html
  supply-kit/index.html
  family-plan/index.html
  assets/css/style.css
  assets/js/search.js
  assets/images/*.png / *.jpg
  assets/pdfs/*.pdf       ← downloadable PDFs work fine

src/             ← This is ONLY the Lovable preview
  pages/Index.tsx
  ...
```

The Pi runs Apache and serves everything inside `public/` directly. The React code in `src/` never runs on the Pi — it only exists so you can see a preview here in Lovable. The PDFs in `public/assets/pdfs/` are linked from the sub-pages and will download normally over the local WiFi network the Pi creates.

GitHub sync works like this: you push (or Lovable auto-pushes) to GitHub, then on the Pi you run `git pull` and the new files appear in `/var/www/html/` immediately. No build step needed — it is just static files.

---

## What This Plan Changes

### `src/pages/Index.tsx` only

Move the search bar from its current standalone position (between the header and description) to inside the description card, as the last element before the closing edge. This keeps it available but visually subordinate to the description text.

The change is small:
- Delete the standalone `{/* Search */}` block (lines 157–210)
- Inside the description card (lines 212–230), add the search input + dropdown results at the bottom, inside the same card container

Everything else — header, tabs, quick links, footer — stays exactly as it is.

### `public/index.html` — no change needed
The static Pi version already has the search bar embedded correctly and is working fine for deployment.

---

## Result

```text
        🌀 CariPrep
   Offline Caribbean Hurricane Resource Hub
          [Works Offline]

  ┌─────────────────────────────────────────┐
  │  Welcome to CariPrep                    │
  │                                         │
  │  CariPrep is an offline hurricane       │
  │  resource hub...                        │
  │                                         │
  │  Built to run on a small local device   │
  │  ...No data plan. No signal. No problem.│
  │                                         │
  │  Trusted public safety information...   │
  │                                         │
  │  🔍 Search topics, e.g. generator…     │  ← search is here, tucked in
  └─────────────────────────────────────────┘

  ┌─────────────────────────────────────────┐
  │  [Before]   [During]   [After]          │
  ├─────────────────────────────────────────┤
  │  ...tab content...                      │
  └─────────────────────────────────────────┘

  QUICK LINKS
  ...
```

One file changes: `src/pages/Index.tsx`

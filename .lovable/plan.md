
# Fix the Homepage: Replace the Demo with the Real CariPrep App

## Root Cause

There are **two different homepages** in this project:

- `public/index.html` — the real, fully-featured CariPrep site (tabs, search, section buttons, quick links). This is served by Apache on the Raspberry Pi.
- `src/pages/Index.tsx` — the React component served at `/` in the Lovable preview. This is still the original "CARIPREP Demo" with 4 placeholder cards and `href="#"` links that go nowhere.

The preview always shows the React app. Changes to `public/index.html` never appear in the preview at `/`.

## The Fix

Rewrite `src/pages/Index.tsx` to be a faithful React version of `public/index.html`. Every section of the real homepage gets rebuilt as JSX, using Tailwind-compatible inline styles (to match the existing `--variable` CSS custom properties already defined in `src/index.css`).

## What Will Be in the New Index.tsx

### 1. Header
- Hurricane SVG icon in teal glow box
- "CariPrep" title + "Offline Caribbean Hurricane Resource Hub" tagline
- "Works Offline" badge

### 2. Search Bar
- Text input with magnifier icon
- Inline search logic (useState + filtering against a pages array)
- Dropdown results that link to the correct sub-pages

### 3. Section Buttons (3 large nav cards)
- Before the Storm → `/before/`
- During the Storm → `/during/`
- After the Storm → `/after/`
- Each with icon, label, description, and arrow

### 4. Tabs Panel (Before / During / After)
- Tab bar with 3 buttons — React useState controls which is active
- **Before tab**: evacuation warning box, top supplies list, home prep list, link to `/before/`
- **During tab**: storm surge warning, Watch vs. Warning list, shelter-in-place steps, generator safety box, link to `/during/`
- **After tab**: all-clear warning, first steps list, food safety box, contractor fraud box, link to `/after/`

### 5. Quick Links (5 small grid cards)
- Emergency Contacts → `/contacts/`
- Shelter List → `/shelters/`
- Printable Checklist → `/checklist/`
- Supply Kit → `/supply-kit/`
- Family Plan → `/family-plan/`

### 6. Footer
- "CariPrep works offline · Built for Caribbean hurricane resilience"
- NOAA/NEMA disclaimer in muted text

## Styling Approach

The existing `src/index.css` already defines all the CSS custom properties (`--bg`, `--card`, `--primary`, `--muted`, `--border`, `--warn-bg`, `--warn-border`, etc.) used by `public/assets/css/style.css`. The React component will use those same variables via `style={{ ... }}` props and `className` where Tailwind already covers it — so the appearance will be identical.

## Files Changed

- **`src/pages/Index.tsx`** — full rewrite to match `public/index.html` content (this is the only file that needs to change)

## Files NOT Changed

- `public/index.html` — kept as-is for Pi/Apache deployment
- `src/App.tsx` — routing stays the same
- `public/assets/css/style.css` — unchanged
- All sub-pages (`/before/`, `/during/`, etc.) — unchanged

## Result

After this change, the Lovable preview at `/` will show the exact same content as the Pi deployment: real section buttons, working tabs, a search bar, and quick links — all navigating to the correct sub-pages.

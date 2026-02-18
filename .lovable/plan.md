
# Clean Homepage: Centered Header + Platform Description + Search + Tabs + Quick Links

## Changes at a Glance

The page layout becomes:

```text
        🌀 CariPrep          [Works Offline]
   Offline Caribbean Hurricane Resource Hub

  ┌─────────────────────────────────────────┐
  │  🔍 Search topics, e.g. generator...   │
  └─────────────────────────────────────────┘
        ↓ results dropdown (unchanged)

  Welcome to CariPrep
  CariPrep is an offline hurricane resource hub designed
  for the Caribbean. It provides clear, actionable safety
  information before, during, and after a storm — even
  when the internet is down.

  Built to run on a small local device, CariPrep creates
  its own WiFi network so multiple phones, tablets, and
  laptops can connect at the same time. No data plan.
  No signal. No problem.

  Trusted public safety information from NOAA and local
  emergency management agencies, simplified and optimized
  for fast loading on mobile during power outages.

  ┌─────────────────────────────────────────┐
  │  [Before]   [During]   [After]          │
  ├─────────────────────────────────────────┤
  │  ⚠ Know your evacuation zone now       │
  │  • Water, food, documents…              │
  │  → View full Before the Storm guide     │
  └─────────────────────────────────────────┘

  QUICK LINKS
  ┌──────────┐ ┌──────────┐ ┌──────────┐
  │ Emergency│ │ Shelter  │ │Checklist │
  └──────────┘ └──────────┘ └──────────┘
  ┌──────────┐ ┌──────────┐
  │  Supply  │ │  Family  │
  │   Kit    │ │   Plan   │
  └──────────┘ └──────────┘

  CariPrep works offline · Caribbean hurricane resilience
```

## Specific Changes to `src/pages/Index.tsx`

### 1. Center the Header (lines 124–156)
Change the `<header>` from a left-aligned flex row to a centered column layout:

```text
Before:  display:flex, alignItems:center, gap:0.9rem
After:   display:flex, flexDirection:column, alignItems:center, textAlign:center, gap:0.6rem
```

- Icon box moves above the title (stacked, not side-by-side)
- "Works Offline" badge sits below the subtitle, centered
- Title and tagline are centered

### 2. Keep Search Bar (lines 159–211)
Unchanged — search logic, dropdown, and styling stay exactly as they are.

### 3. Remove the Three Section Nav Buttons (lines 213–259)
Delete the entire `<nav>` block containing the Before / During / After large card buttons. The tabs below already serve as navigation to those sections.

### 4. Add Platform Description Block (new, inserted after search, before tabs)
A clean prose card with:
- Heading: **"Welcome to CariPrep"** (small, teal-tinted)
- Three short paragraphs using the exact text provided by the user
- Style: subtle teal-tinted background (`hsl(var(--primary) / 0.06)`), matching border, same card radius — visually consistent with the rest of the UI
- Font: `0.875rem`, line-height `1.65`, muted-foreground color for body text

### 5. Tabs Panel (lines 262–374) — Unchanged
All three tab panels and their content stay exactly as they are.

### 6. Quick Links (lines 377–417) — Unchanged
Grid and all 5 links stay exactly as they are.

### 7. Footer (lines 419–426) — Minor text update
Keep the same layout but update the body copy to reflect the new platform description wording (compiles trusted public safety info from NOAA and local emergency management agencies).

## Only 1 File Changes

- `src/pages/Index.tsx` — header layout, remove nav buttons, add description block, minor footer text update

`public/index.html`, `src/App.tsx`, CSS files, and all sub-pages are untouched.

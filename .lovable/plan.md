
# Add Tabs to the Homepage

## What This Does

Adds a tabbed panel to `public/index.html` between the 3 main section buttons and the Quick Links row. Three tabs — **Before**, **During**, and **After** — let the user see the top highlights of each section right on the homepage without navigating away.

The tabs are pure HTML/CSS/JS — no frameworks, no external libraries — matching the existing dark teal aesthetic exactly.

---

## Visual Layout

```text
[ BEFORE THE STORM ] → button (existing)
[ DURING THE STORM ] → button (existing)
[ AFTER THE STORM  ] → button (existing)

┌─────────────────────────────────────────┐
│  [Before]  [During]  [After]            │  ← tab bar
├─────────────────────────────────────────┤
│  ⚠ Know your evacuation zone now       │
│  • Water: 1 gallon/person/day           │
│  • Non-perishable food (2-week supply)  │
│  • Documents, medications, cash, radio  │
│  • Secure your home, review insurance   │
│                                         │
│  → View full Before the Storm guide     │  ← link to /before/
└─────────────────────────────────────────┘

[ Emergency Contacts ] [ Shelter List ] ...  ← quick links (existing)
```

---

## Tab Content (Summaries)

### Before Tab
- Warning box: "Know your evacuation zone BEFORE the storm hits"
- Top 5 supply items (water, food, docs, radio, medications)
- Home prep tips (shutters, secure boats, insurance review)
- "→ View full Before the Storm guide" link

### During Tab
- Warning box: "Storm surge is the #1 killer in hurricanes"
- Hurricane Watch vs. Warning (1-line each)
- Shelter-in-place steps (3 bullet points)
- Generator safety danger box
- "→ View full During the Storm guide" link

### After Tab
- Warning box: "Wait for official all-clear before going outside"
- First 4 steps (check for injuries, structural damage, power lines, gas)
- Food safety reminder (discard fridge food after 4 hours)
- Contractor fraud alert
- "→ View full After the Storm guide" link

---

## Files Changed

### 1. `public/index.html`
- Add the tab bar HTML + 3 tab panel divs between `</nav>` and the Quick Links div
- Add inline `<script>` at the bottom for tab switching (10 lines of vanilla JS)

### 2. `public/assets/css/style.css`
Add tab styles (~25 lines) at the end of the file:
- `.tab-bar` — row of tab buttons, teal underline on active
- `.tab-btn` — individual tab button, inherits existing card/muted colours
- `.tab-btn.active` — teal text + teal bottom border
- `.tab-panel` — hidden by default (`display:none`)
- `.tab-panel.active` — shown (`display:block`)

---

## Design Details

- Tab buttons: full-width row, equal thirds, dark card background, no rounded corners on bottom edge so they connect visually to the panel below
- Active tab: teal text (`var(--primary)`) + 2px teal bottom border
- Panel: same card background + border as all other cards, rounded bottom corners
- Font sizes and spacing match existing content (`.card`, `.warn-box`, `.info-box` classes reused)
- Touch targets: min-height 44px on tab buttons — thumb-friendly
- No JavaScript library needed — 10-line switch function

---

## Technical Notes

- Only 2 files change: `public/index.html` and `public/assets/css/style.css`
- Zero impact on the Pi deployment — same static files
- Works without JavaScript if JS is disabled (first tab content visible by default, tab buttons hidden)
- The `src/` React app and `src/App.tsx` are not touched

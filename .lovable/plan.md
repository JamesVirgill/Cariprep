
# Add Before → During → After Navigation to the Top of Each Page

## What is changing

The three storm-phase pages currently only show navigation buttons at the very bottom, after all the content. The goal is to add the same buttons near the top of each page — right below the page header — so users can jump between phases without scrolling.

## Affected files

| File | Change |
|---|---|
| `public/before/index.html` | Add nav buttons below `<div class="page-header">` |
| `public/during/index.html` | Add nav buttons below `<div class="page-header">` |
| `public/after/index.html` | Add nav buttons below `<div class="page-header">` |

No CSS changes needed — the existing `.btn`, `.btn-outline`, `.btn-sm`, and `.btn-primary` classes already handle styling perfectly.

## Exact placement and buttons

Each set of top buttons mirrors what is already at the bottom of each page.

**`/before/` — top buttons (insert after `</div>` closing the `.page-header`):**
```
← Home    During the Storm →
```

**`/during/` — top buttons:**
```
← Home    ← Before    After the Storm →
```

**`/after/` — top buttons:**
```
← Home    ← During    Emergency Contacts →
```

The `div` wrapper will use the same inline style already used at the bottom:
```html
<div style="margin-bottom:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap">
  ...buttons...
</div>
```

Using `margin-bottom` instead of `margin-top` so there is breathing room before the first content section.

## No other pages affected

The supply-kit, family-plan, checklist, contacts, shelters, and first-aid pages are not part of the before/during/after storm-phase flow, so they are left unchanged.

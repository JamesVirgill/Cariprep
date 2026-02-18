
# Homepage Polish: 5 Targeted Improvements

No icons anywhere. These are all copy, layout, and UX refinements only.

---

## Changes to `src/pages/Index.tsx`

### 1. Fix the Quick Links Grid (line 350)

Currently 5 items in a 3-column grid — leaves an awkward blank cell in the last row.

Change `gridTemplateColumns` from `repeat(3, 1fr)` to `repeat(2, 1fr)`, and give the last Quick Link item (`Family Plan`) `gridColumn: "span 2"` so it fills the full bottom row, centered. Result: a clean 2+2+1 layout with no orphaned cell.

---

### 2. Trim the Description Card to 2 Paragraphs (lines 172–174)

The third paragraph ("CariPrep compiles trusted public safety information from NOAA...") duplicates the footer disclaimer and makes the card feel heavy on mobile. Remove it from the card — it stays in the footer only. The card becomes two short paragraphs + search bar, which is much easier to scan under stress.

---

### 3. Add a "Preparedness Guides" Section Label Above the Tabs (before line 232)

A small uppercase label above the tab bar gives the section a clear title and creates visual breathing room between the description card and the tabs — matching the style of the existing "Quick Links" label.

Style: identical to "Quick Links" — `0.8125rem`, muted-foreground, uppercase, `0.08em` letter-spacing, `0.75rem` bottom margin.

---

### 4. Improve the "No Results" Search Message (line 227)

Change the plain "No results found" message to include helpful example search terms, which is especially useful in a high-stress situation:

```
No results found. Try: generator, shelter, mold, food safety
```

---

### 5. Tighten the Footer Copy (lines 391–403)

Currently the footer has a long disclaimer block. Condense it to two clean lines:

```
CariPrep works offline · Built for Caribbean hurricane resilience

Content sourced from NOAA and Caribbean emergency management agencies.
CariPrep is an independent resource, not affiliated with or endorsed by these agencies.
```

This is shorter and more readable than the current version, while still attributing sources correctly.

---

## Summary

| # | Change | Lines |
|---|---|---|
| 1 | Quick Links: 2-col grid, last item spans full width | 350, ~385 |
| 2 | Description card: remove third paragraph | 172–174 |
| 3 | Add "Preparedness Guides" label above tabs | before 232 |
| 4 | Search: improve no-results hint | 227 |
| 5 | Footer: shorten disclaimer | 391–403 |

One file: `src/pages/Index.tsx`. No icons anywhere.

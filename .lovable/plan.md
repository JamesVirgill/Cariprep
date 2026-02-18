
# CariPrep — Full Static Site Build Plan

## Overview

This builds a complete 9-page offline hurricane hub, keeping your existing dark teal/Caribbean aesthetic (deep navy background, teal `#2dd4bf` accents, card-style layout) but as pure standalone HTML/CSS files in the `public/` folder — zero frameworks, zero CDNs, works 100% offline on the Pi.

The React app in `src/` stays untouched as your Lovable preview. Everything deployable lives in `public/`.

---

## All Assets Being Used

### NOAA Images (from both upload batches)

**Before the Storm section:**
- `3-HPW-2022-Assemble-Supplies.png` → Build your supply kit
- `4-HPW-2022-Insurance-Checkup.png` → Insurance checkup
- `6-HPW-2022-Help-Neighbor.png` → Help your neighbors prepare
- `secure-boat-2023.png` → Secure your boat before the storm
- `Small-Decisions-hurricane.png` → Small decisions, big impact

**During the Storm section:**
- `4-When-Storm-Threatens.png` → When storm threatens
- `7-Take-Action.png` → Take action now
- `ww-hurricane.png` → Hurricane Watch vs. Warning explainer
- `ww-stormsurge.png` → Storm Surge Watch vs. Warning
- `tropical-storms-2023.png` → Tropical storms can be deadly
- `understanding_storm_surge_2.jpg` → Storm surge depth chart
- `shelter-pets-2023.png` → Plan for your pets

**Before/During shared:**
- `images_wrn_social_media_2017_hurricane_flash_2017.png` → Flash flood warning
- `distant-hurricanes-rips-red-final.png` → Rip currents warning
- `forecast_cone_explainer.jpeg` → Understanding the forecast cone

**After the Storm section:**
- `6-HPW-2022-Help-Neighbor.png` (reused) → Check on neighbors after storm

### PDFs (from both upload batches)

| File | Used On |
|------|---------|
| `emergency_contacts.pdf` | `/contacts/` page |
| `2025-Hurricane-Shelter-List.pdf` | `/shelters/` page |
| `GR-Build-Your-Supply-Kit-A1.pdf` | `/before/` (Supply Kit page) |
| `GR-Family-Emergency-Plan-A1.pdf` | `/before/` (Emergency Plan page) |

---

## File Structure

```text
public/
  index.html                    ← Homepage
  before/index.html             ← Before the Storm
  during/index.html             ← During the Storm
  after/index.html              ← After the Storm
  contacts/index.html           ← Emergency Contacts
  shelters/index.html           ← Shelter List
  checklist/index.html          ← Printable Survival Checklist
  supply-kit/index.html         ← Build Your Supply Kit (from DRM PDF)
  family-plan/index.html        ← Household Emergency Plan (from DRM PDF)
  assets/
    css/style.css               ← One CSS file, dark teal theme, <30KB
    js/search.js                ← Lightweight offline search, ~2KB
    images/                     ← All 15 NOAA images (lazy-loaded)
    pdfs/                       ← All 4 PDFs (downloadable)
```

---

## Visual Design (Matching Your Aesthetic)

The CSS will mirror your current dark teal theme — no white background, keeping what's already working:

```text
Background:    linear-gradient(170deg, hsl(200,55%,6%), hsl(195,50%,10%), hsl(190,45%,8%))
Card bg:       hsl(195, 40%, 12%)
Primary teal:  hsl(174, 60%, 45%)  ← same as current --primary
Text:          hsl(180, 20%, 90%)
Muted text:    hsl(195, 15%, 55%)
Border:        hsl(195, 30%, 20%)
Warning box:   deep red border on dark bg (no bright white)
Font:          System font stack only (no Google Fonts)
```

Buttons will be large (min 56px height), thumb-friendly, with teal fill. Cards will have the same subtle border glow as the current app. No animations, no shadows heavier than the current `--shadow-card`.

---

## Page-by-Page Content Plan

### Homepage (`/index.html`)
- Hurricane radar SVG logo + "CARIPREP" + "Offline Caribbean Hurricane Resource Hub"
- 3 large section buttons: BEFORE THE STORM / DURING THE STORM / AFTER THE STORM
- Quick links row: Emergency Contacts · Shelter List · Printable Checklist · Supply Kit · Family Plan
- Footer: "Works offline · Built for Caribbean hurricane resilience"

### Before the Storm (`/before/`)
Content sourced from:
- DRM Supply Kit PDF: full supply list (water, food, flashlight, radio, meds, documents, cash, go bag)
- DRM Family Plan PDF: evacuation plan, emergency contacts list, shelter designation, practice drills
- NOAA images displayed with captions: Assemble Supplies, Insurance Checkup, Help Neighbor, Secure Boat, Small Decisions
- Download buttons for both DRM PDFs
- Warning box: "Know your evacuation zone BEFORE the storm hits"

### During the Storm (`/during/`)
Content sourced from NOAA images and general guidance:
- Hurricane Watch vs. Warning explainer (from `ww-hurricane.png`)
- Storm Surge Watch vs. Warning (from `ww-stormsurge.png`)
- When storm threatens — shelter in place steps
- Storm surge depth chart with danger levels
- Tropical storms are deadly — never walk into floodwaters
- Pet sheltering: not all shelters accept pets
- Generator safety / carbon monoxide danger box (WARNING)
- Do NOT go outside during the eye — the storm wall returns
- NOAA images displayed with captions: 7 images from this section

### After the Storm (`/after/`)
- Wait for official all-clear before going outside
- Check on elderly neighbors
- Mold prevention and cleanup
- Food safety (discard refrigerator food after 4 hours without power)
- Boil water advisories — what they mean
- Debris removal safety
- Contractor fraud warning box
- Insurance documentation steps

### Emergency Contacts (`/contacts/`)
Full content from the previously parsed `emergency_contacts.pdf`:
- Medical (PMH, Doctor's Hospital, AAS Life-flight, Hyperbaric)
- Utilities (BPL, Water & Sewage, BTC)
- Police, Fire, Crime Stoppers
- Crisis Centre, Child Abuse Hotline, Social Services
- BASRA sea rescue, DRM Authority
- Download button → `assets/pdfs/emergency_contacts.pdf`

### Shelter List (`/shelters/`)
Full table from the previously parsed `2025-Hurricane-Shelter-List.pdf`:
- All Bahamian islands (Abaco, Acklins, Andros, Berry Islands, Bimini, Cat Island, Crooked Island, Eleuthera, Exuma, Grand Bahama, Harbour Island, Inagua, Long Island, Mayaguana, Nassau/New Providence, Ragged Island, Rum Cay, San Salvador)
- Columns: Shelter Name · Address · Capacity
- Download button → `assets/pdfs/2025-Hurricane-Shelter-List.pdf`

### Printable Survival Checklist (`/checklist/`)
- Print-optimized (white bg, black text via `@media print`)
- Checkbox sections: Water / Food / Medical / Documents / Tools / Communication / Home Prep / Pets
- "Print this page" button

### Supply Kit (`/supply-kit/`)
HTML summary of DRM Supply Kit PDF:
- Home supply list (2-week supply)
- Go Bag list (3-day portable)
- Special needs considerations (infants, seniors, pets)
- Download button → `assets/pdfs/GR-Build-Your-Supply-Kit.pdf`

### Family Emergency Plan (`/family-plan/`)
HTML summary of DRM Family Plan PDF:
- Evacuation plan steps
- Designating a shelter-in-place room
- Emergency contact list guidance
- Practice drills
- Download button → `assets/pdfs/GR-Family-Emergency-Plan.pdf`

---

## Search Feature

A ~2KB vanilla JS file will index all page titles and key keywords. Typing in the search box on the homepage returns instant links — no server, no library, no internet.

---

## Deployment

After implementation, every file will be hosted via the Lovable preview URL. You'll get `curl` commands to download each file to `/var/www/html/` on the Pi — structured to recreate the exact folder layout automatically.

---

## Technical Notes

- Every page: `<meta charset="UTF-8">`, `<meta name="viewport">`, relative paths only
- All images: `loading="lazy"`, `max-width:100%`, descriptive `alt` text
- PDFs: stored in `public/assets/pdfs/`, linked with `<a href>` download buttons — never embedded inline
- Page size target: under 20KB per HTML file (excluding images)
- Total site target: under 10MB including all images and PDFs
- Zero framework dependencies in delivered HTML — pure HTML/CSS/JS
- Compatible with Android Chromium 8+, iOS Safari 12+, Raspberry Pi Chromium

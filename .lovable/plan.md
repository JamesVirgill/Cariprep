
# Build: First Aid & Medications Page + Mental Health "Coming Soon" Modal

## Files to change

| File | Action |
|---|---|
| `public/first-aid/index.html` | Create — new static page |
| `src/App.tsx` | Add `/first-aid/*` route |
| `src/pages/Index.tsx` | Add First Aid to search + grid; add Mental Health button + modal |

---

## 1. `public/first-aid/index.html` — New Static Page

Follows the exact same structure as `public/before/index.html`: same `../assets/css/style.css`, same `.top-nav`, `.container`, `.card`, `.warn-box`, `.info-box`, `.section-title`, `.steps` classes. No external dependencies. Fully offline.

### Sections and sources

**Call 919 First — prominent warn-box at the top**
List of emergencies that require calling 919 immediately before doing anything else (unconsciousness, severe bleeding, chest pain, CO poisoning suspected, heat stroke confusion, difficulty breathing). Source: CDC Emergency Preparedness.

**Wounds and Cuts**
- Rinse with clean water (not alcohol directly on the open wound)
- Cover with a clean dressing; change daily
- Signs of infection to watch for: increasing redness, warmth, swelling, pus, fever
- Source: CDC Natural Disasters and Severe Weather guidance (public domain, 17 U.S.C. § 105)

**Carbon Monoxide Poisoning**
- Symptoms: headache, dizziness, weakness, nausea, chest pain, confusion — "flu-like but no fever"
- Action: get everyone out immediately, do not re-enter, call 919, fresh air
- Prevention reminder: generator 20+ feet from windows; never indoors or in garage
- Source: CDC Carbon Monoxide Poisoning (cdc.gov/carbon-monoxide, public domain)

**Dehydration**
- Signs: dry mouth, little or no urination, dizziness, rapid heartbeat
- Treatment: small sips of water frequently; oral rehydration salts (ORS) if available
- Danger signs (go to hospital): confusion, unconsciousness, no urination for 8+ hours
- Source: PAHO/WHO Disaster Health Guidance (CC BY-NC-SA 3.0 IGO)

**Heat Exhaustion vs. Heat Stroke**
- Heat exhaustion: heavy sweating, cool/pale skin, fast weak pulse, nausea — move to shade, hydrate, loosen clothing
- Heat stroke (EMERGENCY — call 919): hot/red/dry or damp skin, rapid strong pulse, confusion, loss of consciousness — cool immediately with water or ice while waiting for help
- Key rule: **confusion or unconsciousness = heat stroke = 919 immediately**
- Source: CDC Natural Disasters guidance (public domain)

**Medication Management During Power Outage**
- Keep a written medication list in your go-bag at all times
- Insulin: keep cool (2–8°C ideally); unopened vials may survive up to 28 days at room temperature depending on brand — use a cooler with ice if power is out
- Do not skip critical medications; contact a pharmacist or clinic if supply runs low
- Source: PAHO Pharmaceutical Preparedness guidance (CC BY-NC-SA 3.0 IGO)

**Footer attribution** (inside the `<footer>` tag, same pattern as other pages):
> First aid guidance adapted from CDC (public domain, 17 U.S.C. § 105) and PAHO/WHO (CC BY-NC-SA 3.0 IGO). CariPrep is an independent resource and is not affiliated with or endorsed by CDC, PAHO, WHO, or NEMA.

Navigation buttons at the bottom: `← Home` and `Emergency Contacts →`

---

## 2. `src/App.tsx` — Add Route

Add one line in the `<Routes>` block, following the same pattern as all existing redirects:

```
<Route path="/first-aid/*" element={<StaticRedirect to="/first-aid/index.html" />} />
```

---

## 3. `src/pages/Index.tsx` — Search + Grid + Modal

### PAGES array — add two entries
```
{ title: "First Aid & Medications", url: "/first-aid/", tags: "first aid wound cut infection carbon monoxide CO poisoning dehydration heat stroke heat exhaustion medication insulin 919" },
{ title: "Mental Health Support", url: "#", tags: "mental health stress anxiety grief counselling wellbeing crisis support post-disaster" },
```

### Quick Links grid — new layout (7 items)

The current 5-item grid (2+2+1) becomes 7 items (2+2+2+1):

```text
[ Emergency Contacts ] [ Shelter List        ]
[ Printable Checklist ] [ Supply Kit          ]
[ Family Plan         ] [ First Aid & Meds    ]
[       Mental Health Support (Coming Soon)   ]
```

- First Aid card: `<a href="/first-aid/">` styled identically to existing cards, with a medical cross SVG icon
- Mental Health card: `<button>` styled identically to `<a>` cards (same border, padding, flex layout, hover), spanning 2 columns, with a heart/brain SVG icon
- Mental Health card gets `gridColumn: "span 2"` for bottom-row centering

### Mental Health "Coming Soon" modal

Add `const [showMentalHealth, setShowMentalHealth] = useState(false);` to the component.

When the Mental Health button is clicked, render a full-screen overlay (fixed, inset 0, dark semi-transparent background, z-index 100). Clicking the backdrop dismisses it. Inside: a centered card containing:

- Title: **Mental Health Support — Coming Soon**
- Body: *"We are working with local health agencies to bring you crisis support contacts, stress management guides, and post-disaster wellbeing resources. This section will be available in a future update."*
- A close button (✕) top-right and a "Got it" dismiss button at the bottom

Pure React state + inline styles. No new packages. No new page or route needed.

---

## No New Dependencies

Everything uses existing patterns: static HTML with `style.css`, `StaticRedirect` in `App.tsx`, and inline React state in `Index.tsx`. Fully offline-compatible on the Raspberry Pi.

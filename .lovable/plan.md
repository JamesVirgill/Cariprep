
# Fix: Static Pages 404 in Preview

## The Problem

The Lovable preview runs through Vite + React Router. When you visit `/during/`, React Router intercepts the URL before Vite can serve `public/during/index.html`. The `*` catch-all route in `src/App.tsx` matches it and renders the React `NotFound` page instead.

The static HTML files exist and are correct — the routing layer just hijacks those paths.

## The Fix

Add a redirect component for each static page path in `src/App.tsx`. When React Router matches `/during/`, it will immediately redirect the browser to `/during/index.html` — which Vite WILL serve correctly as a static file from `public/`.

### Paths to add routes for

```text
/before/        →  /before/index.html
/during/        →  /during/index.html
/after/         →  /after/index.html
/contacts/      →  /contacts/index.html
/shelters/      →  /shelters/index.html
/checklist/     →  /checklist/index.html
/supply-kit/    →  /supply-kit/index.html
/family-plan/   →  /family-plan/index.html
```

## Files to Change

### `src/App.tsx`

Add a `StaticRedirect` component that uses `useEffect` + `window.location.replace()` to send the browser to the `.html` file. This is a hard browser redirect (not a React Router navigate), so Vite's static file server picks it up correctly.

```text
const StaticRedirect = ({ to }: { to: string }) => {
  useEffect(() => { window.location.replace(to); }, [to]);
  return null;
};
```

Then add one `<Route>` per static page before the `*` catch-all:

```text
<Route path="/before/*"      element={<StaticRedirect to="/before/index.html" />} />
<Route path="/during/*"      element={<StaticRedirect to="/during/index.html" />} />
<Route path="/after/*"       element={<StaticRedirect to="/after/index.html" />} />
<Route path="/contacts/*"    element={<StaticRedirect to="/contacts/index.html" />} />
<Route path="/shelters/*"    element={<StaticRedirect to="/shelters/index.html" />} />
<Route path="/checklist/*"   element={<StaticRedirect to="/checklist/index.html" />} />
<Route path="/supply-kit/*"  element={<StaticRedirect to="/supply-kit/index.html" />} />
<Route path="/family-plan/*" element={<StaticRedirect to="/family-plan/index.html" />} />
```

This only affects the Lovable preview. On the Pi, Apache serves `public/` directly and React Router is never involved — so Pi deployment is unaffected.

## What Will Work After This

- Clicking any nav link in the preview (Before, During, After, etc.) will load the correct static HTML page
- The "Back to Home" links on each page go to `/` which loads the React app index (or you can navigate back to `/during/` etc. and it will redirect again correctly)
- The Pi deployment stays completely unchanged

## Only 1 File Changes

- `src/App.tsx` — add `StaticRedirect` component and 8 new routes

# Voyita · Tenant Admin Mobile App

Clickable mobile app prototype for Tenant Admins (Trip module), built on the Voyita Design System.

## Open locally

The page loads scripts and styles by relative path, so serve the folder rather than opening the file directly:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `index.html` (it redirects to `Trip Module.dc.html`).

## Files

| File | What it is |
| --- | --- |
| `index.html` | Entry point; redirects to the app |
| `Trip Module.dc.html` | The mobile app: every screen, clickable, grouped by module |
| `trip-module-screens.js` | Screen data: content, fields, flows and navigation targets |
| `support.js` | Runtime that renders the `.dc.html` page |
| `_ds/` | Voyita Design System: tokens, fonts, component bundle (`_ds_bundle.js`) |
| `assets/` | Images used by the screens |

## Push to GitHub

```bash
cd voyita-tenant-admin-mobile
git init
git add .
git commit -m "Voyita Tenant Admin mobile app"
git branch -M main
git remote add origin https://github.com/<org>/<repo>.git
git push -u origin main
```

To host it, turn on GitHub Pages (Settings → Pages → Deploy from branch `main`, root) and open the site root — `index.html` loads the app.

## Notes

- Design prototype, not production code. Screens are data-driven from `trip-module-screens.js`; edit that file to change copy, fields or flows.
- Voyita components come from `_ds/.../_ds_bundle.js` (namespace `VoyitaDesignSystem_162d8e`).

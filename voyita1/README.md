# Voyita · Trip Module (Tenant Admin mobile)

Clickable prototype of the Tenant Admin mobile app's Trip module.

## Host on GitHub Pages
1. Upload everything in this folder to the root of the repo (keep the hidden `.nojekyll` file).
2. Settings → Pages → Branch `main`, folder `/ (root)` → Save.
3. Open `https://<user>.github.io/<repo>/`.

## Files
- `index.html` — the app canvas
- `support.js` — component runtime
- `screens/00-core.js` — shared helpers and sample data
- `screens/NN-*.js` — one file per module, loaded in number order (each only depends on earlier files)
- `design-system/` — Voyita Design System tokens, fonts and component bundle
- `assets/` — images

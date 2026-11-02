# Voyita · Trip Module (Tenant Admin mobile)

Clickable prototype of the Tenant Admin mobile app's Trip module.

## Host on GitHub Pages
1. Upload everything in this folder to the root of the repo (keep the hidden `.nojekyll` file).
2. Settings → Pages → Branch `main`, folder `/ (root)` → Save.
3. Open `https://<user>.github.io/<repo>/`.

## Files
| Path | What |
| --- | --- |
| `index.html` | The app canvas (opens directly) |
| `support.js` | Component runtime |
| `screens/00-core.js` | Shared helpers and sample data |
| `screens/NN-*.js` | One file per module, loaded in number order |
| `design-system/` | Voyita Design System tokens, fonts and component bundle |
| `assets/` | Images |

Each module file only depends on the files numbered before it. To change a module, edit its file only.

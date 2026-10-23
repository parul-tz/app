# Voyita Design System

Voyita is a **school- and group-travel operations platform**. The product is a single desktop web console used by trip coordinators, school finance staff and travel vendors to build itineraries, manage traveler rosters and consent paperwork, and chase payments. The navigation in the source file names the whole product surface: **Dashboard · Trips · Traveler's · Clients · Vendors · Users & Staff · Reports · Configurations**.

The system is deliberately utilitarian. Dense data views, one indigo accent, small uppercase status chips, no illustration, no marketing gloss. The only decorative moment in the entire kit is the violet glow on the *Generate with AI* button.

## Sources

- **`Voyita 2.0 Design System.fig`** — the only source, attached to this project as a mounted file. Everything here (tokens, type ramp, components, icon set, logo) was extracted from it. 21 pages, 382 local components, 68 component sets, 228 Figma Variables across 3 collections, 0 named text styles.
- No codebase, repository, deck or written brand guide was provided. Where this readme states intent (tone, motion, hierarchy), it is inferred from the artwork and labelled as such.

There is **no** public Figma URL on record — if you have one, add it here.

---

## Content fundamentals

Copy in the source file is short, literal and operational. No marketing voice, no exclamation, no emoji anywhere in 3,337 nodes.

**Casing.** Sentence case for everything a human reads: *"Join trip by ID"*, *"Generate with AI"*, *"Message goes here"*, *"educating the errors for the user"*. Two exceptions, both machine-ish: **status chips** and **table headers** are UPPERCASE.

**Person.** Neither "I" nor "you" appears. Labels are nouns (*Trips, Vendors, Reports*), actions are bare imperatives (*Save, Export, Discard, Resend*). Never "Your trips" — just "Trips".

**Length.** Labels are one to three words. Helping text is a single clause, no full stop: *"This is helping text"*, *"Coach capacity is 49"*. Snackbars are a result, not a sentence: *"Trip published"*, *"Payment done"*.

**Naming quirks worth preserving.** The product says **Traveler's** (with the apostrophe) in navigation and **Travelers** elsewhere; it says **Users & Staff** with an ampersand. The file contains genuine typos in layer names (`dashbaord`, `Dcoument Import`, `Transcation`, `Vegetrain`, `Reciept`) — these survive as **icon names** in `components/icons/Icon.d.ts` because renaming them would break the mapping back to the source. Do not reproduce them in user-visible copy.

**Terminology.** Trip (not tour). Traveler (not passenger or student, even though the travelers are students). Client = the school or organisation. Vendor = the supplier. Pax for headcount in tables.

**Tone in one line:** a competent operations tool that tells you what happened and what is missing, and gets out of the way.

---

## Visual foundations

**Palette.** One accent: `primary/Main` **#4942E4**, a saturated blue-indigo. It carries every primary button, every active/selected state, every focus ring, links on hover, and the calendar's selected day. Its darker sibling `primary/300` **#3232C3** is *both* hover and press — the system does not distinguish them. Tints (`#EFF2FF`, `#F8F9FF`) back menu-row hovers, initials avatars and widget glyph tiles.

Neutrals do the real work: a nine-step greyscale from `#191B25` (all body text, all headings, the active sidebar pill) through `#717784` (every placeholder, every secondary label, every muted icon) to `#F3F5F8` (sunken fills, hover fills, table headers). Note there is **no pure black text** and **no pure grey** — the neutrals are all slightly blue.

Semantics: success `#288F5A` with `#CDFFE3` tint, alert `#CA054D` (a crimson, not a red) with `#FFF2F7`, warning `#AE890B` with `#FFF1B3`. Violet `#9747FF`/`#8A38F5` is reserved *exclusively* for AI affordances.

The file also carries a legacy teal `primary/Main = #055E57` and a second greyscale in the `Ungrouped` collection — both are inherited from an older theme and are not used by any component. Ignore them unless you're maintaining old screens.

**Type.** Two faces, cleanly divided:
- **Outfit** — the voice. All headings (SemiBold), button labels, hyperlinks, tooltip copy, the calendar month, avatar initials.
- **Sora** — the interface. Every field, label, helping text, chip, table cell, tab, breadcrumb, option row.
- **Inter** appears in exactly one place: the sidebar nav labels (14/24 Regular). It is not a mistake to keep, but it is not a third brand face either — treat it as a sidebar-only quirk.
- **Satoshi** appears in six nodes with no clear role. No font file shipped and no token points at it, so nothing here renders in Satoshi. **Flagged below.**

The heading ramp ships in two modes — web (H1 32/50 down to H5 16/24) and mobile (H1 28/44 down to H5 14/20), switched with `data-mode="mobile"` on `:root`. Body sizes are identical in both. The workhorse size is **14/24**; 12/20 for metadata; 10/16 for chips.

**Spacing.** Not a strict 4px grid. Real values in this kit include **10px, 14px and 18px** (dropdown padding, lg-field padding, sidebar padding). Copy them; do not snap them. Control heights are 32 / 36 / 40 / 44 / 48 / 56 / 64.

**Corners.** A wide, intentional range: 4px on tags, 6px on status chips and the calendar shell, 8px on buttons/fields/menu rows/calendar days, 10px on the AI button, 12px on cards, **20px on table cells**, 100px on the switch track. The logo tile is 24.25263px at 96px — an unrounded value, kept verbatim.

**Cards and tables.** Cards are white, 12px radius, a **1px `#E0E4EA` stroke and no shadow**. The most distinctive pattern in the whole system is the table: every cell is its own **20px-radius pill** with a 1px stroke, separated by 4px gaps — there is no ruled grid anywhere. Headers are uppercase 12/20 `#717784` on `#F3F5F8`.

**Elevation.** Two shadows exist. `0 2px 4px #E1E2E5` lifts the active segmented tab. `2px 2px 40px rgba(79,92,216,0.1)` — a soft indigo bloom — is the popover/calendar shadow. Everything else is stroke-only. Borders are used far more than shadows.

**Backgrounds.** Flat colour, always. No gradients (except the AI glow), no photography, no patterns, no textures, no illustration. The app shell is `#FAFAFA`, content areas `#F3F5F8`, cards white. The one full-bleed colour moment in the file is the black logo plate on the Logo page and the indigo 17px rule across the top of the Typography page.

**Hover / press.** Buttons darken to `#3232C3`. Secondary and ghost controls fill `#F3F5F8`. Menu rows and tertiary buttons fill the `#F8F9FF` wash. Table rows fill `#F3F5F8`. Tabs turn their label indigo *before* they become active. Nothing scales, nothing shrinks, nothing changes opacity — **the system signals state with fill, not with transform or transparency.**

**Focus.** The field stroke goes indigo. There is no offset ring, no glow.

**Disabled.** Primary buttons take a flat `#99A0AE` fill (not a faded indigo). Fields fill `#F3F5F8` and drop their text to `#99A0AE`. Checkboxes fill `#E0E4EA`.

**Transparency and blur.** Almost none. `rgba` appears only in the popover shadow and the AI glow's blur. No frosted panels, no scrim gradients, no protection gradients — because there is no imagery to protect text against. Overlays would sit on flat neutrals.

**Motion.** The source file specifies none, so this system defines a minimum: 100–140ms ease on fill and stroke changes, one continuous 900ms linear rotation for the loader. No bounce, no spring, no entrance animation. *(Inferred — not in the source.)*

**Imagery.** The file contains four bitmaps: one avatar photo, one flag sprite for the phone-prefix field, and the header wordmark raster. There is no photographic or illustrative style to speak of. If a screen needs imagery, ask — do not invent it.

**Layout.** Fixed 230px sidebar (72px collapsed) pinned full height, a 56px header, then a 64px page toolbar inside the content column. Content pads 20px. Designs are drawn at 1440px and 1368px content width.

---

## Iconography

One coherent in-house line-icon set, ~194 glyphs, extracted whole into `components/icons/icon-data.js` and exposed as a single `<Icon name size />` component. **No third-party icon library is used and none should be added** — if a glyph is missing, ask rather than substituting Lucide or Heroicons; the stroke language will not match.

Character: single-weight line work on a square box, moderate corner rounding, drawn at 16–24px. Painted with `currentColor`, so colour comes from the parent. A handful of families ship explicit `Filled=Yes` counterparts (check, close, plus, minus, radio) — those are the only fill pairs.

Sizes in use: **12** (context help) · **14** (header chevron) · **16** (chips, sm/md controls, table sort) · **18** (snackbar) · **20** (lg controls, sidebar nav) · **24** (loader, calendar chevrons).

Notable sub-families, because they tell you what the product is: accessibility and dietary needs (`Wheelchair`, `Cane`, `Walker`, `Egg`, `Milk`, `Nut`, `Soy`, `Gluten`, `Vegetrain`), payments (`PaymentDone`, `PaymentDue`, `Chargeback`, `CancelChargeback`, `Reciept`, `Transcation`, `Wallet`), and traveler lifecycle (`WaitingTraveler`, `CanceledTraveler`, `BookingClosed`, `Deactivate`, `Disallow`).

**Emoji and unicode symbols are never used** — with one exception: the breadcrumb separator is a literal `/` character, and the required-field marker is a literal `*`.

Icon names come from the source's layer names, so variant glyphs read as one token (`Chevron2StateDown`, `CheckFilledYes`, `WidgetsStateGreen`, `TripsTripsActive`). Read `components/icons/Icon.d.ts` for the authoritative list.

---

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The one stylesheet consumers link. `@import` list only. |
| `tokens/fig-tokens.css` | All 228 Figma Variables, all modes (default, `data-mode="mobile"`, `data-theme="dark"`). FLOAT tokens are unitless. |
| `tokens/semantic.css` | px-resolved type ramp, radii, spacing, control heights, and the named brand/ink/surface/stroke/shadow aliases components actually use. |
| `tokens/fonts.css` | Outfit, Sora, Inter from Google Fonts. Satoshi is documented but not declared — see caveats. |
| `assets/` | `logo-mark.svg`, `logo-wordmark.svg`, `logo-header.png`, `ai-stars.svg`, `avatar-sample.png`. |
| `guidelines/*.card.html` | 16 foundation specimen cards — colour ramps, type, radii, spacing, elevation, logo, icon sizing. |
| `components/` | The React primitives (below). |
| `ui_kits/voyita_admin/` | Click-through recreation of the operations console. See its README. |
| `SKILL.md` | Agent Skills manifest, for using this system outside this project. |
| `thumbnail.html` | Homepage tile. |

### Components

**core/** — `Button` · `Buttons` · `PrimaryButton` · `PrimaryButton2` · `SecondaryButton` · `SecondaryButton2` · `IconButton` · `Hyperlink` · `HyperlinkWithBg` · `AIButton`

**forms/** — `InputField` · `SearchField` · `Search` · `FieldLabel` · `Label` · `Checkbox` · `CheckboxSquare` · `RadioButton` · `Switch` · `Dropdown` · `Option`

**navigation/** — `Sidebar` · `SidebarItem` · `AppHeader` · `PageToolbar` · `Breadcrumbs` · `Breadcrumb` · `Tabs` · `TabType1` · `SegmentedTabs` · `GlobalTab` · `TabType2` · `Stepper` · plus the per-section nav rows `Open` (Dashboard) · `Trips` · `TravelerS` · `Clients` · `Vendors` · `UsersStaff` · `Reports` · `Configurations` · `AllTrips` · `Waiting` · `MainStepType2`

**feedback/** — `Snackbar` · `Tooltip` · `ContextHelp` · `Loader`

**display/** — `StatusChip` · `StatusChips` · `TagChip` · `TagsChips` · `TripChip` · `Avatar` · `Table` (with `TableHeaderCell`, `TableCell`) · `TableHeader` · `TableRow` · `Calendar` (with `CalendarDay`) · `StatWidget`

**glyphs/** — the kit's variant-axis glyph sets as named components: `Check` · `Close` · `Plus` · `Minus` · `Radio` · `Chevron` · `Arrow` · `Eye` · `Notification` · `Grid` · `View` · `Collapse` · `MenuCollapsed` · `ActionIcons` · `Travelers` · `Widgets` · `CalendarAtoms` · `BookingClosed`

**brand/** — `Logo`

**icons/** — `Icon` (all 194 glyph names) and the `VOYITA_NAV` constant exported from `navigation/Sidebar`

Several of these are deliberate aliases so both vocabularies work: if your Figma layer says *Primary button 2*, *Global - Tab*, *Status Chips* or *table-header*, a component of that name exists and forwards to the parameterised one (`Button`, `SegmentedTabs`, `StatusChip`, `TableHeaderCell`). Prefer the parameterised name in new work.

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what/when + usage). Each directory has one `@dsCard` HTML showing its states.

### How the source's 68 component sets map onto these 27 components

The source explodes each variant into its own Figma component (75 separate Button symbols, 36 InputField symbols, 18 Status Chip symbols). Those are variants, not families, so they are parameterised here:

- **Button** ← Buttons (75) · Primary button (15) · Primary button 2 (15) · Secondary button (15) · Secondary button 2 (15)
- **Hyperlink** ← Hyperlink (12) · hyperlink with bg (15) · Hyperlink with bg (12)
- **InputField** ← InputField (36) · Label (×2)
- **SearchField** ← Search (×3, 12 each)
- **Checkbox / CheckboxSquare** ← Checkbox (4) · Checkbox Square (3) · check · Checkbox/State4
- **RadioButton** ← Radio button (3) · radio (×2)
- **StatusChip** ← Status Chips (18) · Waiting · All Trips (×2)
- **TagChip** ← Tags Chips (×2)
- **Tabs / SegmentedTabs** ← Tab Type 1 · Global - Tab · Grid · View
- **Sidebar / SidebarItem** ← Open/Dashboard · Trips · Traveler's · Clients · Vendors · Users & Staff · Reports · Configurations (×2) · Menu - Collapsed · Collapse · Main Step Type 2 · All Trips (×2)
- **Table / TableRow** ← table-row (2) · table-header
- **Calendar** ← Calendar (2) · Calendar atoms (4)
- **Snackbar / Tooltip / ContextHelp** ← Snackbar (×2) · Tooltip · context-help
- **Dropdown / Option** ← dropdown · Option · chevron (×3) · Arrow
- **Avatar** ← Avatar (3)
- **StatWidget** ← Widgets (4)
- **Stepper / Breadcrumbs** ← Stepper (3) · Breadcrumbs (3) · Breadcrumb
- **Icon** ← the ~94-glyph icon set plus every standalone symbol (194 names total), including `action icons`, `eye`, `notification`, `plus`, `minus`, `close`, `loader`, `context-help` glyphs, `Travelers`, `Grid`, `View`
- **AIButton** ← AI Button (2)

### Intentional additions

**Confirmed intentional additions** — every name below is deliberate and has no counterpart in the source Figma kit:

- `Button` — intentional addition
- `IconButton` — intentional addition
- `Tabs` — intentional addition
- `SegmentedTabs` — intentional addition
- `Sidebar` — intentional addition
- `SidebarItem` — intentional addition
- `VOYITA_NAV` — intentional addition
- `AppHeader` — intentional addition
- `PageToolbar` — intentional addition
- `FieldLabel` — intentional addition
- `StatusChip` — intentional addition
- `TagChip` — intentional addition
- `Table` — intentional addition
- `TableCell` — intentional addition
- `TableHeaderCell` — intentional addition
- `StatWidget` — intentional addition
- `CalendarDay` — intentional addition
- `Icon` — intentional addition

The source kit explodes every variant into its own Figma component, so most of its "families" are variants or single glyphs rather than distinct components. Where a kit name exists, a component of that name exists here too (see the alias note above). These names have **no counterpart in the kit** and are deliberate — each is confirmed as an intentional addition:

| Name | Why it exists |
| --- | --- |
| `Button` | The parameterised control behind the kit's `Buttons` (75), `Primary button` (15), `Primary button 2` (15), `Secondary button` (15) and `Secondary button 2` (15) sets. All five kit names forward to it. |
| `IconButton` | The kit draws "Icon only buttons" inline inside the Calendar frame but never promotes them to a component. Extracted so paging and row actions stay consistent. |
| `Tabs` / `SegmentedTabs` | Parameterised bodies for `Tab Type 1` and `Global - Tab`; both kit names forward to them. |
| `Sidebar` / `SidebarItem` / `VOYITA_NAV` | The kit ships eight separate nav-row sets and two menu shells but no assembled menu. `SidebarItem` is the shared row, `Sidebar` the shell, `VOYITA_NAV` the product's real nav order as data. |
| `AppHeader` | The kit's `header` frame is a frame, not a component. Promoted so screens don't rebuild it. |
| `PageToolbar` | Same: the kit's `Frame 1707486440` page-header strip, promoted to a component. |
| `FieldLabel` | Split out of `InputField` so labels can sit above radio groups and switches, exactly as the source does by hand. The kit's `Label` sets forward to it. |
| `StatusChip` / `TagChip` | Parameterised bodies for `Status Chips` and `Tags Chips`; both plural kit names forward to them. Singular here because you render one. |
| `Table` / `TableCell` / `TableHeaderCell` | The kit defines `table-row` and `table-header` cells but no table. `Table` composes them from column and row data; `TableCell` / `TableHeaderCell` are the individual pills. |
| `StatWidget` | The kit defines the four-tone `Widgets` glyph set but no card around it. This is the card those glyphs imply — treat its layout as a default, not as canon. |
| `CalendarDay` | The kit's `Calendar atoms` under a clearer name; `CalendarAtoms` forwards to it. |
| `Icon` | A wrapper over the extracted glyph data. The kit has no such component — each glyph is its own symbol — and one component is the only sane way to ship 194 of them. |

### Coverage

**68 of 68 component families are covered; 29 components carry them.** The gap between those two numbers is entirely variant collapsing: the source ships each variant as its own Figma component, and ~30 of its 68 "families" are single glyphs (`check`, `close`, `plus`, `minus`, `radio`, `chevron` ×3, `Arrow`, `eye`, `notification`, `Grid`, `View`, `Travelers`, `Widgets`, `action icons`, `Calendar atoms`, `Stepper` nodes, `context-help` glyph, `Collapse`, `Menu - Collapsed`, `Search` ×3, `Label` ×2, `dropdown`) that live in `Icon` or as states of the component above. The map in the previous section accounts for every one.

**0 of 0 text styles.** The source file defines no named TEXT or EFFECT styles — `fig-typography.css` is correctly empty. The type ramp lives in the `Collection` variable set instead, and is resolved in `tokens/semantic.css` and specimen-carded under **Type**.

### Not built

Nothing from the source inventory was skipped. Frames that are pure exploration (`Left-Menu/Ideation`, `Cover`, the empty `page` page) were not reproduced, and the source's duplicated component sets (three identical `Search` sets, two `Tags Chips` sets, two `Configurations` sets) collapse into one component each.

---

## Caveats and open questions

1. **Satoshi has no font file.** It is referenced by six nodes in the source; `--font-satoshi` falls back to Outfit. Send the `.woff2` files if Satoshi matters, or confirm we can drop it.
2. **Inter in the sidebar** looks like a leftover rather than a decision. Confirm whether nav labels should move to Sora.
3. **Two dead palettes.** The teal `primary/Main #055E57` and the second greyscale (`greyscale/200-2` etc.) in the `Ungrouped` collection are unused by any component. Confirm they can be retired.
4. **No motion spec.** All timings here are invented minimums.
5. **No screen frames in the source.** The UI kit's page composition is inferred from the components; only the component styling is authoritative.
6. **Dark mode is a stub.** The source's `Light Mode / Dark Mode` collection defines only three tokens (`--subtext`, `--ui-primary`, `--ui-secondary`). There is no dark surface or dark ink token, so a real dark theme cannot be built from this file.

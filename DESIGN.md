# Design: Two Fiesta Posters

Each wedding is announced like the town's big party: Madrid verbena carteles & Swedish midsommar dance-bills, woodtype letterpress on coloured poster stock. Never ivory, script or botanicals.

## Stocks (colour)

Every section is one full-bleed printed bill on a single stock, w/ a light SVG grain (`--grain`, alpha .13).

| Token | Hex | Role |
|---|---|---|
| `--blue` | #0b4fa0 | Sweden stock. Always Sweden, always first/left |
| `--red` | #c8201e | Madrid stock. Always Madrid, always second/right |
| `--yellow` | #f5c400 | Shared flag-yellow. **Fill reserved for RSVP only** (snipe, RSVP section). Elsewhere only as ink (`&`, `2027`, nav RSVP link, focus ring) |
| `--ink` | #141414 | Bar, gifts, footer stock; ink on paper & yellow |
| `--paper` | #f4f2ec | Text on dark stocks; dress-code stock |
| `--*-tint` | per stock | Secondary text, tinted from the stock hue, never grey |

## Type

- Display: Big Shoulders Display (self-hosted variable woff2), 800–900, uppercase, line-height ~0.85. Monumental: hero names up to 15rem, bill titles up to 12rem.
- Body: Libre Franklin (self-hosted variable), 500–700. Small labels: 0.78–0.85rem, 700, tracking .14–.2em, uppercase, tinted.
- Figures: tabular everywhere.

## Components

- **Hero**: two halves (Sweden blue | Madrid red; stacked on mobile, seam between ROBERT and & GEMA). Names cross the seam, each starting on their own country's stock. Slugs = city, native name (Sverige / España), date.
- **Snipe**: yellow strip pasted at -2deg across the hero, the RSVP call. Soft lifted-paper shadow. The page's single motion moment: pastes in w/ clip-path, 1.1s ease-out-expo; off under reduced motion.
- **Line-up**: programme as a cartel line-up: thick-thin rules (4px + 1px), time column | act in display caps.
- **Facts**: `dl` of Date / Place, tinted labels.
- **Gifts list**: method (display caps + tiny country label) | value | Copy pill (shown only by JS when a value exists).
- **Buttons/pills**: language switch & copy = 2px outlined pill; primary RSVP = ink block w/ display caps & arrow.

## Rules

- Literal labels: headings are the plain name of the thing (Dress code, Gifts).
- Deep links identical in both languages: `#sweden #madrid #dress-code #gifts #rsvp`; language switch keeps the hash.
- Icons: authored inline SVG, 2px stroke, `currentColor`.
- Focus: 3px yellow outline (ink on yellow, blue on paper). Selection: yellow/ink.

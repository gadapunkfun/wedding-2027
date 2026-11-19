# Design: Garden Party at Dusk

The site is the party itself: a courtyard dinner at dusk under string lights, long tables of saturated flowers, hand-painted menu cards. World pinned by the couple's moodboard (2026-11-19). Robert is Croatian, Gema is Spanish, they live in Sweden: one wedding in Sweden, one in Madrid. Never ivory, script-and-sage or wedding-template looks.

## Colour

Each section is a solid "tablecloth" ground; the sky only lives at the top & bottom.

| Token | Hex | Role |
|---|---|---|
| `--night` → `--twilight` → `--dusk` | #121c5c, #1d2f8f, #3550c8 | Twilight sky gradient (hero, footer); bar |
| `--butter` | #ffd45a | String-light glow; primary buttons (RSVP), `&`, handwritten lines on dark |
| `--marigold` | #f39a1c | Programme ground |
| `--blush` | #f8cdd5 | Dress-code ground |
| `--fern` | #24573a | Gifts ground |
| `--raspberry` | #c4245a | RSVP ground; Madrid card edge |
| `--cobalt` | #2f4fd0 | Sweden card edge |
| `--burnt` | #b8520a | Orange lettering on linen (menu course names, native names) |
| `--linen` | #fffdf8 | Menu & place cards; text on dark/saturated grounds |
| `--ink` / `--ink-soft` | #22163a, #4a3f5e | Text on light grounds |

Sweden = cobalt, Madrid = raspberry, everywhere.

## Type

- Display: Sansita Swashed 800 (self-hosted variable): names, section titles, course names, buttons.
- Handwriting: Caveat 700: taglines, native place names (Sverige, España), small labels on dark grounds.
- Body: Libre Franklin 500–700. Figures tabular.

## Shapes

- `.scallop-top`: every section after the hero has an awning/menu scalloped top edge (CSS mask, radius `--scallop` 12–20px) overlapping the previous section.
- `.doily`: cards with an outward scalloped coloured border (CSS mask, `--s` 9px) around a linen panel. Shadows via `filter: drop-shadow` on the unmasked wrapper.
- Cards sit slightly tilted (-2.5° to +2°) like cards on a table; straighten on hover.
- Dashed dividers inside cards & lists; pills (999px radius) for buttons & language switch.

## Illustration (`assets/art/`)

Flat gouache-style SVG, authored for this site (no third-party art):
marigold, poppy, daisy, cornflower, dahlia, sprig, umbel; bunches `bunch-a/b` (hero table edge); course icons rings / candle / coupe; `lights.svg` (string lights); `licitar.svg` (Croatian licitar gingerbread heart, Robert's side; also the favicon).
Corner blooms: daisy on Sweden (midsommar), dahlia on Madrid; cornflower/poppy mark Sweden/Madrid in dress code.

## Motion

One moment: the string lights switch on bulb by bulb at load (CSS inside `lights.svg`, off under reduced motion). Otherwise only small hover lifts.

## Rules

- Literal headings (Programme, Dress code, Gifts). Copy EN + ES only; place names in their own language (Hrvatska · España · Sverige in the footer).
- Deep links identical in both languages: `#programme #sweden #madrid #dress-code #gifts #rsvp`; language switch keeps the hash.
- Focus: 3px butter outline (ink/raspberry on light grounds). Selection: butter/ink.
- Moodboard photos are other people's posts: reference only, never published.

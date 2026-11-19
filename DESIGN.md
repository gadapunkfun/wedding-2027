# Design: Oxblood Stationery

Classy & sexy: the site reads like a letterpress wedding suite set as an editorial. Oxblood ink on warm paper, very large serif capitals, tiny mono details, hairline rules, no illustration. Pinned by the couple's reference (Cordially "Aditya & Priya", 2026-11-19). Robert is Croatian, Gema is Spanish, they live in Sweden: one wedding in Sweden, one in Madrid.

## Colour

| Token | Hex | Role |
|---|---|---|
| `--paper` | #f4eee8 | Page ground |
| `--paper-2` | #ebe2d8 | Tinted band (dress code) |
| `--wine` | #74151f | All text & rules on paper; RSVP & footer ground |
| `--wine-soft` | #8a3d44 | Secondary text (times, TBA values) |
| `--cream` | #f6eee4 | Text on wine |
| `--rule` | wine @ 22% | Hairlines |

Monochrome on purpose: Sweden & Madrid are told apart by name, never by colour.

## Type

- Cormorant Garamond (variable, roman & italic, self-hosted): the wordmark (uppercase, ~12vw, edge to edge), section titles (uppercase), body. Italic for the `&`, city names and links.
- IBM Plex Mono 400, 0.72rem, uppercase, tracked: dates, places, times, labels, nav. Never for prose.

## Shapes & ornament

- Hairline rules (1px wine @ 22%) frame the programme columns, run-of-day lists and gift rows. No cards, no shadows, no rounded boxes.
- Links: italic serif w/ thin underline (RSVP, Reply now); the offset opens on hover.
- One ornament: a small outlined licitar heart w/ dotted piping (Robert's Croatian side), inline SVG in the intro; the favicon is the filled version.
- Optional warm black & white photo band (`.photos`), off until the couple add photos.

## Motion

One moment: the two lines of the wordmark rise out of a clip at load. Off under reduced motion.

## Rules

- Literal headings. Copy EN, ES & HR (/, /es/, /hr/); place names in their own language (Hrvatska · España · Sverige).
- Deep links identical in both languages: `#programme #sweden #madrid #dress-code #gifts #rsvp`; language switch keeps the hash.
- Focus: 2px currentColor outline. Selection: wine/cream (inverted on wine).
- Reference & moodboard images belong to others: never published.

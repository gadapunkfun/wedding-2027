# robertandgema2027.se

Wedding site for Robert & Gema. Plain static HTML/CSS, no build step.

- `/` English: `index.html`
- `/es/` Spanish: `es/index.html`
- `/hr/` Croatian: `hr/index.html`
- `assets/` CSS, JS, self-hosted fonts (Cormorant Garamond & IBM Plex Mono, SIL Open Font License, via Fontsource); see `DESIGN.md`

Run locally: `python3 -m http.server` then open http://localhost:8000 (paths are root-absolute, so opening the file directly won't load CSS).

## Fill in the placeholders

Every spot is marked `<!-- EDIT: ... -->` in **all three** `index.html`, `es/index.html` & `hr/index.html` (`grep -n "EDIT" index.html es/index.html hr/index.html`):

1. Dates (intro line + each wedding's Date)
2. Venues (Place)
3. Programme times (replace `Time TBA` in `<span class="run__time">` w/ e.g. `15:00`; add/remove `<li>` rows)
4. Dress code per wedding
5. Gifts: Swish number, Bizum number, IBAN. Remove the `tba` class & put the same value in `data-copy="..."` to show the Copy button. Delete any row you don't want.
6. RSVP reply-by date
7. Google Form URL (`https://forms.gle/REPLACE-ME`, appears once per page). Tip: one form w/ questions in both languages, or two forms.
8. Optional photos: put them in `assets/photos/` & uncomment the `.photos` block in `index.html` (shown in warm black & white)

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Custom domain: `robertandgema2027.se` (the `CNAME` file already sets it). Tick "Enforce HTTPS" once the certificate is issued.
4. DNS at your .se registrar:
   - `A` records for `robertandgema2027.se`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` (optional): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www` -> `<your-github-username>.github.io`

Spanish guests: share `https://robertandgema2027.se/es/`; Croatian guests: `https://robertandgema2027.se/hr/`.

# AGENTS.md

Static, single-page personal portfolio site for "Gading Ilhams". No build tooling, no framework, no package.json, no tests.

## Project layout

- `index.html` — entire site (header, about, services, projects, contact, footer) in one file. Section links are anchor IDs: `#home`, `#about`, `#services`, `#projects`, `#contact`.
- `assets/css/style.css` — all styling; dark "code/terminal" theme with color palette + fonts in `:root` CSS variables. Fonts (Space Grotesk, Inter, JetBrains Mono) come from a Google Fonts `<link>` in `index.html`.
- `assets/js/main.js` — nav hamburger, scroll shadow, typing effect, scroll-reveal, active-link highlighting.
- `assets/images/` — `2.png` (avatar), `favicon.png`.

## Gotchas

- No dev server, lint, or test commands. Verify changes by opening `index.html` in a browser or serving the dir statically (e.g. `python3 -m http.server`), then hard-refreshing.
- `main.js` relies on CDN globals `Typed` and `ScrollReveal` injected via `<script>` tags in `index.html` (typed.js and scrollreveal must load **before** `main.js`). Don't convert these to npm imports.
- Icons come from the Unicons CDN stylesheet (`uil uil-*` classes) in `index.html`'s `<head>`.
- Content is in English throughout (keep it that way when editing copy). The only Indonesian is the meta description (`lulusan D4 Universitas Harkat Negeri` in `index.html`) and the proper noun "Universitas Harkat Negeri" that appears in body copy.
- "Download CV" buttons link (with `download` attr) to `cv/Gading_Ilham_Saputra_CV_EN.pdf`; update that path if the CV file is replaced. Contact form inputs don't submit anywhere.
- Avoid changing the `:root` palette variables unless intentional — colors are reused throughout `style.css`.

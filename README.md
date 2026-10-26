# Nibrio — Commerce, thoughtfully built.

Premium Shopify theme brand. Flagship product: **Orbis** (Shopify Online Store 2.0 theme).

## Stack

React + Vite + TypeScript · Tailwind CSS v4 · Framer Motion · React Router · Lucide

Brand font: **IBM Plex Mono** + **Space Mono** (Google Fonts). Colours: midnight teal `#102E32`, warm ivory `#F7F5EE`, champagne gold `#D8C49A`.

## Routes

`/` · `/products` · `/products/orbis` · `/docs` · `/docs/:slug` · `/support` · `/about` · `/legal/:page`

## Develop

```bash
npm install
npm run dev
npm run build
```

## Support form

`POST /api/support` — wire to your helpdesk/email (Resend, Help Scout, etc). No secrets in client code. Dev mode shows a clear integration boundary when no backend is present.

## Logo

`public/brand/nibrio-logo.png` — supplied wordmark. Keep proportions; do not recreate with emoji or distort.

## Notes

- No fake products, presets, testimonials, or performance claims. Unreleased work is clearly labelled.
- `prefers-reduced-motion` respected. All buttons/links are functional.

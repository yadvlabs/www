# YADV Labs

Source for [labs.yadv.in](https://labs.yadv.in), the home of YADV Labs' experiments
and projects. The main site is [yadv.in](https://yadv.in).

Built with [Astryx](https://astryx.atmeta.com) (React 19 + StyleX design system)
and Vite, on Astryx's **Stone** theme with Crusty's colours.

## Develop

```sh
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build
```

## Pages and projects

Each page is a Vite entry point (`<page>/index.html` → `src/<page>.tsx` →
`src/pages/`):

- `/`: showcased projects, stealth placeholders, and panels leading to Work
  and Old experiments
- `/reef/`: the Reef project page
- `/crustydex/`: every Crusty, the YADV Labs mascot; `/crustydex/#<slug>`
  opens one entry
- `/work/`: projects built at other organisations
- `/old/`: open source contributions, old experiments from
  [yadvlabs/old](https://github.com/yadvlabs/old), and hacklab

All pages share the header, footer and theme in `src/components/SiteShell.tsx`.
Project content lives in [`src/projects.ts`](src/projects.ts), Crustydex
entries in [`src/crusties.ts`](src/crusties.ts). Images are in
`public/images/`, Crusty artwork in `public/crusty/`.

## Theme

`src/themes/yadv/yadvTheme.ts` extends Astryx's Stone theme (Montserrat,
Figtree and JetBrains Mono, warm greys) with colour from Crusty, the mascot:
blue legs for the accent, plus claw coral, shell green and a cream belly for
tags and highlights. `src/index.css` adds the soft glow behind the page and the
gradient used on hero headings, both drawn from the theme's tokens. After
editing the theme, or after upgrading Astryx, rebuild it:

```sh
npx astryx theme build src/themes/yadv/yadvTheme.ts
```

The Astryx packages are pinned to the same version, so upgrade them together.

## Deploy

Deployed to https://labs.yadv.in with Cloudflare. Build command: `npm run build`, output directory: `dist`.

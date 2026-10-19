# yadv labs

Source for [labs.yadv.in](https://labs.yadv.in), the home of yadv labs' experiments
and projects. The main site is [yadv.in](https://yadv.in).

Built with [Astryx](https://astryx.atmeta.com) (React 19 + StyleX design system)
and Vite, on Astryx's Stone theme with a custom colour palette.

## Develop

```sh
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build
```

## Projects

Projects live in [`src/projects.ts`](src/projects.ts): `featured` is the
showcased project, and `stealthProjects` are the placeholders. Images are in
`public/images/`.

## Theme

`src/themes/yadv/yadvTheme.ts` extends Astryx's **Stone** theme, keeping its
fonts (Montserrat headings, Figtree body, JetBrains Mono code), and recolours
it with colours taken from a Himachal valley photo:

| Family  | Seed      | Used for                               |
| ------- | --------- | -------------------------------------- |
| ridge   | `#5d7481` | blue-grey text, borders and surfaces   |
| glacier | `#158cab` | accent (buttons, links)                |
| meadow  | `#94af23` | success, green tags                    |
| ember   | `#df8963` | warnings, orange tags                  |

The seeds are in `palette.config.json`. After changing them or the theme
source, or after upgrading Astryx, regenerate the palette and rebuild:

```sh
npx astryx theme palette generate src/themes/yadv/palette.config.json \
  --out src/themes/yadv/yadv.palette.ts --overwrite
npx astryx theme build src/themes/yadv/yadvTheme.ts
```

The Astryx packages are pinned to the same version, so upgrade them together.

## Deploy

Deployed to https://labs.yadv.in with Cloudflare. Build command: `npm run build`, output directory: `dist`.

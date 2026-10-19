# yadv labs

Source for [labs.yadv.in](https://labs.yadv.in), the home of yadv labs' experiments
and projects. The main site is [yadv.in](https://yadv.in).

Built with [Astryx](https://astryx.atmeta.com) (React 19 + StyleX design system)
and Vite, using Astryx's Matcha theme with the Stone theme's fonts.

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

`src/themes/yadv/yadvTheme.ts` extends Astryx's built-in **Matcha** theme and
swaps in the **Stone** theme's typefaces: Montserrat for headings, Figtree for
body text and JetBrains Mono for code. `fonts.css` loads them. After editing the
theme, or after upgrading Astryx, rebuild it:

```sh
npx astryx theme build src/themes/yadv/yadvTheme.ts
```

The Astryx packages are pinned to the same version, so upgrade them together.

## Deploy

Deployed to https://labs.yadv.in with Cloudflare. Build command: `npm run build`, output directory: `dist`.

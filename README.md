# yadv labs

Source for [yadv.in](https://yadv.in), the home of yadv labs' experiments and projects.

Built with [Astryx](https://astryx.atmeta.com) (React 19 + StyleX design system)
and Vite, using Astryx's built-in **Matcha** theme.

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

The theme is wired by `src/astryx-themes.ts`, which `npx astryx theme add` generates.
To switch themes, install the theme package, then run
`npx astryx theme add <slug>` and `npx astryx theme use <slug>`. The Astryx
packages are pinned to the same version, so upgrade them together.

## Deploy

Deployed with Cloudflare. Build command: `npm run build`, output directory: `dist`.

# yadv labs

Source for [yadv.in](https://yadv.in), the home of yadv labs' experiments and projects.

Built with [Astryx](https://astryx.atmeta.com) (React 19 + StyleX design system) and Vite.

## Develop

```sh
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build
```

## Projects

Projects are listed in [`src/projects.ts`](src/projects.ts). Add an entry to
`projects` for a public project, or to `stealthProjects` for one still under wraps.

## Theme

The site uses a custom Astryx theme, **Himalaya**, in `src/themes/himalaya/`. Its
colours come from a Himachal meadow: cyan sky, green grass, blue-grey ridges and
snow.

- `palette.config.json`: the seed colours (slate, sky, meadow, summit)
- `himalaya.palette.ts`: the generated tonal palette
- `himalayaTheme.ts`: the theme source, which extends `@astryxdesign/theme-neutral`
- `himalaya.css` / `himalaya.js`: built output, imported by the app

After changing the seeds or the theme source, regenerate:

```sh
npx astryx theme palette generate src/themes/himalaya/palette.config.json \
  --out src/themes/himalaya/himalaya.palette.ts --overwrite
npx astryx theme build src/themes/himalaya/himalayaTheme.ts
```

## Deploy

Pushes to `main` build and deploy to GitHub Pages
(`.github/workflows/deploy.yml`). `public/CNAME` points the site at `yadv.in`.
In the repo settings, set **Pages → Source** to **GitHub Actions**. Then point
yadv.in's DNS at GitHub Pages (A records for the apex domain).

/**
 * yadv: Astryx's Stone theme (Montserrat headings, Figtree body, JetBrains
 * Mono code) recoloured from a Himachal valley photo: misty cloud-white
 * surfaces, blue-grey ridges for text and borders, glacier blue as the accent,
 * meadow green and a warm ember as supporting colours.
 *
 * Palette: ./yadv.palette.ts, generated from ./palette.config.json.
 * Rebuild after editing or upgrading Astryx:
 *   npx astryx theme palette generate src/themes/yadv/palette.config.json \
 *     --out src/themes/yadv/yadv.palette.ts --overwrite
 *   npx astryx theme build src/themes/yadv/yadvTheme.ts
 */
import {defineTheme} from '@astryxdesign/core/theme';
import {stoneTheme} from '@astryxdesign/theme-stone';
import {palette} from './yadv.palette';

const {ridge, glacier, meadow, ember} = palette;
const withAlpha = (color: string, alpha: string) => `${color}${alpha}`;

const sansFallbacks =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export const yadvTheme = defineTheme({
  name: 'yadv',
  extends: stoneTheme,

  typography: {
    scale: {base: 16, ratio: 1.25},
    body: {family: 'Figtree', fallbacks: sansFallbacks},
    heading: {
      family: 'Montserrat',
      fallbacks: `"Figtree", ${sansFallbacks}`,
      weights: {3: 'bold', 4: 'bold'},
    },
    code: {
      family: 'JetBrains Mono',
      fallbacks: '"SF Mono", Monaco, Consolas, monospace',
    },
  },

  tokens: {
    // Surfaces: cloud and snow by day, the shaded valley by night.
    '--color-background-body': [ridge.light[95], ridge.dark[5]],
    '--color-background-surface': ['#ffffff', ridge.dark[10]],
    '--color-background-card': ['#ffffff', ridge.dark[10]],
    '--color-background-popover': ['#ffffff', ridge.dark[15]],
    '--color-background-muted': [ridge.light[90], ridge.dark[15]],
    '--color-background-inverted': [ridge.light[15], ridge.dark[95]],

    // Accent: glacier blue from the valley floor.
    '--color-accent': [glacier.light[40], glacier.dark[80]],
    '--color-accent-muted': [
      withAlpha(glacier.light[40], '14'),
      withAlpha(glacier.dark[80], '20'),
    ],
    '--color-text-accent': [glacier.light[40], glacier.dark[80]],
    '--color-icon-accent': [glacier.light[40], glacier.dark[80]],
    '--color-on-accent': ['#ffffff', ridge.dark[5]],

    // Neutrals: blue-grey ridges.
    '--color-neutral': [withAlpha(ridge.light[15], '0f'), withAlpha(ridge.dark[95], '1a')],
    '--color-overlay': [withAlpha(ridge.light[10], '80'), withAlpha(ridge.dark[0], 'cc')],
    '--color-overlay-hover': [withAlpha(ridge.light[15], '0d'), withAlpha(ridge.dark[95], '0d')],
    '--color-overlay-pressed': [withAlpha(ridge.light[15], '1a'), withAlpha(ridge.dark[95], '1a')],
    '--color-text-primary': [ridge.light[15], ridge.dark[95]],
    '--color-text-secondary': [ridge.light[40], ridge.dark[70]],
    '--color-text-disabled': [ridge.light[80], ridge.dark[40]],
    '--color-icon-primary': [ridge.light[15], ridge.dark[95]],
    '--color-icon-secondary': [ridge.light[50], ridge.dark[60]],
    '--color-icon-disabled': [ridge.light[80], ridge.dark[40]],
    '--color-on-light': ridge.light[15],
    '--color-border': [ridge.light[90], withAlpha(ridge.dark[95], '1a')],
    '--color-border-emphasized': [ridge.light[60], ridge.dark[40]],
    '--color-skeleton': [ridge.light[85], ridge.dark[30]],
    '--color-shadow': [withAlpha(ridge.light[15], '1a'), withAlpha(ridge.dark[0], '4d')],

    // Status: meadow for success, ember for warnings.
    '--color-success': [meadow.light[30], meadow.dark[80]],
    '--color-success-muted': [meadow.light[90], meadow.dark[80]],
    '--color-on-success': [meadow.light[30], meadow.dark[90]],
    '--color-warning': [ember.light[30], ember.dark[80]],
    '--color-warning-muted': [ember.light[90], ember.dark[80]],
    '--color-on-warning': [ember.light[30], ember.dark[90]],

    // Categorical colours used by Badge and Card variants.
    '--color-background-blue': [glacier.light[90], glacier.dark[30]],
    '--color-border-blue': [glacier.light[85], glacier.dark[25]],
    '--color-icon-blue': [glacier.light[30], glacier.dark[90]],
    '--color-text-blue': [glacier.light[30], glacier.dark[90]],

    '--color-background-cyan': [glacier.light[95], glacier.dark[25]],
    '--color-border-cyan': [glacier.light[90], glacier.dark[20]],
    '--color-icon-cyan': [glacier.light[30], glacier.dark[90]],
    '--color-text-cyan': [glacier.light[30], glacier.dark[90]],

    '--color-background-green': [meadow.light[90], meadow.dark[30]],
    '--color-border-green': [meadow.light[85], meadow.dark[25]],
    '--color-icon-green': [meadow.light[30], meadow.dark[90]],
    '--color-text-green': [meadow.light[30], meadow.dark[90]],

    '--color-background-orange': [ember.light[90], ember.dark[30]],
    '--color-border-orange': [ember.light[85], ember.dark[25]],
    '--color-icon-orange': [ember.light[30], ember.dark[90]],
    '--color-text-orange': [ember.light[30], ember.dark[90]],

    '--color-background-gray': [ridge.light[90], ridge.dark[25]],
    '--color-border-gray': [ridge.light[85], ridge.dark[20]],
    '--color-icon-gray': [ridge.light[30], ridge.dark[90]],
    '--color-text-gray': [ridge.light[30], ridge.dark[90]],
  },
});

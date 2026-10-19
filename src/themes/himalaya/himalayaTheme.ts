/**
 * Himalaya — the yadv labs theme.
 *
 * Colours are taken from a meadow high in the Himachal hills: a deep cyan sky,
 * sunlit green grass, and blue-grey ridges topped with snow. The light mode is
 * a clear afternoon; the dark mode is the same valley after sundown.
 *
 * Palette: ./himalaya.palette.ts (generated from ./palette.config.json with
 * `npm run astryx -- theme palette generate`).
 */
import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import {palette} from './himalaya.palette';

const {slate, sky, meadow, summit} = palette;
const withAlpha = (color: string, alpha: string) => `${color}${alpha}`;

export const himalayaTheme = defineTheme({
  name: 'himalaya',
  extends: neutralTheme,

  typography: {
    scale: {base: 15, ratio: 1.22},
    body: {
      family: 'Figtree',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    heading: {
      family: 'Figtree',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      weights: {1: 'bold', 2: 'bold', 3: 'bold', 4: 'bold'},
    },
    code: {
      family: 'ui-monospace',
      fallbacks:
        '"SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },

  tokens: {
    // Surfaces: snowfields by day, slate ridges by night.
    '--color-background-body': [slate.light[95], slate.dark[5]],
    '--color-background-surface': [slate.light[100], slate.dark[10]],
    '--color-background-card': [slate.light[100], slate.dark[10]],
    '--color-background-popover': [slate.light[100], slate.dark[15]],
    '--color-background-muted': [slate.light[90], slate.dark[15]],

    // Accent: the open Himalayan sky.
    '--color-accent': [sky.light[40], sky.dark[70]],
    '--color-accent-muted': [sky.light[90], withAlpha(sky.dark[60], '33')],
    '--color-text-accent': [sky.light[35], sky.dark[75]],
    '--color-icon-accent': [sky.light[40], sky.dark[75]],
    '--color-on-accent': [slate.light[100], slate.dark[5]],

    // Text and icons in mountain blue-grey.
    '--color-text-primary': [slate.light[10], slate.dark[95]],
    '--color-text-secondary': [slate.light[35], slate.dark[70]],
    '--color-text-disabled': [slate.light[60], slate.dark[35]],
    '--color-icon-primary': [slate.light[10], slate.dark[95]],
    '--color-icon-secondary': [slate.light[40], slate.dark[65]],
    '--color-icon-disabled': [slate.light[60], slate.dark[35]],

    '--color-border': [
      withAlpha(slate.light[30], '24'),
      withAlpha(slate.dark[80], '24'),
    ],
    '--color-border-emphasized': [slate.light[80], slate.dark[35]],
    '--color-skeleton': [slate.light[80], slate.dark[30]],

    // Status: meadow green for success, the trekker's red jacket for errors.
    '--color-success': [meadow.light[35], meadow.dark[75]],
    '--color-success-muted': [meadow.light[90], withAlpha(meadow.dark[60], '33')],
    '--color-error': [summit.light[40], summit.dark[75]],
    '--color-error-muted': [summit.light[90], withAlpha(summit.dark[60], '33')],

    // Category colours used by Badge and Card variants.
    '--color-background-green': [meadow.light[90], meadow.dark[20]],
    '--color-border-green': [meadow.light[80], meadow.dark[45]],
    '--color-icon-green': [meadow.light[35], meadow.dark[75]],
    '--color-text-green': [meadow.light[30], meadow.dark[80]],

    '--color-background-blue': [sky.light[90], sky.dark[20]],
    '--color-border-blue': [sky.light[80], sky.dark[45]],
    '--color-icon-blue': [sky.light[35], sky.dark[75]],
    '--color-text-blue': [sky.light[30], sky.dark[80]],

    '--color-background-gray': [slate.light[90], slate.dark[20]],
    '--color-border-gray': [slate.light[80], slate.dark[30]],
    '--color-icon-gray': [slate.light[35], slate.dark[70]],
    '--color-text-gray': [slate.light[20], slate.dark[85]],

    '--color-background-red': [summit.light[90], summit.dark[20]],
    '--color-border-red': [summit.light[80], summit.dark[45]],
    '--color-icon-red': [summit.light[35], summit.dark[75]],
    '--color-text-red': [summit.light[30], summit.dark[80]],

    '--color-shadow': [
      withAlpha(slate.light[10], '1F'),
      withAlpha(slate.dark[0], '66'),
    ],
  },

  components: {
    card: {
      base: {borderRadius: '20px'},
    },
    button: {
      base: {borderRadius: '9999px'},
    },
  },
});

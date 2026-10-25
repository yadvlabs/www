/**
 * YADV Labs theme: Astryx's Stone theme (Montserrat, Figtree, JetBrains Mono,
 * warm greys) with colour taken from Crusty, the mascot: blue legs for the
 * accent, plus claw coral, shell green and a cream belly for highlights.
 *
 * Rebuild after editing or upgrading Astryx:
 *   npx astryx theme build src/themes/yadv/yadvTheme.ts
 */
import {defineTheme} from '@astryxdesign/core/theme';
import {stoneTheme} from '@astryxdesign/theme-stone';

export const yadvTheme = defineTheme({
  name: 'yadv',
  extends: stoneTheme,

  localTokens: {
    // Crusty's palette, for page decoration (index.css).
    '--yadv-claw': ['#f94838', '#ff7a6b'],
    '--yadv-leg': ['#0a74dc', '#5aaef5'],
    '--yadv-shell': ['#2f8f3e', '#8fd06a'],
    '--yadv-belly': ['#fde4aa', '#3b3322'],
    '--yadv-glow-claw': ['#f9483829', '#ff7a6b1f'],
    '--yadv-glow-leg': ['#0a74dc24', '#5aaef51f'],
    '--yadv-glow-shell': ['#2f8f3e1f', '#8fd06a1a'],
  },

  tokens: {
    // Warm paper instead of flat grey.
    '--color-background-body': ['#fbf9f4', '#0f1013'],
    '--color-background-muted': ['#f2eee4', '#1c1d22'],

    // Accent: Crusty's blue legs.
    '--color-accent': ['#0a6fd1', '#6cb6ff'],
    '--color-accent-muted': ['#0a6fd11a', '#6cb6ff24'],
    '--color-text-accent': ['#0a62b8', '#7cbfff'],
    '--color-icon-accent': ['#0a6fd1', '#6cb6ff'],
    '--color-on-accent': ['#ffffff', '#08111d'],

    // Categorical tints in Crusty's colours (Badge and Card variants).
    '--color-background-blue': ['#e3f0fd', '#13314f'],
    '--color-border-blue': ['#c6e0fa', '#1d4774'],
    '--color-text-blue': ['#0a5299', '#b5d8f7'],
    '--color-icon-blue': ['#0a5299', '#b5d8f7'],
    '--color-background-green': ['#e8f4d9', '#1d3a1a'],
    '--color-border-green': ['#d2e9b4', '#2a5226'],
    '--color-text-green': ['#2c6a1f', '#c5e6a6'],
    '--color-icon-green': ['#2c6a1f', '#c5e6a6'],
    '--color-background-red': ['#ffe6e1', '#4a1d18'],
    '--color-border-red': ['#ffcbc2', '#6b2a22'],
    '--color-text-red': ['#b3261e', '#ffc2b8'],
    '--color-icon-red': ['#b3261e', '#ffc2b8'],
    '--color-background-yellow': ['#fff1cc', '#3b3322'],
    '--color-border-yellow': ['#fde4aa', '#544628'],
    '--color-text-yellow': ['#7a5a12', '#fde4aa'],
    '--color-icon-yellow': ['#7a5a12', '#fde4aa'],

    // Rounder, friendlier containers.
    '--radius-container': '1.25rem',
    '--radius-page': '2rem',
  },
});

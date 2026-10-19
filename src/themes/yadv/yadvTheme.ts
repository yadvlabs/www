/**
 * yadv: Astryx's Matcha theme with the Stone theme's typefaces
 * (Montserrat headings, Figtree body, JetBrains Mono code) in place of
 * Matcha's handwritten headings. Colours and type scale stay Matcha's.
 *
 * Rebuild after editing or upgrading Astryx:
 *   npx astryx theme build src/themes/yadv/yadvTheme.ts
 */
import {defineTheme} from '@astryxdesign/core/theme';
import {matchaTheme} from '@astryxdesign/theme-matcha';

const sansFallbacks =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export const yadvTheme = defineTheme({
  name: 'yadv',
  extends: matchaTheme,
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
});

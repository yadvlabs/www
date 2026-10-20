import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const page = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// Pages: / (projects), /work/ (work at other organisations) and /old/ (old experiments).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        work: page('work/index.html'),
        old: page('old/index.html'),
      },
    },
  },
});

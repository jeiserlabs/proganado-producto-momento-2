import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path ensures GitHub Pages & static hosting work out-of-the-box
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});

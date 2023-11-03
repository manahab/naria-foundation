import { resolve, dirname } from 'path';
import { defineConfig } from 'vite';

import { fileURLToPath } from 'node:url';

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: './src/',
  publicDir: '../static/',
  base: './',
  server: {
    host: true,
    open: !isCodeSandbox // Open if it's not a CodeSandbox
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        // intro: resolve(__dirname, './src/Basics/Intro/index.html'),
      }
    },
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  }
});
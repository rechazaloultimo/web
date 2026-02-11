// astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';
import svelte from '@astrojs/svelte';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Tu dominio final sin barra al final
  site: 'https://rodrigopizarro.com.ar', 
  base: '/',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  integrations: [svelte()],
});
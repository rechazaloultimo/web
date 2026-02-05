// astro.config.mjs

import { defineConfig } from 'astro/config';
import path from 'path';

// 🚨 ¡LA CORRECCIÓN CRÍTICA! 🚨
// Obtenemos el path del archivo actual (import.meta.url) y lo convertimos a un path de directorio.
import { fileURLToPath } from 'url';
import svelte from '@astrojs/svelte';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ------------------------------

export default defineConfig({
  // ... otras configuraciones

  vite: {
    resolve: {
      alias: {
        // Ahora path.resolve(__dirname, './src') FUNCIONARÁ
        '@': path.resolve(__dirname, './src'),
      },
    },
  },

  integrations: [svelte()],
});
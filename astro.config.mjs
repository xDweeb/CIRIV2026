// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xDweeb.github.io',
  base: '/CIRIV2026',
  trailingSlash: 'always',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    define: {
      __DATE__: `"${new Date().toISOString()}"`,
    },
  },
});
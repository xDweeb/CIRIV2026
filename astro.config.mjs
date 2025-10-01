// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ciriv.org',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets',
    format: 'directory'
  },
  vite: {
    define: {
      __DATE__: `"${new Date().toISOString()}"`,
    },
  },
});
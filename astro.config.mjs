// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io', // Replace with your GitHub username
  base: '/ciriv-2025',
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
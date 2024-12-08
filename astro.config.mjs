// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // site: 'https://mindmattersmemphis.github.io',
  // base: 'astrosite',
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ['@radix-ui/react-navigation-menu']
    }
  }
});
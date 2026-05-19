import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://duganzabran.github.io',
  base: '/NebioLabs/',
  integrations: [tailwind()],
});

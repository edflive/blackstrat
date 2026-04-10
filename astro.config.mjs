import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://edflive.github.io',
  base: '/blackstrat',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});

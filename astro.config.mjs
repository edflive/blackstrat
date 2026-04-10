import { defineConfig } from 'astro/config';

const isGitHubActions = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  site: 'https://edflive.github.io',
  base: isGitHubActions ? '/blackstrat' : '/',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});

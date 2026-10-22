// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain. Netlify provides URL automatically (the primary domain, including a custom
// domain once connected). SITE_URL can override it, e.g. https://www.fiaflorals.co.uk
const site = process.env.SITE_URL || process.env.URL || 'https://fia-florals.netlify.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
});

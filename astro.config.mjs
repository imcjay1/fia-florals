// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live domain. Set SITE_URL in Vercel (Project → Settings → Environment Variables)
// once the custom domain is connected, e.g. https://www.fiaflorals.co.uk
const site = process.env.SITE_URL || 'https://fia-florals.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
});

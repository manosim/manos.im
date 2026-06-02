// @ts-check
import { loadEnv } from "vite";
import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const env = loadEnv(import.meta.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  env: {
    // prettier-ignore
    schema: {
      // Public
      ENVIRONMENT: envField.string({ context: 'client', access: 'public', optional: false }),
      SITE_URL: envField.string({ context: 'client', access: 'public', optional: false, url: true }),
      PUBLIC_GTAG_ID: envField.string({ context: 'client', access: 'public', optional: true }),
    },
    validateSecrets: true,
  },

  site: env.SITE_URL,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],
});

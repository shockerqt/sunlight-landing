import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://sunlight.cl',
  integrations: [tailwind(), sitemap()]
});
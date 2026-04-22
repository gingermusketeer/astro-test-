import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // SSR mode required for Cloudflare Workers deployment via @astrojs/cloudflare adapter
  adapter: cloudflare(),
  output: 'server',
});

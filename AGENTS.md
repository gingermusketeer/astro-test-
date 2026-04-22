# Agent Instructions

## Taking a Screenshot

The site uses Astro SSR with the Cloudflare Workers adapter, so `dist/client/` only contains static assets (CSS, JS, images) — not HTML. Use `wrangler dev` pointed at the generated config to run the worker locally.

To capture a screenshot of the site for verification or documentation:

1. **Build the site** (if not already built):
   ```bash
   npm run build
   ```

2. **Start a local Cloudflare Workers dev server** from the project root:
   ```bash
   npx wrangler dev --config dist/server/wrangler.json --port 4321 &
   ```

3. **Navigate to the site** in the Playwright browser tool:
   ```
   url: http://127.0.0.1:4321/
   ```

4. **Take the screenshot** using the Playwright screenshot tool (no filename argument needed — it will be saved automatically to `/tmp/playwright-logs/`):
   ```
   playwright-browser_take_screenshot
   ```

5. **Scroll and capture additional sections** if needed:
   - Use `playwright-browser_evaluate` with `window.scrollTo(0, <px>)` to scroll to a section before screenshotting.
   - Alternatively, click anchor links (e.g. `#tours`, `#contact`) to jump to sections.

6. **Stop the server** when done:
   ```bash
   kill $(lsof -t -i:4321)
   ```

> **Note:** `localhost` may be blocked by the browser sandbox — always use `127.0.0.1` as the hostname.
> Run `wrangler dev` from the **project root** (not from `dist/server/`). Running from `dist/server/` causes a path conflict with `.wrangler/deploy/config.json`.

## Deploying to Cloudflare

The site is deployed as a Cloudflare Worker. The `wrangler.toml` at the project root configures the worker name and enables observability logging.

To deploy:
```bash
npm run deploy
```

This runs `astro build` followed by `wrangler deploy`, which uploads the built worker from `dist/server/` to Cloudflare using the generated `dist/server/wrangler.json`.

> **Note:** `wrangler deploy` requires you to be authenticated (`npx wrangler login`) and have a Cloudflare account with Workers access.

# Agent Instructions

## Taking a Screenshot

To capture a screenshot of the site for verification or documentation:

1. **Build the site** (if not already built):
   ```bash
   npm run build
   ```

2. **Start a local HTTP server** on the built output:
   ```bash
   cd dist && python3 -m http.server 4321 --bind 127.0.0.1 &
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

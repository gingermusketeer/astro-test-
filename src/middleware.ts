import { defineMiddleware } from 'astro:middleware';

function getTopLocale(acceptLanguage: string): string {
  // Parse "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7" into sorted language tags
  return (
    acceptLanguage
      .split(',')
      .map((part) => {
        const [tag, qStr] = part.trim().split(';q=');
        const q = qStr !== undefined ? parseFloat(qStr) : 1.0;
        return { tag: tag.trim(), q: isNaN(q) ? 1.0 : q };
      })
      .sort((a, b) => b.q - a.q)[0]?.tag ?? ''
  );
}

export const onRequest = defineMiddleware(({ request, url, redirect }, next) => {
  // Only auto-redirect from the root path to avoid redirect loops
  if (url.pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') ?? '';
    const topLocale = getTopLocale(acceptLanguage);
    // Redirect to French only when French is the highest-priority language
    if (/^fr\b/i.test(topLocale)) {
      return redirect('/fr/', 302);
    }
  }
  return next();
});

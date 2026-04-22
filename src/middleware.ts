import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(({ request, url, redirect }, next) => {
  // Only auto-redirect from the root path to avoid redirect loops
  if (url.pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') ?? '';
    // Parse the Accept-Language header to find the highest-priority language
    // Format: "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
    const prefersFrench = /^fr\b/i.test(acceptLanguage);
    if (prefersFrench) {
      return redirect('/fr/', 302);
    }
  }
  return next();
});

/** Vite base URL, always ends with `/` (e.g. `/` locally, `/scott-portfolio/` on Pages). */
export const BASE = import.meta.env.BASE_URL || '/';

/** Join an app-relative path to the deploy base. */
export function withBase(path = '') {
  if (!path) return BASE;
  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:')) return path;
  const clean = String(path).replace(/^\//, '');
  return `${BASE}${clean}`;
}

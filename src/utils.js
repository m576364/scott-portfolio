export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function externalAttrs(href) {
  if (!href || href.startsWith('/') || href.startsWith('#')) {
    return '';
  }
  return ' target="_blank" rel="noreferrer"';
}

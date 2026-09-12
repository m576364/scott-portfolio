export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function externalAttrs(href) {
  if (!href || href.startsWith('/') || href.startsWith('#') || href.startsWith('mailto:')) {
    return '';
  }
  return ' target="_blank" rel="noopener noreferrer"';
}

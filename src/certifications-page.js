import './styles.css';
import { certifications } from './certifications.js';
import { escapeHtml, externalAttrs } from './utils.js';
import { mountChrome } from './shell.js';

function statusLabel(status) {
  return status.replaceAll('-', ' ');
}

function renderLicense(cert) {
  if (cert.licenseUrl) {
    return `<a class="btn btn-primary" href="${escapeHtml(cert.licenseUrl)}"${externalAttrs(cert.licenseUrl)}>Verify credential</a>`;
  }
  return `<span class="license-missing mono">license link pending</span>`;
}

function renderDates(cert) {
  const bits = [];
  if (cert.issued) bits.push(`Issued ${escapeHtml(cert.issued)}`);
  if (cert.expires) bits.push(`Expires ${escapeHtml(cert.expires)}`);
  if (!bits.length) return '';
  return `<p class="period mono">${bits.join(' · ')}</p>`;
}

mountChrome({
  activeId: 'certs',
  mainHtml: `
  <main class="page">
    <section class="page-hero section">
      <p class="eyebrow mono">certifications // credentials</p>
      <h1>Licenses, proof links, and where they apply</h1>
      <p class="lede">
        Each certification links to a Credly or Coursera verification page, plus short applicability notes
        for CyberSecOps and Junior Cyber Engineer trajectory work.
      </p>
    </section>

    <section class="section">
      <div class="cert-detail-grid cert-badge-grid">
        ${certifications
          .map(
            (cert) => `
          <article id="${escapeHtml(cert.id)}" class="cert-detail cert-badge-card reveal ${cert.status === 'pending-link' ? 'is-placeholder' : ''}">
            <div class="cert-mark mono" aria-hidden="true">${escapeHtml((cert.issuer || '?').slice(0, 1))}</div>
            <div class="cert-top">
              <div>
                <h2>${escapeHtml(cert.name)}</h2>
                <p class="issuer">${escapeHtml(cert.issuer)}</p>
              </div>
              <span class="cert-badge mono">${escapeHtml(statusLabel(cert.status))}</span>
            </div>
            ${renderDates(cert)}
            <h3>Applicability / use cases</h3>
            <ul>
              ${(cert.applicability || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
            <div class="cta-row case-links">
              ${renderLicense(cert)}
            </div>
          </article>`
          )
          .join('')}
      </div>
    </section>
  </main>
  `,
});

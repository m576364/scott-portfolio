import { site } from './content.js';
import { escapeHtml, externalAttrs } from './utils.js';

const NAV = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/projects.html', label: 'Projects', id: 'projects' },
  { href: '/certifications.html', label: 'Certifications', id: 'certs' },
  { href: '/#contact', label: 'Contact', id: 'contact' },
];

export function renderTopbar(activeId) {
  const linkedin = site.links.linkedin
    ? `<a class="nav-social" href="${escapeHtml(site.links.linkedin)}"${externalAttrs(site.links.linkedin)}>LinkedIn</a>`
    : '';
  const github = site.links.github
    ? `<a class="nav-social" href="${escapeHtml(site.links.github)}"${externalAttrs(site.links.github)}>GitHub</a>`
    : '';

  return `
    <header class="topbar">
      <a class="brand" href="/">${escapeHtml(site.name)}</a>
      <nav class="nav" aria-label="Primary">
        ${NAV.map(
          (item) => `
          <a href="${escapeHtml(item.href)}" class="${item.id === activeId ? 'is-active' : ''}">${escapeHtml(item.label)}</a>`
        ).join('')}
        ${linkedin}
        ${github}
      </nav>
    </header>
  `;
}

export function renderFooter() {
  return `
    <footer class="footer">
      <p class="mono">© ${new Date().getFullYear()} ${escapeHtml(site.fullName)} · local + GitHub</p>
      <p class="footer-links">
        ${site.links.github ? `<a href="${escapeHtml(site.links.github)}"${externalAttrs(site.links.github)}>GitHub</a>` : ''}
        ${site.links.linkedin ? `<a href="${escapeHtml(site.links.linkedin)}"${externalAttrs(site.links.linkedin)}>LinkedIn</a>` : ''}
        ${site.links.portfolioRepo ? `<a href="${escapeHtml(site.links.portfolioRepo)}"${externalAttrs(site.links.portfolioRepo)}>This repo</a>` : ''}
      </p>
    </footer>
  `;
}

export function renderContactActions() {
  const parts = [];
  if (site.email) {
    parts.push(
      `<a class="btn btn-primary" href="mailto:${escapeHtml(site.email)}">${escapeHtml(site.email)}</a>`
    );
  }
  if (site.links.linkedin) {
    parts.push(
      `<a class="btn btn-ghost" href="${escapeHtml(site.links.linkedin)}"${externalAttrs(site.links.linkedin)}>LinkedIn</a>`
    );
  }
  if (site.links.github) {
    parts.push(
      `<a class="btn btn-ghost" href="${escapeHtml(site.links.github)}"${externalAttrs(site.links.github)}>GitHub</a>`
    );
  }
  if (!site.email && !site.links.linkedin) {
    parts.push(
      `<p class="note">Add your email and LinkedIn URL in <span class="mono">src/content.js</span> to finish contact links.</p>`
    );
  }
  return parts.join('');
}

export function mountChrome({ activeId, mainHtml }) {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${renderTopbar(activeId)}
    ${mainHtml}
    ${renderFooter()}
  `;

  const glow = document.querySelector('#cursor-glow');
  if (glow) {
    window.addEventListener('pointermove', (event) => {
      glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.16 }
  );
  revealItems.forEach((el) => observer.observe(el));
}

import { site } from './content.js';
import { escapeHtml, externalAttrs } from './utils.js';
import { withBase } from './base.js';

const NAV = [
  { href: '', label: 'Home', id: 'home' },
  { href: 'projects.html', label: 'Projects', id: 'projects' },
  { href: 'certifications.html', label: 'Certifications', id: 'certs' },
  { href: 'security.html', label: 'Security', id: 'security' },
  { href: 'index.html#contact', label: 'Contact', id: 'contact' },
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
      <a class="brand" href="${withBase('')}">${escapeHtml(site.name)}</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <nav id="primary-nav" class="nav" aria-label="Primary">
        ${NAV.map(
          (item) => `
          <a href="${withBase(item.href)}" class="${item.id === activeId ? 'is-active' : ''}">${escapeHtml(item.label)}</a>`
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
      <p class="mono">© ${new Date().getFullYear()} ${escapeHtml(site.fullName)} · static · HTTPS</p>
      <p class="footer-links">
        ${site.links.github ? `<a href="${escapeHtml(site.links.github)}"${externalAttrs(site.links.github)}>GitHub</a>` : ''}
        ${site.links.linkedin ? `<a href="${escapeHtml(site.links.linkedin)}"${externalAttrs(site.links.linkedin)}>LinkedIn</a>` : ''}
        ${site.links.portfolioRepo ? `<a href="${escapeHtml(site.links.portfolioRepo)}"${externalAttrs(site.links.portfolioRepo)}>This repo</a>` : ''}
        <a href="${withBase('security.html')}">Security posture</a>
        ${site.links.resume ? `<a href="${withBase(site.links.resume)}"${externalAttrs(withBase(site.links.resume))}>Resume</a>` : ''}
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
  if (site.links.resume) {
    parts.push(
      `<a class="btn btn-ghost" href="${withBase(site.links.resume)}"${externalAttrs(withBase(site.links.resume))}>Resume PDF</a>`
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

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
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

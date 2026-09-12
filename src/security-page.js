import './styles.css';
import { site } from './content.js';
import { escapeHtml, externalAttrs } from './utils.js';
import { withBase } from './base.js';
import { mountChrome } from './shell.js';

mountChrome({
  activeId: 'security',
  mainHtml: `
  <main class="page">
    <section class="page-hero section">
      <p class="eyebrow mono">security // posture</p>
      <h1>How this site stays small and hard to abuse</h1>
      <p class="lede">
        This is a static portfolio. No login, no database, no server-side app code.
        Hardening focuses on hosting integrity, browser policy, supply chain, and content hygiene.
      </p>
    </section>

    <section class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">01 // threat model</p>
        <h2>What we worry about</h2>
      </div>
      <div class="skills-grid">
        <article class="skill-card">
          <h3>XSS / injected script</h3>
          <p class="note">No user-generated content. Dynamic strings are escaped. CSP restricts script sources.</p>
        </article>
        <article class="skill-card">
          <h3>Dependency compromise</h3>
          <p class="note">Minimal npm surface (Vite). Lockfile committed. Dependabot watches updates.</p>
        </article>
        <article class="skill-card">
          <h3>Content leakage</h3>
          <p class="note">No Maximus internals, secrets, or capture-library source in this public repo.</p>
        </article>
      </div>
    </section>

    <section class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">02 // controls</p>
        <h2>What is in place</h2>
      </div>
      <ul class="security-list">
        <li>HTTPS via GitHub Pages</li>
        <li>Content-Security-Policy and Referrer-Policy meta on every page</li>
        <li>External links use <span class="mono">rel="noopener noreferrer"</span></li>
        <li>Mailto + LinkedIn contact only (no third-party form backend)</li>
        <li>No analytics cookies or trackers</li>
        <li><a href="${withBase('.well-known/security.txt')}">security.txt</a> and repo <a href="${escapeHtml(site.links.portfolioRepo)}/blob/main/SECURITY.md"${externalAttrs(site.links.portfolioRepo)}>SECURITY.md</a></li>
      </ul>
    </section>

    <section class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">03 // report</p>
        <h2>Found something?</h2>
      </div>
      <p class="contact-copy">
        Email ${escapeHtml(site.email)} with repro steps. Please avoid destructive testing against GitHub infrastructure.
      </p>
      <div class="cta-row">
        <a class="btn btn-primary" href="mailto:${escapeHtml(site.email)}">Report a finding</a>
        <a class="btn btn-ghost" href="${escapeHtml(site.links.portfolioRepo)}"${externalAttrs(site.links.portfolioRepo)}>Source repo</a>
      </div>
    </section>
  </main>
  `,
});

import './styles.css';
import {
  site,
  about,
  highlights,
  experience,
  education,
  skills,
  featuredProjects,
  linkedinHighlights,
} from './content.js';
import { escapeHtml } from './utils.js';
import { mountChrome, renderContactActions } from './shell.js';

const educationSection =
  education?.length > 0
    ? `
    <section id="education" class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">02b — education</p>
        <h2>Where I trained</h2>
      </div>
      <div class="timeline">
        ${education
          .map(
            (ed) => `
          <article class="timeline-card">
            <div class="timeline-meta">
              <h3>${escapeHtml(ed.credential)}</h3>
              <p class="org">${escapeHtml(ed.school)}</p>
              ${ed.period ? `<p class="period mono">${escapeHtml(ed.period)}</p>` : ''}
            </div>
            <p class="note">${escapeHtml(ed.detail || '')}</p>
          </article>`
          )
          .join('')}
      </div>
    </section>`
    : '';

const linkedinSection =
  linkedinHighlights.length > 0
    ? `
    <section id="linkedin" class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">03 — linkedin highlights</p>
        <h2>What I surface from the profile</h2>
      </div>
      <p class="section-intro">
        Curated from
        <a href="${escapeHtml(site.links.linkedin)}" target="_blank" rel="noreferrer">linkedin.com/in/scott-streamer</a>.
        Full credential links live on the certifications page.
      </p>
      <div class="highlight-cards">
        ${linkedinHighlights
          .map(
            (item) => `
          <article class="skill-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p class="note">${escapeHtml(item.detail)}</p>
          </article>`
          )
          .join('')}
      </div>
    </section>`
    : '';

mountChrome({
  activeId: 'home',
  mainHtml: `
  <main id="top">
    <section class="hero">
      <div class="hero-bg" aria-hidden="true">
        <div class="orb orb-a"></div>
        <div class="orb orb-b"></div>
        <div class="grid-fade"></div>
      </div>
      <div class="hero-inner">
        <p class="eyebrow mono">portfolio // local + github</p>
        <h1 class="display">
          <span class="display-name">${escapeHtml(site.name)}</span>
          <span class="display-role">${escapeHtml(site.role)}</span>
        </h1>
        <p class="lede">${escapeHtml(site.tagline)}</p>
        <p class="hero-sub mono">${escapeHtml(site.fullName)} · ${escapeHtml(site.location)}</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="#contact">Say hello</a>
          <a class="btn btn-ghost" href="/projects.html">See projects</a>
          <a class="btn btn-ghost" href="/certifications.html">Certifications</a>
        </div>
        <ul class="highlight-strip">
          ${highlights
            .map(
              (h) => `
            <li>
              <span class="hl-label mono">${escapeHtml(h.label)}</span>
              <span class="hl-value">${escapeHtml(h.value)}</span>
            </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <section id="about" class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">01 — about</p>
        <h2>Who I am when the slides are off</h2>
      </div>
      <div class="about-grid">
        <p class="about-lead">${escapeHtml(about.lead)}</p>
        <div class="about-body">
          ${about.body.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
        </div>
      </div>
    </section>

    <section id="work" class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">02 — work</p>
        <h2>What I have been building toward</h2>
      </div>
      <div class="timeline">
        ${experience
          .map(
            (job) => `
          <article class="timeline-card">
            <div class="timeline-meta">
              <h3>${escapeHtml(job.title)}</h3>
              <p class="org">${escapeHtml(job.org)}</p>
              <p class="period mono">${escapeHtml(job.period)}</p>
            </div>
            <ul>
              ${job.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join('')}
            </ul>
          </article>`
          )
          .join('')}
      </div>

      <div class="project-grid featured-grid">
        ${featuredProjects
          .map(
            (p) => `
          <a class="project-card project-card-link" href="${escapeHtml(p.href)}">
            <h3>${escapeHtml(p.name)}</h3>
            <p>${escapeHtml(p.blurb)}</p>
            <ul class="tags">
              ${p.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}
            </ul>
          </a>`
          )
          .join('')}
      </div>
      <div class="cta-row">
        <a class="btn btn-ghost" href="/projects.html">Full case studies</a>
      </div>
    </section>

    ${educationSection}

    ${linkedinSection}

    <section id="skills" class="section reveal">
      <div class="section-head">
        <p class="eyebrow mono">04 — skills</p>
        <h2>Tools I reach for</h2>
      </div>
      <div class="skills-grid">
        ${skills
          .map(
            (group) => `
          <article class="skill-card">
            <h3>${escapeHtml(group.group)}</h3>
            <ul>
              ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section id="contact" class="section contact reveal">
      <div class="section-head">
        <p class="eyebrow mono">05 — contact</p>
        <h2>Let's build something</h2>
      </div>
      <p class="contact-copy">
        Based in ${escapeHtml(site.location)}. Open to conversations about cyber, capture, and useful software.
      </p>
      <div class="cta-row">
        ${renderContactActions()}
      </div>
    </section>
  </main>
  `,
});

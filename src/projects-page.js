import './styles.css';
import { projects } from './projects.js';
import { escapeHtml, externalAttrs } from './utils.js';
import { mountChrome } from './shell.js';

function renderLinks(project) {
  if (project.links?.length) {
    return `
      <div class="cta-row case-links">
        ${project.links
          .map(
            (link) => `
          <a class="btn btn-ghost" href="${escapeHtml(link.href)}"${externalAttrs(link.href)}>${escapeHtml(link.label)}</a>`
          )
          .join('')}
      </div>`;
  }
  if (project.visibility === 'private') {
    return `<p class="private-note mono">${escapeHtml(project.privateNote || 'Private repository')}</p>`;
  }
  return '';
}

function renderMedia(project) {
  if (!project.images?.length) {
    return `<p class="media-slot mono">Screenshots / demo clip slot — drop assets in public/projects/${escapeHtml(project.id)}/</p>`;
  }
  return `
    <div class="case-media">
      ${project.images
        .map(
          (img) => `
        <figure>
          <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt || project.shortName)}" loading="lazy" />
          ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ''}
        </figure>`
        )
        .join('')}
    </div>`;
}

mountChrome({
  activeId: 'projects',
  mainHtml: `
  <main class="page">
    <section class="page-hero section">
      <p class="eyebrow mono">projects // case studies</p>
      <h1>Built under pressure, documented on purpose</h1>
      <p class="lede">
        Two recent hackathon builds plus the capture response library accomplishment.
        Public repos link out. The capture library stays private and high-level on purpose.
      </p>
    </section>

    <section class="section case-list">
      ${projects
        .map(
          (project, index) => `
        <article id="${escapeHtml(project.id)}" class="case-study briefing reveal">
          <aside class="briefing-rail">
            <p class="eyebrow mono">${String(index + 1).padStart(2, '0')}</p>
            <p class="rail-label mono">Event</p>
            <p>${escapeHtml(project.event)}</p>
            <p class="rail-label mono">Period</p>
            <p class="period">${escapeHtml(project.period)}</p>
            <p class="rail-label mono">Visibility</p>
            <span class="visibility-badge mono ${project.visibility === 'private' ? 'is-private' : 'is-public'}">${escapeHtml(project.visibility)}</span>
            <p class="rail-label mono">Stack</p>
            <ul class="tags rail-tags">
              ${project.stack.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}
            </ul>
          </aside>
          <div class="briefing-body">
            <h2>${escapeHtml(project.name)}</h2>
            <div class="case-grid">
              <div>
                <h3>Problem</h3>
                <p>${escapeHtml(project.problem)}</p>
              </div>
              <div>
                <h3>What I built</h3>
                <ul>
                  ${project.built.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
              </div>
            </div>
            <div class="case-outcome">
              <h3>Outcome</h3>
              <p>${escapeHtml(project.outcome)}</p>
            </div>
            ${renderMedia(project)}
            ${renderLinks(project)}
          </div>
        </article>`
        )
        .join('')}
    </section>
  </main>
  `,
});

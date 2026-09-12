# Scott H Streamer — Portfolio

Personal portfolio site. Local Vite app, also stored on GitHub.

**Repo:** https://github.com/m576364/scott-portfolio

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home: about, experience, featured work, LinkedIn highlights, contact |
| `/projects.html` | Case studies: Blackbird PQC, U Drone Warhacker, Capture Response Library |
| `/certifications.html` | Certifications with license links and applicability |

## Edit content

| File | What to change |
|------|----------------|
| `src/content.js` | Name, role, about, experience, skills, LinkedIn URL, email, curated highlights |
| `src/projects.js` | Project case studies |
| `src/certifications.js` | Cert list, license URLs, applicability bullets |

Paste your LinkedIn profile URL into `site.links.linkedin` and your public email into `site.email` when ready. LinkedIn buttons stay hidden until the URL is set.

## Build

```bash
npm run build
npm run preview
```

Output lands in `dist/`.

## Later ideas

- GitHub Pages / custom domain
- Resume PDF
- Redacted writing samples
- Hackathon demo clips
- Credly badge wall

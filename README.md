# Scott H Streamer — Portfolio

Personal portfolio for **Associate IT Specialist — CyberSecOps** work, with a Junior Cyber Engineer trajectory.

**Repo:** https://github.com/m576364/scott-portfolio  
**Live (after Pages enable):** https://m576364.github.io/scott-portfolio/

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home: role, about, experience, featured work, contact |
| `/projects.html` | Hackathon + capture library case studies |
| `/certifications.html` | Certs with Credly/Coursera verify links |
| `/security.html` | Public security posture / threat model |

## Edit content

| File | What to change |
|------|----------------|
| `src/content.js` | Role, about, experience, skills, LinkedIn, email, resume path |
| `src/projects.js` | Case studies + optional `images` arrays |
| `src/certifications.js` | Cert list and license URLs |

### Intake slots

1. Resume: put `public/resume.pdf`, set `site.links.resume = 'resume.pdf'`
2. Screenshots: put files under `public/projects/<id>/`, reference in `projects.js` `images`
3. Maximus-safe SecOps bullets: replace `experience[0].points` when approved

## Build

```bash
npm run build
npm run preview
```

On GitHub Actions, `base` is `/scott-portfolio/` for project Pages hosting.

## Deploy (GitHub Pages)

1. Repo **Settings → Pages → Source: GitHub Actions**
2. Push to `main` (workflow: `.github/workflows/deploy-pages.yml`)
3. Site publishes to `https://m576364.github.io/scott-portfolio/`

## Security posture

- Static site only (no backend, no auth, no trackers)
- CSP + Referrer-Policy meta on every page
- `public/.well-known/security.txt` and [SECURITY.md](SECURITY.md)
- Dependabot for npm and GitHub Actions
- Escape all dynamic HTML via `src/utils.js`

See `/security.html` on the live site for the human-readable summary.

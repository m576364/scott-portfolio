/**
 * Site-wide identity and home-page content.
 * Edit this file (and projects.js / certifications.js) to update the portfolio.
 */
export const site = {
  name: 'Scott',
  fullName: 'Scott H Streamer',
  role: 'Cyber & systems builder',
  tagline:
    'I turn messy requirements into clear technical stories, working systems, and capture that actually holds up.',
  location: 'United States',
  /** Public contact email. Leave empty to hide the mailto button until set. */
  email: '',
  links: {
    /**
     * Paste your LinkedIn profile URL here (example: https://www.linkedin.com/in/your-handle).
     * Leave empty to hide LinkedIn buttons until set.
     */
    linkedin: '',
    github: 'https://github.com/m576364',
    githubProfile: 'https://github.com/m576364',
    portfolioRepo: 'https://github.com/m576364/scott-portfolio',
    resume: '',
  },
};

export const about = {
  lead:
    'I live at the intersection of cybersecurity, federal capture, and building tools people can actually use.',
  body: [
    'Day to day that means reading dense solicitations, mapping capability to evidence, and shipping clean briefs that sound like a human wrote them.',
    'Off the clock I like crafting interfaces with a little personality, fast local workflows, and learning systems end to end.',
  ],
};

export const highlights = [
  { label: 'Focus', value: 'Cyber · Capture · Build' },
  { label: 'Mode', value: 'Hands-on' },
  { label: 'Stack', value: 'Web · Python · Edge' },
];

/**
 * Curated LinkedIn-style highlights. Paste bullets from your profile when ready.
 * Shown on the home page when the array has entries.
 */
export const linkedinHighlights = [
  {
    title: 'Hackathon builder',
    detail:
      'Shipped NDIA Blackbird post-quantum tactical tunnel work and Warhacker airgap drone / fire tracking demos on public GitHub.',
  },
  {
    title: 'Capture response systems',
    detail:
      'Built an evidence-gated past-performance and proposal response library for federal cyber pursuits (private org repo).',
  },
];

export const experience = [
  {
    title: 'Capture & proposal engineering',
    org: 'Federal cyber pursuits',
    period: 'Recent',
    points: [
      'Structured past-performance and capability responses for DoD and civilian cyber opportunities.',
      'Built scorecards, tripwire analyses, and reusable language packs that stay evidence-gated.',
    ],
  },
  {
    title: 'Hackathon systems',
    org: 'NDIA · Warhacker',
    period: '2025–2026',
    points: [
      'Post-quantum tactical edge tunnel demonstrator with hybrid ML-KEM / X25519 session setup.',
      'Airgapped drone telemetry and fire-tracking stack packaged with Zarf for offline Kubernetes.',
    ],
  },
  {
    title: 'Systems & automation',
    org: 'Personal / team tooling',
    period: 'Ongoing',
    points: [
      'Local-first workflows for research, drafting, and packaging deliverables.',
      'Small sites and scripts that remove friction without turning into a platform science project.',
    ],
  },
];

export const skills = [
  {
    group: 'Cyber & mission',
    items: ['RMF / ATO literacy', 'SOC concepts', 'Zero Trust framing', 'PQC awareness', 'Threat-aware writing'],
  },
  {
    group: 'Capture',
    items: ['Requirement mapping', 'Past performance fit', 'Solutions briefs', 'Evidence gates'],
  },
  {
    group: 'Build',
    items: ['TypeScript / JS', 'Python', 'React', 'Go (tunnel demos)', 'Zarf / airgap packaging', 'Git'],
  },
];

/** Featured strip on the home page. Full case studies live on projects.html. */
export const featuredProjects = [
  {
    name: 'Blackbird PQC tunnel',
    blurb: 'NDIA hackathon demonstrator for survivable post-quantum tactical edge communications.',
    tags: ['NDIA', 'PQC', 'Go'],
    href: '/projects.html#blackbird',
  },
  {
    name: 'U Drone Warhacker',
    blurb: 'Airgapped drone, fire, and missile demo with Zarf packaging for offline Kubernetes.',
    tags: ['Warhacker', 'React', 'Zarf'],
    href: '/projects.html#u-drone',
  },
  {
    name: 'Capture response library',
    blurb: 'Evidence-gated past-performance and proposal workflows for federal cyber capture.',
    tags: ['Capture', 'PP', 'Private'],
    href: '/projects.html#capture-library',
  },
];

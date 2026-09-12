/**
 * Site-wide identity and home-page content.
 * Sourced in part from https://www.linkedin.com/in/scott-streamer/
 */
export const site = {
  name: 'Scott',
  fullName: 'Scott H Streamer',
  role: 'Assoc IT Spec — CyberSecOps at Maximus',
  tagline:
    'Cybersecurity operator and builder focused on mission systems, cloud security, and practical tooling for capture and ops.',
  location: 'Lakebay, Washington, United States',
  email: 'scott.streamer@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/scott-streamer/',
    github: 'https://github.com/m576364',
    githubProfile: 'https://github.com/m576364',
    portfolioRepo: 'https://github.com/m576364/scott-portfolio',
    resume: '',
  },
};

export const about = {
  lead:
    'Associate IT Specialist in Cybersecurity Operations at Maximus, with a B.S. in Cybersecurity (Honors) from Grand Canyon University.',
  body: [
    'I bring hands-on grounding in ethical hacking, SOC operations, and digital forensics, plus a strong pull toward securing mission-critical systems.',
    'I keep growing in cloud security, automation, and IT technology development, and I am open to connecting across cybersecurity, government tech, and IT security.',
  ],
};

export const highlights = [
  { label: 'Role', value: 'CyberSecOps · Maximus' },
  { label: 'Degree', value: 'B.S. Cybersecurity · Honors' },
  { label: 'Base', value: 'Lakebay, WA' },
];

/**
 * Curated highlights mirrored from LinkedIn accomplishments.
 */
export const linkedinHighlights = [
  {
    title: 'CompTIA Security+ (SY0-701)',
    detail:
      'Earned Security+ with focus on network security, risk management, and threat mitigation for resilient cyber operations.',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    detail:
      'Verified AWS cloud fundamentals credential supporting cloud security and IT technology development goals.',
  },
  {
    title: 'ISC2 Certified in Cybersecurity (CC)',
    detail:
      'Entry-level ISC2 certification covering network security, access control, and core cyber concepts.',
  },
  {
    title: 'Google career certificates',
    detail:
      'Completed Google Cybersecurity and Google IT Support Professional Certificates with practice-based coursework in SIEM, Linux, SQL, networking, and support.',
  },
];

export const experience = [
  {
    title: 'Security Operator / Assoc IT Spec — CyberSecOps',
    org: 'Maximus',
    period: 'Jun 2025 – Present · Hybrid',
    points: [
      'Cybersecurity operations supporting mission-critical systems and secure operating environments.',
      'Continuing growth in cloud security, automation, and IT technology development alongside day-to-day SecOps work.',
    ],
  },
  {
    title: 'Operations Support Assistant',
    org: 'Grand Canyon Education, Inc.',
    period: 'Jan 2024 – Jun 2025 · Phoenix, AZ · Part-time',
    points: [
      'Supported the Operations Support Assistant Team Manager with operational workflows.',
      'Used Microsoft Excel for data analytics supporting Grand Canyon University operations.',
    ],
  },
  {
    title: 'eCommerce Lead and Retail Specialist',
    org: 'Kroger',
    period: 'Aug 2020 – Mar 2026 · Washington',
    points: [
      'Assembled and delivered online orders and served as acting manager when appointed.',
      'Onboarded and trained new employees, troubleshot issues, and delivered customer service.',
    ],
  },
  {
    title: 'Lead Lifeguard and Swim Instructor',
    org: 'Sammamish Family YMCA',
    period: 'Apr 2022 – Feb 2023 · Washington',
    points: [
      'Lead lifeguard among a group of about 40, and taught swimming lessons for ages 4–50.',
      'Onboarded and trained new lifeguards and swim instructors.',
    ],
  },
];

export const education = [
  {
    school: 'Grand Canyon University',
    credential: 'Bachelor of Science in Cybersecurity',
    detail: 'Computer and Information Sciences · Honors College',
    period: 'Aug 2022 – May 2025',
  },
  {
    school: 'Bellevue College',
    credential: 'Associate of Arts and Sciences (AAS)',
    detail: '',
    period: '',
  },
];

export const skills = [
  {
    group: 'Cyber & mission',
    items: [
      'SOC / SecOps',
      'Network security',
      'Threat & vulnerability awareness',
      'SIEM / IDS concepts',
      'Digital forensics foundations',
      'Ethical hacking foundations',
    ],
  },
  {
    group: 'Cloud & IT',
    items: ['AWS fundamentals', 'Cloud security interest', 'Technical support', 'Linux', 'Python', 'SQL'],
  },
  {
    group: 'Build & capture',
    items: ['HTML / CSS / JS', 'React demos', 'Python scripting', 'Zarf / airgap packaging', 'Evidence-gated capture tooling'],
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

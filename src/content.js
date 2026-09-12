/**
 * Site-wide identity and home-page content.
 * Sourced in part from https://www.linkedin.com/in/scott-streamer/
 *
 * Intake slots (drop assets when ready):
 * - Resume PDF → public/resume.pdf and set links.resume = 'resume.pdf'
 * - Project screenshots → add image paths under each project in projects.js
 * - Maximus-safe SecOps bullets → replace experience[0].points when approved
 */
export const site = {
  name: 'Scott',
  fullName: 'Scott H Streamer',
  role: 'Associate IT Specialist — CyberSecOps',
  tagline:
    'CyberSecOps at Maximus, building toward Junior Cyber Engineer work across detection, cloud security, and hands-on systems.',
  location: 'Lakebay, Washington, United States',
  email: 'scott.streamer@gmail.com',
  employer: 'Maximus',
  links: {
    linkedin: 'https://www.linkedin.com/in/scott-streamer/',
    github: 'https://github.com/m576364',
    githubProfile: 'https://github.com/m576364',
    portfolioRepo: 'https://github.com/m576364/scott-portfolio',
    /** Set to 'resume.pdf' after placing public/resume.pdf */
    resume: '',
  },
};

export const statusChips = [
  'Active CyberSecOps',
  'Honors B.S. Cybersecurity',
  'Security+ · CySA+ · SecAI+',
  'Open to Jr Cyber Engineer roles',
];

export const about = {
  lead:
    'Associate IT Specialist — CyberSecOps at Maximus, with a B.S. in Cybersecurity (Honors) from Grand Canyon University.',
  body: [
    'I work where operations meets engineering: securing mission-critical systems, strengthening detection intuition, and growing automation and cloud security skills for Junior Cyber Engineer-level work.',
    'Academic grounding in ethical hacking, SOC operations, and digital forensics sits beside public hackathon builds in post-quantum edge tunnels and airgapped tactical demos.',
  ],
};

export const highlights = [
  { label: 'Title', value: 'Assoc IT Spec · CyberSecOps' },
  { label: 'Trajectory', value: 'Junior Cyber Engineer' },
  { label: 'Base', value: 'Lakebay, WA' },
];

export const linkedinHighlights = [
  {
    title: 'CompTIA Security+ (SY0-701)',
    detail:
      'Network security, risk management, and threat mitigation baseline for resilient cyber operations.',
  },
  {
    title: 'CompTIA CySA+ and SecAI+',
    detail:
      'Analyst and AI-aware cyber defense credentials supporting detection, vulnerability, and modern threat contexts.',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    detail:
      'Cloud fundamentals supporting cloud security and platform-aware engineering conversations.',
  },
  {
    title: 'ISC2 Certified in Cybersecurity (CC)',
    detail:
      'Foundational ISC2 credential covering network security, access control, and core cyber concepts.',
  },
];

export const experience = [
  {
    title: 'Associate IT Specialist — CyberSecOps',
    org: 'Maximus',
    period: 'Jun 2025 – Present · Hybrid',
    points: [
      'Cybersecurity operations supporting mission-critical systems and secure operating environments.',
      'Growing toward Junior Cyber Engineer scope through detection craft, cloud security, and automation alongside day-to-day SecOps.',
      // Replace with Maximus-safe tool/shift/ticket bullets when approved for public use.
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
    group: 'Detect & defend',
    items: [
      'SOC / SecOps',
      'Network security',
      'Threat & vulnerability awareness',
      'SIEM / IDS concepts',
      'Digital forensics foundations',
    ],
  },
  {
    group: 'Engineer & automate',
    items: ['Python', 'Linux', 'SQL', 'HTML / CSS / JS', 'React demos', 'Git workflows'],
  },
  {
    group: 'Cloud & platforms',
    items: ['AWS fundamentals', 'Cloud security growth path', 'Zarf / airgap packaging', 'Kubernetes exposure'],
  },
  {
    group: 'Capture & communicate',
    items: [
      'Evidence-gated past performance',
      'Requirement mapping',
      'Solutions briefs',
      'Technical storytelling',
    ],
  },
];

export const featuredProjects = [
  {
    name: 'Blackbird PQC tunnel',
    blurb: 'NDIA hackathon demonstrator for survivable post-quantum tactical edge communications.',
    tags: ['NDIA', 'PQC', 'Go'],
    href: 'projects.html#blackbird',
  },
  {
    name: 'U Drone Warhacker',
    blurb: 'Airgapped drone, fire, and missile demo with Zarf packaging for offline Kubernetes.',
    tags: ['Warhacker', 'React', 'Zarf'],
    href: 'projects.html#u-drone',
  },
  {
    name: 'Capture response library',
    blurb: 'Evidence-gated past-performance and proposal workflows for federal cyber capture.',
    tags: ['Capture', 'PP', 'Private'],
    href: 'projects.html#capture-library',
  },
];

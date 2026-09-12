/**
 * Project case studies for /projects.html.
 * Keep capture-library copy high-level. No Maximus client content or internal docs.
 */
export const projects = [
  {
    id: 'blackbird',
    name: 'AME Survivable Post-Quantum Tactical Edge',
    shortName: 'Blackbird PQC tunnel',
    event: 'NDIA Global Defense Hackathon',
    period: '2026',
    problem:
      'Tactical edge links need survivable communications as classical crypto ages out. Teams needed a demonstrator that showed hybrid post-quantum key establishment over a real TUN path, not just slides.',
    built: [
      'Go/Linux Layer-3 tunnel carrying full IP packets from TUN over authenticated UDP.',
      'Ephemeral hybrid ML-KEM-768 + X25519 session establishment with ChaCha20-Poly1305 packet protection.',
      'Blackbird tunnel agent with independently monitored primary and warm-standby underlay paths.',
      'API, database, and dashboard metrics workspace for provenance-aware telemetry views.',
    ],
    outcome:
      'Independent demonstrator for the AME survivable post-quantum tactical edge use case, with a public GitHub repo and Replit-linked workspace. Explicitly framed as a hackathon demonstrator, not production VPN or certified crypto.',
    stack: ['TypeScript', 'Go', 'ML-KEM-768', 'X25519', 'ChaCha20-Poly1305', 'TUN/UDP'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/m576364/BlackbirdHackathon',
      },
      {
        label: 'Replit demo',
        href: 'https://replit.com/t/ndia-hackathon/repls/PQC-TUN-Tactical-Tunnel',
      },
    ],
    visibility: 'public',
    images: [],
  },
  {
    id: 'u-drone',
    name: 'U Drone Warhacker',
    shortName: 'U Drone Warhacker',
    event: 'Warhacker hackathon',
    period: '2025–2026',
    problem:
      'Tactical and airgapped teams need offline-friendly situational awareness. Fire tracking, strike overlays, and live drone telemetry had to run without leaning on a public CDN or always-on cloud.',
    built: [
      'Full-stack React + Flask demo with offline-first frontend assets.',
      'NASA FIRMS wildfire tracking with historical playback and missile strike map overlays.',
      'Live drone telemetry streaming over Socket.IO with operator-facing logs.',
      'Zarf packaging and Kubernetes manifests for airgapped deployment, with a related Ollama Zarf package for local model serving on hackathon laptops.',
    ],
    outcome:
      'Shipped versioned demo packages on public GitHub, including U-Drone-Warhacker and the supporting Ollama-Zarf-Warhacker package for UDS-compatible offline AI.',
    stack: ['React', 'Flask', 'Socket.IO', 'Kubernetes', 'Zarf', 'OCI'],
    links: [
      {
        label: 'U-Drone GitHub',
        href: 'https://github.com/m576364/U-Drone-Warhacker',
      },
      {
        label: 'Ollama Zarf package',
        href: 'https://github.com/m576364/Ollama-Zarf-Warhacker',
      },
    ],
    visibility: 'public',
    images: [],
  },
  {
    id: 'capture-library',
    name: 'Capture Response Library',
    shortName: 'Capture response library',
    event: 'Federal cyber capture tooling',
    period: 'Ongoing',
    problem:
      'Capture teams burn time reinventing past-performance mapping, requirement matrices, and response structure for every RFI, CSO, and data call. Claims also need hard evidence gates so drafts do not invent contract history.',
    built: [
      'Evidence-gated past-performance catalog and reusable capability language blocks.',
      'Playbooks and templates for RFI, solutions briefs, data calls, and SOC-track responses.',
      'Workflow scripts for requirement matrices, coverage reports, and PP-fit suggestions.',
      'Opportunity working folders that keep drafts local while protecting source PP libraries.',
    ],
    outcome:
      'A living internal system for faster, cleaner federal cyber responses. Featured here as an accomplishment. The repository stays private on Maximus Cyber R&D GitHub Enterprise. No client content or internal catalogs are published on this site.',
    stack: ['Python', 'YAML catalogs', 'Markdown playbooks', 'DOCX tooling', 'Git'],
    links: [],
    visibility: 'private',
    privateNote: 'Private org repository on Maximus Cyber R&D GitHub Enterprise (Cyber-R-D/capture-response-library).',
    images: [],
  },
];

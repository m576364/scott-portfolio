/**
 * Certifications for /certifications.html.
 *
 * Fill in real credentials when you have them:
 * - licenseUrl: Credly / vendor verification link
 * - applicability: where the cert helps on the job or in capture
 * - issued / expires: optional dates (YYYY-MM or free text)
 *
 * status: 'active' | 'in-progress' | 'expired' | 'pending-link'
 */
export const certifications = [
  {
    id: 'add-your-certs',
    name: 'Add your certifications here',
    issuer: 'Edit src/certifications.js',
    status: 'pending-link',
    licenseUrl: '',
    issued: '',
    expires: '',
    applicability: [
      'Replace this placeholder entry with each real certification.',
      'Include the Credly or vendor license URL so visitors can verify.',
      'Write 1–3 applicability bullets tied to cyber, capture, or build work.',
    ],
  },
];

/**
 * Example shape for a real entry (not rendered). Copy into the array above.
 *
 * {
 *   id: 'security-plus',
 *   name: 'CompTIA Security+',
 *   issuer: 'CompTIA',
 *   status: 'active',
 *   licenseUrl: 'https://www.credly.com/badges/...',
 *   issued: '2024-06',
 *   expires: '2027-06',
 *   applicability: [
 *     'Baseline security controls language for RMF and SOC-adjacent capture.',
 *     'Shared vocabulary with cyber SMEs when mapping requirements to evidence.',
 *   ],
 * }
 */

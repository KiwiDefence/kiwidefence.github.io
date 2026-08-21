export const siteConfig = {
  name: 'Kiwi Defence',
  legalName: 'Kiwi Defence',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? 'https://kiwidefence.com',
  email: 'contact@kiwidefence.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '',
  address: {
    city: 'Brașov',
    region: 'Brașov',
    country: 'Romania',
    countryCode: 'RO',
  },
  linkedin: 'https://linkedin.com/company/kiwidefence',
  founderSite: 'https://petreraducatalin.com',
  scannerUrl:
    process.env.NEXT_PUBLIC_KIWISCANNER_URL ?? 'https://scanner.kiwidefence.com',
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '',
  tagline: 'Cybersecurity Services & Penetration Testing — Romania',
}

export const fullAddress = `${siteConfig.address.city}, ${siteConfig.address.country}`

export type Testimonial = {
  quote: string
  name: string
  role: string
  org: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The automated penetration testing engagement found privilege-escalation paths our previous vendor missed. Reports were precise, prioritised, and ready for our engineers the same week.',
    name: 'Security Lead',
    role: 'Head of Security',
    org: 'Fintech platform, Bucharest',
  },
  {
    quote:
      'Kiwi Defence mapped our entire external attack surface in days and tied every finding to a live CVE with a clear fix path. Zero fluff, exactly as promised.',
    name: 'IT Manager',
    role: 'IT Manager',
    org: 'SaaS provider, Cluj-Napoca',
  },
  {
    quote:
      'Their IAM posture review caught OIDC misconfigurations that would have bypassed our MFA. The remediation plan was aligned with our audit calendar and NIST controls.',
    name: 'CTO',
    role: 'Chief Technology Officer',
    org: 'E-commerce group, Brașov',
  },
]

export const trustBadges = [
  { label: '24h Response', detail: 'Every enquiry answered within one business day' },
  { label: 'NIST Aligned', detail: 'Methodology mapped to NIST CSF and SP 800-series' },
  { label: 'MITRE ATT&CK', detail: 'Findings mapped to adversary tactics & techniques' },
  { label: 'OWASP', detail: 'Web and API testing built on OWASP standards' },
]

export const caseStats = [
  {
    metric: '60%',
    label: 'Average reduction in exploitable risk within two quarters of continuous scanning and remediation support',
  },
  {
    metric: '<24h',
    label: 'From first contact to a scoped, scheduled assessment',
  },
  {
    metric: '100%',
    label: 'Of findings delivered with reproduction steps, evidence, and prioritised fixes',
  },
]

export type Service = {
  slug: string
  title: string
  desc: string
  detail?: string
  highlights?: string[]
  href?: string
  ctaLabel?: string
  featured?: boolean
}

export const homeServices: Service[] = [
  {
    slug: 'identity-access-management',
    title: 'Identity & Access Management',
    desc: 'IAM security services that harden identity architectures — SSO, OIDC/SAML, entitlements, and audit-ready access controls.',
    href: '/services/identity-access-management',
  },
  {
    slug: 'penetration-testing',
    title: 'Automated Penetration Testing',
    desc: 'OWASP and MITRE ATT&CK aligned offensive assessments that combine automation with expert validation to find what scanners miss.',
    href: '/services/penetration-testing',
  },
  {
    slug: 'vulnerability-scanning',
    title: 'Enterprise Vulnerability Scanning',
    desc: 'Continuous attack-surface mapping with CVE tracking and risk-based prioritisation across your entire external footprint.',
    href: '/services/vulnerability-scanning',
  },
]

export const kiwiScanner: Service = {
  slug: 'kiwiscanner',
  title: 'Kiwi Scanner',
  desc: 'Authorized vulnerability assessment for web applications and IAM posture — built as a Kiwi Defence platform product.',
  detail:
    'Kiwi Scanner is our standalone scanning platform: a native Kiwi Engine LLM agent, IAM posture playbooks, and a web portal for runs, findings, and reports. Invite-only access for authorized testing of systems you own or are permitted to assess.',
  highlights: [
    'Native Kiwi Engine — multi-step agent assessments with validated findings',
    'IAM playbooks — Keycloak and OIDC posture checks',
    'Web portal — runs, live console, findings, and exportable reports',
    'Defense-grade tooling — Nuclei, Semgrep, and custom Kiwi templates',
  ],
  href: process.env.NEXT_PUBLIC_KIWISCANNER_URL ?? 'https://scanner.kiwidefence.com',
  ctaLabel: 'Open Kiwi Scanner',
  featured: true,
}

export const allServices: Service[] = [...homeServices, kiwiScanner]

export const serviceDetails: Record<string, Pick<Service, 'detail' | 'highlights'>> = {
  iam: {
    detail:
      'Design and harden identity architectures across cloud and on-prem environments — from SSO rollout to fine-grained access policies and audit-ready controls.',
    highlights: [
      'Keycloak, OIDC, and SAML integration patterns',
      'Role and entitlement modelling for enterprise teams',
      'Continuous posture review against IAM best practices',
    ],
  },
  'penetration-testing': {
    detail:
      'Structured offensive assessments that combine automation with expert validation, producing prioritised remediation guidance instead of noise.',
    highlights: [
      'Methodology aligned with OWASP, MITRE ATT&CK, and NIST',
      'Evidence-backed findings with clear severity ratings',
      'Executive and engineering-ready reporting formats',
    ],
  },
  'vulnerability-scanning': {
    detail:
      'Continuous attack-surface mapping and CVE tracking to expose misconfigurations, exposed assets, and infrastructure drift before adversaries do.',
    highlights: [
      'Asset discovery and external footprint monitoring',
      'CVE correlation and prioritised risk scoring',
      'Integration with Kiwi Scanner for deeper validation',
    ],
  },
}

export function getServiceWithDetails(service: Service): Service {
  const extra = serviceDetails[service.slug]
  if (!extra) return service
  return { ...service, ...extra }
}

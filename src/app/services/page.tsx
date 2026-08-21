import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBand from '@/components/CtaBand'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import { kiwiScanner } from '@/lib/services'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cybersecurity Services — Penetration Testing, Scanning & IAM',
  description:
    'Cybersecurity services for enterprises in Romania & the EU: automated penetration testing, enterprise vulnerability scanning, and IAM security. Brașov based.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Cybersecurity Services | Kiwi Defence — Brașov, Romania',
    description:
      'Automated penetration testing, enterprise vulnerability scanning, and IAM security services aligned with NIST, MITRE ATT&CK, and OWASP.',
    url: '/services',
  },
}

const scannerUrl = siteConfig.scannerUrl

const serviceCards = [
  {
    href: '/services/penetration-testing',
    title: 'Automated Penetration Testing',
    desc: 'Continuous offensive assessments combining automated playbooks with senior engineer validation. OWASP and MITRE ATT&CK aligned, with zero-fluff reporting.',
    points: [
      'Weekly or monthly cycles matched to your release cadence',
      'Web apps, APIs, network perimeter, and authentication flows',
      'Executive summary + engineering-ready technical reports',
    ],
  },
  {
    href: '/services/vulnerability-scanning',
    title: 'Enterprise Vulnerability Scanning',
    desc: 'Continuous attack-surface mapping with CVE tracking and risk-based prioritisation across your entire external footprint.',
    points: [
      'Asset discovery and shadow-IT monitoring',
      'Live CVE correlation with exploitability scoring',
      'Monthly trend reporting for leadership',
    ],
  },
  {
    href: '/services/identity-access-management',
    title: 'Identity & Access Management',
    desc: 'IAM posture assessment and hardening for Keycloak, OIDC, SAML, and multi-cloud estates — audit-ready by design.',
    points: [
      'Entitlement reviews against real usage data',
      'Token, session, and federation hardening',
      'ISO 27001 / SOC 2 / NIS2 evidence support',
    ],
  },
]

const features = [
  {
    num: '01',
    title: 'Native Kiwi Engine',
    desc: 'Multi-step agent assessments that plan, execute, and validate every finding — not just a list of potential issues.',
  },
  {
    num: '02',
    title: 'IAM posture playbooks',
    desc: 'Dedicated Keycloak and OIDC configuration checks that catch misconfigurations before they become breaches.',
  },
  {
    num: '03',
    title: 'Web portal, live console',
    desc: 'Launch runs, watch the assessment in real time, and export evidence-backed reports in minutes.',
  },
  {
    num: '04',
    title: 'Defense-grade tooling',
    desc: 'Nuclei, Semgrep, and custom Kiwi templates under one engine — hardened by the Kiwi Defence team.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Connect your target',
    desc: 'Add the web application or IAM endpoint you are authorized to test. Invite-only access for systems you own or are permitted to assess.',
  },
  {
    num: '02',
    title: 'Run an assessment',
    desc: 'Kiwi Engine plans and executes checks end-to-end, triaging and validating findings as it goes.',
  },
  {
    num: '03',
    title: 'Read the report',
    desc: 'Prioritized, evidence-backed findings with clear severity ratings and actionable remediation guidance.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main className="content-page">
        <div className="container">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }]} />

          <h1 className="page-h1">Cybersecurity Services</h1>
          <p className="page-lede">
            Kiwi Defence is a cybersecurity company based in Brașov, Romania,
            serving enterprise teams across the EU. Our services — automated
            penetration testing, enterprise vulnerability scanning, and identity
            &amp; access management security — are built on one principle:
            findings only matter if they reduce real, exploitable risk.
          </p>

          <div className="service-hub-grid">
            {serviceCards.map((card) => (
              <article className="service-hub-card" key={card.href}>
                <h2>
                  <Link href={card.href}>{card.title}</Link>
                </h2>
                <p>{card.desc}</p>
                <ul>
                  {card.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Link href={card.href} className="service-more">
                  Explore {card.title.toLowerCase()} →
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Kiwi Scanner platform */}
        <section className="section scanner-hero" style={{ minHeight: 'auto', paddingTop: '4rem' }}>
          <div className="container">
            <div className="section-label">Platform product</div>
            <h2 className="scanner-title" style={{ textAlign: 'left', fontSize: '2.25rem' }}>
              <span>Kiwi Scanner</span>
              <span className="accent">Know your weaknesses first</span>
            </h2>
            <p className="page-lede" style={{ maxWidth: '680px' }}>
              Our standalone scanning platform: a native Kiwi Engine LLM agent,
              IAM posture playbooks, and a web portal for runs, findings, and
              reports. Invite-only access for authorized testing of systems you
              own or are permitted to assess.
            </p>
            <div className="hero-actions">
              <a href={scannerUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Start 7-day free trial →
              </a>
              <Link href="/pricing" className="btn btn-secondary">
                See pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">Built to find what others miss</h2>
            <div className="scanner-features">
              {features.map((f) => (
                <div className="scanner-feature" key={f.num}>
                  <div className="scanner-feature-num">{f.num}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className="section-label">How it works</div>
            <h2 className="section-title">From target to report in three steps</h2>
            <div className="scanner-steps">
              {steps.map((s) => (
                <div className="scanner-step" key={s.num}>
                  <div className="scanner-step-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Not sure which service fits?"
          subtitle="Book a free security assessment — we'll review your environment and recommend the right starting point within 24 hours."
        />
      </main>
      <SiteFooter />
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBand from '@/components/CtaBand'
import FaqSection, { type Faq } from '@/components/FaqSection'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'IAM Security Services — Identity & Access Management',
  description:
    'IAM security services: posture assessment, Keycloak/OIDC/SAML hardening, and audit-ready access controls. Kiwi Defence — cybersecurity services, Brașov Romania.',
  alternates: { canonical: '/services/identity-access-management' },
  openGraph: {
    title: 'Identity & Access Management Security Services | Kiwi Defence',
    description:
      'IAM posture assessment and hardening for Keycloak, OIDC, SAML, and enterprise cloud estates. Audit-ready access controls. Brașov, Romania.',
    url: '/services/identity-access-management',
  },
}

const faqs: Faq[] = [
  {
    question: 'What is an IAM posture assessment?',
    answer:
      'A structured review of every identity, integration, and access policy in your estate — human and machine — measuring them against best practice (OWASP ASVS, NIST SP 800-63) and your compliance requirements. You receive a prioritised remediation plan mapped to real usage data.',
  },
  {
    question: 'Do you work with specific identity providers?',
    answer:
      'We are provider-agnostic but have deep expertise with Keycloak, OIDC, and SAML federation across cloud providers (AWS, Azure, GCP) and on-prem estates. Custom SSO integrations are a frequent focus of our reviews.',
  },
  {
    question: 'Can you help us prepare for an ISO 27001 or SOC 2 audit?',
    answer:
      'Yes. Access governance is one of the most heavily scrutinised control families in both frameworks. We harden your IAM controls and produce the evidence artefacts auditors expect: entitlement reviews, token policy documentation, and access recertification records.',
  },
  {
    question: 'How long does an IAM engagement take?',
    answer:
      'A focused posture assessment typically takes two to four weeks depending on estate size. Hardening and architecture work is scoped after the assessment and usually lands within the same quarter.',
  },
  {
    question: 'Will hardening break our applications?',
    answer:
      'Changes are staged and tested against your actual integrations before enforcement. We validate every SSO flow in a pre-production environment first, and roll out policies progressively so user impact stays controlled.',
  },
]

export default function IamPage() {
  return (
    <>
      <SiteNav />
      <main className="content-page">
        <div className="container">
          <Breadcrumb
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Identity & Access Management', href: '/services/identity-access-management' },
            ]}
          />

          <h1 className="page-h1">
            Identity &amp; Access Management Security Services
          </h1>
          <p className="page-lede">
            Identity is the modern perimeter — and the most commonly exploited
            one. Kiwi Defence provides IAM security services for enterprises
            across Romania and the EU: posture assessment, architecture
            hardening, and audit-ready access controls for Keycloak, OIDC, SAML,
            and multi-cloud estates.
          </p>

          <section className="prose-section">
            <h2>Why IAM is the new perimeter</h2>
            <p>
              Attackers rarely break in anymore — they log in. Over-privileged
              service accounts, tokens that never expire, and federation flows
              that quietly skip MFA turn legitimate identity infrastructure into
              the shortest path to your data. Because misconfigured IAM looks
              healthy to functional testing, these flaws persist for years until
              someone tests identity the way an attacker would.
            </p>
            <h3>IAM posture assessment</h3>
            <p>
              We inventory every identity and integration with access to
              production — employees, service accounts, OAuth grants, API keys,
              machine identities — then measure each against least-privilege and
              OWASP/NIST guidance using actual usage logs, not job titles. The
              output is a ranked remediation plan: what to fix this week, this
              quarter, and what to architect differently next year.
            </p>
            <h3>Architecture design and hardening</h3>
            <p>
              For teams building or rebuilding identity infrastructure, we design
              and implement hardened architectures: SSO rollout, fine-grained
              role and entitlement modelling, token lifetime policy, step-up
              authentication for privileged operations, and secure OIDC/SAML
              federation patterns. Our engineering roots run deep here — we build
              and operate our own Keycloak-based platform, so recommendations
              come from production experience, not slideware.
            </p>
          </section>

          <section className="prose-section">
            <h2>Common IAM misconfigurations we eliminate</h2>
            <ul>
              <li>Over-permissive redirect URIs and skipped signature validation in OIDC flows</li>
              <li>Refresh tokens and sessions that outlive reasonable risk windows</li>
              <li>Service accounts with standing admin rights inherited from dead projects</li>
              <li>MFA bypasses via legacy protocols and unmanaged integration endpoints</li>
              <li>Audience confusion between environments that lets staging tokens open production doors</li>
            </ul>
            <p>
              Each of these appears repeatedly in breach reports for the same
              reason: nothing alerts on them. Our{' '}
              <Link href="/services/vulnerability-scanning">
                enterprise vulnerability scanning
              </Link>{' '}
              keeps external exposure in check while IAM reviews close the
              identity-side gaps; together they form a continuous defence rather
              than a yearly cleanup. For the business case, read our analysis of{' '}
              <Link href="/blog/hidden-cost-of-iam-misconfigurations-in-enterprise-cloud">
                the hidden cost of IAM misconfigurations in enterprise cloud
              </Link>
              .
            </p>
          </section>

          <section className="prose-section">
            <h2>Audit-ready compliance support</h2>
            <p>
              Whether your driver is ISO 27001, SOC 2, NIS2, or NIST CSF
              alignment, access governance is where auditors dig in. We harden
              controls and produce the artefacts that make audits boring — in the
              good way: entitlement review records, token policy documentation,
              access recertification cadences, and evidence mapped to the exact
              control references your framework requires. When findings from{' '}
              <Link href="/services/penetration-testing">
                automated penetration testing
              </Link>{' '}
              touch authentication paths, they land in the same tracked
              remediation plan, so nothing falls between teams.
            </p>
          </section>
        </div>

        <FaqSection faqs={faqs} />
        <CtaBand
          title="Find out what your identities can really do"
          subtitle="Book a free security assessment and get an IAM posture snapshot scoped within 24 hours."
        />
      </main>
      <SiteFooter />
    </>
  )
}

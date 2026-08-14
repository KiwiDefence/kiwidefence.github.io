import type { Metadata } from 'next'
import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Pricing | Kiwi Defence',
  description:
    'Kiwi Scanner pricing - Plus, Pro, and Enterprise plans. Every plan starts with a 7-day free trial, no credit card required.',
}

const scannerUrl =
  process.env.NEXT_PUBLIC_KIWISCANNER_URL ?? 'https://scanner.kiwidefence.com'

const plans = [
  {
    name: 'Plus',
    tagline: 'For small teams getting set up',
    price: '$49',
    period: '/ month',
    trial: 'Includes 7-day free trial',
    features: [
      '1 project / attack surface',
      'Monthly scheduled scans',
      'Web portal with live console',
      'Findings and exportable reports',
      'Email support',
    ],
    ctaLabel: 'Start free trial',
    href: scannerUrl,
    external: true,
  },
  {
    name: 'Pro',
    tagline: 'For growing teams that scan weekly',
    price: '$149',
    period: '/ month',
    trial: 'Includes 7-day free trial',
    featured: true,
    features: [
      '5 projects / attack surfaces',
      'Weekly scheduled scans',
      'IAM posture playbooks (Keycloak / OIDC)',
      'API access and CI/CD integration',
      'Unlimited report exports',
      'Priority support',
    ],
    ctaLabel: 'Start free trial',
    href: scannerUrl,
    external: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For organizations with custom needs',
    price: 'Custom',
    period: '',
    trial: 'Tailored onboarding included',
    features: [
      'Unlimited projects and users',
      'On-prem or private cloud deployment',
      'SSO and role-based access control',
      'Compliance-ready reporting',
      'Dedicated security engineer',
      'SLA-backed support',
    ],
    ctaLabel: 'Contact sales',
    href: '/#contact',
    external: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main className="pricing-page">
        <section className="section">
          <div className="container">
            <div className="section-label">Pricing</div>
            <h1 className="section-title">Simple plans, serious coverage</h1>
            <p className="section-subtitle">
              Every plan starts with a 7-day free trial - no credit card required.
              Upgrade, downgrade, or cancel at any time.
            </p>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`pricing-card${plan.featured ? ' featured' : ''}`}
                >
                  {plan.featured ? (
                    <span className="pricing-badge">Most popular</span>
                  ) : null}
                  <h3 className="pricing-plan">{plan.name}</h3>
                  <p className="pricing-tagline">{plan.tagline}</p>
                  <div className="pricing-price">
                    {plan.price}
                    {plan.period ? <span className="pricing-period">{plan.period}</span> : null}
                  </div>
                  <p className="pricing-trial">{plan.trial}</p>
                  <ul className="pricing-features">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="pricing-cta">
                    {plan.external ? (
                      <a
                        href={plan.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                      >
                        {plan.ctaLabel} →
                      </a>
                    ) : (
                      <Link href={plan.href} className="btn btn-secondary">
                        {plan.ctaLabel} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="pricing-note">
              Need something different?{' '}
              <Link href="/#contact" style={{ textDecoration: 'underline' }}>
                Talk to the team
              </Link>{' '}
              - we can tailor a plan around your risk profile and compliance requirements.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
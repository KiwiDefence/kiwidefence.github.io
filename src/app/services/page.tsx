import type { Metadata } from 'next'
import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Kiwi Scanner | Kiwi Defence',
  description:
    'Kiwi Scanner — authorized vulnerability assessment for web applications and IAM posture. Powered by a native Kiwi Engine LLM agent. Start your 7-day free trial.',
}

const scannerUrl =
  process.env.NEXT_PUBLIC_KIWISCANNER_URL ?? 'https://scanner.kiwidefence.com'

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
      <main>

        {/* Hero */}
        <section className="scanner-hero">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center' }}>Platform product</div>
            <h1 className="scanner-title">
              <span>Kiwi Scanner</span>
              <span className="accent">Know your weaknesses first</span>
            </h1>
            <p className="scanner-subtitle">
              Authorized vulnerability assessment for web applications and IAM posture.
              A native Kiwi Engine LLM agent plans, executes, and validates every scan —
              so you get answers, not noise.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a href={scannerUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Start 7-day free trial →
              </a>
              <Link href="/pricing" className="btn btn-secondary">
                See pricing
              </Link>
            </div>
            <p className="scanner-fineprint">
              Free for 7 days · No credit card required · Authorized testing only
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">Built to find what others miss</h2>
            <p className="section-subtitle">
              Everything ships in one platform — no plugin sprawl, no separate tools to babysit.
            </p>
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

        {/* How it works */}
        <section className="section">
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
            <div className="scanner-steps-cta">
              <Link href="/pricing" className="btn btn-secondary">
                Compare plans →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section scanner-cta">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center' }}>Get started</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Ready to find out what&apos;s hiding in your stack?
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
              Spin up a trial in minutes. Everything you need to start scanning, with no credit card required.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a href={scannerUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Start your free trial →
              </a>
              <Link href="/#contact" className="btn btn-secondary">
                Talk to the team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
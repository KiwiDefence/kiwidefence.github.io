import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBand from '@/components/CtaBand'
import FaqSection, { type Faq } from '@/components/FaqSection'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Automated Penetration Testing Services',
  description:
    'Automated penetration testing aligned with OWASP & MITRE ATT&CK. Continuous offensive security assessments with expert validation and zero-fluff reports. Romania.',
  alternates: { canonical: '/services/penetration-testing' },
  openGraph: {
    title: 'Automated Penetration Testing Services | Kiwi Defence',
    description:
      'Continuous offensive security assessments with expert validation, MITRE ATT&CK mapping, and zero-fluff reporting. Based in Brașov, Romania.',
    url: '/services/penetration-testing',
  },
}

const faqs: Faq[] = [
  {
    question: 'How often should automated penetration testing run?',
    answer:
      'For most organisations we recommend weekly or monthly cycles aligned to your release cadence, with a deeper manual engagement once or twice a year. Continuous testing shrinks the average vulnerability exposure window from months to days.',
  },
  {
    question: 'Is automated penetration testing as good as manual testing?',
    answer:
      'They solve different problems. Automation provides consistent breadth, regression coverage, and speed across your entire estate; human experts excel at complex multi-stage attack chains and novel business-logic abuse. Our service combines both: automated assessments validated by senior offensive engineers.',
  },
  {
    question: 'Will the testing disrupt production systems?',
    answer:
      'No. Every engagement starts with a scoping call where we agree targets, intensity windows, and guardrails. Assessments are throttled to avoid degradation, and all testing is performed strictly against systems you own or are authorised to assess.',
  },
  {
    question: 'What standards does your methodology follow?',
    answer:
      'Our methodology is aligned with OWASP (WSTG, ASVS, MASVS), MITRE ATT&CK for technique mapping, and NIST SP 800-115 for overall assessment structure. Findings include CVSS scoring plus exploitability evidence.',
  },
  {
    question: 'What do we receive at the end of an engagement?',
    answer:
      'An executive summary for leadership, a technical report with reproduction steps and evidence for engineers, prioritised remediation guidance, and a re-test after fixes are deployed to confirm closure.',
  },
]

export default function PenetrationTestingPage() {
  return (
    <>
      <SiteNav />
      <main className="content-page">
        <div className="container">
          <Breadcrumb
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Automated Penetration Testing', href: '/services/penetration-testing' },
            ]}
          />

          <h1 className="page-h1">
            Automated Penetration Testing Services
          </h1>
          <p className="page-lede">
            Kiwi Defence delivers automated penetration testing for organisations
            in Romania and across the EU that need continuous, evidence-backed
            offensive security — not a once-a-year checkbox. Our platform-driven
            assessments combine the coverage of automation with the judgement of
            senior ethical hackers, mapped end-to-end to OWASP and MITRE ATT&amp;CK.
          </p>

          <section className="prose-section">
            <h2>What is automated penetration testing?</h2>
            <p>
              Automated penetration testing uses orchestrated tooling to execute
              the structured phases of a real attack — reconnaissance,
              authentication abuse, injection, privilege escalation — against
              your systems on a repeating schedule. Unlike a raw vulnerability
              scanner, it validates exploitability before reporting, so every
              finding represents a path an attacker could actually use.
            </p>
            <h3>How automation and human expertise work together</h3>
            <p>
              Automation wins on breadth, consistency, and speed: it re-tests
              your full estate weekly and catches regressions the moment they
              appear. Humans win on creativity: multi-stage intrusion chains and
              business-logic flaws still require an experienced operator. Each
              automated finding is triaged by our engineers, who chain results,
              eliminate false positives, and document impact in language both
              boards and developers can act on.
            </p>
            <h3>What we test</h3>
            <ul>
              <li>Web applications and APIs — OWASP Top 10 and WSTG coverage</li>
              <li>External network perimeter and exposed services</li>
              <li>Cloud identity and access configuration (IAM posture)</li>
              <li>Authentication flows: SSO, OIDC/SAML integrations, MFA paths</li>
            </ul>
          </section>

          <section className="prose-section">
            <h2>Our penetration testing methodology</h2>
            <p>
              Every engagement follows a framework-aligned process, so results
              are comparable over time and defensible in audits:
            </p>
            <ol>
              <li>
                <strong>Scope &amp; authorise</strong> — targets, rules of
                engagement, and intensity limits agreed in writing.
              </li>
              <li>
                <strong>Assess</strong> — automated playbooks execute OWASP and
                ATT&amp;CK-mapped techniques against the agreed surface.
              </li>
              <li>
                <strong>Validate</strong> — senior engineers confirm
                exploitability, chain findings, and remove noise.
              </li>
              <li>
                <strong>Report</strong> — executive summary plus engineering
                detail with reproduction steps and severity rationale.
              </li>
              <li>
                <strong>Re-test</strong> — fixes are verified and findings
                formally closed, keeping your risk register honest.
              </li>
            </ol>
          </section>

          <section className="prose-section">
            <h2>Reporting you can act on</h2>
            <p>
              We produce two documents per cycle: a one-page executive summary
              with trend data for leadership, and a technical report built for
              the people who will actually fix things — reproduction steps,
              affected endpoints, suggested remediation, and references to the
              relevant OWASP and ATT&amp;CK entries. No padding, no boilerplate
              theory chapters. If your team also runs continuous{' '}
              <Link href="/services/vulnerability-scanning">
                enterprise vulnerability scanning
              </Link>
              , pentest findings are correlated with scan data so remediation is
              prioritised by real-world exploitability.
            </p>
            <p>
              Organisations that pair this service with our{' '}
              <Link href="/services/identity-access-management">
                IAM security services
              </Link>{' '}
              typically see the fastest risk reduction, because identity
              misconfigurations are the most commonly exploited class of flaw we
              validate. For a deeper look at how continuous testing cuts
              exposure, read{' '}
              <Link href="/blog/how-automated-penetration-testing-reduces-risk-by-60">
                how automated penetration testing reduces risk by 60%
              </Link>
              .
            </p>
          </section>
        </div>

        <FaqSection faqs={faqs} />
        <CtaBand
          title="See what an attacker sees"
          subtitle="Book a free security assessment and we'll scope an automated penetration testing programme around your stack within 24 hours."
        />
      </main>
      <SiteFooter />
    </>
  )
}

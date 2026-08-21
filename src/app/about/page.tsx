import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBand from '@/components/CtaBand'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us — Cybersecurity Team in Brașov, Romania',
  description:
    'Kiwi Defence is a specialised cybersecurity product & development team in Brașov, Romania. Offensive mindset, NIST / MITRE ATT&CK / OWASP methodology.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Kiwi Defence — Cybersecurity Team in Brașov, Romania',
    description:
      'A highly specialised cybersecurity product and development team with an offensive mindset. NIST, MITRE ATT&CK, and OWASP aligned methodology.',
    url: '/about',
  },
}

const principles = [
  {
    num: '01',
    title: 'Offensive by default',
    desc: 'We test the way attackers operate — chaining findings, abusing trust, walking privilege paths — because defensive checklists miss what adversaries actually do.',
  },
  {
    num: '02',
    title: 'Frameworks as floor, not ceiling',
    desc: 'NIST CSF, MITRE ATT&CK, and OWASP give our work structure, comparability, and audit-defensibility. They are where we start, never where we stop.',
  },
  {
    num: '03',
    title: 'Zero fluff reporting',
    desc: 'Every finding ships with evidence, severity rationale, and a fix path. If a page of a report would not change a decision, it does not get written.',
  },
  {
    num: '04',
    title: 'Engineering roots',
    desc: 'We build security products ourselves — including our own scanning platform. Recommendations come from running things in production, not from reading about them.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="content-page">
        <div className="container">
          <Breadcrumb items={[{ name: 'About', href: '/about' }]} />

          <h1 className="page-h1">
            About Kiwi Defence — Cybersecurity Product &amp; Development Team
          </h1>
          <p className="page-lede">
            Kiwi Defence is a highly specialised cybersecurity product and
            development team based in Brașov, Romania. We exist for one reason:
            most organisations do not lack security tools — they lack a team that
            thinks like the adversary and reports like an engineer.
          </p>

          <section className="prose-section">
            <h2>Our story</h2>
            <p>
              The company grew out of enterprise security engineering work:
              building identity architectures, hardening platforms, and running
              offensive assessments for teams that were tired of checkbox
              security. Along the way we built our own tooling — eventually
              shipping <Link href="/services">Kiwi Scanner</Link>, a scanning
              platform with a native LLM assessment engine and dedicated IAM
              posture playbooks.
            </p>
            <p>
              Today we deliver three tightly focused services:{' '}
              <Link href="/services/penetration-testing">automated penetration testing</Link>,{' '}
              <Link href="/services/vulnerability-scanning">enterprise vulnerability scanning</Link>,
              and{' '}
              <Link href="/services/identity-access-management">IAM security services</Link>.
              We stay deliberately narrow. Depth beats breadth when the subject is
              how systems break.
            </p>
          </section>

          <section className="prose-section">
            <h2>Our methodology: NIST, MITRE ATT&amp;CK, OWASP</h2>
            <p>
              Every engagement is anchored to recognised frameworks so results
              are comparable over time and defensible in front of auditors and
              boards:
            </p>
            <ul>
              <li>
                <strong>NIST Cybersecurity Framework</strong> — the governance
                skeleton: programme-level gaps mapped to Identify, Protect,
                Detect, Respond, and Recover.
              </li>
              <li>
                <strong>MITRE ATT&amp;CK</strong> — the operational map: every
                technical finding tied to the adversary tactic and technique it
                enables.
              </li>
              <li>
                <strong>OWASP</strong> — the engineering standard: web, API, and
                mobile testing built on WSTG, ASVS, and the Top 10 lists.
              </li>
            </ul>
            <p>
              Read our breakdown of{' '}
              <Link href="/blog/nist-vs-mitre-attck-which-framework-fits-your-organisation">
                NIST vs MITRE ATT&amp;CK
              </Link>{' '}
              to see how the frameworks complement each other in practice.
            </p>
          </section>

          <section className="prose-section">
            <h2>How we work</h2>
            <div className="features-grid" style={{ marginTop: '2rem' }}>
              {principles.map((p) => (
                <div className="feature-item" key={p.num}>
                  <div className="number">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="prose-section">
            <h2>The people behind Kiwi Defence</h2>
            <p>
              We are engineers first. Our core team combines former ethical
              hackers, platform engineers, and identity specialists. Learn more
              about the founder on his personal site:{' '}
              <a
                href={siteConfig.founderSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                petreraducatalin.com
              </a>
              .
            </p>
            <p>
              We are based in Brașov, Romania, and work with clients in
              Bucharest, Cluj-Napoca, Timișoara, and across the EU — remote-first
              by design, on-site when it matters.
            </p>
          </section>
        </div>

        <CtaBand
          title="Work with us"
          subtitle="Book a free security assessment — a real conversation with an engineer, not a sales call."
        />
      </main>
      <SiteFooter />
    </>
  )
}

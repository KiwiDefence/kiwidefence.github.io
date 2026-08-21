import type { Metadata } from 'next'
import Link from 'next/link'
import BorderGlow from '@/components/BorderGlow'
import HeroSceneLoader from '@/components/HeroSceneLoader'
import JsonLd from '@/components/JsonLd'
import LeadMagnet from '@/components/LeadMagnet'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import { posts } from '@/lib/blog'
import { homeServices } from '@/lib/services'
import { caseStats, siteConfig, trustBadges } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const whyUs = [
  {
    num: '01',
    title: 'Offensive mindset',
    desc: 'Our team includes former ethical hackers who think like real adversaries — we find the paths attackers would use before they do.',
  },
  {
    num: '02',
    title: 'Proven framework',
    desc: 'Every engagement is aligned with NIST, MITRE ATT&CK, and OWASP, so results are comparable, auditable, and board-ready.',
  },
  {
    num: '03',
    title: 'Zero fluff reporting',
    desc: 'Clear findings with evidence, severity rationale, and prioritised remediation steps. No hundred-page PDFs nobody reads.',
  },
  {
    num: '04',
    title: 'Continuous protection',
    desc: 'Security is not a one-time engagement. We re-test after every fix and stay with you through every phase of hardening.',
  },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="hero">
        <div className="hero-fade" />
        <HeroSceneLoader />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ textAlign: 'center' }}>
            <h1 className="hero-h1">
              Kiwi Defence — Cybersecurity Services &amp; Offensive Security
            </h1>
            <p className="hero-subtitle-static">
              We are a specialised cybersecurity product and development team
              delivering automated penetration testing, enterprise vulnerability
              scanning, and IAM security services for organisations across
              Romania and the EU — from our base in Brașov.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-primary">
                Book a Free Security Assessment →
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore our services
              </Link>
            </div>
            <ul className="trust-badges" aria-label="Trust signals">
              {trustBadges.map((b) => (
                <li key={b.label}>
                  <strong>{b.label}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-label">Services</div>
          <h2 className="section-title">Cybersecurity services that reduce real risk</h2>
          <p className="section-subtitle">
            Penetration testing, vulnerability management, and identity security
            built for CISOs and IT managers who need measurable outcomes — not
            compliance theatre.
          </p>
          <div className="services-grid">
            {homeServices.map((svc) => (
              <BorderGlow
                key={svc.slug}
                backgroundColor="var(--bg)"
                borderRadius={10}
                glowRadius={20}
                edgeSensitivity={25}
                coneSpread={20}
                glowColor="0 0 40"
                colors={['var(--glow-1)', 'var(--glow-2)', 'var(--glow-3)']}
                fillOpacity={0.25}
                glowIntensity={0.8}
              >
                <Link href={svc.href ?? '/services'} className="service-card-link">
                  <div className="service-card">
                    <div data-title="true" className="service-title">
                      <span>{svc.title}</span>
                    </div>
                    <div data-subtitle="true" className="service-desc">
                      {svc.desc}
                    </div>
                    <span className="service-more">Learn more →</span>
                  </div>
                </Link>
              </BorderGlow>
            ))}
          </div>
          <div className="services-more">
            <Link href="/services" className="btn btn-secondary">
              View all cybersecurity services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="section">
        <div className="container">
          <div className="section-label">Why us</div>
          <h2 className="section-title">Why security teams choose Kiwi Defence</h2>
          <p className="section-subtitle">
            We don&apos;t just scan for vulnerabilities — we think like attackers
            so you don&apos;t have to.
          </p>
          <div className="features-grid">
            {whyUs.map((f) => (
              <div className="feature-item" key={f.num}>
                <div className="number">{f.num}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="container">
          <div className="section-label">Results</div>
          <h2 className="section-title">Measurable outcomes, not noise</h2>
          <p className="section-subtitle">
            Anonymised results from recent offensive security engagements with
            fintech, SaaS, and e-commerce clients in Romania and the EU.
          </p>
          <div className="case-stats">
            {caseStats.map((s) => (
              <div className="case-stat" key={s.metric}>
                <div className="case-stat-metric">{s.metric}</div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">What clients say</h2>
          <div className="testimonials-grid">
            {[
              {
                quote:
                  'The automated penetration testing engagement found privilege-escalation paths our previous vendor missed. Reports were precise, prioritised, and ready for our engineers the same week.',
                role: 'Head of Security — Fintech platform, Bucharest',
              },
              {
                quote:
                  'Kiwi Defence mapped our entire external attack surface in days and tied every finding to a live CVE with a clear fix path. Zero fluff, exactly as promised.',
                role: 'IT Manager — SaaS provider, Cluj-Napoca',
              },
              {
                quote:
                  'Their IAM posture review caught OIDC misconfigurations that would have bypassed our MFA. The remediation plan was aligned with our audit calendar and NIST controls.',
                role: 'CTO — E-commerce group, Brașov',
              },
            ].map((t) => (
              <figure className="testimonial" key={t.role}>
                <blockquote>
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption>{t.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="section">
        <div className="container">
          <div className="section-label">Blog</div>
          <h2 className="section-title">Offensive security insights</h2>
          <p className="section-subtitle">
            Practical analysis from our engineering team on penetration testing,
            vulnerability management, and identity security.
          </p>
          <div className="blog-teaser-grid">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="blog-teaser-card" key={post.slug}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="service-more">Read article →</span>
              </Link>
            ))}
          </div>
          <div className="services-more">
            <Link href="/blog" className="btn btn-secondary">
              Visit the blog →
            </Link>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="section">
        <div className="container">
          <LeadMagnet />
        </div>
      </section>

      {/* Final CTA / Contact anchor */}
      <section id="contact" className="section scanner-cta">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Contact</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Book a free security assessment
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            Tell us about your environment and we&apos;ll come back within 24
            hours with a scoped recommendation — no obligation, no sales script.
            Kiwi Defence is based in Brașov, Romania, and works with teams
            across the EU.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary">
              Get in touch →
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-secondary"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What cybersecurity services does Kiwi Defence offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Kiwi Defence provides automated penetration testing, enterprise vulnerability scanning with CVE tracking, and identity & access management (IAM) security services, all aligned with NIST, MITRE ATT&CK, and OWASP standards.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where is Kiwi Defence located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Kiwi Defence is based in Brașov, Romania, and serves clients across Romania and the wider EU, including Bucharest, Cluj-Napoca, and Timișoara.',
              },
            },
            {
              '@type': 'Question',
              name: 'How fast does Kiwi Defence respond to enquiries?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Every enquiry receives a response within 24 hours, including a scoped recommendation for your environment.',
              },
            },
          ],
        }}
      />
    </>
  )
}

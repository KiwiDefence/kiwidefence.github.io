import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import { siteConfig, trustBadges } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact — Book a Free Security Assessment',
  description:
    'Contact Kiwi Defence — cybersecurity services in Brașov, Romania. Book a free security assessment; we respond within 24 hours. Email, phone & map.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Kiwi Defence — Brașov, Romania',
    description:
      'Book a free security assessment. We respond to every enquiry within 24 hours. Based in Brașov, Romania.',
    url: '/contact',
  },
}

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Kiwi Defence',
    url: `${siteConfig.url}/contact`,
    about: { '@id': `${siteConfig.url}/#organization` },
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.countryCode,
      },
    },
  }

  return (
    <>
      <SiteNav />
      <main className="content-page">
        <div className="container">
          <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
          <JsonLd data={contactSchema} />

          <h1 className="page-h1">
            Cybersecurity Services in Brașov, Romania — Let&apos;s Talk
          </h1>
          <p className="page-lede">
            Whether you need penetration testing, continuous vulnerability
            scanning, or an IAM posture review, start here. Tell us about your
            environment and we&apos;ll respond within 24 hours with a scoped,
            honest recommendation.
          </p>

          <ul className="trust-badges" aria-label="Trust signals">
            {trustBadges.map((b) => (
              <li key={b.label}>
                <strong>{b.label}</strong>
              </li>
            ))}
          </ul>

          <div className="contact-layout">
            <div className="contact-form-col">
              <h2>Request your free assessment</h2>
              <ContactForm />
            </div>

            <aside className="contact-info-col">
              <h2>Contact details</h2>
              <div className="contact-detail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              {siteConfig.phone ? (
                <div className="contact-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                </div>
              ) : null}
              <div className="contact-detail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <address>
                  {siteConfig.address.city}, {siteConfig.address.country}
                </address>
              </div>
              <p className="contact-note">
                Serving teams in Bucharest, Cluj-Napoca, Timișoara, and across
                the EU. Remote-first, on-site when it matters.
              </p>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
              >
                Message us on LinkedIn
              </a>

              <div className="map-wrap">
                <iframe
                  title="Kiwi Defence location — Brașov, Romania"
                  src="https://www.google.com/maps?q=Bra%C8%99ov%2C%20Romania&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import BorderGlow from '@/components/BorderGlow'
import SplitText from '@/components/SplitText'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => null,
})

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={`${basePath}/logo.svg`} alt="Kiwi Defence" className="logo" />
            Kiwi Defence
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
          <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-fade" />
        <HeroScene />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ textAlign: 'center' }}>

            <div>
              <div>
                <SplitText
                  text="Engineering the code"
                  tag="h1"
                  className="hero-heading"
                  delay={30}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 60 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.3}
                  rootMargin="0px"
                  textAlign="center"
                />
              </div>
              <div>
                <SplitText
                  text="that defends the enterprise"
                  tag="h1"
                  delay={40}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 60 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.3}
                  rootMargin="0px"
                  textAlign="center"
                  className="hero-heading accent"
                />
              </div>
            </div>
            <SplitText
              text="Our core technical ecosystem is built to handle the heavy lifting of enterprise security engineering."
              tag="p"
              delay={20}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="center"
              className="hero-subtitle"
            />
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a href="#contact" className="btn btn-primary">
                Get in touch →
              </a>
              <a href="#services" className="btn btn-secondary">
                Our services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-label">About</div>
          <h2 className="section-title">
            Who we are
          </h2>
          <p className="section-subtitle">
            We are a highly specialized cybersecurity product and development team dedicated to building the foundational architecture required to protect the modern enterprise.
          </p>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-label">Services</div>
          <h2 className="section-title">
            What we deliver
          </h2>
          <p className="section-subtitle">
            Comprehensive security services tailored to your organisation&apos;s
            unique risk profile and compliance requirements.
          </p>
          <div className="services-grid">
            {[
              {
                title: 'Custom Identity & Access Management',
                desc: 'Precision-engineered access architectures and robust authentication frameworks tailored to your organisation.',
              },
              {
                title: 'Automated Penetration Testing',
                desc: 'Advanced reporting engines that turn offensive security data into structured, actionable intelligence.',
              },
              {
                title: 'Enterprise Vulnerability Scanning',
                desc: 'Deep-inspection scanning tools that map attack surfaces, track CVEs, and surface hidden infrastructure flaws.',
              },
            ].map((svc) => (
              <BorderGlow
                key={svc.title}
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
                <div className="service-card">
                  <div data-title="true" className="service-title">
                    <span>{svc.title}</span>
                  </div>
                  <div data-subtitle="true" className="service-desc">
                    {svc.desc}
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="section">
        <div className="container">
          <div className="section-label">Why us</div>
          <h2 className="section-title">
            Built different
          </h2>
          <p className="section-subtitle">
            We don&apos;t just scan for vulnerabilities, we think like
            attackers so you don&apos;t have to.
          </p>
          <div className="features-grid">
            {[
              {
                num: '01',
                title: 'Offensive mindset',
                desc: 'Our team includes former ethical hackers who understand how real adversaries operate.',
              },
              {
                num: '02',
                title: 'Proven framework',
                desc: 'Methodology aligned with NIST, MITRE ATT&CK, and OWASP standards.',
              },
              {
                num: '03',
                title: 'Zero fluff reporting',
                desc: 'Clear, actionable reports with prioritised remediation steps — not a wall of text.',
              },
              {
                num: '04',
                title: 'Continuous protection',
                desc: 'Security is not a one-time engagement. We stay with you through every phase.',
              },
            ].map((f) => (
              <div className="feature-item" key={f.num}>
                <div className="number">{f.num}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Let&apos;s talk security
          </h2>
          <p className="section-subtitle">
            Ready to strengthen your defences? Reach out and our team will
            get back to you within 24 hours.
          </p>
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>
              Whether you need a full security assessment, have questions
              about our services, or want to discuss a specific
              requirement, we&apos;re here to help.
            </p>
            <div className="contact-detail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contact@kiwidefence.com</span>
            </div>
            <div className="contact-detail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Brașov, Romania</span>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://linkedin.com/company/kiwidefence"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Message us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Kiwi Defence</p>
            <a aria-label="LinkedIn" href="https://linkedin.com/company/kiwidefence" rel="noopener noreferrer" target="_blank" className="footer-linkedin" style={{ mixBlendMode: 'luminosity' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <ThemeSwitcher />
        </div>
      </footer>
    </>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const scannerUrl =
  process.env.NEXT_PUBLIC_KIWISCANNER_URL ?? 'https://scanner.kiwidefence.com'

const serviceItems = [
  {
    href: '/services/penetration-testing',
    label: 'Automated Penetration Testing',
    desc: 'Continuous offensive assessments with expert validation.',
  },
  {
    href: '/services/vulnerability-scanning',
    label: 'Enterprise Vulnerability Scanning',
    desc: 'Attack-surface mapping with CVE tracking & prioritisation.',
  },
  {
    href: '/services/identity-access-management',
    label: 'Identity & Access Management',
    desc: 'IAM posture assessment and hardening for OIDC/SAML estates.',
  },
]

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

const GLYPHS: Record<string, string> = {
  shield: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
  sparkles: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
  terminal: 'm6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z',
  key: 'M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z',
  document: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z',
}

function Glyph({ name, size = 16 }: { name: string; size?: number }) {
  const d = GLYPHS[name] ?? GLYPHS.shield
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const FEATURES = [
  { name: 'Native Kiwi Engine', icon: 'sparkles' },
  { name: 'Web Portal & Live Console', icon: 'terminal' },
  { name: 'IAM Posture Playbooks', icon: 'key' },
  { name: 'Defense-Grade Tooling', icon: 'shield' },
  { name: 'Evidence-Backed Reports', icon: 'document' },
]

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLLIElement>(null)
  const servicesRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!productOpen && !servicesOpen) return
    const onDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductOpen(false)
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setProductOpen(false)
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [productOpen, servicesOpen])

  const closeAll = () => {
    setMenuOpen(false)
    setProductOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container nav-inner">
        <Link href="/" className="navbar-brand" onClick={closeAll}>
          <img src="/logo.svg" alt="Kiwi Defence — cybersecurity services logo" className="logo" />
          Kiwi Defence
        </Link>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {/* Services dropdown */}
          <li className="nav-dropdown" ref={servicesRef}>
            <button
              className={`nav-dropdown-trigger${servicesOpen ? ' open' : ''}`}
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg
                className="nav-dropdown-chevron"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className={`nav-dropdown-panel${servicesOpen ? ' open' : ''}`}>
              <div className="nav-dropdown-col">
                <h2 className="nav-dropdown-heading">
                  <Glyph name="shield" size={20} />
                  <span>Security Services</span>
                </h2>
                <ul className="service-nav-list">
                  {serviceItems.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="service-nav-row" onClick={closeAll}>
                        <span className="service-nav-name">{s.label}</span>
                        <span className="service-nav-desc">{s.desc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="nav-dropdown-footer-link" onClick={closeAll}>
                  View all cybersecurity services →
                </Link>
              </div>
              <div className="nav-dropdown-col cta-col">
                <h2 className="nav-dropdown-heading">
                  <Glyph name="sparkles" size={20} />
                  <span>Free Assessment</span>
                </h2>
                <p className="nav-dropdown-blurb">
                  Book a free security assessment — scoped recommendations for
                  your environment within 24 hours.
                </p>
                <Link href="/contact" className="product-hero-btn primary" onClick={closeAll}>
                  Book now →
                </Link>
              </div>
            </div>
          </li>

          {/* Product dropdown */}
          <li className="nav-dropdown" ref={dropdownRef}>
            <button
              className={`nav-dropdown-trigger${productOpen ? ' open' : ''}`}
              type="button"
              aria-haspopup="true"
              aria-expanded={productOpen}
              onClick={() => setProductOpen((v) => !v)}
            >
              Product
              <svg
                className="nav-dropdown-chevron"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className={`nav-dropdown-panel${productOpen ? ' open' : ''}`}>
              {/* KiwiScanner hero */}
              <div className="nav-dropdown-col product-hero-col">
                <div className="product-hero">
                  <span className="product-hero-icon">
                    <Glyph name="shield" size={40} />
                  </span>
                  <h2 className="product-hero-name">KiwiScanner</h2>
                  <p className="product-hero-desc">
                    Enterprise scanning platform with native LLM engine,
                    live console, and evidence-backed reports.
                  </p>
                  <div className="product-hero-actions">
                    <Link href="/services" className="product-hero-btn primary" onClick={closeAll}>
                      Learn more
                    </Link>
                    <a href={scannerUrl} target="_blank" rel="noopener noreferrer" className="product-hero-btn secondary">
                      Start 7-day free trial
                    </a>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="nav-dropdown-col features-col">
                <h2 className="nav-dropdown-heading">
                  <Glyph name="sparkles" size={20} />
                  <span>Key Features</span>
                </h2>
                <ul className="feature-list-simple">
                  {FEATURES.map((f) => (
                    <li key={f.name}>
                      <Link href="/services" className="feature-row-simple" onClick={closeAll}>
                        <span className="feature-row-icon-simple">
                          <Glyph name={f.icon} size={18} />
                        </span>
                        <span className="feature-row-name-simple">{f.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                onClick={closeAll}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a
            href={scannerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn nav-btn-ghost"
          >
            Log in
          </a>
          <Link href="/contact" className="nav-btn nav-btn-accent">
            Book Free Assessment
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => {
              setMenuOpen((v) => !v)
              setProductOpen(false)
              setServicesOpen(false)
            }}
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
        </div>
      </div>
    </nav>
  )
}

import Link from 'next/link'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { siteConfig } from '@/lib/site'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="navbar-brand">
              <img src="/logo.svg" alt="Kiwi Defence — cybersecurity services logo" className="logo" />
              Kiwi Defence
            </Link>
            <p className="footer-tagline">
              Cybersecurity services &amp; offensive security — automated
              penetration testing, vulnerability scanning, and IAM security.
            </p>
            <address className="footer-nap">
              {siteConfig.address.city}, {siteConfig.address.country} ·{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </address>
          </div>

          <nav className="footer-col" aria-label="Services">
            <h3>Services</h3>
            <ul>
              <li><Link href="/services/penetration-testing">Automated Penetration Testing</Link></li>
              <li><Link href="/services/vulnerability-scanning">Vulnerability Scanning</Link></li>
              <li><Link href="/services/identity-access-management">IAM Security</Link></li>
              <li><Link href="/services">All Services &amp; Kiwi Scanner</Link></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Company">
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li>
                <a
                  href={siteConfig.founderSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our People ↗
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Resources">
            <h3>Resources</h3>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li>
                <Link href="/blog/how-automated-penetration-testing-reduces-risk-by-60">
                  Reducing Risk with Automated Pentesting
                </Link>
              </li>
              <li>
                <Link href="/blog/nist-vs-mitre-attck-which-framework-fits-your-organisation">
                  NIST vs MITRE ATT&amp;CK
                </Link>
              </li>
              <li>
                <Link href="/blog/hidden-cost-of-iam-misconfigurations-in-enterprise-cloud">
                  The Cost of IAM Misconfigurations
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Kiwi Defence — Brașov, Romania. All rights reserved.</p>
            <a
              aria-label="LinkedIn"
              href={siteConfig.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              className="footer-linkedin"
              style={{ mixBlendMode: 'luminosity' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}

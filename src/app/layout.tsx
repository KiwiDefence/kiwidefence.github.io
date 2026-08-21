import type { Metadata } from 'next'
import { IBM_Plex_Mono, Source_Code_Pro, Syncopate } from 'next/font/google'
import ChunkLoadRecovery from '@/components/ChunkLoadRecovery'
import JsonLd from '@/components/JsonLd'
import ThemeProvider from '@/components/ThemeProvider'
import { siteConfig, testimonials } from '@/lib/site'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-mono',
})

const syncopate = Syncopate({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syncopate',
})

const sourceCodePro = Source_Code_Pro({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code',
})

const siteUrl = siteConfig.url

const DEFAULT_TITLE =
  'Kiwi Defence | Cybersecurity Services & Penetration Testing | Romania'

const DEFAULT_DESCRIPTION =
  'Automated penetration testing, vulnerability scanning & offensive security built on NIST, MITRE ATT&CK & OWASP. From Brașov, Romania. Book a free assessment.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Kiwi Defence',
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'cybersecurity services Romania',
    'penetration testing company',
    'automated penetration testing',
    'enterprise vulnerability scanning',
    'IAM security services',
    'cybersecurity consulting Brașov',
    'NIST compliance Romania',
    'MITRE ATT&CK assessment',
    'OWASP penetration testing',
    'offensive security services',
  ],
  authors: [{ name: 'Kiwi Defence', url: siteUrl }],
  creator: 'Kiwi Defence',
  publisher: 'Kiwi Defence',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kiwi Defence',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kiwi Defence — Cybersecurity Services & Penetration Testing, Brașov Romania',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.svg',
  },
}

function organizationSchema() {
  const reviews = testimonials.map((t) => ({
    '@type': 'Review',
    reviewBody: t.quote,
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: t.name },
    itemReviewed: { '@type': 'Organization', name: siteConfig.name },
  }))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.svg`,
          caption: 'Kiwi Defence logo',
        },
        description:
          'Cybersecurity company specialising in automated penetration testing, enterprise vulnerability scanning, and identity & access management security. Based in Brașov, Romania.',
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.countryCode,
        },
        areaServed: ['RO', 'EU'],
        knowsAbout: [
          'Automated penetration testing',
          'Enterprise vulnerability scanning',
          'Identity & Access Management security',
          'Offensive security',
          'NIST Cybersecurity Framework',
          'MITRE ATT&CK',
          'OWASP',
        ],
        sameAs: [siteConfig.linkedin, siteConfig.founderSite],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: siteConfig.email,
            availableLanguage: ['English', 'Romanian'],
            areaServed: ['RO', 'EU'],
          },
        ],
        review: reviews,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Kiwi Defence',
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en',
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${syncopate.variable} ${sourceCodePro.variable}`} data-theme="dark">
      <body>
        <JsonLd data={organizationSchema()} />
        <ChunkLoadRecovery />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

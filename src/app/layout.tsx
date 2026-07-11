import type { Metadata } from 'next'
import { IBM_Plex_Mono, Source_Code_Pro, Syncopate } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
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

const siteUrl = 'https://kiwidefence.github.io/KiwiDefence-web'

export const metadata: Metadata = {
  title: 'Kiwi Defence — Cybersecurity',
  description:
    'Kiwi Defence provides enterprise-grade cybersecurity solutions — penetration testing, threat monitoring, incident response, and security consulting.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Kiwi Defence — Cybersecurity',
    description:
      'Enterprise-grade cybersecurity solutions — penetration testing, threat monitoring, incident response, and security consulting.',
    url: siteUrl,
    siteName: 'Kiwi Defence',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Kiwi Defence — Cybersecurity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiwi Defence — Cybersecurity',
    description:
      'Enterprise-grade cybersecurity solutions — penetration testing, threat monitoring, incident response, and security consulting.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${syncopate.variable} ${sourceCodePro.variable}`} data-theme="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

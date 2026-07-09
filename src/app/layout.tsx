import type { Metadata } from 'next'
import { IBM_Plex_Mono, Syncopate } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Kiwi Defence — Cybersecurity',
  description:
    'Kiwi Defence provides enterprise-grade cybersecurity solutions — penetration testing, threat monitoring, incident response, and security consulting.',
  openGraph: {
    title: 'Kiwi Defence — Cybersecurity',
    description:
      'Enterprise-grade cybersecurity solutions — penetration testing, threat monitoring, incident response, and security consulting.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${syncopate.variable}`} data-theme="dark">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    if (siteConfig.formEndpoint) {
      try {
        await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'vulnerability-scan-checklist' }),
        })
      } catch {
        // keep UX graceful even if the endpoint hiccups
      }
    } else {
      const subject = encodeURIComponent('Vulnerability Scan Checklist request')
      const body = encodeURIComponent(
        `Please send the Free Vulnerability Scan Checklist to: ${email}`
      )
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    }
    setSent(true)
  }

  return (
    <div className="lead-magnet">
      <div className="lead-magnet-copy">
        <h3>Free Vulnerability Scan Checklist</h3>
        <p>
          The exact 22-point checklist our engineers use to scope enterprise
          vulnerability scanning engagements — attack surface discovery, CVE
          triage, and remediation tracking. Delivered by email, no call required.
        </p>
      </div>
      {sent ? (
        <p className="lead-magnet-done">
          Check your inbox — the checklist is on its way. Questions in the
          meantime? Email{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      ) : (
        <form className="lead-magnet-form" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="lead-email">
            Work email
          </label>
          <input
            id="lead-email"
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <button type="submit" className="btn btn-primary">
            Send me the checklist
          </button>
        </form>
      )}
    </div>
  )
}

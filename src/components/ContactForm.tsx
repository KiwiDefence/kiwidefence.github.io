'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site'

const services = [
  'Automated Penetration Testing',
  'Enterprise Vulnerability Scanning',
  'Identity & Access Management (IAM)',
  'Kiwi Scanner platform',
  'Not sure yet — advise me',
]

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setSending(true)

    if (siteConfig.formEndpoint) {
      try {
        await fetch(siteConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(data.entries())),
        })
        setSent(true)
      } catch {
        window.location.href = mailtoHref(data)
      }
    } else {
      window.location.href = mailtoHref(data)
      setSent(true)
    }
    setSending(false)
  }

  function mailtoHref(data: FormData) {
    const subject = encodeURIComponent(
      `Security assessment request — ${data.get('service') ?? 'general'}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${data.get('name')}`,
        `Company: ${data.get('company')}`,
        `Email: ${data.get('email')}`,
        `Service of interest: ${data.get('service')}`,
        '',
        `${data.get('message')}`,
      ].join('\n')
    )
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  if (sent) {
    return (
      <div className="contact-form-success">
        <h3>Message on its way</h3>
        <p>
          Thank you — we respond to every enquiry within 24 hours. If your email
          client didn&apos;t open automatically, write to us directly at{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-name">Name *</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-email">Work email *</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="form-field">
          <label htmlFor="cf-service">Service of interest</label>
          <select id="cf-service" name="service" defaultValue={services[0]}>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">What are you trying to protect? *</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="Briefly describe your environment, compliance drivers, or the concern that brought you here."
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? 'Sending…' : 'Send message →'}
      </button>
      <p className="form-fineprint">
        We reply within 24 hours. Your details are used only to respond to this
        enquiry.
      </p>
    </form>
  )
}

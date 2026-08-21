import Link from 'next/link'

export default function CtaBand({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <section className="section scanner-cta">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>
          Get started
        </div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          {title}
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}
        >
          {subtitle}
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link href="/contact" className="btn btn-primary">
            Book a Free Security Assessment →
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  )
}

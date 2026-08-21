import JsonLd from '@/components/JsonLd'

export type Faq = { question: string; answer: string }

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <section className="section">
      <div className="container container-narrow">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently asked questions</h2>
        <JsonLd data={schema} />
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item" key={f.question}>
              <summary>
                <h3>{f.question}</h3>
                <span aria-hidden="true" className="faq-chevron">
                  +
                </span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

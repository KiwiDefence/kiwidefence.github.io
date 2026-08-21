import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBand from '@/components/CtaBand'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Cybersecurity Blog — Offensive Security Insights',
  description:
    'Technical articles on automated penetration testing, vulnerability management, IAM security, NIST & MITRE ATT&CK from the Kiwi Defence engineering team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Cybersecurity Blog | Kiwi Defence',
    description:
      'Practical offensive security analysis: penetration testing, vulnerability scanning, and identity security from working engineers.',
    url: '/blog',
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <>
      <SiteNav />
      <main className="content-page">
        <div className="container">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />

          <h1 className="page-h1">Cybersecurity Insights</h1>
          <p className="page-lede">
            Field notes from our offensive security engineers — penetration
            testing, vulnerability management, identity security, and framework
            strategy. Written for CISOs and IT managers who want substance over
            buzzwords.
          </p>

          <div className="blog-list">
            {posts.map((post) => (
              <article className="blog-list-item" key={post.slug}>
                <div className="blog-meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="service-more">
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>

        <CtaBand
          title="Turn insight into lower risk"
          subtitle="Book a free security assessment and put our methodology to work on your environment."
        />
      </main>
      <SiteFooter />
    </>
  )
}

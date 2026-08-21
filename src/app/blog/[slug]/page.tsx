import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import SiteFooter from '@/components/SiteFooter'
import SiteNav from '@/components/SiteNav'
import { author, getPost, posts } from '@/lib/blog'
import { siteConfig } from '@/lib/site'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [author.url],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const relatedLinks: Record<string, { href: string; label: string }[]> = {
  'how-automated-penetration-testing-reduces-risk-by-60': [
    { href: '/services/penetration-testing', label: 'Automated Penetration Testing Services' },
    { href: '/services/vulnerability-scanning', label: 'Enterprise Vulnerability Scanning' },
    { href: '/contact', label: 'Book a Free Security Assessment' },
  ],
  'nist-vs-mitre-attck-which-framework-fits-your-organisation': [
    { href: '/about', label: 'Our Methodology — NIST, MITRE ATT&CK, OWASP' },
    { href: '/services/penetration-testing', label: 'Automated Penetration Testing Services' },
    { href: '/contact', label: 'Talk to Our Team' },
  ],
  'hidden-cost-of-iam-misconfigurations-in-enterprise-cloud': [
    { href: '/services/identity-access-management', label: 'IAM Security Services' },
    { href: '/services/vulnerability-scanning', label: 'Enterprise Vulnerability Scanning' },
    { href: '/contact', label: 'Request an IAM Posture Review' },
  ],
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.modified,
    inLanguage: 'en',
    keywords: post.keywords.join(', '),
    author: { '@type': 'Person', name: author.name, url: author.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.svg` },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  }

  return (
    <>
      <SiteNav />
      <main className="content-page">
        <div className="container container-narrow">
          <Breadcrumb
            items={[
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <JsonLd data={articleSchema} />

          <article>
            <header className="post-header">
              <div className="blog-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
                <span aria-hidden="true">·</span>
                <span>By {author.name}</span>
              </div>
              <h1 className="page-h1">{post.title}</h1>
            </header>

            <div className="prose-section">
              {post.sections.map((block, i) => {
                switch (block.type) {
                  case 'h2':
                    return <h2 key={i}>{block.text}</h2>
                  case 'h3':
                    return <h3 key={i}>{block.text}</h3>
                  case 'ul':
                    return (
                      <ul key={i}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  default:
                    return <p key={i}>{block.text}</p>
                }
              })}
            </div>

            <aside className="related-box">
              <h2>Related</h2>
              <ul>
                {(relatedLinks[post.slug] ?? []).map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label} →</Link>
                  </li>
                ))}
              </ul>
            </aside>
          </article>
        </div>

        <CtaBand
          title="Put this into practice"
          subtitle="Book a free security assessment and see how our methodology applies to your environment."
        />
      </main>
      <SiteFooter />
    </>
  )
}

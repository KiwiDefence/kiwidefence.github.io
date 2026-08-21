import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/lib/site'

export type Crumb = { name: string; href: string }

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ name: 'Home', href: '/' }, ...items]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href === '/' ? '' : item.href}`,
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          {allItems.map((item, i) => (
            <li key={item.href}>
              {i < allItems.length - 1 ? (
                <>
                  <Link href={item.href}>{item.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

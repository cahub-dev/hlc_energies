import type { SiteContent } from '@/content/types'

export default function Footer({
  contact,
  footer,
}: Pick<SiteContent, 'contact' | 'footer'>) {
  return (
    <footer className="bg-hlc-blue-900 py-14 text-hlc-blue-100">
      <div className="page-wrap">
        <div className="space-y-1">
          {contact.identity.map((line, i) => (
            <p
              key={i}
              className={
                i === 0 ? 'font-bold text-white' : 'text-sm text-hlc-blue-100'
              }
            >
              {line}
            </p>
          ))}
        </div>
        <p className="mt-8 text-sm text-hlc-blue-100/80">{footer.copyright}</p>
      </div>
    </footer>
  )
}

import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { content } from '@/content/site'
import { localeFromPath } from '@/lib/i18n'
import { jsonLd } from '@/lib/seo'
import { DEFAULT_LOCALE } from '@/content/types'
import TanStackQueryDevtools from '@/integrations/tanstack-query/devtools'

import appCss from '@/styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#1f4e79' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const locale = localeFromPath(pathname)
  const c = content[locale]

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          // Structured data is governance-safe (see src/lib/seo.ts); serialized
          // server-side, so injecting it here is inert HTML, not runtime script.
          dangerouslySetInnerHTML={{ __html: jsonLd(locale) }}
        />
      </head>
      <body className="antialiased">
        <a className="skip-link" href="#main">
          {c.ui.skipToContent}
        </a>
        <Nav locale={locale} nav={c.nav} ui={c.ui} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  const c = content[DEFAULT_LOCALE]
  return (
    <div className="page-wrap flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-hlc-gold-600">
        404
      </p>
      <h1 className="text-3xl font-medium text-gray-900 sm:text-4xl">
        {DEFAULT_LOCALE === 'pt' ? 'Página não encontrada' : 'Page not found'}
      </h1>
      <p className="max-w-md text-[var(--ink-muted)]">
        {DEFAULT_LOCALE === 'pt'
          ? 'A página que procura não existe ou foi movida.'
          : 'The page you are looking for does not exist or has moved.'}
      </p>
      <a
        href={`/${DEFAULT_LOCALE}`}
        className="mt-2 inline-flex items-center gap-2 rounded-md bg-hlc-blue-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-hlc-blue-900"
      >
        {c.nav[0]?.label ?? (DEFAULT_LOCALE === 'pt' ? 'Início' : 'Home')}{' '}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}

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
      { name: 'theme-color', content: '#0a2a5e' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const locale = localeFromPath(pathname)
  const c = content[locale]

  return (
    <html lang={locale}>
      <head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <HeadContent />
      </head>
      <body className="antialiased">
        <a className="skip-link" href="#main">
          {c.ui.skipToContent}
        </a>
        <Nav locale={locale} nav={c.nav} ui={c.ui} />
        <main id="main">{children}</main>
        <Footer contact={c.contact} footer={c.footer} />
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

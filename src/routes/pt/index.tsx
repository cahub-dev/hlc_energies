import { createFileRoute } from '@tanstack/react-router'
import HomePage from '@/components/HomePage'
import { buildSeo } from '@/lib/seo'

export const Route = createFileRoute('/pt/')({
  head: () => buildSeo({ locale: 'pt' }),
  component: () => <HomePage locale="pt" />,
})

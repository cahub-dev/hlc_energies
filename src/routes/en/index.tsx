import { createFileRoute } from '@tanstack/react-router'
import HomePage from '@/components/HomePage'
import { buildSeo } from '@/lib/seo'

export const Route = createFileRoute('/en/')({
  head: () => buildSeo({ locale: 'en' }),
  component: () => <HomePage locale="en" />,
})

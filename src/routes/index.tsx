import { createFileRoute, redirect } from '@tanstack/react-router'
import { DEFAULT_LOCALE } from '@/content/types'

// Portuguese is authoritative — send the bare root to /pt.
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: `/${DEFAULT_LOCALE}` })
  },
})

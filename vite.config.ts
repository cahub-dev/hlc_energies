import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      // Brochure site with no runtime server needs: prerender both locale
      // pages to static HTML so the SSR-rendered SEO tags are baked in and
      // Vercel can serve pure static output (dist/client). Root "/" redirect
      // is handled by vercel.json.
      pages: [{ path: '/pt' }, { path: '/en' }],
      prerender: { enabled: true, crawlLinks: true },
    }),
    viteReact(),
  ],
})

export default config

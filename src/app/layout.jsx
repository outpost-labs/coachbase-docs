import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Only a Regular cut of Abordage exists. Declaring the 400-700 range means a
// heavier heading matches this face instead of getting a synthetic bold.
const abordage = localFont({
  src: [
    { path: '../fonts/abordage-regular.woff2', weight: '400 700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-abordage',
})

export const metadata = {
  title: {
    template: '%s - Docs',
    default: 'CoachBase - Documentation',
  },
  description: 'CoachBase documentation.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, abordage.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}

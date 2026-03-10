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

const canela = localFont({
  src: [
    { path: '../fonts/canelaweb-regular.woff', weight: '400', style: 'normal' },
    { path: '../fonts/canelaweb-medium.woff', weight: '500', style: 'normal' },
    { path: '../fonts/canelaweb-bold.woff', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-canela',
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
      className={clsx('h-full antialiased', inter.variable, canela.variable)}
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

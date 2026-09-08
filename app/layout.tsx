import type { Metadata, Viewport } from 'next'
import { DM_Mono, Instrument_Serif, Manrope, Poppins, Inter } from 'next/font/google'
import './globals.css'
import { ScrollToTop } from '@/components/scroll-to-top'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], variable: '--font-serif', weight: '400' })
const dmMono = DM_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['600', '700', '800', '900'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['700', '800', '900'] })

export const metadata: Metadata = {
  title: {
    default: 'Farid Chairul Azhar - Portfolio',
    template: '%s — Farid Chairul Azhar - Portfolio',
  },
  description: 'Farid Chairul Azhar Portfolio: software engineering, web applications, and data systems.',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f0e9' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable} ${dmMono.variable} ${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}

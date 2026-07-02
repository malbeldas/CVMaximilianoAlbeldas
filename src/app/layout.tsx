import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Maximiliano Albeldas — Head Frontend',
  description:
    'Head Frontend y Technical Lead especializado en Web y Mobile. Buenos Aires, Argentina.',
  openGraph: {
    title: 'Maximiliano Albeldas — Head Frontend',
    description: 'Head Frontend y Technical Lead especializado en Web y Mobile.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#070711] text-slate-100">{children}</body>
    </html>
  )
}

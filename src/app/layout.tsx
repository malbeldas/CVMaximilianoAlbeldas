import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Maximiliano Albeldas — Head Frontend & Mobile',
  description:
    'Head Frontend & Mobile: liderazgo técnico de equipos Web y Mobile, apps nativas Android e iOS, pagos móviles y CI/CD. Buenos Aires, Argentina.',
  openGraph: {
    title: 'Maximiliano Albeldas — Head Frontend & Mobile',
    description: 'Liderazgo técnico de equipos Web y Mobile · React · React Native · Kotlin · Swift.',
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

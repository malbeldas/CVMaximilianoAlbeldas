import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import Initiatives from '@/components/Initiatives'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Projects />
        <Stack />
        <Initiatives />
        <Education />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

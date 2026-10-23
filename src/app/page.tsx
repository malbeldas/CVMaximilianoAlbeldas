import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Summary from '@/components/Summary'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Stack from '@/components/Stack'
import Achievements from '@/components/Achievements'
import Approach from '@/components/Approach'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Summary />
        <Achievements />
        <Experience />
        <Projects />
        <Stack />
        <Approach />
        <Education />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

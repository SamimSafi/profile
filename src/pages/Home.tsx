import { Navbar } from '@/components/layout/Navbar'
import { Background } from '@/components/layout/Background'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { Hero, About, Skills, Projects, Contact } from '@/sections'

export default function Home() {
  return (
    <Background>
      <ScrollProgress />
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </Background>
  )
}

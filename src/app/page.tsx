import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import AITools from '@/components/AITools'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <AITools />
      <Footer />
    </main>
  )
}

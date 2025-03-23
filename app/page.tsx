import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import GithubSnake from './components/GithubSnake'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <GithubSnake />
      <Projects />
      <Contact />
    </main>
  )
}

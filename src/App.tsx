import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { LanguageProvider } from './i18n/LanguageContext'

function HomePage() {
  const { hash } = useLocation()

  // Arriving from a detail page as "/#work" — the router restores the route
  // but does not scroll. Jump instantly rather than smoothly: a smooth scroll
  // is an animation, and it gets dropped while the route is still swapping.
  useEffect(() => {
    if (!hash) return
    document.querySelector(hash)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [hash])

  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="bg-paper min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyecto/:projectId" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

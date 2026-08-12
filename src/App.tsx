import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="bg-paper min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

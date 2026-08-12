import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Vehicles from './components/sections/Vehicles'
import Safety from './components/sections/Safety'
import Coverage from './components/sections/Coverage'
import Benefits from './components/sections/Benefits'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import { whatsappLink } from './utils/whatsapp'

function App() {
  return (
    <div className="overflow-x-hidden bg-white font-body text-zinc-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Vehicles />
        <Safety />
        <Coverage />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-20 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-2xl text-white shadow-xl">◔</a>
    </div>
  )
}

export default App
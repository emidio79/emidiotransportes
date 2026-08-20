import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import TiaAndrea from './components/sections/TiaAndrea'
import TioSan from './components/sections/TioSan'
import Safety from './components/sections/Safety'
import Coverage from './components/sections/Coverage'
import Benefits from './components/sections/Benefits'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import WhatsAppSelector from './components/WhatsAppSelector/WhatsAppSelector'
import { whatsappLink } from './utils/whatsapp'

function App() {
  const [isWhatsAppSelectorOpen, setIsWhatsAppSelectorOpen] =
    useState(false)
  const openWhatsAppSelector = (message) => {
    setIsWhatsAppSelectorOpen(true)
  }
  return (
    <div className="overflow-x-hidden bg-white font-body text-zinc-950">
      <Header openWhatsAppSelector={openWhatsAppSelector} />
      <main>
        <Hero />
        <About />
        <TiaAndrea />
        <TioSan />
        <Safety />
        <Coverage />
        <Benefits />
        <Testimonials />
        <FAQ openWhatsAppSelector={openWhatsAppSelector} />
        <Contact openWhatsAppSelector={openWhatsAppSelector} />
      </main>
      <Footer openWhatsAppSelector={openWhatsAppSelector} />
      <button
        type="button"
        onClick={() => setIsWhatsAppSelectorOpen(true)}
        aria-label="Escolher atendimento pelo WhatsApp"
        className="fixed bottom-5 right-5 z-20 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-2xl text-white shadow-xl"
      >
        ◔
      </button>
      <WhatsAppSelector
        isOpen={isWhatsAppSelectorOpen}
        onClose={() => setIsWhatsAppSelectorOpen(false)}
        message="Olá! Gostaria de saber mais sobre o transporte escolar."
      />
    </div>
  )
}

export default App
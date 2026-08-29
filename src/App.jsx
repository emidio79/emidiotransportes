import { useEffect, useState } from 'react'
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
import wppImage from './assets/images/wpp-image.png'
function App() {
  const [isWhatsAppSelectorOpen, setIsWhatsAppSelectorOpen] =
    useState(false)

  useEffect(() => {
    const revealElements = document.querySelectorAll('main section')

    if (!revealElements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      },
    )

    revealElements.forEach((element) => {
      element.classList.add('reveal-on-scroll')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

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
        className="fixed bottom-5 right-5 z-20 grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-green-500 p-0 text-2xl text-white shadow-xl"
      >
        <img src={wppImage} alt="WhatsApp" className="h-full w-full object-cover" />
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
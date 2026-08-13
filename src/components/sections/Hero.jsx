import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import { heroHighlights } from '../../data/services'
import { whatsappLink } from '../../utils/whatsapp'
import Carrosan from '../../assets/images/carro-san.jpeg'
import Carrokaua from '../../assets/images/carro-kaua.jpeg'

const imagens = [Carrosan, Carrokaua]

function Hero() {
  const [imagemAtual, setImagemAtual] = useState(0)
const [animando, setAnimando] = useState(false)

useEffect(() => {
  if (animando) return

  const timer = setTimeout(() => {
    setAnimando(true)
  }, 4000)

  return () => clearTimeout(timer)
}, [imagemAtual, animando])

useEffect(() => {
  if (!animando) return

  const proximaImagem = (imagemAtual + 1) % imagens.length

  const timer = setTimeout(() => {
    setImagemAtual(proximaImagem)
    setAnimando(false)
  }, 1000)

  return () => clearTimeout(timer)
}, [animando, imagemAtual])
  return (
    <section id="inicio" className="bg-gradient-to-br from-amber-50 via-white to-white py-16 md:py-20">
      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.13em] text-yellow-800"><span className="text-base text-yellow-400">●</span> Segurança, cuidado e pontualidade</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[.95] tracking-[-.06em] sm:text-6xl lg:text-7xl">Transporte escolar seguro para quem é mais importante.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">Cuidamos do trajeto dos alunos com responsabilidade, atenção e uma comunicação próxima com cada família.</p>
          <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href={whatsappLink('Olá! Gostaria de consultar uma vaga no transporte escolar.')}>Consultar vaga <span className="text-lg">→</span></Button>
            <a href="#como-funciona" className="text-sm font-bold">Como funciona <span className="ml-2 text-lg text-yellow-700">↓</span></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
            {heroHighlights.map(([icon, line1, line2]) => (
              <div key={icon} className="flex items-center gap-2">
                <strong className="grid h-7 w-7 place-items-center rounded-full bg-yellow-100 text-sm text-yellow-800">{icon}</strong>
                <span className="text-[11px] font-semibold leading-tight text-zinc-600">{line1}<br />{line2}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto min-h-[330px] w-[min(100%,520px)] sm:min-h-[410px]">
          <div className="absolute -left-2 -top-3 z-30 rounded bg-white px-3 py-2 text-[15px] font-bold shadow-lg">Nossos Veículos <span className="text-red-500">🚗</span></div>
          <div className="absolute left-3 top-2 z-0 h-[calc(100%-16px)] w-[calc(100%-16px)]">
            {/* Próxima foto: fundo → frente */}
            <div
              key={imagens[(imagemAtual + 1) % imagens.length]}
              className={`absolute h-full w-full overflow-hidden rounded-xl transition-all duration-[1000ms] ease-out ${
                animando
                  ? 'left-0 top-0 z-20 rotate-0'
                  : 'left-4 top-4 z-0 rotate-3'
              }`}
            >
              <img
                src={imagens[(imagemAtual + 1) % imagens.length]}
                alt="Próximo veículo de transporte escolar"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Foto atual: frente → fundo simultaneamente */}
            <div
              key={imagens[imagemAtual]}
              className={`absolute h-full w-full overflow-hidden rounded-xl transition-all duration-[1000ms] ease-out ${
                animando
                  ? 'left-4 top-4 z-10 rotate-3'
                  : 'inset-0 z-10 rotate-0'
              }`}
            >
              <img
                src={imagens[imagemAtual]}
                alt="Veículo de transporte escolar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-2 z-30 rounded bg-white px-3 py-2 shadow-lg"><strong className="block font-display text-base text-yellow-800">SMTT</strong><span className="block text-[9px] text-zinc-500">Serviço regularizado</span></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
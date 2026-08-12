import Button from '../ui/Button'
import { heroHighlights } from '../../data/services'
import { whatsappLink } from '../../utils/whatsapp'

function Hero() {
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
          <div className="absolute -left-2 -top-3 z-10 rounded bg-white px-3 py-2 text-[11px] font-bold shadow-lg">Seu filho em boas mãos <span className="text-red-500">♥</span></div>
          <div className="absolute left-3 top-2 flex h-[calc(100%-16px)] w-[calc(100%-16px)] flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-600 text-center shadow-[16px_18px_0_#181818]">
            <span className="z-10 bg-zinc-950 px-2 py-1 text-[10px] font-bold tracking-[.13em] text-white">FOTO DO VEÍCULO</span>
            <div className="z-10 mt-6 flex h-24 w-56 items-end gap-2 rounded-[25px_25px_7px_7px] border-[7px] border-zinc-950 bg-amber-50 px-4 pb-2">
              <i className="h-7 w-7 rounded-full bg-zinc-950" /><i className="mb-7 h-10 w-10 rounded border-4 border-zinc-950 bg-sky-200" /><i className="mb-7 h-10 w-10 rounded border-4 border-zinc-950 bg-sky-200" /><i className="h-7 w-7 rounded-full bg-zinc-950" />
            </div>
            <p className="z-10 mt-4 max-w-[220px] text-xs leading-relaxed text-yellow-950">Substitua este bloco por uma foto real e bem iluminada do veículo.</p>
          </div>
          <div className="absolute -bottom-1 -right-2 z-10 rounded bg-white px-3 py-2 shadow-lg"><strong className="block font-display text-base text-yellow-800">SMTT</strong><span className="block text-[9px] text-zinc-500">Serviço regularizado</span></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
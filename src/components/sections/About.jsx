import { stats } from '../../data/services'

function About() {
  return (
    <section id="sobre" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-24">
        <div><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">SOBRE NÓS</p><h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-.05em] sm:text-5xl">Um transporte feito por uma família, para cuidar da sua.</h2></div>
        <div className="max-w-xl text-zinc-600"><p>Somos uma família que acredita que levar uma criança à escola é muito mais do que cumprir uma rota. É assumir uma responsabilidade diária com segurança, atenção e respeito.</p><p className="mt-4">O nosso serviço nasceu em <strong className="text-zinc-950">[ANO DE INÍCIO]</strong>, com o propósito de oferecer mais tranquilidade para pais e responsáveis em <strong className="text-zinc-950">Aracaju-SE</strong>.</p><a href="#contato" className="mt-6 inline-block text-sm font-bold">Conheça nossa rota <span className="ml-2 text-lg text-yellow-700">→</span></a></div>
      </div>
      <div className="mx-auto mt-14 grid w-[min(1140px,calc(100%-40px))] gap-5 border-t border-stone-300 pt-7 sm:grid-cols-3">
        {stats.map(([number, label]) => <div key={label} className="flex items-center gap-3"><strong className="font-display text-4xl tracking-[-.05em]">{number}</strong><span className="max-w-24 text-xs leading-tight text-zinc-500">{label}</span></div>)}
      </div>
    </section>
  )
}

export default About
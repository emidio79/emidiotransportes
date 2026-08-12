import { safetyItems } from '../../data/services'

function Safety() {
  return (
    <section id="seguranca" className="py-20 md:py-28">
      <div className="mx-auto w-[min(1140px,calc(100%-40px))]">
        <div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">SEGURANÇA EM PRIMEIRO LUGAR</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Tranquilidade para você. Cuidado para eles.</h2><p className="mt-4 text-zinc-600">Nosso compromisso é tornar cada trajeto seguro, organizado e acolhedor.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {safetyItems.map((item) => <article key={item.title} className="rounded-lg border border-stone-200 p-6"><span className="grid h-10 w-10 place-items-center rounded-full bg-yellow-100 font-bold text-yellow-800">{item.icon}</span><h3 className="mt-7 font-display text-xl font-bold tracking-[-.04em]">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.text}</p></article>)}
        </div>
      </div>
    </section>
  )
}

export default Safety
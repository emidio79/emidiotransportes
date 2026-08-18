import { steps } from '../../data/services'

function Coverage() {
  return (
    <>
      <section id="como-funciona" className="bg-zinc-950 py-20 md:py-28">
        <div className="mx-auto w-[min(1140px,calc(100%-40px))]">
          <div className="mb-12"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">SIMPLES E TRANSPARENTE</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] text-white sm:text-5xl">Como funciona</h2><p className="mt-4 max-w-xl text-zinc-400">Do primeiro contato ao dia a dia da rota, tudo é alinhado com clareza.</p></div>
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, text]) => <article key={number}><span className="grid h-8 w-8 place-items-center rounded-full bg-yellow-400 text-[10px] font-extrabold">{number}</span><h3 className="mt-6 font-display text-xl font-bold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p></article>)}</div>
        </div>
      </section>
    </>
  )
}

export default Coverage
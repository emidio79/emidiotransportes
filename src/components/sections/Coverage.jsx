import Button from '../ui/Button'
import { neighborhoods, schools, steps } from '../../data/services'
import { whatsappLink } from '../../utils/whatsapp'

function Coverage() {
  return (
    <>
      <section id="como-funciona" className="bg-zinc-950 py-20 md:py-28">
        <div className="mx-auto w-[min(1140px,calc(100%-40px))]">
          <div className="mb-12"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">SIMPLES E TRANSPARENTE</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] text-white sm:text-5xl">Como funciona</h2><p className="mt-4 max-w-xl text-zinc-400">Do primeiro contato ao dia a dia da rota, tudo é alinhado com clareza.</p></div>
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, text]) => <article key={number}><span className="grid h-8 w-8 place-items-center rounded-full bg-yellow-400 text-[10px] font-extrabold">{number}</span><h3 className="mt-6 font-display text-xl font-bold tracking-[-.04em] text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="rotas" className="bg-yellow-400 py-20 md:py-28">
        <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] items-center gap-12 lg:grid-cols-[.83fr_1.17fr] lg:gap-20">
          <div><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-900">ROTAS ATENDIDAS</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Onde a nossa rota chega.</h2><p className="mt-4 max-w-md text-sm leading-relaxed text-yellow-950">Estamos ampliando as informações de rotas. Consulte-nos para confirmar disponibilidade no seu bairro, escola e turno.</p><Button dark href={whatsappLink('Olá! Gostaria de confirmar se vocês atendem meu bairro e escola.')} className="mt-6">Consultar minha rota <span className="text-lg">→</span></Button></div>
          <div className="grid overflow-hidden rounded-lg bg-white shadow-[10px_10px_0_rgba(0,0,0,.16)] sm:grid-cols-2"><div className="border-b border-stone-200 p-7 sm:border-b-0 sm:border-r"><h3 className="font-display text-lg font-bold">Bairros atendidos</h3><ul className="mt-5 space-y-3 text-sm text-zinc-500">{neighborhoods.map((item) => <li key={item}>✓ {item}</li>)}</ul></div><div className="p-7"><h3 className="font-display text-lg font-bold">Escolas atendidas</h3><ul className="mt-5 space-y-3 text-sm text-zinc-500">{schools.map((item) => <li key={item}>✓ {item}</li>)}</ul></div><div className="col-span-full grid h-24 place-content-center border-t border-stone-200 bg-stone-50 text-center text-xs text-stone-400"><span className="mb-1 text-xl text-yellow-700">⌖</span>Mapa de rotas em breve</div></div>
        </div>
      </section>
    </>
  )
}

export default Coverage
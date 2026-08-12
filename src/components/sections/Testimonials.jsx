import { testimonials } from '../../data/testimonials'

function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28"><div className="mx-auto w-[min(1140px,calc(100%-40px))]"><div className="mb-12 text-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">QUEM CONFIA, RECOMENDA</p><h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Palavras de quem vive essa tranquilidade.</h2></div><div className="grid gap-4 lg:grid-cols-3">{testimonials.map((item, index) => <article key={index} className="flex min-h-[245px] flex-col justify-between rounded-lg border border-stone-200 bg-stone-50 p-7"><div><div className="text-xs tracking-[.18em] text-yellow-600">★★★★★</div><blockquote className="mt-4 text-sm italic leading-relaxed text-zinc-700">“{item.text}”</blockquote></div><footer className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-800">{item.name[0]}</span><div><strong className="block text-xs">{item.name}</strong><small className="text-[10px] text-zinc-500">{item.location}</small></div></footer></article>)}</div><p className="mt-5 text-center text-[11px] text-stone-400">Substitua estes cards pelos depoimentos autorizados das famílias atendidas.</p></div></section>
  )
}

export default Testimonials
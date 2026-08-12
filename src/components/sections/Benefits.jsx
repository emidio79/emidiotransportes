import { benefits } from '../../data/services'

function Benefits() {
  return (
    <section id="diferenciais" className="bg-stone-50 py-20 md:py-28"><div className="mx-auto w-[min(1140px,calc(100%-40px))]"><div className="mb-12 text-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-800">POR QUE ESCOLHER A GENTE</p><h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Mais do que levar e buscar.</h2></div><div className="grid border-l border-t border-stone-300 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([icon, title, text]) => <article key={title} className="border-b border-r border-stone-300 p-7"><span className="text-xl text-yellow-700">{icon}</span><h3 className="mt-6 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-zinc-600">{text}</p></article>)}</div></div></section>
  )
}

export default Benefits
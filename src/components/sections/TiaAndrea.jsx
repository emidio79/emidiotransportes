import tiaAndreaImage from '../../assets/images/tia-andrea.png'
import { rotandrea, escolandrea } from '../../data/services'
import { WHATSAPP_TIA_ANDREA } from '../../utils/constants'
import { whatsappLinkFor } from '../../utils/whatsapp'

function TiaAndrea() {
  return (
    <section id="TiaAndrea" className="bg-black py-20 md:py-28">
      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-10 lg:grid-cols-[380px_1fr] lg:gap-20">
        {/* ESQUERDA: foto vertical */}
        <div className="overflow-hidden rounded-xl shadow-[12px_12px_0_#facc15]">
          <img
            src={tiaAndreaImage}
            alt="Tia Andrea, responsável pelo transporte escolar"
            className="h-[500px] w-full object-cover object-top sm:h-[560px] lg:h-[620px]"
          />
        </div>

        {/* DIREITA: apresentação e rotas */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">
            QUEM CUIDA DO SEU FILHO
          </p>

          <h2 className="font-display text-4xl font-bold tracking-[-.05em] text-white">
            Conheça a Tia Andrea.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
            Com carinho, responsabilidade e atenção em cada trajeto, a Tia
            Andrea acompanha os alunos para que cheguem à escola e retornem
            para casa com segurança.
          </p>
          <a
            href={whatsappLinkFor(
              WHATSAPP_TIA_ANDREA,
              'Olá, Tia Andrea! Gostaria de saber mais sobre o transporte escolar.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Tia Andrea pelo WhatsApp"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="text-lg leading-none">◉</span>
            Falar com a Tia Andrea
          </a>

          <div className="mt-10">
            <p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">
              ROTAS ATENDIDAS
            </p>

            <h3 className="mb-7 font-display text-3xl font-bold tracking-[-.05em] text-white">
              Veja aonde atendo.
            </h3>

            <div className="grid overflow-hidden rounded-lg bg-white shadow-[10px_10px_0_rgba(0,0,0,.16)] sm:grid-cols-2">
              <div className="border-b border-stone-200 p-7 sm:border-b-0 sm:border-r">
                <h4 className="font-display text-lg font-bold text-black">
                  Bairros atendidos
                </h4>

                <ul className="mt-5 space-y-3 text-sm text-zinc-500">
                  {rotandrea.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-7">
                <h4 className="font-display text-lg font-bold text-black">
                  Escolas atendidas
                </h4>

                <ul className="mt-5 space-y-3 text-sm text-zinc-500 columns-2 gap-4">
                  {escolandrea.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="col-span-full grid h-24 place-content-center border-t border-stone-200 bg-stone-50 text-center text-xs text-stone-400">
                <span className="mb-1 text-xl text-yellow-700">⌖</span>
                Mapa de rotas em breve
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TiaAndrea
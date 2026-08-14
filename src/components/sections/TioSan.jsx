import tioSanImage from '../../assets/images/tio-san.png'
import { neighborhoods, schools} from '../../data/services'
function TioSan() {
  return (
    <section id="TioSan" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-10 lg:grid-cols-[380px_1fr] lg:gap-20">
        {/* ESQUERDA: foto vertical */}
        <div className="overflow-hidden rounded-xl shadow-[12px_12px_0_#facc15]">
          <img
            src={tioSanImage}
            alt="Tio San, responsável pelo transporte escolar"
            className="h-[500px] w-full object-cover object-top sm:h-[560px] lg:h-[620px]"
          />
        </div>

        {/* DIREITA: apresentação e rotas */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">
            QUEM CUIDA DO SEU FILHO
          </p>

          <h2 className="font-display text-4xl font-bold tracking-[-.05em] text-black">
            Conheça o Tio San.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
            Com carinho, responsabilidade e atenção em cada trajeto, o Tio
            San acompanha os alunos para que cheguem à escola e retornem
            para casa com segurança.
          </p>

          <div className="mt-10">
            <p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">
              ROTAS ATENDIDAS
            </p>

            <h3 className="mb-7 font-display text-3xl font-bold tracking-[-.05em] text-black">
              Veja aonde atendo.
            </h3>

            <div className="grid overflow-hidden rounded-lg bg-white shadow-[10px_10px_0_rgba(0,0,0,.16)] sm:grid-cols-2">
              <div className="border-b border-stone-200 p-7 sm:border-b-0 sm:border-r">
                <h4 className="font-display text-lg font-bold text-black">
                  Bairros atendidos
                </h4>

                <ul className="mt-5 space-y-3 text-sm text-zinc-500">
                  {neighborhoods.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-7">
                <h4 className="font-display text-lg font-bold text-black">
                  Escolas atendidas
                </h4>

                <ul className="mt-5 space-y-3 text-sm text-zinc-500">
                  {schools.map((item) => (
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

export default TioSan
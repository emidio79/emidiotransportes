import vehicleImage from '../../assets/images/carro-san.jpeg'
function Vehicles() {
  return (
    <section id="Vehicles" className="bg-black py-20 md:py-28">
      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-400">
            NOSSO VEÍCULO
          </p>

          <h2 className="font-display text-4xl font-bold tracking-[-.05em] sm:text-white">
            Conforto e segurança em cada trajeto.
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
            Nosso veículo é preparado para oferecer mais segurança,
            organização e tranquilidade durante o transporte escolar.
          </p>

          <div className="mt-7 space-y-3 text-sm text-zinc-400">
            <p>✓ Veículo regularizado</p>
            <p>✓ Revisões realizadas periodicamente</p>
            <p>✓ Atenção em cada embarque e desembarque</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl shadow-[12px_12px_0_#facc15]">
          <img
            src={vehicleImage}
            alt="Veículo da Emidio Transportes usado no transporte escolar"
            className="h-[320px] w-full object-cover object-bottom sm:h-[420px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Vehicles
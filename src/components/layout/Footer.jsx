import { SERVICE_NAME } from '../../utils/constants'
import { whatsappLink } from '../../utils/whatsapp'

function Footer() {
  return (
    <footer className="bg-zinc-950 pt-11 text-white">
      <div className="mx-auto grid w-[min(1140px,calc(100%-40px))] gap-6 pb-10 sm:grid-cols-[1fr_auto] sm:items-center">
        <a href="#inicio" className="flex items-center gap-2.5 font-display text-[15px] font-bold leading-none">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 text-xs text-zinc-950">TE</span>
          <span>
            {SERVICE_NAME}
            <small className="mt-1 block font-body text-[9px] font-semibold uppercase tracking-[.12em] text-zinc-500">Transporte escolar</small>
          </span>
        </a>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-sm font-bold text-yellow-400">WhatsApp ↗</a>
      </div>
      <div className="mx-auto flex w-[min(1140px,calc(100%-40px))] flex-col gap-2 border-t border-zinc-700 py-5 text-[10px] text-zinc-500 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {SERVICE_NAME}. Todos os direitos reservados.</span>
        <span>Serviço regularizado pela SMTT</span>
      </div>
    </footer>
  )
}

export default Footer
import {
  WHATSAPP_TIA_ANDREA,
  WHATSAPP_TIO_SAN,
} from '../../utils/constants'

import { whatsappLinkFor } from '../../utils/whatsapp'

export default function WhatsAppSelector({
  isOpen,
  onClose,
  message,
}) {
  if (!isOpen) return null

  const handleContactClick = (phone) => {
  const defaultMessage =
    'Olá! Gostaria de saber mais sobre o transporte escolar.'

  const finalMessage = message || defaultMessage

  window.open(
    whatsappLinkFor(phone, finalMessage),
    '_blank',
    'noopener,noreferrer'
  )

  onClose()
}

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/60 p-6"
      onClick={onClose}
      role="presentation"
    >
      <section
        className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-selector-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar seleção de contato"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/30"
        >
          ×
        </button>

        <h2
          id="whatsapp-selector-title"
          className="mr-10 text-2xl font-bold tracking-tight text-slate-900"
        >
          Com quem deseja falar?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Escolha uma pessoa para continuar o atendimento pelo WhatsApp.
        </p>

        <div className="mt-6 grid gap-3">
          <button
            type="button"
            onClick={() =>
              handleContactClick(
                WHATSAPP_TIA_ANDREA,
                'Tia Andrea'
              )
            }
            className="w-full rounded-xl bg-[#25D366] px-5 py-4 text-left font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1EBE5D] hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30"
          >
            Falar com a Tia Andrea
          </button>

          <button
            type="button"
            onClick={() =>
              handleContactClick(
                WHATSAPP_TIO_SAN,
                'Tio San'
              )
            }
            className="w-full rounded-xl bg-[#25D366] px-5 py-4 text-left font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1EBE5D] hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30"
          >
            Falar com o Tio San
          </button>
        </div>
      </section>
    </div>
  )
}
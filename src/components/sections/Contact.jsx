import Button from '../ui/Button'
import { CITY } from '../../utils/constants'
import { whatsappLink } from '../../utils/whatsapp'

function Contact() {
  return (
    <section id="contato" className="bg-yellow-400 py-20 text-center md:py-24"><div className="mx-auto flex w-[min(1140px,calc(100%-40px))] flex-col items-center"><p className="mb-4 text-xs font-bold tracking-[.13em] text-yellow-900">VAMOS CONVERSAR?</p><h2 className="max-w-3xl font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Seu filho merece um trajeto seguro e tranquilo.</h2><p className="mt-4 max-w-lg text-sm leading-relaxed text-yellow-950">Consulte disponibilidade, tire dúvidas ou peça seu orçamento pelo WhatsApp.</p><Button dark href={whatsappLink('Olá! Gostaria de pedir um orçamento para transporte escolar.')} className="mt-7">Chamar no WhatsApp <span className="text-lg">→</span></Button><div className="mt-8 flex flex-col gap-2 text-xs font-bold text-yellow-950 sm:flex-row sm:gap-6"><span>◉ {CITY}</span><span>◷ [HORÁRIO DE ATENDIMENTO]</span><span>☎ [TELEFONE]</span></div></div></section>
  )
}

export default Contact
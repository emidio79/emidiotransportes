import { WHATSAPP_NUMBER } from './constants'

const DEFAULT_MESSAGE =
  'Olá! Gostaria de saber mais sobre o transporte escolar.'

// Mantém os botões antigos, que já usam o número geral.
export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

// Usado para Tia Andrea, Tio San e futuros contatos individuais.
export const whatsappLinkFor = (
  phone,
  message = DEFAULT_MESSAGE
) => {
  const cleanPhone = phone.replace(/\D/g, '')

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
}
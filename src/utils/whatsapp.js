import { WHATSAPP_NUMBER } from './constants'

const DEFAULT_MESSAGE =
  'Olá! Gostaria de saber mais sobre o transporte escolar.'

export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
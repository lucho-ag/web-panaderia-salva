import { WHATSAPP_PHONE_NUMBER } from '../config/constants'
import { formatCurrency } from './formatters'

// Unicode emoji escapes para garantizar compatibilidad total en cualquier navegador/servidor
const EMOJI = {
  BREAD: '\u{1F35E}', // 🍞
  PERSON: '\u{1F464}', // 👤
  DELIVERY: '\u{1F6F5}', // 🛵
  STORE: '\u{1F3EA}', // 🏪
  PIN: '\u{1F4CD}', // 📍
  NOTES: '\u{1F4DD}', // 📝
  CLIPBOARD: '\u{1F4CB}', // 📋
  MONEY: '\u{1F4B0}', // 💰
  PACKAGE: '\u{1F4E6}', // 📦
  CHECK: '\u{2705}', // ✅
  WHEAT: '\u{1F33E}', // 🌾
}

/**
 * Genera el texto formateado para el pedido de WhatsApp
 */
export const buildWhatsAppMessage = ({ cart, customerInfo, total }) => {
  const items = Object.values(cart)

  const isDelivery = customerInfo.deliveryType === 'delivery'
  const deliveryLabel = isDelivery
    ? `${EMOJI.DELIVERY} Envío a domicilio`
    : `${EMOJI.STORE} Retiro por el taller`

  const lines = []

  // Encabezado
  lines.push(`${EMOJI.BREAD} *NUEVO PEDIDO - PANADERÍA SALVA*`)
  lines.push(`------------------------------------------`)

  // Datos del Cliente
  lines.push(`${EMOJI.PERSON} *Cliente:* ${customerInfo.name.trim()}`)
  lines.push(`${EMOJI.PACKAGE} *Modalidad:* ${deliveryLabel}`)

  if (isDelivery && customerInfo.address?.trim()) {
    lines.push(`${EMOJI.PIN} *Dirección:* ${customerInfo.address.trim()}`)
  }

  if (customerInfo.notes?.trim()) {
    lines.push(`${EMOJI.NOTES} *Aclaraciones:* ${customerInfo.notes.trim()}`)
  }

  lines.push(`------------------------------------------`)
  lines.push(`${EMOJI.CLIPBOARD} *DETALLE DEL PEDIDO:*`)
  lines.push(``)

  // Detalle de Ítems
  items.forEach(({ product, quantity, priceMode }) => {
    const unitPrice =
      priceMode === 'wholesale'
        ? product.wholesalePrice
        : product.retailPrice
    const itemTotal = unitPrice * quantity
    const modeTag = priceMode === 'wholesale' ? 'Mayorista' : 'Minorista'

    lines.push(`• *${quantity}x* ${product.name}`)
    lines.push(`  └ Tarifa ${modeTag}: ${formatCurrency(unitPrice)} u. → *${formatCurrency(itemTotal)}*`)
  })

  // Total
  lines.push(``)
  lines.push(`------------------------------------------`)
  lines.push(`${EMOJI.MONEY} *TOTAL A ABONAR: ${formatCurrency(total)}*`)
  lines.push(`------------------------------------------`)
  lines.push(`¡Hola! Les envío mi pedido armado desde la web. Aguardo confirmación.`)

  return lines.join('\n')
}

/**
 * Construye la URL hacia WhatsApp utilizando la API directa (api.whatsapp.com/send)
 * para evitar que las redirecciones de wa.me corrompan los emojis en navegadores móviles/desktop.
 */
export const generateWhatsAppUrl = ({
  cart,
  customerInfo,
  total,
  phoneNumber = WHATSAPP_PHONE_NUMBER,
}) => {
  const message = buildWhatsAppMessage({ cart, customerInfo, total })
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '')
  
  // Usar api.whatsapp.com/send preserva 100% la codificación UTF-8 de los emojis
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`
}

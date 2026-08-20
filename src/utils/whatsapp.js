import { WHATSAPP_PHONE_NUMBER } from '../config/constants'
import { formatCurrency } from './formatters'

/**
 * Genera el texto formateado para el pedido de WhatsApp
 */
export const buildWhatsAppMessage = ({ cart, customerInfo, total }) => {
  const items = Object.values(cart)
  
  const deliveryLabel =
    customerInfo.deliveryType === 'delivery'
      ? '🛵 Envío a domicilio'
      : '🏪 Retiro por el local'

  let message = `🍞 *NUEVO PEDIDO - PANADERÍA SALVA*\n`
  message += `━━━━━━━━━━━━━━━━━━━━\n`
  message += `👤 *Cliente:* ${customerInfo.name.trim()}\n`
  message += `📦 *Modalidad:* ${deliveryLabel}\n`

  if (customerInfo.deliveryType === 'delivery' && customerInfo.address?.trim()) {
    message += `📍 *Dirección:* ${customerInfo.address.trim()}\n`
  }

  if (customerInfo.notes?.trim()) {
    message += `📝 *Aclaraciones:* ${customerInfo.notes.trim()}\n`
  }

  message += `━━━━━━━━━━━━━━━━━━━━\n`
  message += `📋 *DETALLE DEL PEDIDO:*\n\n`

  items.forEach(({ product, quantity, priceMode }) => {
    const unitPrice =
      priceMode === 'wholesale'
        ? product.wholesalePrice
        : product.retailPrice
    const itemTotal = unitPrice * quantity
    const modeTag = priceMode === 'wholesale' ? 'Mayorista' : 'Minorista'

    message += `• *${quantity}x* ${product.name}\n`
    message += `  └ Tarifa ${modeTag}: ${formatCurrency(unitPrice)} u. → *${formatCurrency(itemTotal)}*\n`
  })

  message += `\n━━━━━━━━━━━━━━━━━━━━\n`
  message += `💰 *TOTAL A ABONAR: ${formatCurrency(total)}*\n`
  message += `━━━━━━━━━━━━━━━━━━━━\n`
  message += `¡Hola! Les envío mi pedido armado desde la web. Aguardo confirmación.`

  return message
}

/**
 * Construye la URL completa hacia wa.me
 */
export const generateWhatsAppUrl = ({ cart, customerInfo, total, phoneNumber = WHATSAPP_PHONE_NUMBER }) => {
  const message = buildWhatsAppMessage({ cart, customerInfo, total })
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '')
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
}

import { useState, useEffect } from 'react'
import { X, Trash2, Plus, Minus, ShoppingBag, Store, Truck, AlertCircle, ArrowRight, Boxes } from 'lucide-react'
import { formatCurrency } from '../utils/formatters'
import { generateWhatsAppUrl } from '../utils/whatsapp'

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  // Form state
  const [customerInfo, setCustomerInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('salva_customer_info')
      return saved
        ? JSON.parse(saved)
        : {
            name: '',
            deliveryType: 'pickup', // 'pickup' | 'delivery'
            address: '',
            notes: '',
          }
    } catch {
      return {
        name: '',
        deliveryType: 'pickup',
        address: '',
        notes: '',
      }
    }
  })

  // Validation errors state
  const [errors, setErrors] = useState({})
  const [submitAttempted, setSubmitAttempted] = useState(false)

  // Save customer info to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('salva_customer_info', JSON.stringify(customerInfo))
    } catch (e) {
      console.error('Error saving customer info', e)
    }
  }, [customerInfo])

  // Clear errors when user types
  const handleInputChange = (field, value) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const items = Object.values(cart)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalAmount = items.reduce((acc, item) => {
    const price =
      item.priceMode === 'wholesale'
        ? item.product.wholesalePrice
        : item.product.retailPrice
    return acc + price * item.quantity
  }, 0)

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    if (!customerInfo.name || !customerInfo.name.trim()) {
      newErrors.name = 'Por favor ingresá tu nombre'
    }

    if (
      customerInfo.deliveryType === 'delivery' &&
      (!customerInfo.address || !customerInfo.address.trim())
    ) {
      newErrors.address = 'Por favor ingresá la dirección de entrega'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle WhatsApp Checkout
  const handleWhatsAppCheckout = () => {
    setSubmitAttempted(true)
    if (!validateForm()) {
      return
    }

    if (items.length === 0) {
      return
    }

    const whatsappUrl = generateWhatsAppUrl({
      cart,
      customerInfo,
      total: totalAmount,
    })

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <aside className="w-screen max-w-md md:max-w-lg bg-[#FAF7F2] shadow-2xl flex flex-col h-full border-l border-[#F3EDE2] animate-slideLeft">
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-[#F3EDE2] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8C5835]/10 text-[#8C5835] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-[#2C1E18]">
                  Tu Pedido
                </h2>
                <p className="text-xs text-[#8C5835] font-medium">
                  {totalItems} {totalItems === 1 ? 'unidad total' : 'unidades totales'} ({items.length} {items.length === 1 ? 'producto' : 'productos'})
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-full hover:bg-[#F3EDE2] text-[#2C1E18]/70 hover:text-[#2C1E18] transition-colors cursor-pointer"
              aria-label="Cerrar pedido"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* 1. Item List Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5835]">
                  1. Detalle de Productos
                </h3>
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-xs text-[#2C1E18]/50 hover:text-red-600 transition-colors font-medium cursor-pointer"
                  >
                    Vaciar carrito
                  </button>
                )}
              </div>

              {items.length === 0 ? (
                <div className="text-center py-10 px-4 bg-white rounded-2xl border border-dashed border-[#8C5835]/20 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F3EDE2] text-[#8C5835] flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6 opacity-60" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#2C1E18]">
                    Tu pedido está vacío
                  </h4>
                  <p className="text-xs text-[#2C1E18]/70 max-w-xs mx-auto">
                    Agregá panes de masa madre, facturas o especialidades desde el catálogo.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8C5835] text-[#FAF7F2] text-xs font-semibold hover:bg-[#2C1E18] transition-colors cursor-pointer"
                  >
                    <span>Explorar catálogo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {items.map(({ key, product, quantity, priceMode }) => {
                    const itemKey = key || `${product.id}_${priceMode}`
                    const unitPrice =
                      priceMode === 'wholesale'
                        ? product.wholesalePrice
                        : product.retailPrice
                    const itemTotal = unitPrice * quantity
                    const isWholesale = priceMode === 'wholesale'
                    const minQty = isWholesale ? (product.wholesaleMinQuantity || 1) : 1

                    return (
                      <div
                        key={itemKey}
                        className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#F3EDE2] shadow-2xs hover:border-[#8C5835]/30 transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0 bg-[#F3EDE2]"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-bold text-[#2C1E18] truncate leading-tight">
                            {product.name}
                          </h4>
                          <div className="flex items-center flex-wrap gap-1.5 mt-0.5">
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                                isWholesale
                                  ? 'bg-[#2C1E18] text-[#C88D46]'
                                  : 'bg-[#F3EDE2] text-[#8C5835]'
                              }`}
                            >
                              {isWholesale ? 'Mayorista' : 'Minorista'}
                            </span>
                            <span className="text-[11px] text-[#2C1E18]/60">
                              {formatCurrency(unitPrice)} u.
                            </span>
                            {isWholesale && (
                              <span className="text-[10px] text-[#8C5835] bg-[#FAF7F2] px-1 rounded flex items-center gap-0.5">
                                <Boxes className="w-2.5 h-2.5" />
                                Mín. {minQty}u
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-extrabold text-[#2C1E18] mt-1">
                            {formatCurrency(itemTotal)}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#F3EDE2]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(itemKey, quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white text-[#2C1E18] transition-colors cursor-pointer"
                            title={isWholesale && quantity <= minQty ? `Elimina al bajar de ${minQty}u` : 'Restar'}
                            aria-label="Restar una unidad"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-[#2C1E18]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(itemKey, quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white text-[#2C1E18] transition-colors cursor-pointer"
                            aria-label="Sumar una unidad"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => onRemoveItem(itemKey)}
                          className="p-1.5 text-[#2C1E18]/40 hover:text-red-600 transition-colors cursor-pointer"
                          aria-label={`Eliminar ${product.name} (${isWholesale ? 'Mayorista' : 'Minorista'}) del pedido`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* 2. Customer & Delivery Form */}
            {items.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#F3EDE2]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5835]">
                  2. Datos de Entrega
                </h3>

                {/* Customer Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="customerName"
                    className="block text-xs font-semibold text-[#2C1E18]"
                  >
                    Nombre y Apellido <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customerName"
                    type="text"
                    placeholder="Ej: Laura González"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#2C1E18] placeholder:text-[#2C1E18]/40 focus:outline-none focus:ring-2 focus:ring-[#8C5835]/20 transition-all ${
                      submitAttempted && errors.name
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-[#F3EDE2] focus:border-[#8C5835]'
                    }`}
                  />
                  {submitAttempted && errors.name && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Delivery Type Selector */}
                <div className="space-y-1.5">
                  <span className="block text-xs font-semibold text-[#2C1E18]">
                    Tipo de Entrega <span className="text-red-500">*</span>
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('deliveryType', 'pickup')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        customerInfo.deliveryType === 'pickup'
                          ? 'bg-[#8C5835] text-[#FAF7F2] border-[#8C5835] shadow-xs'
                          : 'bg-white text-[#2C1E18]/80 border-[#F3EDE2] hover:bg-[#F3EDE2]/50'
                      }`}
                    >
                      <Store className="w-4 h-4 mb-1" />
                      <span className="text-xs font-bold">Retiro por local</span>
                      <span className="text-[10px] opacity-80">Sin costo extra</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleInputChange('deliveryType', 'delivery')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        customerInfo.deliveryType === 'delivery'
                          ? 'bg-[#8C5835] text-[#FAF7F2] border-[#8C5835] shadow-xs'
                          : 'bg-white text-[#2C1E18]/80 border-[#F3EDE2] hover:bg-[#F3EDE2]/50'
                      }`}
                    >
                      <Truck className="w-4 h-4 mb-1" />
                      <span className="text-xs font-bold">Envío a domicilio</span>
                      <span className="text-[10px] opacity-80">Coordinar con local</span>
                    </button>
                  </div>
                </div>

                {/* Delivery Address (Conditional) */}
                {customerInfo.deliveryType === 'delivery' && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <label
                      htmlFor="deliveryAddress"
                      className="block text-xs font-semibold text-[#2C1E18]"
                    >
                      Dirección de Entrega <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="deliveryAddress"
                      type="text"
                      placeholder="Calle, número, piso/depto, barrio"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#2C1E18] placeholder:text-[#2C1E18]/40 focus:outline-none focus:ring-2 focus:ring-[#8C5835]/20 transition-all ${
                        submitAttempted && errors.address
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#F3EDE2] focus:border-[#8C5835]'
                      }`}
                    />
                    {submitAttempted && errors.address && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.address}
                      </p>
                    )}
                  </div>
                )}

                {/* Special Notes / Comments */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="orderNotes"
                    className="block text-xs font-semibold text-[#2C1E18]"
                  >
                    Aclaraciones / Notas especiales <span className="text-[#2C1E18]/50 font-normal">(Opcional)</span>
                  </label>
                  <textarea
                    id="orderNotes"
                    rows={2}
                    placeholder="Ej: Cortar pan de molde, timbre roto, horario preferido..."
                    value={customerInfo.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#F3EDE2] text-sm text-[#2C1E18] placeholder:text-[#2C1E18]/40 focus:outline-none focus:ring-2 focus:ring-[#8C5835]/20 focus:border-[#8C5835] transition-all resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer & WhatsApp Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#F3EDE2] space-y-3 shrink-0">
              {/* Pricing Totals */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#2C1E18]/70 block font-medium">Total Estimado</span>
                  <span className="text-[11px] text-[#8C5835]">
                    {customerInfo.deliveryType === 'delivery'
                      ? 'Envío a coordinar con el local'
                      : 'Retiro en sucursal'}
                  </span>
                </div>
                <div className="font-serif text-2xl font-extrabold text-[#2C1E18]">
                  {formatCurrency(totalAmount)}
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Enviar Pedido por WhatsApp</span>
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

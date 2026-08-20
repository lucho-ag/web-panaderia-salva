import { useState } from 'react'
import { Plus, Check, ShoppingBag, Wheat, Boxes } from 'lucide-react'
import { formatCurrency } from '../utils/formatters'

export default function ProductCard({ product, priceMode, onAddToCart, inCartQuantity = 0 }) {
  const [isAddedRecently, setIsAddedRecently] = useState(false)

  const isWholesale = priceMode === 'wholesale'
  const currentPrice = isWholesale ? product.wholesalePrice : product.retailPrice
  const minQty = isWholesale ? (product.wholesaleMinQuantity || 1) : 1

  const handleAdd = () => {
    onAddToCart(product, priceMode)
    setIsAddedRecently(true)
    setTimeout(() => {
      setIsAddedRecently(false)
    }, 1200)
  }

  // Category labels and colors
  const categoryLabels = {
    panaderia: 'Panadería',
    facturas: 'Facturas',
    pasteleria: 'Pastelería',
    salados: 'Salados',
  }

  const discountPercent = Math.round(
    ((product.retailPrice - product.wholesalePrice) / product.retailPrice) * 100
  )

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#F3EDE2] hover:border-[#8C5835]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EDE2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#FAF7F2]/95 backdrop-blur-sm text-[#8C5835] shadow-xs">
            {categoryLabels[product.category] || product.category}
          </span>
          {product.badge && (
            <span className="px-2 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#C88D46] text-[#FAF7F2] shadow-xs flex items-center gap-1">
              <Wheat className="w-2.5 h-2.5" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Unit presentation tag */}
        <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-white/95 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md">
          {product.unit}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 p-5 justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-bold text-[#2C1E18] group-hover:text-[#8C5835] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#2C1E18]/70 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Add to Cart Area */}
        <div className="pt-3 border-t border-[#F3EDE2] flex flex-col gap-3">
          {/* Minimum purchase indicator for wholesale */}
          {isWholesale && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2C1E18]/5 text-[#8C5835] text-[11px] font-semibold">
              <Boxes className="w-3.5 h-3.5 text-[#C88D46]" />
              <span>Lote mínimo mayorista: <strong>{minQty} {minQty === 1 ? 'unidad' : 'unidades'}</strong></span>
            </div>
          )}

          <div className="flex items-end justify-between gap-2">
            {/* Price Block */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C5835]">
                  {isWholesale ? 'Mayorista' : 'Minorista'}
                </span>
                {isWholesale && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                    -{discountPercent}%
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#2C1E18]">
                  {formatCurrency(currentPrice)}
                </span>
                {isWholesale && (
                  <span className="text-xs text-[#2C1E18]/40 line-through">
                    {formatCurrency(product.retailPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAdd}
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                isAddedRecently
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#8C5835] text-[#FAF7F2] hover:bg-[#2C1E18]'
              }`}
              aria-label={`Agregar ${product.name} al pedido`}
            >
              {isAddedRecently ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Agregado!</span>
                </>
              ) : (
                <>
                  {inCartQuantity > 0 ? (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#C88D46]" />
                      <span>{inCartQuantity} en pedido</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>{isWholesale ? `Agregar (${minQty} u.)` : 'Agregar'}</span>
                    </>
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

import { useState } from 'react'
import ProductCard from './ProductCard'
import { Wheat, Store, ShoppingCart, CheckCircle2, Info } from 'lucide-react'

export default function Catalog({
  products = [],
  priceMode = 'retail',
  setPriceMode,
  onAddToCart,
  cartItems = {},
}) {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Categories config
  const categories = [
    { id: 'todos', label: 'Todos los productos' },
    { id: 'panaderia', label: 'Panadería' },
    { id: 'facturas', label: 'Facturas' },
    { id: 'pasteleria', label: 'Pastelería' },
    { id: 'salados', label: 'Salados & Especiales' },
  ]

  // Filtered products list
  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter((p) => p.category === selectedCategory)

  // Count helper
  const getCategoryCount = (catId) => {
    if (catId === 'todos') return products.length
    return products.filter((p) => p.category === catId).length
  }

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#F3EDE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#8C5835] uppercase">
            Nuestras Elaboraciones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18]">
            Catálogo de Productos
          </h2>
          <p className="text-sm sm:text-base text-[#2C1E18]/70">
            Descubrí panes de masa madre, facturas de hojaldre 100% manteca y especialidades recién salidas del horno.
          </p>
        </div>

        {/* Price Mode Toggle Switch Area */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="bg-white p-1.5 sm:p-2 rounded-2xl shadow-sm border border-[#F3EDE2] flex items-center justify-between">
            <button
              type="button"
              onClick={() => setPriceMode('retail')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                priceMode === 'retail'
                  ? 'bg-[#8C5835] text-[#FAF7F2] shadow-sm'
                  : 'text-[#2C1E18]/70 hover:text-[#2C1E18] hover:bg-[#F3EDE2]/50'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Precio Minorista</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${priceMode === 'retail' ? 'bg-white/20' : 'bg-stone-100 text-stone-600'}`}>
                Hogar
              </span>
            </button>

            <button
              type="button"
              onClick={() => setPriceMode('wholesale')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                priceMode === 'wholesale'
                  ? 'bg-[#2C1E18] text-[#FAF7F2] shadow-sm'
                  : 'text-[#2C1E18]/70 hover:text-[#2C1E18] hover:bg-[#F3EDE2]/50'
              }`}
            >
              <Store className="w-4 h-4 text-[#C88D46]" />
              <span>Precio Mayorista</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${priceMode === 'wholesale' ? 'bg-[#C88D46] text-[#2C1E18] font-bold' : 'bg-[#C88D46]/20 text-[#8C5835]'}`}>
                Cafeterías & Locales
              </span>
            </button>
          </div>

          {/* Wholesale notice message */}
          {priceMode === 'wholesale' ? (
            <div className="mt-3 p-3.5 rounded-xl bg-[#2C1E18] text-[#FAF7F2] text-xs flex items-center gap-3 animate-fadeIn shadow-sm">
              <Wheat className="w-5 h-5 text-[#C88D46] shrink-0" />
              <div>
                <span className="font-bold text-[#C88D46]">Modo Mayorista activado: </span>
                Precios especiales para locales gastronómicos, reventa y pedidos en cantidad.
              </div>
            </div>
          ) : (
            <div className="mt-3 text-center text-xs text-[#2C1E18]/60 flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#8C5835]" />
              <span>Mostrando precios para consumo personal / compras minoristas.</span>
            </div>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id
            const count = getCategoryCount(cat.id)
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#8C5835] text-[#FAF7F2] shadow-sm'
                    : 'bg-white text-[#2C1E18]/80 border border-[#F3EDE2] hover:bg-[#F3EDE2]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#F3EDE2] text-[#8C5835]'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                priceMode={priceMode}
                onAddToCart={onAddToCart}
                inCartQuantity={cartItems[`${product.id}_${priceMode}`]?.quantity || 0}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#F3EDE2] p-8 max-w-md mx-auto">
            <CheckCircle2 className="w-12 h-12 text-[#8C5835] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[#2C1E18]">
              No encontramos productos en esta categoría
            </h3>
            <p className="text-xs text-[#2C1E18]/70 mt-1 mb-4">
              Probá seleccionando otra categoría o ver todos los productos disponibles.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('todos')}
              className="px-4 py-2 rounded-full bg-[#8C5835] text-[#FAF7F2] text-xs font-semibold hover:bg-[#2C1E18] transition-colors"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

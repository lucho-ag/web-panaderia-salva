import { useState } from 'react'
import { ShoppingBag, Menu, X, Clock, MapPin } from 'lucide-react'

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#F3EDE2] transition-all">
      {/* Top micro bar for ambiance */}
      <div className="bg-[#2C1E18] text-[#FAF7F2] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1.5 opacity-90">
          <Clock className="w-3.5 h-3.5 text-[#C88D46]" />
          Horneados frescos Lunes a Domingos
        </span>
        <span className="hidden md:inline-block opacity-40">•</span>
        <span className="hidden md:flex items-center gap-1.5 opacity-90">
          <MapPin className="w-3.5 h-3.5 text-[#C88D46]" />
          Zona Sur, Buenos Aires 
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/images/salva-logo.webp"
              alt="Logo de Panadería Salva"
              className="w-12 h-12 object-contain rounded-full bg-white shadow-xs group-hover:scale-105 transition-transform duration-300 border border-[#F3EDE2]"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2C1E18] leading-none">
                Panadería Salva
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#8C5835] uppercase mt-0.5">
                Masa Madre & Pastelería
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm font-medium text-[#2C1E18]/80 hover:text-[#8C5835] transition-colors"
            >
              Inicio
            </a>
            <a
              href="#catalogo"
              className="text-sm font-medium text-[#2C1E18]/80 hover:text-[#8C5835] transition-colors"
            >
              Catálogo
            </a>
            <a
              href="#historia"
              className="text-sm font-medium text-[#2C1E18]/80 hover:text-[#8C5835] transition-colors"
            >
              Nuestra Historia
            </a>
            <a
              href="#ubicacion"
              className="text-sm font-medium text-[#2C1E18]/80 hover:text-[#8C5835] transition-colors"
            >
              Horarios & Entregas
            </a>
          </nav>

          {/* Action / Cart button & Mobile menu toggle */}
          <div className="flex items-center gap-3">
            {/* Cart Button with Counter */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#8C5835] text-[#FAF7F2] hover:bg-[#2C1E18] active:scale-95 transition-all shadow-sm font-medium text-sm cursor-pointer"
              aria-label="Ver pedido"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Mi Pedido</span>
              <span
                className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold rounded-full transition-transform duration-300 ${
                  cartCount > 0
                    ? 'bg-[#C88D46] text-[#2C1E18] scale-110'
                    : 'bg-white/20 text-white'
                }`}
              >
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-[#2C1E18] hover:bg-[#F3EDE2] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F3EDE2] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#2C1E18] hover:bg-[#F3EDE2]"
          >
            Inicio
          </a>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#2C1E18] hover:bg-[#F3EDE2]"
          >
            Catálogo
          </a>
          <a
            href="#historia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#2C1E18] hover:bg-[#F3EDE2]"
          >
            Nuestra Historia
          </a>
          <a
            href="#ubicacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#2C1E18] hover:bg-[#F3EDE2]"
          >
            Horarios & Entregas
          </a>
        </div>
      )}
    </header>
  )
}

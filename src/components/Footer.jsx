import { MapPin, Clock, MessageCircle } from 'lucide-react'
import { WHATSAPP_PHONE_NUMBER } from '../config/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const cleanPhone = WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, '')
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    '¡Hola Panadería Salva! Les escribo desde el sitio web.'
  )}`

  return (
    <footer id="contacto" className="bg-[#2C1E18] text-[#FAF7F2] pt-16 pb-12 border-t border-[#8C5835]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/images/salva-logo.webp"
                alt="Logo de Panadería Salva"
                className="w-12 h-12 object-contain rounded-full bg-white p-0.5 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                  Panadería Salva
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#C88D46] font-semibold">
                  Masa Madre & Pastelería
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed max-w-md">
              Masa madre viva, fermentación natural de 24 horas y hojaldres con 100% manteca pura. Pasión por el pan artesanal de verdad. Elaboración a puertas cerradas en Zona Sur.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#8C5835] text-[#FAF7F2] text-xs font-semibold transition-colors border border-white/10"
                aria-label="Instagram de Panadería Salva"
              >
                <svg className="w-4 h-4 fill-current text-[#C88D46]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#25D366] text-[#FAF7F2] text-xs font-semibold transition-colors border border-white/10"
                aria-label="WhatsApp de Panadería Salva"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C88D46] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2]/80">
              <li>
                <a href="#inicio" className="hover:text-[#C88D46] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#C88D46] transition-colors">
                  Catálogo de Productos
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-[#C88D46] transition-colors">
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#C88D46] transition-colors">
                  Horarios y Entregas
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Workshop Notice */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C88D46] uppercase tracking-wider">
              Zona de Elaboración
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2]/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C88D46] shrink-0 mt-0.5" />
                <span>Buenos Aires — Zona Sur</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C88D46] shrink-0 mt-0.5" />
                <span>Miércoles a Domingos 09:00 a 19:00 hs</span>
              </li>
            </ul>
            <p className="text-[11px] text-[#FAF7F2]/60 bg-white/5 p-2.5 rounded-xl border border-white/5">
              ⚠️ Taller a puertas cerradas. Retiros coordinados previamente por WhatsApp.
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/50 text-center sm:text-left">
          <p>© {currentYear} Panadería Salva. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            Hecho con dedicación en Zona Sur, Buenos Aires.
          </p>
        </div>
      </div>
    </footer>
  )
}

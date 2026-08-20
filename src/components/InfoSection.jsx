import { MapPin, Clock, Truck, Store, MessageCircle, ShieldCheck } from 'lucide-react'
import { WHATSAPP_PHONE_NUMBER } from '../config/constants'

export default function InfoSection() {
  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    '¡Hola Panadería Salva! Quería consultar sobre horarios, zonas de entrega y disponibilidad de productos.'
  )}`

  return (
    <section id="ubicacion" className="py-20 sm:py-24 bg-[#FAF7F2] border-t border-[#F3EDE2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#8C5835] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#C88D46]" />
            Buenos Aires — Zona Sur
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18]">
            Horarios, Retiros y Entregas
          </h2>
          <p className="text-sm sm:text-base text-[#2C1E18]/70 leading-relaxed">
            Trabajamos con producción artesanal a pedido para que cada pan y factura llegue a tus manos en su punto perfecto de frescura.
          </p>
        </div>

        {/* 3 Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Card 1: Retiro por el Local (A puertas cerradas) */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#F3EDE2] shadow-sm hover:border-[#8C5835]/30 hover:shadow-md transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EDE2] text-[#8C5835] flex items-center justify-center">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                Retiro por el Taller
              </h3>
              <p className="text-xs sm:text-sm text-[#2C1E18]/75 leading-relaxed">
                Nuestra elaboración es <strong>a puertas cerradas</strong> en <strong>Zona Sur, Buenos Aires</strong>. La dirección exacta para retirar tu compra se coordina por WhatsApp una vez confirmado el pedido para asegurar que tu producto esté recién salido del horno.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F3EDE2] flex items-center gap-2 text-xs text-[#8C5835] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C88D46] shrink-0" />
              <span>Dirección precisa por WhatsApp</span>
            </div>
          </div>

          {/* Card 2: Envíos a Domicilio */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#F3EDE2] shadow-sm hover:border-[#8C5835]/30 hover:shadow-md transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EDE2] text-[#8C5835] flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                Envíos a Domicilio
              </h3>
              <p className="text-xs sm:text-sm text-[#2C1E18]/75 leading-relaxed">
                Llegamos a diversas localidades de <strong>Zona Sur</strong> (Lomas de Zamora, Banfield, Lanús, Temperley, Adrogué y alrededores). El costo y la franja horaria de entrega se coordinan al armar tu pedido.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F3EDE2] flex items-center gap-2 text-xs text-[#8C5835] font-semibold">
              <MapPin className="w-4 h-4 text-[#C88D46] shrink-0" />
              <span>Cobertura en Zona Sur</span>
            </div>
          </div>

          {/* Card 3: Horarios de Atención */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#F3EDE2] shadow-sm hover:border-[#8C5835]/30 hover:shadow-md transition-all flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#F3EDE2] text-[#8C5835] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C1E18]">
                Días y Horarios
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-[#2C1E18]/75">
                <div>
                  <span className="font-bold text-[#2C1E18] block">Miércoles a Domingos:</span>
                  09:00 hs a 19:00 hs
                </div>
                <div>
                  <span className="font-bold text-[#2C1E18] block">Lunes y Martes:</span>
                  Dedicados al cultivo de masa madre y producción programada.
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-[#F3EDE2] flex items-center gap-2 text-xs text-[#8C5835] font-semibold">
              <Clock className="w-4 h-4 text-[#C88D46] shrink-0" />
              <span>Horneados frescos cada mañana</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Banner */}
        <div className="bg-[#2C1E18] rounded-3xl p-6 sm:p-8 text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#8C5835]/20">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">
              ¿Tenés consultas sobre entregas o pedidos para tu evento/local?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/70 max-w-xl">
              Escribinos directamente por WhatsApp y te asesoramos al instante con disponibilidad y detalles de horneado.
            </p>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, ShieldCheck, HeartHandshake, Wheat, Flame } from 'lucide-react'

export default function Hero({ onSelectWholesale }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-[#FAF7F2]">
      {/* Decorative subtle texture/glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F3EDE2] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#C88D46]/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] border border-[#8C5835]/20 text-[#8C5835] text-xs font-semibold tracking-wide uppercase shadow-xs">
              <Wheat className="w-3.5 h-3.5 text-[#C88D46]" />
              <span>Panadería Artesanal & Masa Madre Viva</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C1E18] tracking-tight leading-[1.15]">
              El verdadero sabor del pan horneado con{' '}
              <span className="relative inline-block text-[#8C5835] italic">
                tiempo y pasión
                <span className="absolute left-0 bottom-1 w-full h-2 bg-[#C88D46]/20 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#2C1E18]/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Elaboramos cada pieza respetando procesos ancestrales: 24 horas de fermentación en frío, harinas agroecológicas y 100% manteca de campo. Descubrí nuestro catálogo minorista o consultá condiciones exclusivas para cafeterías y restaurantes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8C5835] text-[#FAF7F2] font-semibold text-base shadow-md hover:bg-[#2C1E18] hover:shadow-lg active:scale-98 transition-all group"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onSelectWholesale}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F3EDE2] text-[#8C5835] font-semibold text-base border border-[#8C5835]/30 hover:bg-[#FAF7F2] hover:border-[#8C5835] transition-all cursor-pointer shadow-xs"
              >
                <HeartHandshake className="w-5 h-5 text-[#8C5835]" />
                <span>Precios Gastronómicos / Mayoristas</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 border-t border-[#8C5835]/15 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="p-2 rounded-lg bg-[#F3EDE2] text-[#8C5835]">
                  <Wheat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C1E18]">Masa Madre</h4>
                  <p className="text-[11px] sm:text-xs text-[#2C1E18]/70">Fermentación 24hs</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="p-2 rounded-lg bg-[#F3EDE2] text-[#8C5835]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C1E18]">100% Natural</h4>
                  <p className="text-[11px] sm:text-xs text-[#2C1E18]/70">Sin aditivos químicos</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="p-2 rounded-lg bg-[#F3EDE2] text-[#8C5835]">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C1E18]">Recién Horneado</h4>
                  <p className="text-[11px] sm:text-xs text-[#2C1E18]/70">Todos los días 7hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] aspect-[4/5] bg-[#F3EDE2]">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                  alt="Panadería artesanal Salva horneando panes de masa madre"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/70 via-transparent to-transparent" />
                
                {/* Floating artisanal badge on image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#F3EDE2] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#8C5835]">Especialidad de la casa</p>
                      <h3 className="font-serif text-lg font-bold text-[#2C1E18]">Pan Integral</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#C88D46]/20 text-[#8C5835] font-bold text-xs">
                      100% Artesanal
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating review card with Wheat icon */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#F3EDE2] shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C88D46] text-[#FAF7F2] flex items-center justify-center shadow-xs">
                  <Wheat className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C1E18]">Calidad Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

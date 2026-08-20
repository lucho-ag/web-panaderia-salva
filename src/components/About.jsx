import { Wheat, Clock, Flame, ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <section id="historia" className="py-20 sm:py-28 bg-[#F3EDE2]/60 border-t border-[#F3EDE2] relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute top-1/2 -left-24 w-96 h-96 bg-[#8C5835]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Editorial Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                alt="Pan artesanal de masa madre recién horneado en Panadería Salva"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E18]/75 via-[#2C1E18]/20 to-transparent" />
              
              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C88D46] block">
                  Tradición & Paciencia
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                  El arte de esperar el tiempo exacto
                </h3>
                <p className="text-xs text-white/80 font-light">
                  Fermentación en frío de 24 horas para lograr una digestibilidad inigualable.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl border border-[#F3EDE2] shadow-xl hidden sm:flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#8C5835]/10 text-[#8C5835] flex items-center justify-center">
                <Wheat className="w-6 h-6 transform rotate-12" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C1E18]">Masa Madre Viva</p>
                <p className="text-[11px] text-[#8C5835] font-medium">Cultivo propio 100% natural</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#8C5835]/20 text-[#8C5835] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Wheat className="w-3.5 h-3.5 text-[#C88D46]" />
              Nuestra Historia & Filosofía
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1E18] leading-[1.15]">
              El arte del buen pan, hecho con paciencia
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2C1E18]/80 leading-relaxed font-normal">
              <p>
                En <strong className="text-[#8C5835] font-semibold">Panadería Salva</strong> nacimos con una premisa simple y fundamental: recuperar el valor del pan de verdad. Lejos de los procesos industriales apresurados, elegimos respetar los tiempos biológicos que cada masa necesita para transformarse.
              </p>
              <p>
                Trabajamos exclusivamente con harinas agroecológicas seleccionadas, agua pura, sal marina y nuestra masa madre viva cultivada con dedicación diaria. Cada hogaza y cada hojaldre atraviesa una fermentación lenta en frío de 24 horas, logrando una corteza crujiente y dorada, una miga abierta y aireada, y un perfil de sabor complejo y aromático.
              </p>
              <p>
                Horneamos fresco todos los días en nuestro taller artesanal para llevar a tu mesa y a los mejores locales gastronómicos un producto noble, nutritivo y profundamente reconfortante.
              </p>
            </div>

            {/* Feature Cards with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              <div className="bg-white p-4 rounded-2xl border border-[#F3EDE2] shadow-2xs space-y-1.5 hover:border-[#8C5835]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#8C5835] flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#C88D46]" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#2C1E18]">100% Masa Madre</h4>
                <p className="text-[11px] text-[#2C1E18]/70 leading-snug">
                  Fermentación lenta de 24hs sin levaduras industriales.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F3EDE2] shadow-2xs space-y-1.5 hover:border-[#8C5835]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#8C5835] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#C88D46]" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#2C1E18]">Sin Conservantes</h4>
                <p className="text-[11px] text-[#2C1E18]/70 leading-snug">
                  Ingredientes puros: harinas de molienda limpia y 100% manteca.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F3EDE2] shadow-2xs space-y-1.5 hover:border-[#8C5835]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] text-[#8C5835] flex items-center justify-center">
                  <Flame className="w-4 h-4 text-[#C88D46]" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-[#2C1E18]">Horneado Diario</h4>
                <p className="text-[11px] text-[#2C1E18]/70 leading-snug">
                  Producción fresca cada mañana para asegurar máxima textura y aroma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

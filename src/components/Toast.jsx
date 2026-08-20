import { CheckCircle, X } from 'lucide-react'

export default function Toast({ toast, onClose, onOpenCart }) {
  if (!toast) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-[#2C1E18] text-[#FAF7F2] p-4 rounded-2xl shadow-2xl border border-[#8C5835]/40 flex items-center justify-between gap-3 animate-slideUp">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 rounded-full bg-[#C88D46] text-[#2C1E18] flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-[#C88D46] uppercase tracking-wider">
            ¡Agregado al pedido!
          </p>
          <p className="text-xs text-[#FAF7F2]/90 truncate font-medium">
            {toast.name}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={onOpenCart}
          className="text-xs px-2.5 py-1.5 rounded-lg bg-[#8C5835] hover:bg-[#C88D46] text-[#FAF7F2] font-semibold transition-colors cursor-pointer"
        >
          Ver
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-[#FAF7F2]/60 hover:text-white p-1"
          aria-label="Cerrar notificación"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

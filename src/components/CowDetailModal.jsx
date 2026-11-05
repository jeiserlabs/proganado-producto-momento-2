import React from 'react';
import { X, Milk, MapPin, Activity, Calendar, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function CowDetailModal({ cow, onClose }) {
  if (!cow) return null;

  const isWarning = cow.diasRetiroIca > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-emerald-800/40 overflow-hidden shadow-2xl shadow-emerald-950/70 space-y-4">
        
        {/* Photo header */}
        <div className="h-52 w-full bg-slate-800 relative">
          <img
            src={cow.foto}
            alt={cow.nombre}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'assets/foto-pastoreo.jpg';
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 border border-white/20"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-slate-950/90 text-emerald-400 border border-emerald-600/40 backdrop-blur-md">
              {cow.chapa}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 pt-0 space-y-4">
          <div>
            <h3 className="text-2xl font-black text-white">{cow.nombre}</h3>
            <p className="text-xs text-slate-400">{cow.raza} · Finca La Pradera</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-500 block">Producción Diaria:</span>
              <span className="font-bold text-emerald-400 text-sm flex items-center gap-1 mt-0.5">
                <Milk className="w-3.5 h-3.5" /> {cow.litrosDia} L / día
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-500 block">Lactancia:</span>
              <span className="font-bold text-slate-200 text-sm flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {cow.diasLactancia} días ({cow.partos} partos)
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-500 block">Potrero Asignado:</span>
              <span className="font-bold text-slate-200 text-xs flex items-center gap-1 mt-0.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {cow.potrero}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-500 block">Estado Inocuidad:</span>
              <span className={`font-bold text-xs flex items-center gap-1 mt-0.5 ${isWarning ? 'text-amber-400' : 'text-emerald-400'}`}>
                {isWarning ? <AlertTriangle className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                {isWarning ? `${cow.diasRetiroIca} días retiro` : '100% Inocua'}
              </span>
            </div>
          </div>

          {isWarning && (
            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-600/40 text-[11px] text-amber-300">
              <strong>Advertencia Sanitaria:</strong> Animal en tratamiento con {cow.medicamento || 'medicamento'}. No mezclar leche en el tanque de acopio.
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>

      </div>
    </div>
  );
}

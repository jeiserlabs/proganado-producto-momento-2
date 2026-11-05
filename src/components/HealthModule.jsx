import React from 'react';
import { ShieldAlert, CheckCircle2, Clock, Pill, AlertOctagon, Info } from 'lucide-react';

export default function HealthModule({ bovinos, onOpenRegister }) {
  const withdrawalCows = bovinos.filter((b) => b.diasRetiroIca > 0);
  const cleanCows = bovinos.filter((b) => b.diasRetiroIca === 0);

  return (
    <div className="space-y-6">
      
      {/* ICA Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 to-slate-900 border border-amber-600/40 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          Módulo de Inocuidad y Tiempo de Retiro ICA (Resolución 067449)
        </div>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          El control estricto de los días de retiro de antibióticos y antiparasitarios garantiza leche
          100% libre de residuos químicos e inhibidores para la entrega a plantas Colanta.
        </p>
      </div>

      {/* Active Withdrawals */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <AlertOctagon className="w-5 h-5 text-amber-400" />
          Bovinos en Tratamiento con Leche Segregada ({withdrawalCows.length})
        </h3>

        {withdrawalCows.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-emerald-900/40 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-bold text-white text-base">Hato 100% Libre de Medicamentos</h4>
            <p className="text-xs text-slate-400">Toda la leche producida hoy es apta para tanque frío Colanta.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {withdrawalCows.map((c) => (
              <div
                key={c.id}
                className="p-5 rounded-2xl bg-slate-900 border border-amber-500/40 flex items-start gap-4 shadow-lg shadow-amber-950/20"
              >
                <img
                  src={c.foto}
                  alt={c.nombre}
                  className="w-20 h-20 rounded-xl object-cover border border-amber-500/30"
                  onError={(e) => {
                    e.target.src = 'assets/foto-pastoreo.jpg';
                  }}
                />
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-white text-base">{c.nombre}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">
                      {c.chapa}
                    </span>
                  </div>
                  <div className="text-xs text-amber-300/90 flex items-center gap-1.5 font-medium">
                    <Pill className="w-3.5 h-3.5" />
                    {c.medicamento || 'Tratamiento Intramamario'}
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Días restantes de retiro: <strong className="text-amber-400">{c.diasRetiroIca} días</strong></span>
                  </div>
                  <p className="text-[11px] text-amber-400/80 italic pt-1">
                    ⚠️ PROHIBIDO verter leche de este animal al tanque general.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Clean Cows Summary */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-400" />
          Resumen Sanitario del Hato
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block">Total Bovinos:</span>
            <span className="font-bold text-white text-base">{bovinos.length}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block">Inocuidad Aprobada:</span>
            <span className="font-bold text-emerald-400 text-base">{cleanCows.length} ({Math.round((cleanCows.length/bovinos.length)*100)}%)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block">Vacunación Fiebre Aftosa:</span>
            <span className="font-bold text-emerald-400 text-base">Al día (Ciclo I)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block">Brucelosis / Tuberculosis:</span>
            <span className="font-bold text-emerald-400 text-base">Hato Libre</span>
          </div>
        </div>
      </div>

    </div>
  );
}

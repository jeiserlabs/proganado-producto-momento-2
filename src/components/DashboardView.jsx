import React from 'react';
import { Milk, Activity, AlertTriangle, ShieldCheck, Thermometer, CheckCircle2, TrendingUp, Calendar } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import CountUp from './CountUp';

export default function DashboardView({ bovinos, milkHistory, onSelectTab, onOpenRegister }) {
  const vacasOrdenio = bovinos.filter((b) => b.estado === 'En Ordeño');
  const totalLitros = vacasOrdenio.reduce((acc, b) => acc + (b.litrosDia || 0), 0);
  const promedioLitros = vacasOrdenio.length > 0 ? (totalLitros / vacasOrdenio.length).toFixed(1) : 0;
  const vacasEnRetiro = bovinos.filter((b) => b.diasRetiroIca > 0);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Welcome with Aurora Effect */}
      <div className="relative rounded-3xl overflow-hidden border border-emerald-800/40 p-8 sm:p-10 aurora-mesh">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            BPG Normativa ICA · Acopio Certificado Colanta
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Gestión Ganadera de Precisión e Inocuidad
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Monitoreo en tiempo real de producción lechera, rotación de potreros Voisin (PRV),
            resguardo sanitario de medicamentos y trazabilidad total para la cuenca antioqueña.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onSelectTab('inventory')}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-900/40 transition-all"
            >
              Ver Inventario ({bovinos.length} Bovinos)
            </button>
            <button
              onClick={() => onSelectTab('health')}
              className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-medium text-sm transition-all"
            >
              Control Sanitario ICA
            </button>
          </div>
        </div>
      </div>

      {/* KPI Metrics with React Bits SpotlightCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Leche Hoy */}
        <SpotlightCard className="border-emerald-800/30 bg-slate-900/60">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-3">
            <span>ACOPIO HOY</span>
            <span className="p-2 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              <Milk className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-white mb-1">
            <CountUp to={totalLitros} decimals={1} suffix=" L" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Tanque 100% Inocuo</span>
          </div>
        </SpotlightCard>

        {/* KPI 2: Vacas en Ordeño */}
        <SpotlightCard className="border-emerald-800/30 bg-slate-900/60">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-3">
            <span>VACAS EN ORDEÑO</span>
            <span className="p-2 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
              <Activity className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-white mb-1">
            <CountUp to={vacasOrdenio.length} suffix={` / ${bovinos.length}`} />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Promedio: {promedioLitros} L / vaca</span>
          </div>
        </SpotlightCard>

        {/* KPI 3: Alerta Sanitaria / ICA */}
        <SpotlightCard className={`bg-slate-900/60 ${vacasEnRetiro.length > 0 ? 'border-amber-600/40' : 'border-emerald-800/30'}`}>
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-3">
            <span>RETIRO SANITARIO ICA</span>
            <span className={`p-2 rounded-xl border ${vacasEnRetiro.length > 0 ? 'bg-amber-950/80 text-amber-400 border-amber-800/40' : 'bg-emerald-950/80 text-emerald-400 border-emerald-800/40'}`}>
              <AlertTriangle className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-white mb-1">
            <CountUp to={vacasEnRetiro.length} suffix={vacasEnRetiro.length === 1 ? ' Vaca' : ' Vacas'} />
          </div>
          <div className={`flex items-center gap-1.5 text-xs font-medium ${vacasEnRetiro.length > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
            <span>{vacasEnRetiro.length > 0 ? 'Leche segregada del tanque' : 'Cero retiro pendiente'}</span>
          </div>
        </SpotlightCard>

        {/* KPI 4: Tanque Frío */}
        <SpotlightCard className="border-emerald-800/30 bg-slate-900/60">
          <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-3">
            <span>TEMPERATURA TANQUE</span>
            <span className="p-2 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-800/40">
              <Thermometer className="w-4 h-4" />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-white mb-1">
            <CountUp to={3.4} decimals={1} suffix=" °C" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium">
            <span>Cadena de frío óptima Colanta</span>
          </div>
        </SpotlightCard>

      </div>

      {/* Production Chart (Pele/SVG inspired native rendering) */}
      <div className="p-6 rounded-2xl bg-slate-900/70 border border-emerald-900/30 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Curva de Acopio Semanal a Colanta
            </h2>
            <p className="text-xs text-slate-400">Entrega diaria en litros con porcentaje de grasa y frío</p>
          </div>
          <span className="text-xs font-medium bg-emerald-950 text-emerald-300 border border-emerald-800/60 px-3 py-1 rounded-full">
            Semana en curso · Promedio: 474.7 L/día
          </span>
        </div>

        {/* Bar/Line visualization in SVG */}
        <div className="grid grid-cols-7 gap-2 pt-4">
          {milkHistory.map((item, index) => {
            const heightPercent = Math.round(((item.litros - 440) / (500 - 440)) * 100);
            return (
              <div key={item.day} className="flex flex-col items-center gap-2 group">
                <div className="text-[11px] font-bold text-emerald-400 group-hover:scale-110 transition-transform">
                  {item.litros}L
                </div>
                <div className="w-full bg-slate-800/60 rounded-xl h-44 flex items-end p-1 relative overflow-hidden">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className="w-full bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-lg transition-all duration-500 group-hover:from-emerald-600 group-hover:to-emerald-300 shadow-md shadow-emerald-900/30"
                  />
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-slate-200 block">{item.day}</span>
                  <span className="text-[10px] text-slate-400">{item.calidadGrasa}% G</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

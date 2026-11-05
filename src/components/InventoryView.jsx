import React, { useState } from 'react';
import { Search, Filter, AlertCircle, CheckCircle, Eye, Milk, Tag } from 'lucide-react';

export default function InventoryView({ bovinos, onSelectCow }) {
  const [search, setSearch] = useState('');
  const [filterState, setFilterState] = useState('ALL');

  const filtered = bovinos.filter((b) => {
    const matchesSearch =
      b.nombre.toLowerCase().includes(search.toLowerCase()) ||
      b.chapa.toLowerCase().includes(search.toLowerCase()) ||
      b.raza.toLowerCase().includes(search.toLowerCase());

    if (filterState === 'ALL') return matchesSearch;
    return matchesSearch && b.estado === filterState;
  });

  return (
    <div className="space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Inventario Bovino</h2>
          <p className="text-xs text-slate-400">Población activa, lactancias y registro fotográfico</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Search box */}
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por chapa o nombre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          {/* Filter chips */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            {['ALL', 'En Ordeño', 'Seca', 'Gestante'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterState(st)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filterState === st
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {st === 'ALL' ? 'Todos' : st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bovine Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((vaca) => {
          const isWarning = vaca.diasRetiroIca > 0;
          return (
            <div
              key={vaca.id}
              onClick={() => onSelectCow(vaca)}
              className="group cursor-pointer rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/40 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="h-44 w-full bg-slate-800 relative overflow-hidden">
                <img
                  src={vaca.foto}
                  alt={vaca.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'assets/foto-pastoreo.jpg';
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 text-emerald-400 border border-emerald-800/40 backdrop-blur-md">
                    {vaca.chapa}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-md ${
                      isWarning
                        ? 'bg-amber-950/90 text-amber-300 border border-amber-600/50 animate-pulse'
                        : 'bg-emerald-950/90 text-emerald-300 border border-emerald-600/50'
                    }`}
                  >
                    {isWarning ? 'Retiro ICA' : vaca.estado}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                    {vaca.nombre}
                  </h3>
                  <span className="text-xs text-slate-400">{vaca.raza}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-800/80">
                  <div>
                    <span className="text-slate-500 block">Producción:</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Milk className="w-3 h-3" /> {vaca.litrosDia > 0 ? `${vaca.litrosDia} L/día` : 'N/A'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Lactancia:</span>
                    <span className="font-semibold text-slate-300">{vaca.diasLactancia} días ({vaca.partos} partos)</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-1 flex items-center justify-between">
                  <span className="truncate">{vaca.potrero}</span>
                  <span className="text-emerald-500 font-medium group-hover:underline flex items-center gap-1">
                    Ver ficha <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

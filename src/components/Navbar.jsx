import React from 'react';
import { Milk, ShieldCheck, Plus, LayoutDashboard, Compass, Layers, AlertTriangle } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenRegister, icaAlertsCount }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inventory', label: 'Inventario Bovino', icon: Layers },
    { id: 'health', label: 'Sanidad & Retiro ICA', icon: AlertTriangle, badge: icaAlertsCount },
    { id: 'landing', label: 'Propuesta SaaS', icon: Compass },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-900/40 border border-emerald-400/30">
              <Milk className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">ProGanado</span>
                <span className="text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                  CESDE 2026
                </span>
              </div>
              <p className="text-[11px] text-emerald-400/70 font-medium">Finca La Pradera · Acopio Colanta</p>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-white bg-emerald-900/40 border border-emerald-500/40 shadow-sm shadow-emerald-900/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                  {item.label}
                  {item.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/50 hover:shadow-emerald-700/50 transition-all border border-emerald-400/30"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Nuevo Bovino</span>
              <span className="sm:hidden">Nuevo</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

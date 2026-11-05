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
    <header className="sticky top-0 z-40 bg-[#0b291b] border-b-2 border-[#1f5038] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <img
              src="assets/proganado-logo-blanco.png"
              alt="ProGanado Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">ProGanado</span>
                <span className="text-[10px] font-bold bg-[#133d2a] text-[#75b798] border border-[#2d6e4d] px-2 py-0.5 rounded-full">
                  SaaS 2026
                </span>
              </div>
              <p className="text-[11px] text-[#cfe3d7] font-medium">Finca La Pradera · Acopio Colanta</p>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'text-white bg-[#133d2a] border border-[#2d6e4d] shadow-sm'
                      : 'text-[#cfe3d7] hover:text-white hover:bg-[#133d2a]/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#75b798]' : 'text-[#cfe3d7]/70'}`} />
                  {item.label}
                  {item.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-[#ffc107] text-[#0b291b] rounded-full animate-pulse">
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
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#198754] hover:bg-[#0f5132] text-white shadow-sm border border-[#2d6e4d] transition-all hover:shadow-md"
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

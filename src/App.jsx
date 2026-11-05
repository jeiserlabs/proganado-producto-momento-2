import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DashboardView from './components/DashboardView';
import InventoryView from './components/InventoryView';
import HealthModule from './components/HealthModule';
import LandingView from './components/LandingView';
import RegisterModal from './components/RegisterModal';
import CowDetailModal from './components/CowDetailModal';
import { BOVINOS_INITIAL, MILK_HISTORY_7DAYS } from './data/bovinosData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [bovinos, setBovinos] = useState(() => {
    const saved = localStorage.getItem('proganado_bovinos_v2');
    return saved ? JSON.parse(saved) : BOVINOS_INITIAL;
  });
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedCow, setSelectedCow] = useState(null);

  useEffect(() => {
    localStorage.setItem('proganado_bovinos_v2', JSON.stringify(bovinos));
  }, [bovinos]);

  const handleAddBovino = (newCow) => {
    setBovinos((prev) => [newCow, ...prev]);
  };

  const icaAlertsCount = bovinos.filter((b) => b.diasRetiroIca > 0).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenRegister={() => setIsRegisterOpen(true)}
        icaAlertsCount={icaAlertsCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <DashboardView
            bovinos={bovinos}
            milkHistory={MILK_HISTORY_7DAYS}
            onSelectTab={setActiveTab}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {activeTab === 'inventory' && (
          <InventoryView
            bovinos={bovinos}
            onSelectCow={(cow) => setSelectedCow(cow)}
          />
        )}

        {activeTab === 'health' && (
          <HealthModule
            bovinos={bovinos}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {activeTab === 'landing' && (
          <LandingView
            onEnterApp={() => setActiveTab('dashboard')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>ProGanado S.A.S. · Software de Gestión Ganadera e Inocuidad</span>
          <span>Proyecto Integrador CESDE 2026 · Jeiser Gutiérrez</span>
        </div>
      </footer>

      {/* Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onAddBovino={handleAddBovino}
      />

      <CowDetailModal
        cow={selectedCow}
        onClose={() => setSelectedCow(null)}
      />

    </div>
  );
}

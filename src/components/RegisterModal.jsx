import React, { useState } from 'react';
import { X, Plus, Milk, Check } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose, onAddBovino }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    nombre: '',
    chapa: '',
    raza: 'Holstein Puro',
    estado: 'En Ordeño',
    litrosDia: '24.0',
    potrero: 'Potrero 2 (Kikuyo)',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.chapa.trim()) return;

    const newCow = {
      id: Date.now().toString().slice(-4),
      nombre: formData.nombre.trim(),
      chapa: formData.chapa.trim().toUpperCase(),
      raza: formData.raza,
      estado: formData.estado,
      litrosDia: parseFloat(formData.litrosDia) || 0,
      partos: 1,
      diasLactancia: formData.estado === 'En Ordeño' ? 30 : 0,
      potrero: formData.potrero,
      salud: 'Óptima',
      diasRetiroIca: 0,
      foto: 'assets/foto-pastoreo.jpg',
    };

    onAddBovino(newCow);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg rounded-2xl bg-slate-900 border border-emerald-800/40 p-6 shadow-2xl shadow-emerald-950/60 space-y-5">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-700/40">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Registrar Nuevo Bovino</h3>
              <p className="text-[11px] text-slate-400">Ingreso a inventario oficial Finca La Pradera</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Nombre Animal</label>
              <input
                required
                type="text"
                placeholder="Ej. Serena"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Chapa / Identificador</label>
              <input
                required
                type="text"
                placeholder="Ej. CO-1490-LP"
                value={formData.chapa}
                onChange={(e) => setFormData({ ...formData, chapa: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Raza</label>
              <select
                value={formData.raza}
                onChange={(e) => setFormData({ ...formData, raza: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
              >
                <option value="Holstein Puro">Holstein Puro</option>
                <option value="Jersey">Jersey</option>
                <option value="Girolando F1">Girolando F1</option>
                <option value="Pardo Suizo">Pardo Suizo</option>
                <option value="Normando">Normando</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Estado Reproductivo</label>
              <select
                value={formData.estado}
                onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
              >
                <option value="En Ordeño">En Ordeño</option>
                <option value="Seca">Seca</option>
                <option value="Gestante">Gestante</option>
                <option value="Ternera">Ternera</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Litros Estimados / Día</label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={formData.litrosDia}
                onChange={(e) => setFormData({ ...formData, litrosDia: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">Potrero Asignado</label>
              <input
                type="text"
                value={formData.potrero}
                onChange={(e) => setFormData({ ...formData, potrero: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" /> Guardar Registro
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

import React from 'react';
import { ChartAreaInteractive } from '@/components/shared/chart-area-interactive';

const DashboardView = () => {
  return (
    <div className="space-y-8">
      {/* Título de la sección */}
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Resumen Académico</h2>
          <p className="text-gray-500 text-sm">Monitoreo de avance y rendimiento</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Generar Reporte
        </button>
      </header>

      {/* ÁREA DEL GRÁFICO INTERACTIVO */}
      <section className="grid grid-cols-1 gap-6">
        <ChartAreaInteractive />
      </section>

      {/* GRID DE BLOQUES DE PROGRESO */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
          <h3 className="text-lg font-semibold text-white">Avance por Bloques</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Bloque 1: Fundamentos" grade="8.7" percentage={92} color="bg-blue-500" />
          <StatCard title="Bloque 2: Desarrollo Web" grade="7.9" percentage={85} color="bg-purple-500" />
          <StatCard title="Bloque 3: Bases de Datos" grade="8.2" percentage={78} color="bg-emerald-500" />
          <StatCard title="Bloque 4: Desarrollo Móvil" grade="7.5" percentage={65} color="bg-orange-500" />
        </div>
      </section>
    </div>
  );
};

// Componente de Tarjeta mejorado
const StatCard = ({ title, grade, percentage, color }: any) => (
  <div className="bg-[#1c1d21] p-5 rounded-2xl border border-gray-800 shadow-sm hover:shadow-md hover:border-gray-700 transition-all group">
    <p className="text-gray-500 text-[11px] font-bold mb-4 uppercase tracking-wider group-hover:text-gray-300">{title}</p>
    <div className="flex justify-between items-end mb-3">
      <span className="text-3xl font-bold text-white">{grade}</span>
      <span className="text-gray-400 font-medium text-xs">PEA: <span className="text-white">{percentage}%</span></span>
    </div>
    
    {/* Barra de progreso */}
    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
      <div 
        className={`${color} h-full rounded-full transition-all duration-700`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default DashboardView;
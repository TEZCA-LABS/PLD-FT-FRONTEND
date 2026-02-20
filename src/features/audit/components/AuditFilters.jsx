export const AuditFilters = () => {
  return (
    <div className="bg-white dark:bg-[#1a232e] rounded-xl border border-[#dbe0e6] dark:border-gray-700 p-4 mb-6 shadow-sm">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[240px]">
          <label className="text-xs font-bold text-[#617289] dark:text-gray-400 mb-1 block uppercase tracking-wider">
            Buscar por Entidad o Usuario
          </label>
          <div className="relative h-10 w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#617289]">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input
              className="w-full h-full rounded-lg border-[#dbe0e6] dark:border-gray-600 bg-[#f0f2f4] dark:bg-[#252f3d] pl-10 pr-4 text-sm focus:ring-primary focus:border-primary dark:text-white placeholder:text-[#617289]"
              placeholder="Nombre, ID o Dirección IP..."
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-[#617289] dark:text-gray-400 mb-1 block uppercase tracking-wider">
            Tipo de Acción
          </label>
          <button className="flex h-10 shrink-0 items-center justify-between gap-x-2 rounded-lg bg-[#f0f2f4] dark:bg-[#252f3d] px-4 border border-transparent hover:border-primary/50 transition-all min-w-[160px]">
            <p className="text-[#111418] dark:text-white text-sm font-medium">
              Todas las acciones
            </p>
            <span className="material-symbols-outlined text-lg">
              expand_more
            </span>
          </button>
        </div>
        <div>
          <label className="text-xs font-bold text-[#617289] dark:text-gray-400 mb-1 block uppercase tracking-wider">
            Rango de Fechas
          </label>
          <button className="flex h-10 shrink-0 items-center justify-between gap-x-2 rounded-lg bg-[#f0f2f4] dark:bg-[#252f3d] px-4 border border-transparent hover:border-primary/50 transition-all min-w-[180px]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-primary">
                calendar_today
              </span>
              <p className="text-[#111418] dark:text-white text-sm font-medium">
                Últimos 30 días
              </p>
            </div>
            <span className="material-symbols-outlined text-lg">
              expand_more
            </span>
          </button>
        </div>
        <div className="pt-5">
          <button className="text-primary hover:underline text-sm font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">
              filter_alt_off
            </span>
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

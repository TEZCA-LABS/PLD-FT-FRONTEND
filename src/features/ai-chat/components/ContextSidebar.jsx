export const ContextSidebar = () => {
  return (
    <aside className="w-[320px] bg-white dark:bg-[#1a232e] border-l border-[#e2e8f0] dark:border-gray-700 hidden xl:flex flex-col shrink-0 z-20">
      <div className="p-4 border-b border-[#e2e8f0] dark:border-gray-700 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
        <h3 className="font-semibold text-[#121417] dark:text-white text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            menu_book
          </span>
          Contexto de la Fuente
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
        <div className="border border-blue-200 bg-blue-50/30 dark:bg-blue-900/20 dark:border-blue-800 rounded-lg p-4 mb-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                Seleccionado
              </span>
              <span className="text-xs text-[#64748b] dark:text-gray-400">
                24 Oct, 2024
              </span>
            </div>
            <h4 className="font-bold text-[#121417] dark:text-white text-sm mb-1">
              Lista OFAC SDNTK
            </h4>
            <p className="text-xs text-[#64748b] dark:text-gray-400 mb-3">
              Oficina de Control de Activos Extranjeros
            </p>
            <div className="bg-white dark:bg-[#252f3d] rounded border border-blue-100 dark:border-blue-900 p-3 text-xs font-mono text-slate-700 dark:text-slate-300">
              MATCH: &quot;VERTEX GLOBAL&quot;
              <br />
              UID: 29384
              <br />
              REMARKS: Sector 4.
            </div>
            <button className="mt-3 text-xs font-semibold text-primary hover:underline flex items-center gap-1">
              Ver PDF Original{' '}
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#64748b] dark:text-gray-400 uppercase tracking-wider">
            Entidades Relacionadas
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg border border-[#e2e8f0] dark:border-gray-700 bg-white dark:bg-[#252f3d] hover:border-primary/30 transition-all cursor-pointer">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">
                  domain
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#121417] dark:text-white">
                  Shell Corp A
                </p>
                <p className="text-xs text-[#64748b] dark:text-gray-400">
                  Empresa Matriz
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-[#e2e8f0] dark:border-gray-700 bg-white dark:bg-[#252f3d] hover:border-primary/30 transition-all cursor-pointer">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">
                  person
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#121417] dark:text-white">
                  Nombre del Director
                </p>
                <p className="text-xs text-[#64748b] dark:text-gray-400">
                  Autoridad Firmante
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-[#e2e8f0] dark:border-gray-700 bg-white dark:bg-[#252f3d] hover:border-primary/30 transition-all cursor-pointer">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">
                  corporate_fare
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#121417] dark:text-white">
                  Global Logistics Ltd
                </p>
                <p className="text-xs text-[#64748b] dark:text-gray-400">
                  Socio Comercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

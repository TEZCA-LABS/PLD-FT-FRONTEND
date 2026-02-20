export const SearchResultsTable = ({ results, isLoading }) => {
  if (isLoading) {
    return <div className="p-8 text-center text-slate-500">Buscando...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          Resultados de Búsqueda
          <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:text-slate-300">
            {results?.length || 0} Coincidencias
          </span>
        </h3>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-[20px]">
              view_list
            </span>
          </button>
          <button className="p-1.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-[20px]">
              grid_view
            </span>
          </button>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
          <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Exportar
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-850 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Nombre de Entidad
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Referencia / ID
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Programa
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  Fuente
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap w-32">
                  Puntaje
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap text-right">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {results?.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          business
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.entity_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-slate-600 dark:text-slate-300">
                    {item.reference_number || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item.program || 'N/A'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                    {item.source}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">
                        {item.score || 'N/A'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
              {(!results || results.length === 0) && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-8 text-center text-sm text-slate-500"
                  >
                    No se encontraron resultados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

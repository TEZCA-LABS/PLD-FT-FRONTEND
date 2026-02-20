const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Sin fecha';
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const getEntityIcon = (type = '') => {
  if (type === 'person') return 'person';
  if (type === 'company') return 'corporate_fare';
  return 'domain';
};

export const ContextSidebar = ({ context }) => {
  const source = context?.source;
  const relatedEntities = context?.relatedEntities || [];

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
        {source ? (
          <div className="border border-blue-200 bg-blue-50/30 dark:bg-blue-900/20 dark:border-blue-800 rounded-lg p-4 mb-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                  Seleccionado
                </span>
                <span className="text-xs text-[#64748b] dark:text-gray-400">
                  {formatDate(source.date)}
                </span>
              </div>
              <h4 className="font-bold text-[#121417] dark:text-white text-sm mb-1">
                {source.name}
              </h4>
              <p className="text-xs text-[#64748b] dark:text-gray-400 mb-3">
                {source.organization}
              </p>
              <div className="bg-white dark:bg-[#252f3d] rounded border border-blue-100 dark:border-blue-900 p-3 text-xs font-mono text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                {source.snippet || 'Sin extracto de contexto'}
              </div>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Ver fuente original
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="border border-[#e2e8f0] dark:border-gray-700 rounded-lg p-4 mb-6">
            <p className="text-xs text-[#64748b] dark:text-gray-400 leading-relaxed">
              Aquí se mostrará el contexto cuando el backend devuelva fuentes
              citadas en la respuesta del asistente.
            </p>
          </div>
        )}

        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#64748b] dark:text-gray-400 uppercase tracking-wider">
            Entidades Relacionadas
          </h4>
          <div className="space-y-2">
            {relatedEntities.map((entity, index) => (
              <div
                key={`${entity.name}-${index}`}
                className="flex items-center gap-3 p-3 rounded-lg border border-[#e2e8f0] dark:border-gray-700 bg-white dark:bg-[#252f3d] hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-500 dark:text-gray-400">
                  <span className="material-symbols-outlined text-lg">
                    {getEntityIcon(entity.type)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#121417] dark:text-white">
                    {entity.name}
                  </p>
                  <p className="text-xs text-[#64748b] dark:text-gray-400">
                    {entity.relation}
                  </p>
                </div>
              </div>
            ))}

            {relatedEntities.length === 0 && (
              <p className="text-xs text-[#64748b] dark:text-gray-400">
                Sin entidades relacionadas en el análisis actual.
              </p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

import { Link } from 'react-router-dom';

export const ChatSidebar = () => {
  return (
    <aside className="w-72 bg-white dark:bg-[#1a232e] border-r border-[#e2e8f0] dark:border-gray-700 flex flex-col shrink-0 z-10 hidden lg:flex">
      <div className="p-4 border-b border-[#e2e8f0] dark:border-gray-700 space-y-4">
        <nav className="space-y-1">
          <Link
            to="/search"
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748b] dark:text-gray-400 hover:bg-[#f8fafc] dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-xl">search</span>
            Búsqueda
          </Link>
          <Link
            to="#"
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors text-sm font-bold"
          >
            <span className="material-symbols-outlined text-xl">smart_toy</span>
            Asistente IA
          </Link>
          <Link
            to="/audit"
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[#64748b] dark:text-gray-400 hover:bg-[#f8fafc] dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-xl">history</span>
            Historial
          </Link>
        </nav>
        <div className="pt-2">
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#2c5c9e] text-white rounded-lg h-10 text-sm font-semibold transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">add</span>
            Nueva Investigación
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-6">
        <div>
          <h3 className="px-3 text-xs font-semibold text-[#64748b] dark:text-gray-400 uppercase tracking-wider mb-2">
            Hoy
          </h3>
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f8fafc] dark:bg-[#252f3d] border border-[#e2e8f0] dark:border-gray-600 cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-lg">
                chat_bubble
              </span>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-[#121417] dark:text-white truncate">
                  Perfil de Riesgo Entidad #49201
                </p>
                <p className="text-xs text-[#64748b] dark:text-gray-400 truncate">
                  Generando resumen...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f8fafc] dark:hover:bg-[#252f3d]/50 cursor-pointer group transition-colors">
              <span className="material-symbols-outlined text-[#64748b] text-lg">
                chat_bubble_outline
              </span>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-[#121417] dark:text-white truncate">
                  Transacción Swift 99X
                </p>
                <p className="text-xs text-[#64748b] dark:text-gray-400 truncate">
                  2 citas encontradas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="px-3 text-xs font-semibold text-[#64748b] dark:text-gray-400 uppercase tracking-wider mb-2">
            Últimos 7 días
          </h3>
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f8fafc] dark:hover:bg-[#252f3d]/50 cursor-pointer group transition-colors">
              <span className="material-symbols-outlined text-[#f59e0b] text-lg">
                warning
              </span>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-[#121417] dark:text-white truncate">
                  Alto Riesgo: Cayman Holdings
                </p>
                <p className="text-xs text-[#64748b] dark:text-gray-400 truncate">
                  Marcado para revisión
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-[#e2e8f0] dark:border-gray-700">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#f8fafc] dark:hover:bg-[#252f3d] cursor-pointer transition-colors">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-1.5">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-lg">
              smart_toy
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#121417] dark:text-white">
              Modelo v4.2 (Estable)
            </p>
            <p className="text-xs text-[#64748b] dark:text-gray-400">
              Actualizado: hace 2h
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

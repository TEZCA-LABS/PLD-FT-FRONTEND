import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <header className="h-16 shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 flex items-center justify-between z-20">
      <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400">
        <Link
          className="hover:text-slate-900 dark:hover:text-white transition-colors"
          to="/"
        >
          Inicio
        </Link>
        <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
        <span className="text-slate-900 dark:text-white font-medium">
          Búsqueda de Entidades
        </span>
      </nav>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide">
            Modo Confidencial
          </span>
        </div>
      </div>
    </header>
  );
};

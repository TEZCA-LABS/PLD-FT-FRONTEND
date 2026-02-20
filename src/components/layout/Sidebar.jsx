import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 flex flex-col justify-between border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-full transition-colors duration-300">
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center gap-3 px-2">
          <div className="flex items-center justify-center size-10 rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[24px]">
              security
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
              Consola de Analista
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
              Plataforma AML/CFT
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            to="/search"
          >
            <span className="material-symbols-outlined text-[20px] fill-1">
              person_search
            </span>
            <span className="text-sm font-bold">Búsqueda</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            to="/users"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              group
            </span>
            <span className="text-sm font-medium">Usuarios</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            to="/roles"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              admin_panel_settings
            </span>
            <span className="text-sm font-medium">Roles y Permisos</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            to="/ai-chat"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              psychology
            </span>
            <span className="text-sm font-medium">Asistente IA</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            to="/audit"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              history
            </span>
            <span className="text-sm font-medium">Historial</span>
          </Link>
        </nav>
      </div>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left">
          <div
            className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center ring-2 ring-white dark:ring-slate-800"
            data-alt="User avatar placeholder"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4Xy4wNrW3eo5TffnPlhX3RoIthRSczToCeysFGMEq8hh1Wh8zqD3v9PYs4yvRVNZ52alSwVsnXKoqb7qw9n5gLobcdgpe_E-Bd9KA--a7RjkyNeR54aiU8tuijanLmieHTZ9OY4N26MoOuhU1BPyuojtyhJd9cKXygY21R0fV3aM7WHFrQ-eX3z6W_-fh46zuLItBx1TD1lnMKiwbKmynI-CZTaw7GoDz5NFcxoUQaE7Bmfr_ngcBYKtJIhm3VcuV7Lv9mxT55f8')",
            }}
          ></div>
          <div className="flex flex-col flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
              Sarah Jenkins
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              Analista Senior
            </p>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-[18px]">
            more_vert
          </span>
        </button>
      </div>
    </aside>
  );
};

import { useAuthStore } from '@stores/authStore';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const roleMap = {
  admin: 'Administrador',
  auditor: 'Auditor',
  consultant: 'Consultor',
  user: 'Usuario (Analista)',
};

export const Sidebar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const getLinkClass = (path) => {
    const isActive = location.pathname.startsWith(path);
    return `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
      isActive
        ? 'bg-slate-100 dark:bg-slate-800 text-primary dark:text-blue-400'
        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
    }`;
  };

  const getIconClass = (path) => {
    const isActive = location.pathname.startsWith(path);
    return `material-symbols-outlined text-[20px] transition-colors ${
      isActive
        ? 'fill-1 text-primary dark:text-blue-400'
        : 'group-hover:text-primary dark:group-hover:text-blue-400'
    }`;
  };

  const getTextClass = (path) => {
    const isActive = location.pathname.startsWith(path);
    return `text-sm ${isActive ? 'font-bold' : 'font-medium'}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/secure-login');
  };

  const userRoleDisplay = user?.role ? roleMap[user.role] : 'Analista';
  const userName = user?.email ? user.email.split('@')[0] : 'Usuario';
  const initial = userName.charAt(0).toUpperCase();

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
            className={getLinkClass('/search')}
            to="/search"
          >
            <span className={getIconClass('/search')}>
              person_search
            </span>
            <span className={getTextClass('/search')}>Búsqueda</span>
          </Link>

          {(user?.is_superuser || user?.role === 'admin') && (
            <>
              <Link
                className={getLinkClass('/users')}
                to="/users"
              >
                <span className={getIconClass('/users')}>
                  group
                </span>
                <span className={getTextClass('/users')}>Usuarios</span>
              </Link>
              <Link
                className={getLinkClass('/roles')}
                to="/roles"
              >
                <span className={getIconClass('/roles')}>
                  admin_panel_settings
                </span>
                <span className={getTextClass('/roles')}>Roles y Permisos</span>
              </Link>
            </>
          )}

          <Link
            className={getLinkClass('/ai-chat')}
            to="/ai-chat"
          >
            <span className={getIconClass('/ai-chat')}>
              psychology
            </span>
            <span className={getTextClass('/ai-chat')}>Asistente IA</span>
          </Link>

          {(user?.is_superuser ||
            user?.role === 'admin' ||
            user?.role === 'auditor') && (
            <Link
              className={getLinkClass('/audit')}
              to="/audit"
            >
              <span className={getIconClass('/audit')}>
                history
              </span>
              <span className={getTextClass('/audit')}>Historial</span>
            </Link>
          )}
        </nav>
      </div>
      <div
        className="p-4 border-t border-slate-200 dark:border-slate-800 relative"
        ref={menuRef}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left"
        >
          <div className="flex items-center justify-center size-9 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm ring-2 ring-white dark:ring-slate-800">
            {initial}
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
              {userName}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {userRoleDisplay}
            </p>
          </div>
          <span className="material-symbols-outlined text-slate-400 text-[18px]">
            more_vert
          </span>
        </button>

        {isMenuOpen && (
          <div className="absolute bottom-[72px] right-4 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 text-left transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                logout
              </span>
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

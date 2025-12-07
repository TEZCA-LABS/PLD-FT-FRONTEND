import { Link } from 'react-router-dom';
import { useAuthStore } from '@stores/authStore';
import { useTheme } from '@hooks/useTheme';

/**
 * Header Component
 * Global navigation header
 */
export const Header = () => {
    const { isAuthenticated, user, logout } = useAuthStore();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg" />
                        <span className="text-xl font-bold gradient-text">PLD FT</span>
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>

                        {isAuthenticated ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    Dashboard
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {user?.name || user?.email}
                                    </span>
                                    <button
                                        onClick={logout}
                                        className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    Iniciar sesión
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

/**
 * Footer Component
 * Global footer
 */
export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold gradient-text mb-2">PLD FT Frontend</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Aplicación moderna con arquitectura basada en features
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Enlaces
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    Documentación
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    Soporte
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Síguenos
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                GitHub
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
                    © {currentYear} PLD FT Frontend. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

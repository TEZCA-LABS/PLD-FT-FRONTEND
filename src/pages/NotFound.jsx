import { Link } from 'react-router-dom';
import { Button } from '@components/ui';

/**
 * NotFound Page (404)
 * Displayed when route doesn't exist
 */
const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
            <div className="text-center animate-fade-in">
                <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Página No Encontrada
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <Link to="/">
                    <Button size="lg">
                        Volver al Inicio
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

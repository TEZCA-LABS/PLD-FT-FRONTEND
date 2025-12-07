import { DashboardLayout } from '@layouts/DashboardLayout';
import { Card } from '@components/ui';
import { useAuthStore } from '@stores/authStore';

/**
 * Dashboard Page
 * Protected page for authenticated users
 */
const Dashboard = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <DashboardLayout>
            <div className="animate-fade-in">
                <h1 className="text-4xl font-bold mb-2 gradient-text">
                    Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Bienvenido de vuelta, {user?.name || 'Usuario'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Stats Cards */}
                    <Card hover>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    Total de Usuarios
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    1,234
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">👥</span>
                            </div>
                        </div>
                    </Card>

                    <Card hover>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    Proyectos Activos
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    42
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📊</span>
                            </div>
                        </div>
                    </Card>

                    <Card hover>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    Tareas Completadas
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    89%
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">✅</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Welcome Card */}
                <Card className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        ¡Bienvenido a tu Dashboard! 🎉
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Este es un ejemplo de página protegida usando la arquitectura basada en features.
                        Aquí puedes agregar tus propias funcionalidades y componentes.
                    </p>
                    <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4">
                        <p className="text-sm text-primary-900 dark:text-primary-100">
                            <strong>💡 Tip:</strong> Para agregar nuevas funcionalidades, crea un nuevo feature en
                            <code className="mx-1 px-2 py-1 bg-white dark:bg-gray-800 rounded">src/features/</code>
                            siguiendo el mismo patrón que el feature de autenticación.
                        </p>
                    </div>
                </Card>

                {/* User Info Card */}
                <Card className="mt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Información del Usuario
                    </h3>
                    <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Nombre:</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                                {user?.name || 'No disponible'}
                            </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-600 dark:text-gray-400">Email:</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                                {user?.email || 'No disponible'}
                            </span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-600 dark:text-gray-400">Estado:</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                Activo
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;

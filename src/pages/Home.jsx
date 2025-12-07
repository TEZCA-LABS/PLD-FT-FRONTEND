import { Link } from 'react-router-dom';
import { Header, Footer } from '@components/layout';
import { Button } from '@components/ui';
import { useAuthStore } from '@stores/authStore';

/**
 * Home Page
 * Landing page with hero section
 */
const Home = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                        <div className="text-center animate-fade-in">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                                <span className="gradient-text">Arquitectura Moderna</span>
                                <br />
                                <span className="text-gray-900 dark:text-white">para React</span>
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                Proyecto construido con <strong>Feature-Based Architecture</strong>,
                                siguiendo las mejores prácticas de la industria para aplicaciones escalables y mantenibles.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                {isAuthenticated ? (
                                    <Link to="/dashboard">
                                        <Button size="lg" className="min-w-[200px]">
                                            Ir al Dashboard
                                        </Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Link to="/register">
                                            <Button size="lg" className="min-w-[200px]">
                                                Comenzar Ahora
                                            </Button>
                                        </Link>
                                        <Link to="/login">
                                            <Button variant="outline" size="lg" className="min-w-[200px]">
                                                Iniciar Sesión
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Decorative gradient blobs */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
                            Características Principales
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: '🎯 Co-ubicación',
                                    description: 'Código relacionado mantenido junto, facilitando el mantenimiento y la comprensión.',
                                },
                                {
                                    title: '🔒 Aislamiento de Features',
                                    description: 'Cada característica es auto-contenida, reduciendo acoplamiento y mejorando la modularidad.',
                                },
                                {
                                    title: '📈 Escalabilidad',
                                    description: 'Fácil agregar nuevas funcionalidades sin hacer crecer carpetas existentes.',
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
                            Stack Tecnológico
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {['React 18', 'Vite', 'TailwindCSS', 'TanStack Query', 'Zustand', 'React Router', 'Axios', 'React Hook Form'].map((tech) => (
                                <div
                                    key={tech}
                                    className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <p className="font-semibold text-gray-900 dark:text-white">{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;

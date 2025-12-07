import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { Button, Input, Card, Spinner } from '@components/ui';

/**
 * LoginForm Component
 * Form for user authentication
 */
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const { mutate: loginUser, isPending, isError, error } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        // Basic validation
        const newErrors = {};
        if (!email) newErrors.email = 'El email es requerido';
        if (!password) newErrors.password = 'La contraseña es requerida';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Submit login
        loginUser({ email, password });
    };

    return (
        <Card>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold gradient-text">Iniciar Sesión</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Bienvenido de nuevo
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    placeholder="tu@email.com"
                    disabled={isPending}
                />

                <Input
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                    placeholder="••••••••"
                    disabled={isPending}
                />

                {isError && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-sm text-red-600 dark:text-red-400">
                            {error?.response?.data?.message || 'Error al iniciar sesión. Verifica tus credenciales.'}
                        </p>
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending}
                >
                    {isPending ? (
                        <div className="flex items-center justify-center space-x-2">
                            <Spinner size="sm" />
                            <span>Iniciando sesión...</span>
                        </div>
                    ) : (
                        'Iniciar Sesión'
                    )}
                </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                ¿No tienes cuenta?{' '}
                <Link
                    to="/register"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                    Regístrate aquí
                </Link>
            </div>
        </Card>
    );
};

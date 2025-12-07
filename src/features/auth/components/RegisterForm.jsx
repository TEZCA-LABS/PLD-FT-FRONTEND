import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import { Button, Input, Card, Spinner } from '@components/ui';
import { isValidEmail } from '@utils/validators';

/**
 * RegisterForm Component
 * Form for user registration
 */
export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const { mutate: registerUser, isPending, isError, error } = useRegister();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.email) {
            newErrors.email = 'El email es requerido';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Submit registration
        const { confirmPassword, ...userData } = formData;
        registerUser(userData);
    };

    return (
        <Card>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold gradient-text">Crear Cuenta</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Únete a nosotros hoy
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Nombre completo"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Juan Pérez"
                    disabled={isPending}
                />

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="tu@email.com"
                    disabled={isPending}
                />

                <Input
                    label="Contraseña"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder="••••••••"
                    disabled={isPending}
                />

                <Input
                    label="Confirmar contraseña"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                    placeholder="••••••••"
                    disabled={isPending}
                />

                {isError && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-sm text-red-600 dark:text-red-400">
                            {error?.response?.data?.message || 'Error al registrarse. Intenta de nuevo.'}
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
                            <span>Creando cuenta...</span>
                        </div>
                    ) : (
                        'Crear Cuenta'
                    )}
                </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                ¿Ya tienes cuenta?{' '}
                <Link
                    to="/login"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                    Inicia sesión aquí
                </Link>
            </div>
        </Card>
    );
};

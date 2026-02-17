import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input } from '@components/ui';

const userSchema = z.object({
    email: z.string().email('Correo inválido'),
    role: z.enum(['admin', 'analista', 'auditor'], {
        errorMap: () => ({ message: 'Rol inválido' }),
    }),
    is_active: z.boolean().optional(),
});

export const UserModal = ({ isOpen, onClose, user, onSave, isLoading }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: '',
            role: 'analista',
            is_active: true,
        },
    });

    useEffect(() => {
        if (user) {
            reset({
                email: user.email,
                role: user.role,
                is_active: user.is_active,
            });
        } else {
            reset({
                email: '',
                role: 'analista',
                is_active: true,
            });
        }
    }, [user, reset, isOpen]);

    if (!isOpen) return null;

    const onSubmit = (data) => {
        onSave(data);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#1a2432] rounded-xl shadow-xl w-full max-w-md overflow-hidden transform transition-all scale-100">
                <div className="p-6 border-b border-[#f0f2f4] dark:border-[#2d3a4b] flex justify-between items-center">
                    <h3 className="text-xl font-bold text-[#111418] dark:text-white">
                        {user ? 'Editar Usuario' : 'Nuevo Usuario'}
                    </h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                    <Input
                        label="Correo Electrónico"
                        type="email"
                        error={errors.email?.message}
                        {...register('email')}
                        disabled={!!user}
                        className="dark:bg-[#243040] dark:text-white dark:border-gray-600"
                    />

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Rol</label>
                        <select
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#243040] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            {...register('role')}
                        >
                            <option value="admin">Administrador</option>
                            <option value="analista">Analista</option>
                            <option value="auditor">Auditor</option>
                        </select>
                        {errors.role && <p className="text-sm text-red-600">{errors.role.message}</p>}
                    </div>

                    <div className="flex items-center gap-2 mt-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <input
                            type="checkbox"
                            id="is_active"
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                            {...register('is_active')}
                        />
                        <label htmlFor="is_active" className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                            Usuario Activo
                        </label>
                    </div>

                    <div className="flex justify-end gap-3 mt-6 pt-2">
                        <Button variant="ghost" onClick={onClose} type="button">
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <span className="animate-spin material-symbols-outlined text-sm">progress_activity</span>
                                    Guardando...
                                </div>
                            ) : 'Guardar'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

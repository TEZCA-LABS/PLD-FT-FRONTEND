import { useState } from 'react';
import { useUsers, useUpdateUser } from '../hooks/useUsers';
import { UserModal } from './UserModal';

export const UsersTable = () => {
    const { data: users, isLoading, isError } = useUsers();
    const updateMutation = useUpdateUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const roleNames = {
        admin: 'Administrador',
        user: 'Analista',
        auditor: 'Auditor',
        consultant: 'Consultor',
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleSaveUser = async (data) => {
        if (editingUser) {
            updateMutation.mutate(
                { id: editingUser.id, data },
                {
                    onSuccess: () => {
                        setIsModalOpen(false);
                        setEditingUser(null);
                    },
                }
            );
        }
    };

    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Cargando usuarios...</div>;
    }

    if (isError) {
        return <div className="p-8 text-center text-red-500">Error al cargar usuarios</div>;
    }

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2d3a4b] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#f8f9fa] dark:bg-[#243040]/50 border-b border-[#f0f2f4] dark:border-[#2d3a4b]">
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Correo</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Rol</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2d3a4b]">
                        {users?.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-[#243040] transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                                            {user.email.substring(0, 2).toUpperCase()}
                                        </div>
                                        <span className="text-sm font-semibold dark:text-white">{user.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#617289] dark:text-[#a0aec0]">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full ${user.is_superuser ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                                        user.role === 'admin' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                            'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        {user.is_superuser ? 'SUPERUSER' : (roleNames[user.role] || user.role || 'USER').toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-1.5">
                                        <span className={`size-2 rounded-full ${user.is_active ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                        <span className={`text-sm font-medium ${user.is_active ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                                            {user.is_active ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button
                                            onClick={() => handleEdit(user)}
                                            className="p-2 text-[#617289] dark:text-[#a0aec0] hover:text-primary hover:bg-primary/10 rounded-lg transition-all flex items-center justify-center"
                                            title="Editar usuario"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination UI intentionally simpler for now as backend returns list, but we can add pagination controls if backend supports it later properly */}
            <div className="px-6 py-4 flex items-center justify-between border-t border-[#f0f2f4] dark:border-[#2d3a4b]">
                <p className="text-sm text-[#617289] dark:text-[#a0aec0]">Total usuarios: {users?.length || 0}</p>
            </div>

            <UserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={editingUser}
                onSave={handleSaveUser}
                isLoading={updateMutation.isPending}
            />
        </div>
    );
};

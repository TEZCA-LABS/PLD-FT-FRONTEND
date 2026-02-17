import { useState } from 'react';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { UsersTable, UserModal } from '@features/users';
import { useCreateUser, useUpdateUser } from '@features/users/hooks/useUsers';

const UsersPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const createUserMutation = useCreateUser();
    const updateUserMutation = useUpdateUser();

    const handleCreate = () => {
        setEditingUser(null);
        setIsModalOpen(true);
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleSaveUser = async (data) => {
        if (editingUser) {
            updateUserMutation.mutate(
                { id: editingUser.id, data },
                {
                    onSuccess: () => {
                        setIsModalOpen(false);
                        setEditingUser(null);
                    },
                }
            );
        } else {
            createUserMutation.mutate(data, {
                onSuccess: () => {
                    setIsModalOpen(false);
                },
            });
        }
    };

    return (
        <SidebarLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-black text-[#111418] dark:text-white">Control de Acceso</h3>
                        <p className="text-[#617289] dark:text-[#a0aec0] mt-1">Gestione las cuentas de usuario y niveles de acceso de la plataforma de cumplimiento normativo.</p>
                    </div>
                    <button
                        onClick={handleCreate}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-shadow shadow-sm active:scale-95"
                    >
                        <span className="material-symbols-outlined text-[20px]">person_add</span>
                        <span>Agregar Usuario</span>
                    </button>
                </div>

                <div className="bg-white dark:bg-[#1a2432] p-4 rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2d3a4b] space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="lg:col-span-8">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617289]">search</span>
                                <input className="w-full pl-10 pr-4 py-2.5 bg-[#f0f2f4] dark:bg-[#243040] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm placeholder:text-[#617289] dark:text-white" placeholder="Buscar por nombre o correo electrónico..." type="text" />
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <select className="w-full px-3 py-2.5 bg-[#f0f2f4] dark:bg-[#243040] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm dark:text-white">
                                <option value="">Filtrar por Rol: Todos</option>
                                <option value="admin">Administrador</option>
                                <option value="analista">Analista</option>
                                <option value="auditor">Auditor</option>
                            </select>
                        </div>
                    </div>
                </div>

                <UsersTable onEdit={handleEdit} />

                <UserModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    user={editingUser}
                    onSave={handleSaveUser}
                    isLoading={createUserMutation.isPending || updateUserMutation.isPending}
                />
            </div>
        </SidebarLayout>
    );
};

export default UsersPage;

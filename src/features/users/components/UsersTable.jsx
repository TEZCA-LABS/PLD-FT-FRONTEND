export const UsersTable = () => {
    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2d3a4b] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#f8f9fa] dark:bg-[#243040]/50 border-b border-[#f0f2f4] dark:border-[#2d3a4b]">
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Correo</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Rol</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Ubicación</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2d3a4b]">
                        {/* Example Row 1 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-[#243040] transition-colors group">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">AG</div>
                                    <span className="text-sm font-semibold dark:text-white">Alejandro García</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#617289] dark:text-[#a0aec0]">alejandro.garcia@banco.com</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">ADMIN</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#617289] dark:text-[#a0aec0]">México CDMX</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                    <span className="size-2 rounded-full bg-green-500"></span>
                                    <span className="text-sm font-medium text-green-700 dark:text-green-400">Activo</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <button className="p-2 text-[#617289] dark:text-[#a0aec0] hover:text-primary hover:bg-primary/10 rounded-lg transition-all flex items-center justify-center" title="Editar usuario">
                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* More rows can be added here */}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 flex items-center justify-between border-t border-[#f0f2f4] dark:border-[#2d3a4b]">
                <p className="text-sm text-[#617289] dark:text-[#a0aec0]">Mostrando 1 a 4 de 24 usuarios</p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-sm border border-[#f0f2f4] dark:border-[#2d3a4b] rounded-lg hover:bg-gray-50 dark:hover:bg-[#243040] dark:text-white disabled:opacity-50" disabled>Anterior</button>
                    <button className="px-3 py-1 text-sm bg-primary text-white rounded-lg">1</button>
                    <button className="px-3 py-1 text-sm border border-[#f0f2f4] dark:border-[#2d3a4b] rounded-lg hover:bg-gray-50 dark:hover:bg-[#243040] dark:text-white">2</button>
                    <button className="px-3 py-1 text-sm border border-[#f0f2f4] dark:border-[#2d3a4b] rounded-lg hover:bg-gray-50 dark:hover:bg-[#243040] dark:text-white">3</button>
                    <button className="px-3 py-1 text-sm border border-[#f0f2f4] dark:border-[#2d3a4b] rounded-lg hover:bg-gray-50 dark:hover:bg-[#243040] dark:text-white">Siguiente</button>
                </div>
            </div>
        </div>
    );
};

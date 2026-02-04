export const AuditLogTable = () => {
    return (
        <div className="bg-white dark:bg-[#1a232e] rounded-xl border border-[#dbe0e6] dark:border-gray-700 overflow-hidden shadow-sm flex flex-col grow">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#f8f9fa] dark:bg-[#252f3d] border-b border-[#dbe0e6] dark:border-gray-700 sticky top-0">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">Fecha / Hora</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">Usuario</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">Acción</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">Entidad Consultada</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">IP de Origen</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f2f4] dark:divide-gray-800">
                        <tr className="hover:bg-[#f6f7f8] dark:hover:bg-[#252f3d]/50 transition-colors">
                            <td className="px-6 py-3 text-sm font-medium font-mono text-[#111418] dark:text-gray-200">24/05/2024 14:15:22</td>
                            <td className="px-6 py-3">
                                <div className="flex items-center gap-2">
                                    <div className="size-6 bg-blue-100 text-primary rounded-full flex items-center justify-center text-[10px] font-bold">AL</div>
                                    <span className="text-sm text-primary font-semibold">a.lopez@segurofin.com</span>
                                </div>
                            </td>
                            <td className="px-6 py-3">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                    Búsqueda de Cliente
                                </span>
                            </td>
                            <td className="px-6 py-3 text-sm font-medium">Empresa Global S.A. (ID: 99120)</td>
                            <td className="px-6 py-3 text-sm font-mono text-[#617289]">192.168.1.104</td>
                            <td className="px-6 py-3 text-right">
                                <button className="text-[#617289] hover:text-primary transition-colors flex items-center gap-1 ml-auto text-xs font-bold" title="Ver Log Detallado">
                                    <span className="material-symbols-outlined text-lg">description</span>
                                    Ver Log
                                </button>
                            </td>
                        </tr>
                        {/* More rows */}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-700 flex items-center justify-between bg-white dark:bg-[#1a232e]">
                <p className="text-sm text-[#617289] dark:text-gray-400">Mostrando <span className="font-bold text-[#111418] dark:text-white">1 - 6</span> de <span className="font-bold text-[#111418] dark:text-white">14,208</span> registros</p>
                <div className="flex items-center gap-2">
                    <button className="p-2 border border-[#dbe0e6] dark:border-gray-600 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 disabled:opacity-50" disabled>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm">1</button>
                    <button className="px-4 py-2 border border-transparent hover:border-[#dbe0e6] dark:hover:border-gray-600 rounded-lg text-sm">2</button>
                    <button className="px-4 py-2 border border-transparent hover:border-[#dbe0e6] dark:hover:border-gray-600 rounded-lg text-sm">3</button>
                    {/* ... */}
                    <button className="p-2 border border-[#dbe0e6] dark:border-gray-600 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

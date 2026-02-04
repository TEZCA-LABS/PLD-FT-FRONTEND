export const RolesTable = () => {
    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6] dark:border-gray-700">
                        <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider w-1/2">Funcionalidades</th>
                        <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider text-center">Admin</th>
                        <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider text-center">Analista</th>
                        <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider text-center">Auditor</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-700">
                    <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                        <td className="px-6 py-2" colSpan="4">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Módulo de Consultas</span>
                        </td>
                    </tr>
                    <tr className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <td className="px-6 py-4 text-[#111418] dark:text-gray-200 text-sm font-medium">Consultar LLM (IA Generativa)</td>
                        <td className="px-6 py-4 text-center">
                            <input defaultChecked className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                        <td className="px-6 py-4 text-center">
                            <input defaultChecked className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                        <td className="px-6 py-4 text-center">
                            <input className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                    </tr>
                    <tr className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <td className="px-6 py-4 text-[#111418] dark:text-gray-200 text-sm font-medium">Búsqueda Avanzada de Entidades</td>
                        <td className="px-6 py-4 text-center">
                            <input defaultChecked className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                        <td className="px-6 py-4 text-center">
                            <input defaultChecked className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                        <td className="px-6 py-4 text-center">
                            <input defaultChecked className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                    </tr>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                        <td className="px-6 py-2" colSpan="4">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Módulo de Visualización</span>
                        </td>
                    </tr>
                    <tr className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <td className="px-6 py-4 text-[#111418] dark:text-gray-200 text-sm font-medium">Exportar Reportes Regulatorios</td>
                        <td className="px-6 py-4 text-center">
                            <input defaultChecked className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                        <td className="px-6 py-4 text-center">
                            <input className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                        <td className="px-6 py-4 text-center">
                            <input defaultChecked className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox" />
                        </td>
                    </tr>
                    {/* More rows would go here */}
                </tbody>
            </table>
        </div>
    );
};

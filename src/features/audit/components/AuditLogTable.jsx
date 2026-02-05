import { useAuditHistory } from '../hooks/useAudit';

export const AuditLogTable = () => {
    const { data: auditLogs, isLoading, isError } = useAuditHistory();

    if (isLoading) {
        return <div className="p-8 text-center text-slate-500">Cargando logs...</div>;
    }

    if (isError) {
        return <div className="p-8 text-center text-red-500">Error al cargar historial de auditoría</div>;
    }

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
                        {auditLogs?.map((log, index) => (
                            <tr key={log.id || index} className="hover:bg-[#f6f7f8] dark:hover:bg-[#252f3d]/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-medium font-mono text-[#111418] dark:text-gray-200">{new Date(log.timestamp).toLocaleString()}</td>
                                <td className="px-6 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="size-6 bg-blue-100 text-primary rounded-full flex items-center justify-center text-[10px] font-bold">U</div>
                                        <span className="text-sm text-primary font-semibold">{log.user_email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-3">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                        {log.action}
                                    </span>
                                </td>
                                <td className="px-6 py-3 text-sm font-medium">{log.entity_name || 'N/A'}</td>
                                <td className="px-6 py-3 text-sm font-mono text-[#617289]">{log.ip_address}</td>
                                <td className="px-6 py-3 text-right">
                                    <button className="text-[#617289] hover:text-primary transition-colors flex items-center gap-1 ml-auto text-xs font-bold" title="Ver Log Detallado">
                                        <span className="material-symbols-outlined text-lg">description</span>
                                        Ver Log
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-700 flex items-center justify-between bg-white dark:bg-[#1a232e]">
                <p className="text-sm text-[#617289] dark:text-gray-400">Total registros: <span className="font-bold text-[#111418] dark:text-white">{auditLogs?.length || 0}</span></p>
            </div>
        </div>
    );
};

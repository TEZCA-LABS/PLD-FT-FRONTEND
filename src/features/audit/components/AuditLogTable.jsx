import React, { useState } from 'react';
import { useAuditHistory } from '../hooks/useAudit';

export const AuditLogTable = ({ params = {}, activeTab = 'all' }) => {
  const { data: auditLogs, isLoading, isError } = useAuditHistory(params);
  const [selectedLog, setSelectedLog] = useState(null);

  if (isLoading) {
    return (
      <div className="p-8 text-center text-slate-500">Cargando logs...</div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-500">
        Error al cargar historial de auditoría
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#1a232e] rounded-xl border border-[#dbe0e6] dark:border-gray-700 overflow-hidden shadow-sm flex flex-col grow">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#f8f9fa] dark:bg-[#252f3d] border-b border-[#dbe0e6] dark:border-gray-700 sticky top-0">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">
                Fecha / Hora
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">
                Acción
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">
                Entidad Consultada
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider">
                IP de Origen
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-gray-300 uppercase tracking-wider text-right">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f2f4] dark:divide-gray-800">
            {auditLogs?.map((log, index) => (
              <tr
                key={log.id || index}
                className="hover:bg-[#f6f7f8] dark:hover:bg-[#252f3d]/50 transition-colors"
              >
                <td className="px-6 py-3 text-sm font-medium font-mono text-[#111418] dark:text-gray-200">
                  {new Date(log.timestamp).toLocaleString()}
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <div className="size-6 bg-blue-100 text-primary rounded-full flex items-center justify-center text-[10px] font-bold">
                      U
                    </div>
                    <span className="text-sm text-primary font-semibold">
                      {log.user_email || `Usuario #${log.user_id}`}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    {log.action}
                  </span>
                </td>
                <td className="px-6 py-3 text-sm font-medium">
                  {log.entity_name || log.details?.query || 'N/A'}
                </td>
                <td className="px-6 py-3 text-sm font-mono text-[#617289]">
                  {log.ip_address || log.details?.ip_address || 'N/A'}
                </td>
                <td className="px-6 py-3 text-right">
                  <button
                    onClick={() => setSelectedLog(log)}
                    className="text-[#617289] hover:text-primary transition-colors flex items-center gap-1 ml-auto text-xs font-bold"
                    title="Ver Log Detallado"
                  >
                    <span className="material-symbols-outlined text-lg">
                      description
                    </span>
                    Ver Log
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-700 flex items-center justify-between bg-white dark:bg-[#1a232e]">
        <p className="text-sm text-[#617289] dark:text-gray-400">
          Total registros:{' '}
          <span className="font-bold text-[#111418] dark:text-white">
            {auditLogs?.length || 0}
          </span>
        </p>
      </div>

      {selectedLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#1a232e] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-gray-700 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">
                Detalle del Registro de Auditoría
              </h3>
              <button
                onClick={() => setSelectedLog(null)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Acción</p>
                  <p className="font-medium text-sm text-[#111418] dark:text-gray-200">{selectedLog.action}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Fecha</p>
                  <p className="font-medium text-sm text-[#111418] dark:text-gray-200">{new Date(selectedLog.timestamp).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Usuario</p>
                  <p className="font-medium text-sm text-[#111418] dark:text-gray-200">
                    {selectedLog.user_email ? `${selectedLog.user_email} (ID: ${selectedLog.user_id})` : `Usuario #${selectedLog.user_id}`}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">IP de Origen</p>
                  <p className="font-medium text-sm text-[#111418] dark:text-gray-200">{selectedLog.ip_address || selectedLog.details?.ip_address || 'N/A'}</p>
                </div>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase mb-2 mt-2">Detalles del Evento</p>
              <div className="bg-[#f8f9fa] dark:bg-[#0d1117] p-4 rounded-lg border border-[#dbe0e6] dark:border-gray-700">
                {selectedLog.details && Object.keys(selectedLog.details).length > 0 ? (
                  <ul className="space-y-3">
                    {Object.entries(selectedLog.details).map(([key, value]) => (
                      <li key={key} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-b border-gray-200 dark:border-gray-800 pb-2 last:border-0 last:pb-0">
                        <span className="text-xs font-bold text-gray-500 uppercase w-1/3 mt-0.5 capitalize">
                          {key.replace(/_/g, ' ')}
                        </span>
                        <span className="text-sm font-medium text-[#111418] dark:text-gray-200 break-all w-2/3">
                          {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 italic">No hay detalles adicionales registrados.</p>
                )}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-[#dbe0e6] dark:border-gray-700 bg-gray-50 dark:bg-[#252f3d] flex justify-end">
              <button
                onClick={() => setSelectedLog(null)}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

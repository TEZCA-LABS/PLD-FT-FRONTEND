import { getApiErrorMessage } from '@utils/apiError';
import React from 'react';
import { useSyncSource } from '../hooks/useSearch';

export const AdminSourceManager = ({ isOpen, onClose }) => {
  const { mutate: syncSource, isPending } = useSyncSource();
  const [feedback, setFeedback] = React.useState(null);

  if (!isOpen) return null;

  const sources = [
    {
      id: 'un',
      name: 'ONU (Consolidated)',
      description: 'Lista consolidada del Consejo de Seguridad de la ONU',
    },
    {
      id: 'ofac_sdn',
      name: 'OFAC SDN',
      description: 'Specially Designated Nationals (Tesoro de EE.UU.)',
    },
    {
      id: 'ofac_cons',
      name: 'OFAC Consolidated',
      description: 'Consolidated Non-SDN List (Tesoro de EE.UU.)',
    },
    {
      id: 'sat',
      name: 'SAT 69-B',
      description:
        'Contribuyentes con operaciones presuntamente inexistentes (México)',
    },
    {
      id: 'mex',
      name: 'Sancionados México',
      description: 'Servidores públicos y particulares sancionados (SFP)',
    },
  ];

  const handleSync = (sourceId) => {
    setFeedback(null);
    syncSource(sourceId, {
      onSuccess: () => {
        setFeedback({
          type: 'success',
          message: `Sincronización iniciada en segundo plano para la fuente: ${sourceId}.`,
        });
      },
      onError: (error) => {
        setFeedback({
          type: 'error',
          message: getApiErrorMessage(
            error,
            'No se pudo iniciar la sincronización.',
          ),
        });
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white dark:bg-[#1a2432] rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Administración de Fuentes de Datos
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Sincroniza listas de sanciones externas directamente a la base de
              datos local.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {feedback && (
            <div
              className={`p-4 rounded-lg mb-6 text-sm font-medium ${feedback.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50' : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/50'}`}
            >
              {feedback.message}
            </div>
          )}

          <div className="space-y-4">
            {sources.map((source) => (
              <div
                key={source.id}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-colors bg-slate-50/50 dark:bg-slate-800/30"
              >
                <div className="flex flex-col pr-4">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {source.name}
                  </span>
                  <span className="text-sm text-slate-500 mt-0.5">
                    {source.description}
                  </span>
                </div>
                <button
                  onClick={() => handleSync(source.id)}
                  disabled={isPending}
                  className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 hover:border-primary hover:text-primary dark:hover:border-primary text-slate-700 dark:text-slate-200 font-medium rounded-lg text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    sync
                  </span>
                  Sincronizar
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

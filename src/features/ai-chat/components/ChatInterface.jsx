export const ChatInterface = () => {
    return (
        <main className="flex-1 flex flex-col relative bg-[#f8fafc] dark:bg-background-dark min-w-0">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-[#e2e8f0]/50 dark:border-gray-700/50 bg-white/50 dark:bg-[#1a232e]/50 backdrop-blur-sm sticky top-0 z-10">
                <button className="text-[#64748b] dark:text-gray-400 text-sm hover:text-primary transition-colors">Casos</button>
                <span className="text-[#64748b] dark:text-gray-400 text-sm">/</span>
                <button className="text-[#64748b] dark:text-gray-400 text-sm hover:text-primary transition-colors">#49201</button>
                <span className="text-[#64748b] dark:text-gray-400 text-sm">/</span>
                <span className="text-primary font-medium text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">smart_toy</span>
                    Asistente
                </span>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 pb-32 space-y-8 scroll-smooth" id="chat-container">
                <div className="flex justify-center">
                    <span className="bg-gray-100 dark:bg-gray-800 text-[#64748b] dark:text-gray-400 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">Hoy, 10:42 AM</span>
                </div>

                {/* User Message */}
                <div className="flex justify-end w-full">
                    <div className="max-w-[80%] lg:max-w-[70%]">
                        <div className="bg-[#f1f5f9] dark:bg-[#252f3d] text-[#121417] dark:text-white p-4 rounded-2xl rounded-tr-none shadow-sm border border-gray-200 dark:border-gray-700">
                            <p className="text-sm leading-relaxed">Resuma el perfil de riesgo de la <strong>Entidad #49201</strong> basándose en los últimos registros de transacciones y listas de vigilancia externas. Resalte cualquier conexión con regiones sancionadas.</p>
                        </div>
                        <div className="flex justify-end mt-1 pr-1">
                            <span className="text-[10px] text-[#64748b] dark:text-gray-400">Tú • 10:42 AM</span>
                        </div>
                    </div>
                    <div className="ml-3 shrink-0">
                        <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdEqpkNuBOJOdRK1n4B9PgKko-Iiv0gBFWREoUHe4GPCHA3eAeDrWk5ZxSlUBM3aOLtn25VIxvWZhrLmdRDaK8OyEvoYIyu7dnYVFafla2-alD6pK3Kcla5R6UR41H_aC8UkGkrDDvi2ikeNv9-X1clOvA2QUoD27mr09l5zQiK0LR6GjFAfkfAUtYG8aGZul0HcXWVrKPFW5QnMaueLtFifpCXOtHLriMEvDj8gI6m0cy_uC0UtJwxHm3OUxZVnCd7Kkzty0Bxxo")', backgroundSize: 'cover' }}></div>
                    </div>
                </div>

                {/* AI Message */}
                <div className="flex w-full">
                    <div className="mr-3 shrink-0">
                        <div className="size-8 rounded bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-lg">smart_toy</span>
                        </div>
                    </div>
                    <div className="max-w-[85%] lg:max-w-[75%]">
                        <div className="bg-white dark:bg-[#1a232e] text-[#121417] dark:text-white p-6 rounded-2xl rounded-tl-none shadow-sm border border-[#e2e8f0] dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                                <span className="material-symbols-outlined text-[#10b981] text-xl">check_circle</span>
                                <span className="text-xs font-bold text-[#10b981] uppercase tracking-wide">Análisis Completado</span>
                                <span className="text-xs text-[#64748b] dark:text-gray-400 ml-auto">14.2k registros procesados</span>
                            </div>
                            <div className="prose prose-sm max-w-none text-[#121417] dark:text-gray-200 space-y-4">
                                <p className="leading-relaxed">Según los datos disponibles, la Entidad #49201 presenta un perfil de <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-900/50">ALTO RIESGO</span>. Los hallazgos clave indican una posible exposición regulatoria.</p>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-gray-500">gavel</span>
                                        Sanciones y Listas de Vigilancia
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm marker:text-gray-400">
                                        <li>Vínculo directo con empresas fantasma que operan en regiones sancionadas (contexto de Crimea).</li>
                                        <li>Alias coincidente "Vertex Global" en la lista de vigilancia
                                            <button className="inline-flex items-center gap-1 align-middle px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[11px] font-medium border border-blue-200 dark:border-blue-900/50 transition-colors mx-1 cursor-pointer select-none">
                                                <span className="material-symbols-outlined text-[14px]">description</span>
                                                Fuente: OFAC SDNTK 2024
                                            </button>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-xs text-[#64748b] dark:text-gray-400 font-medium mb-3">Acciones sugeridas:</p>
                                <div className="flex flex-wrap gap-2">
                                    <button className="bg-[#f8fafc] dark:bg-[#252f3d] hover:bg-gray-100 dark:hover:bg-gray-700 border border-[#e2e8f0] dark:border-gray-600 text-[#121417] dark:text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-base">edit_document</span>
                                        Resumir riesgos
                                    </button>
                                    <button className="bg-[#f8fafc] dark:bg-[#252f3d] hover:bg-gray-100 dark:hover:bg-gray-700 border border-[#e2e8f0] dark:border-gray-600 text-[#121417] dark:text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-base">analytics</span>
                                        Redactar Informe SAR
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-2 gap-3 pl-1">
                            <span className="text-[10px] text-[#64748b] dark:text-gray-400">Asistente • 10:43 AM</span>
                            <div className="flex gap-1">
                                <button className="text-[#64748b] dark:text-gray-400 hover:text-[#121417] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-base">thumb_up</span></button>
                                <button className="text-[#64748b] dark:text-gray-400 hover:text-[#121417] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-base">thumb_down</span></button>
                                <button className="text-[#64748b] dark:text-gray-400 hover:text-[#121417] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"><span className="material-symbols-outlined text-base">content_copy</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc] to-transparent dark:from-background-dark dark:via-background-dark">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white dark:bg-[#1a232e] rounded-xl shadow-input border border-[#e2e8f0] dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all overflow-hidden group">
                        <textarea className="w-full bg-transparent border-0 focus:ring-0 text-[#121417] dark:text-white placeholder-[#64748b] dark:placeholder-gray-500 p-4 pr-24 min-h-[60px] max-h-[200px] resize-none text-sm leading-relaxed" placeholder="Haga preguntas de seguimiento sobre la Entidad #49201 o solicite un informe..." rows="2"></textarea>
                        <div className="flex justify-between items-center px-2 pb-2">
                            <div className="pl-2 flex items-center gap-2">
                                <button className="p-2 text-[#64748b] dark:text-gray-400 hover:text-primary transition-colors" title="Adjuntar Archivo">
                                    <span className="material-symbols-outlined text-xl">attach_file</span>
                                </button>
                                <button className="p-2 text-[#64748b] dark:text-gray-400 hover:text-primary transition-colors" title="Usar Micrófono">
                                    <span className="material-symbols-outlined text-xl">mic</span>
                                </button>
                            </div>
                            <button className="bg-primary hover:bg-[#2c5c9e] text-white rounded-lg p-2 pr-4 pl-4 flex items-center gap-2 text-sm font-bold shadow-sm transition-all transform active:scale-95">
                                <span>Analizar</span>
                                <span className="material-symbols-outlined text-lg">arrow_upward</span>
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-[#64748b] dark:text-gray-400 mt-2">La IA puede cometer errores. Verifique los datos críticos de cumplimiento con documentos originales.</p>
                </div>
            </div>
        </main>
    );
};

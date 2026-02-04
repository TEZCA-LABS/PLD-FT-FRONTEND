export const AIChatHeader = () => {
    return (
        <header className="h-16 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e2e8f0] dark:border-gray-700 bg-white dark:bg-[#1a232e] px-6 z-20 shadow-sm shrink-0">
            <div className="flex items-center gap-4 text-[#121417] dark:text-white">
                <div className="size-8 flex items-center justify-center bg-primary/10 rounded text-primary">
                    <span className="material-symbols-outlined text-2xl">shield_person</span>
                </div>
                <div>
                    <h2 className="text-[#121417] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Asistente de Cumplimiento IA</h2>
                    <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-medium text-[#64748b] dark:text-gray-400">Sistema en línea • Modo confidencial activo</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <div className="hidden md:flex items-center bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded text-xs font-bold gap-2">
                    <span className="material-symbols-outlined text-base">lock</span>
                    Redacción de PII Activada
                </div>
                <div className="h-6 w-px bg-[#e2e8f0] dark:bg-gray-700"></div>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-[#2c5c9e] transition-colors text-white text-sm font-bold shadow-sm">
                        <span className="truncate">Exportar Archivo del Caso</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg size-9 bg-[#f8fafc] dark:bg-[#252f3d] hover:bg-slate-100 dark:hover:bg-slate-700 border border-transparent hover:border-[#e2e8f0] dark:hover:border-gray-600 text-[#121417] dark:text-white transition-all">
                        <span className="material-symbols-outlined text-xl">notifications</span>
                    </button>
                    <button className="flex items-center justify-center rounded-lg size-9 bg-[#f8fafc] dark:bg-[#252f3d] hover:bg-slate-100 dark:hover:bg-slate-700 border border-transparent hover:border-[#e2e8f0] dark:hover:border-gray-600 text-[#121417] dark:text-white transition-all">
                        <span className="material-symbols-outlined text-xl">settings</span>
                    </button>
                </div>
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-white shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWtvMncb8HSxnRfgImmRglk2CnxvwL0UPhf3ktzGNcLijsum59C5SKiFgWajCif0MrHPhZQ37FdsMINMt4Ttu7QH6_CpjFC8OTaCDCch7Kz4ANm_Z21sGHmCViL5ibYRYxRMViWeqAL4TWf1ULqKx50rX40q1jZu5IHlYbYd6JbCeDWst52VXguVdF2_xqfWga1pZuJsqptfFKCw3fyVxa0m3HiKWXZfoDhTeaoa1X2iz5yr6Hoxt8jpgeGQs3Ha9kH5_M4j__Ajs")' }}></div>
            </div>
        </header>
    );
};

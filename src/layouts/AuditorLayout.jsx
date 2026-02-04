import { Link } from 'react-router-dom';

export const AuditorLayout = ({ children }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111418] dark:text-white flex flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a232e] px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                    <div className="size-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Plataforma de Cumplimiento</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-9">
                        <Link className="text-[#617289] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/dashboard">Panel</Link>
                        <Link className="text-primary text-sm font-bold leading-normal border-b-2 border-primary" to="/audit">Auditoría</Link>
                        <Link className="text-[#617289] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="#">Reportes</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                            <span className="material-symbols-outlined mr-2 text-sm">download</span>
                            <span className="truncate text-xs">Exportar Datos</span>
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="text-right mr-2 hidden md:block">
                                <p className="text-xs font-bold leading-none">Auditor Externo</p>
                                <p className="text-[10px] text-[#617289] uppercase tracking-tighter">Rol: Auditoría</p>
                            </div>
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-yjor6SN3hOf_Ix6x7DZjooQi3xRpGRYk3a3MlVZ2IbB36LyqgD3MDIIBL-n6pRMhWYrDbR8rPk8MSVEGLcaHDyeLMAwbQf5eUFGg_Y_xc1T0a222xPMj2fXls6t7lU_KDfmjgWrKGpuYTY9qPalCkObOQyw1nqJLH0RGXdee5_LapDTTPZI4WUZOOQcdcZSqlFVNFHbOB9C_UyZUcZtqj2182bP3Bj5Aga4BVEA1qodewFMDwY-tax9oLtuBbI3yAixPAchzA6M")' }}></div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 flex flex-col px-10 py-8 max-w-[1400px] mx-auto w-full">
                {children}
            </main>
        </div>
    );
};

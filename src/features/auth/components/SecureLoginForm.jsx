import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SecureLoginForm = () => {
    const [formData, setFormData] = useState({
        corporateId: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Secure Login Attempt:', formData);
        // Add authentication logic here
    };

    return (
        <div className="w-full max-w-[420px] flex flex-col gap-6">
            <div className="bg-white dark:bg-[#1e2430] rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="h-2 w-full bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 skew-x-12 translate-x-[-50%] w-1/2"></div>
                </div>
                <div className="p-8 pb-6 flex flex-col gap-8">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-[#121417] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
                            Portal del Analista
                        </h1>
                        <p className="text-[#667385] dark:text-slate-400 text-sm font-normal leading-normal">
                            Por favor, autentique su identidad corporativa para acceder a datos financieros sensibles.
                        </p>
                    </div>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#121417] dark:text-slate-200 text-sm font-medium leading-none">
                                ID Corporativo
                            </label>
                            <div className="relative group">
                                <input
                                    name="corporateId"
                                    value={formData.corporateId}
                                    onChange={handleChange}
                                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#121417] dark:text-white border border-[#dce0e4] dark:border-slate-700 bg-white dark:bg-slate-900 h-12 placeholder:text-[#667385] dark:placeholder:text-slate-500 px-4 text-base font-normal leading-normal focus:outline-0 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                                    placeholder="ID-4829-X o Email"
                                    type="text"
                                />
                                <div className="absolute right-3 top-3 text-[#667385] dark:text-slate-500 pointer-events-none group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">badge</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-end">
                                <label className="text-[#121417] dark:text-slate-200 text-sm font-medium leading-none">
                                    Contraseña
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#121417] dark:text-white border border-[#dce0e4] dark:border-slate-700 bg-white dark:bg-slate-900 h-12 placeholder:text-[#667385] dark:placeholder:text-slate-500 px-4 pr-10 text-base font-normal leading-normal focus:outline-0 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                                    placeholder="• • • • • • • • • • • •"
                                    type={showPassword ? "text" : "password"}
                                />
                                <button
                                    className="absolute right-3 top-3 text-[#667385] dark:text-slate-500 hover:text-[#121417] dark:hover:text-white transition-colors"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? 'visibility' : 'visibility_off'}
                                    </span>
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <Link
                                    className="text-[#667385] dark:text-slate-400 text-sm font-medium hover:text-primary dark:hover:text-blue-400 hover:underline decoration-primary/30 transition-all"
                                    to="#"
                                >
                                    ¿Olvidó su contraseña?
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-[#153461] active:bg-[#0f254a] text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md transition-all group">
                                <span className="truncate mr-2">Autenticar</span>
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-slate-50 dark:bg-[#151a23]/50 border-t border-slate-100 dark:border-slate-800 px-6 py-3 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified_user</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Conexión Encriptada (TLS 1.3)
                    </p>
                </div>
            </div>
            <div className="text-center px-4">
                <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed max-w-[300px] mx-auto">
                    Solo para uso autorizado. Todas las actividades son monitoreadas y registradas para el cumplimiento de las regulaciones AML/CFT.
                </p>
                <div className="flex justify-center gap-4 mt-4 opacity-50">
                    <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
                    <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
                    <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

import { SecureLoginForm } from '@features/auth';

const SecureLoginPage = () => {
  return (
    <div className="font-display bg-background-light min-h-screen flex flex-col overflow-x-hidden transition-colors duration-200">
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        data-alt="Abstract subtle grid pattern representing data structure"
        style={{
          backgroundImage:
            'linear-gradient(#1a427a 1px, transparent 1px), linear-gradient(90deg, #1a427a 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="relative z-10 w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
          <span className="material-symbols-outlined text-primary text-xl">
            shield_moon
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
            FinSec Guard
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-medium text-slate-600">
            Sistema Operativo
          </span>
        </div>
      </div>
      <main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10">
        <SecureLoginForm />
      </main>
    </div>
  );
};

export default SecureLoginPage;

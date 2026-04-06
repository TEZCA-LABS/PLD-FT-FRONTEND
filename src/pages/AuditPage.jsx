import { AuditFilters, AuditLogTable } from '@features/audit';
import { SidebarLayout } from '@layouts/SidebarLayout';
import React from 'react';

const AuditPage = () => {
  const [activeTab, setActiveTab] = React.useState('all');
  const [filters, setFilters] = React.useState({
    query_text: '',
    action_contains: '',
    date_from: '',
    date_to: '',
  });

  const tabToAction = {
    all: '',
    user: 'SEARCH',
    access: 'LOGIN',
    kyc: 'KYC',
  };

  const auditQuery = {
    skip: 0,
    limit: 50,
    query_text: filters.query_text || undefined,
    action_contains: filters.action_contains || tabToAction[activeTab] || undefined,
    timestamp_from: filters.date_from ? `${filters.date_from}T00:00:00` : undefined,
    timestamp_to: filters.date_to ? `${filters.date_to}T23:59:59` : undefined,
  };

  return (
    <SidebarLayout>
      <div className="flex flex-wrap justify-between items-end gap-3 mb-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Historial de Auditoría
            </p>
            <span
              className="material-symbols-outlined text-green-600 text-xl"
              title="Registro Inmutable Activo"
            >
              lock_clock
            </span>
          </div>
          <p className="text-[#617289] dark:text-gray-400 text-base font-normal leading-normal">
            Registro inmutable de actividad para cumplimiento AML/CFT (V4.2)
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#617289] dark:text-gray-400 font-medium">
            Última actualización
          </p>
          <p className="text-sm font-bold">24 Mayo, 2024 - 14:32:01</p>
        </div>
      </div>

      <AuditFilters value={filters} onChange={setFilters} />

      <div className="flex border-b border-[#dbe0e6] dark:border-gray-700 px-4 gap-8 mb-4">
        <button
          className={`flex items-center gap-2 border-b-[3px] ${activeTab === 'all' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#617289] dark:text-gray-400'} pb-3 pt-4`}
          onClick={() => setActiveTab('all')}
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Todos los Registros
          </p>
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold tracking-tighter">
            14,208
          </span>
        </button>
        <button
          className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'user' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#617289] dark:text-gray-400'} pb-3 pt-4 hover:text-primary transition-colors`}
          onClick={() => setActiveTab('user')}
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Actividad de Usuario
          </p>
        </button>
        <button
          className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'access' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#617289] dark:text-gray-400'} pb-3 pt-4 hover:text-primary transition-colors`}
          onClick={() => setActiveTab('access')}
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Accesos al Sistema
          </p>
        </button>
        <button
          className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'kyc' ? 'border-b-primary text-primary' : 'border-b-transparent text-[#617289] dark:text-gray-400'} pb-3 pt-4 hover:text-primary transition-colors`}
          onClick={() => setActiveTab('kyc')}
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Modificaciones KYC
          </p>
        </button>
      </div>

      <AuditLogTable params={auditQuery} />

      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#617289] bg-white/50 dark:bg-black/20 py-2 rounded-lg">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">lock</span>
          SHA-256 Verificado
        </div>
        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">history</span>
          Historial Completo desde 01/01/2023
        </div>
        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">verified</span>
          Certificado Compliance GDPR/AML
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AuditPage;

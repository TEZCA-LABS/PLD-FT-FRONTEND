import { RoleDetailsSidebar, RolesTable } from '@features/roles';
import { SidebarLayout } from '@layouts/SidebarLayout';

const RolesPage = () => {
  return (
    <SidebarLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight">
              Gestión de Roles (Admin)
            </h2>
            <p className="text-[#617289] dark:text-gray-400 text-sm font-normal">
              Control de acceso y políticas de seguridad para cumplimiento
              AML/CFT.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-gray-800 text-[#111418] dark:text-white text-sm font-bold border border-transparent hover:border-gray-300 transition-all">
              <span>Descartar</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <span>Guardar Cambios</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex-1 flex flex-col gap-6">
            <RolesTable />
          </div>
          <RoleDetailsSidebar />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default RolesPage;

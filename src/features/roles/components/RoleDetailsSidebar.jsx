const formatDateTime = (value) => {
  if (!value) return 'Sin registro';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Sin registro';

  return new Intl.DateTimeFormat('es-MX', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const RoleDetailsSidebar = ({
  roles,
  selectedRole,
  permissions,
  updatedAt,
}) => {
  const activeRole = roles.find((role) => role.key === selectedRole) || roles[0];
  const grantedPermissions = permissions.filter((permission) =>
    permission.allowed_roles.includes(activeRole?.key),
  );
  const deniedPermissions = permissions.filter(
    (permission) => !permission.allowed_roles.includes(activeRole?.key),
  );

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm sticky top-0 overflow-hidden">
        <div className="p-6 border-b border-[#dbe0e6] dark:border-gray-700 bg-primary/5">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">
            Resumen de Perfil
          </h3>
          <p className="text-[#617289] dark:text-gray-400 text-xs mt-1">
            Detalle del rol seleccionado
          </p>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div>
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">
              Rol Seleccionado
            </label>
            <div className="flex items-center gap-3 bg-[#f0f2f4] dark:bg-gray-800 p-3 rounded-lg">
              <span className="material-symbols-outlined text-primary">
                verified_user
              </span>
              <span className="font-bold text-sm dark:text-white">
                {activeRole?.label || 'Sin rol'}
              </span>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">
              Alcance del Permiso
            </label>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start text-sm text-[#111418] dark:text-gray-300">
                <span className="material-symbols-outlined text-green-500 text-lg">
                  check_circle
                </span>
                <span>
                  Permisos habilitados: {grantedPermissions.length} de{' '}
                  {permissions.length}
                </span>
              </li>
              <li className="flex gap-2 items-start text-sm text-[#111418] dark:text-gray-300">
                <span className="material-symbols-outlined text-green-500 text-lg">
                  check_circle
                </span>
                <span>
                  Ejemplo habilitado:{' '}
                  {grantedPermissions[0]?.label || 'Sin permisos activos'}
                </span>
              </li>
              <li className="flex gap-2 items-start text-sm text-[#111418] dark:text-gray-300">
                <span className="material-symbols-outlined text-red-500 text-lg">
                  cancel
                </span>
                <span>
                  Permisos restringidos: {deniedPermissions.length}
                </span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#dbe0e6] dark:border-gray-700">
            <p className="text-[10px] text-[#617289] dark:text-gray-400 italic">
              Ultima modificacion: {formatDateTime(updatedAt)}
            </p>
          </div>
          <button className="w-full py-3 bg-primary/10 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors">
            Exportar Matriz de Auditoría
          </button>
        </div>
      </div>
    </aside>
  );
};

import React from 'react';

export const RolesTable = ({
  roles,
  permissions,
  onTogglePermission,
  selectedRole,
  onSelectRole,
}) => {
  const groupedPermissions = permissions.reduce((acc, permission) => {
    const moduleName = permission.module || 'general';
    if (!acc[moduleName]) acc[moduleName] = [];
    acc[moduleName].push(permission);
    return acc;
  }, {});

  return (
    <div className="bg-white dark:bg-[#1a2432] rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbe0e6] dark:border-gray-700">
            <th className="px-6 py-4 text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider w-1/2">
              Funcionalidades
            </th>
            {roles.map((role) => (
              <th
                key={role.key}
                className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-center cursor-pointer ${
                  selectedRole === role.key
                    ? 'text-primary'
                    : 'text-[#111418] dark:text-white'
                }`}
                onClick={() => onSelectRole(role.key)}
              >
                {role.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-700">
          {Object.entries(groupedPermissions).map(([moduleName, modulePermissions]) => (
            <React.Fragment key={`group-${moduleName}`}>
              <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                <td className="px-6 py-2" colSpan={roles.length + 1}>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    Modulo de {moduleName}
                  </span>
                </td>
              </tr>

              {modulePermissions.map((permission) => (
                <tr
                  key={permission.id}
                  className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                >
                  <td className="px-6 py-4 text-[#111418] dark:text-gray-200 text-sm font-medium">
                    {permission.label}
                  </td>

                  {roles.map((role) => (
                    <td key={`${permission.id}-${role.key}`} className="px-6 py-4 text-center">
                      <input
                        checked={permission.allowed_roles.includes(role.key)}
                        onChange={(event) =>
                          onTogglePermission(
                            permission.id,
                            role.key,
                            event.target.checked,
                          )
                        }
                        className="h-5 w-5 rounded border-[#dbe0e6] dark:border-gray-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer"
                        type="checkbox"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

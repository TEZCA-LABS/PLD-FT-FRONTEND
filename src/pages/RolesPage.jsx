import { RoleDetailsSidebar, RolesTable } from '@features/roles';
import {
  useRolePermissions,
  useUpdateRolePermissions,
} from '@features/roles/hooks/useRoles';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { getApiErrorMessage } from '@utils/apiError';
import React from 'react';

const RolesPage = () => {
  const [selectedRole, setSelectedRole] = React.useState('consultant');
  const [draftPermissions, setDraftPermissions] = React.useState([]);
  const [feedback, setFeedback] = React.useState(null);

  const { data, isLoading } = useRolePermissions();
  const { mutate: updatePermissions, isPending: isSaving } =
    useUpdateRolePermissions();

  const roles = data?.roles || [];
  const permissions = data?.permissions || [];

  React.useEffect(() => {
    setDraftPermissions(permissions);
  }, [permissions]);

  React.useEffect(() => {
    if (!roles.some((role) => role.key === selectedRole) && roles.length > 0) {
      setSelectedRole(roles[0].key);
    }
  }, [roles, selectedRole]);

  const hasChanges =
    JSON.stringify(draftPermissions) !== JSON.stringify(permissions);

  const handleTogglePermission = (permissionId, roleKey, checked) => {
    setDraftPermissions((current) =>
      current.map((permission) => {
        if (permission.id !== permissionId) return permission;

        const nextRoles = checked
          ? Array.from(new Set([...permission.allowed_roles, roleKey]))
          : permission.allowed_roles.filter((role) => role !== roleKey);

        return {
          ...permission,
          allowed_roles: nextRoles,
        };
      }),
    );
    setFeedback(null);
  };

  const handleDiscard = () => {
    setDraftPermissions(permissions);
    setFeedback('Cambios descartados.');
  };

  const handleSave = () => {
    setFeedback(null);

    updatePermissions(
      {
        permissions: draftPermissions.map((permission) => ({
          id: permission.id,
          allowed_roles: permission.allowed_roles,
        })),
      },
      {
        onSuccess: () => {
          setFeedback('Matriz de permisos actualizada correctamente.');
        },
        onError: (error) => {
          setFeedback(
            getApiErrorMessage(error, 'No se pudieron guardar los cambios.'),
          );
        },
      },
    );
  };

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
            <button
              onClick={handleDiscard}
              disabled={!hasChanges || isSaving}
              className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-gray-800 text-[#111418] dark:text-white text-sm font-bold border border-transparent hover:border-gray-300 transition-all disabled:opacity-50"
            >
              <span>Descartar</span>
            </button>
            <button
              onClick={handleSave}
              disabled={!hasChanges || isSaving}
              className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              <span>Guardar Cambios</span>
            </button>
          </div>
        </div>

        {feedback && (
          <p className="text-sm text-[#617289] dark:text-gray-300">
            {feedback}
          </p>
        )}

        {isLoading && (
          <p className="text-sm text-[#617289] dark:text-gray-300">
            Cargando matriz de permisos...
          </p>
        )}

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 w-full">
          <div className="flex-1 flex flex-col gap-6">
            <RolesTable
              roles={roles}
              permissions={draftPermissions}
              onTogglePermission={handleTogglePermission}
              selectedRole={selectedRole}
              onSelectRole={setSelectedRole}
            />
          </div>
          <RoleDetailsSidebar
            roles={roles}
            selectedRole={selectedRole}
            permissions={draftPermissions}
            updatedAt={data?.updated_at}
          />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default RolesPage;

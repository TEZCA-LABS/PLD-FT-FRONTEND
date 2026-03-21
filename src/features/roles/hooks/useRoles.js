import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getRolePermissions, updateRolePermissions } from '../api/rolesApi';

export const useRolePermissions = () => {
  return useQuery({
    queryKey: ['rolePermissions'],
    queryFn: getRolePermissions,
  });
};

export const useUpdateRolePermissions = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRolePermissions,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rolePermissions'] });
    },
  });
};

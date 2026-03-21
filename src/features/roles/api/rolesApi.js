import apiClient from '@lib/axios';

export const getRolePermissions = async () => {
  const response = await apiClient.get('/roles/permissions');
  return response.data;
};

export const updateRolePermissions = async (payload) => {
  const response = await apiClient.put('/roles/permissions', payload);
  return response.data;
};

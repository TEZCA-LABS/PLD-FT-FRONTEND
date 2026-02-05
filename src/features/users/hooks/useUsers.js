import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUsers, createUser, updateUser, deleteUser, getUserById } from '../api/usersApi';

/**
 * Hook to fetch users
 */
export const useUsers = (params) => {
    return useQuery({
        queryKey: ['users', params],
        queryFn: () => getUsers(params),
        keepPreviousData: true,
    });
};

/**
 * Hook to create a user
 */
export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
        },
    });
};

/**
 * Hook to update a user
 */
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => updateUser(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
        },
    });
};

/**
 * Hook to delete a user
 */
export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
        },
    });
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getEntities, createEntity } from '../api/entitiesApi';

/**
 * Hook to fetch entities
 */
export const useEntities = (params) => {
    return useQuery({
        queryKey: ['entities', params],
        queryFn: () => getEntities(params),
        keepPreviousData: true,
    });
};

/**
 * Hook to create an entity
 */
export const useCreateEntity = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createEntity,
        onSuccess: () => {
            queryClient.invalidateQueries(['entities']);
        },
    });
};

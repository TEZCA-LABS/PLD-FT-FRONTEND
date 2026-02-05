import { useQuery } from '@tanstack/react-query';
import { getAuditHistory } from '../api/auditApi';

/**
 * Hook to get audit history
 */
export const useAuditHistory = (params) => {
    return useQuery({
        queryKey: ['auditHistory', params],
        queryFn: () => getAuditHistory(params),
        keepPreviousData: true,
    });
};

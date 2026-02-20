import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';
import { getAuditHistory, recordAiEvent } from '../api/auditApi';

/**
 * Hook to get audit history
 */
export const useAuditHistory = (params = {}) => {
  return useQuery({
    queryKey: ['auditHistory', params],
    queryFn: () => getAuditHistory(params),
    placeholderData: keepPreviousData,
  });
};

/**
 * Hook to record AI events for audit trail
 */
export const useRecordAiEvent = () => {
  return useMutation({
    mutationFn: recordAiEvent,
    // Note: intentionally not invalidating queries; audit events are typically fire-and-forget
  });
};

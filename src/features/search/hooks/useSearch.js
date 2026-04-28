import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';
import { searchSanctions, uploadSanctionsXml, syncSanctionsSource } from '../api/searchApi';

/**
 * Hook to search sanctions
 */
export const useSearchSanctions = (query, filters = {}) => {
  return useQuery({
    queryKey: ['searchSanctions', query, filters],
    queryFn: () => searchSanctions(query, 10, filters),
    enabled: !!query && query.length >= 2, // Only run if query is valid
    placeholderData: keepPreviousData,
  });
};

/**
 * Hook to upload sanctions XML
 */
export const useUploadSanctions = () => {
  return useMutation({
    mutationFn: uploadSanctionsXml,
    // No auto-invalidation as upload might not affect search immediately or globally without query
  });
};

/**
 * Hook to trigger source synchronization
 */
export const useSyncSource = () => {
  return useMutation({
    mutationFn: syncSanctionsSource,
  });
};

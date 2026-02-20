import { useMutation, useQuery } from '@tanstack/react-query';
import { searchSanctions, uploadSanctionsXml } from '../api/searchApi';

/**
 * Hook to search sanctions
 */
export const useSearchSanctions = (query) => {
  return useQuery({
    queryKey: ['searchSanctions', query],
    queryFn: () => searchSanctions(query),
    enabled: !!query && query.length >= 2, // Only run if query is valid
    keepPreviousData: true,
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

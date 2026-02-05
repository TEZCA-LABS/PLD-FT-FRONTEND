import { useMutation } from '@tanstack/react-query';
import { analyzeEntity } from '../api/intelligenceApi';

/**
 * Hook to analyze entity
 */
export const useAnalyzeEntity = () => {
    return useMutation({
        mutationFn: analyzeEntity,
    });
};

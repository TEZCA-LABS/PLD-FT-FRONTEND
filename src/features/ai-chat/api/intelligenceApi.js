import apiClient from '@lib/axios';

/**
 * Intelligence API endpoints
 */

/**
 * Analyze Entity
 * @param {object} params - Analysis parameters (query)
 * @returns {Promise} Analysis result
 */
export const analyzeEntity = async (query) => {
  const response = await apiClient.post('/intelligence/analyze-entity', {
    query,
  });
  return response.data;
};

import apiClient from '@lib/axios';

/**
 * Audit Log API endpoints
 */

/**
 * Get Audit History
 * @param {object} params - Query parameters (skip, limit)
 * @returns {Promise} List of audit logs
 */
export const getAuditHistory = async (params = {}) => {
  const response = await apiClient.get('/audit/history', {
    params: {
      skip: 0,
      limit: 50,
      ...params,
    },
  });
  return response.data;
};

/**
 * Record AI event for audit trail
 * @param {object} eventData - AI event details (session_id, event_type, metadata)
 * @returns {Promise} Recorded event
 */
export const recordAiEvent = async (eventData) => {
  const response = await apiClient.post('/audit/ai-events', eventData);
  return response.data;
};

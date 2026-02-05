import apiClient from '@lib/axios';

/**
 * Audit Log API endpoints
 */

/**
 * Get Audit History
 * @param {object} params - Query parameters (skip, limit)
 * @returns {Promise} List of audit logs
 */
export const getAuditHistory = async (params) => {
    const response = await apiClient.get('/audit/history', { params });
    return response.data;
};

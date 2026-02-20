import apiClient from '@lib/axios';

/**
 * Entity Management API endpoints
 */

/**
 * Get all entities
 * @param {object} params - Query parameters (skip, limit)
 * @returns {Promise} List of entities
 */
export const getEntities = async (params) => {
  const response = await apiClient.get('/entities/', {
    params: {
      skip: 0,
      limit: 100,
      ...params,
    },
  });
  return response.data;
};

/**
 * Create a new entity
 * @param {object} entityData - Entity data (name, source, content)
 * @returns {Promise} Created entity
 */
export const createEntity = async (entityData) => {
  const response = await apiClient.post('/entities/', entityData);
  return response.data;
};

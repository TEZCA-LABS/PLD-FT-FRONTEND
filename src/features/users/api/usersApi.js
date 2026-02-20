import apiClient from '@lib/axios';

/**
 * User Management API endpoints
 */

/**
 * Get all users (Superuser only)
 * @param {object} params - Query parameters (skip, limit)
 * @returns {Promise} List of users
 */
export const getUsers = async (params = { skip: 0, limit: 100 }) => {
  const response = await apiClient.get('/users/', { params });
  return response.data;
};

/**
 * Create a new user (Superuser only)
 * @param {object} userData - User creation data
 * @returns {Promise} Created user
 */
export const createUser = async (userData) => {
  const response = await apiClient.post('/users/', userData);
  return response.data;
};

/**
 * Get user by ID
 * @param {string|number} userId - User ID
 * @returns {Promise} User data
 */
export const getUserById = async (userId) => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};

/**
 * Update user
 * @param {string|number} userId - User ID
 * @param {object} updateData - Data to update
 * @returns {Promise} Updated user
 */
export const updateUser = async (userId, updateData) => {
  const response = await apiClient.put(`/users/${userId}`, updateData);
  return response.data;
};

/**
 * Delete user (Superuser only)
 * @param {string|number} userId - User ID
 * @returns {Promise} Deleted user
 */
export const deleteUser = async (userId) => {
  const response = await apiClient.delete(`/users/${userId}`);
  return response.data;
};

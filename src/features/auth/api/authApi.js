import apiClient from '@lib/axios';

/**
 * Authentication API endpoints
 */

/**
 * Login user
 * @param {object} credentials - Email and password
 * @returns {Promise} User data and token
 */
export const login = async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
};

/**
 * Register new user
 * @param {object} userData - User registration data
 * @returns {Promise} User data and token
 */
export const register = async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
};

/**
 * Logout user
 * @returns {Promise} Logout confirmation
 */
export const logout = async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
};

/**
 * Get current user
 * @returns {Promise} Current user data
 */
export const getCurrentUser = async () => {
    const response = await apiClient.get('/auth/me');
    return response.data;
};

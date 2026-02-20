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
  const formData = new URLSearchParams();
  formData.append('username', credentials.email);
  formData.append('password', credentials.password);

  const response = await apiClient.post('/auth/login/access-token', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};

/**
 * Register new user
 * @param {object} userData - User registration data
 * @returns {Promise} User data and token
 */
export const register = async (userData) => {
  const payload = {
    email: userData.email,
    password: userData.password,
    is_active: true,
    is_superuser: false,
    role: 'user',
  };

  const response = await apiClient.post('/users/', payload);
  return response.data;
};

/**
 * Logout user
 * @returns {Promise} Logout confirmation
 */
export const logout = async () => {
  return { success: true };
};

/**
 * Get current user
 * @returns {Promise} Current user data
 */
export const getCurrentUser = async () => {
  const response = await apiClient.get('/auth/me');
  return response.data;
};

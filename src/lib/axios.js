import { env } from '@config/env';
import { useAuthStore } from '@stores/authStore';
import axios from 'axios';

/**
 * Axios instance configured with base URL and interceptors
 */
const apiClient = axios.create({
  baseURL: env.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token && token !== 'undefined' && token !== 'null') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor - Handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const detail = error.response?.data?.detail;

    if (
      status === 401 ||
      (status === 403 && detail === 'Could not validate credentials')
    ) {
      // Unauthorized or Invalid Credentials - clear token and redirect to login
      useAuthStore.getState().logout();
      window.location.href = '/secure-login';
    }
    return Promise.reject(error);
  },
);

export default apiClient;

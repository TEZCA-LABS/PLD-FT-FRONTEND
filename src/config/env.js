/**
 * Environment configuration
 * Centralizes access to environment variables
 */

export const env = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
};

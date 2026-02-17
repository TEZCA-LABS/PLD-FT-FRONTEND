import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/authApi';
import { useAuthStore } from '@stores/authStore';

/**
 * Custom hook for login logic
 * Uses TanStack Query for state management
 */
export const useLogin = () => {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth);

    return useMutation({
        mutationFn: login,
        onSuccess: async (data) => {
            // Token is in data.access_token
            const token = data.access_token;

            // Store token temporarily or let authApi handle it (it uses localStorage)
            localStorage.setItem('authToken', token);

            try {
                // Fetch current user details
                // We need to import getCurrentUser dynamically or here to avoid cyclic dep if any, 
                // but usually it's fine.
                // Assuming authApi is 'api/authApi'
                const { getCurrentUser } = await import('../api/authApi');
                const user = await getCurrentUser();

                // Store auth data in Zustand store
                setAuth(user, token);

                // Redirect to search
                navigate('/search');
            } catch (error) {
                console.error('Failed to fetch user details after login:', error);
                // Handle error (maybe clear token?)
            }
        },
        onError: (error) => {
            console.error('Login error:', error);
        },
    });
};

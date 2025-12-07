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
        onSuccess: (data) => {
            // Store auth data in Zustand store
            setAuth(data.user, data.token);
            // Redirect to dashboard
            navigate('/dashboard');
        },
        onError: (error) => {
            console.error('Login error:', error);
        },
    });
};

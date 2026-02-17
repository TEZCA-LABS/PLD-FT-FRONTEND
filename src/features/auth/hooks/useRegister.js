import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/authApi';
import { useAuthStore } from '@stores/authStore';

/**
 * Custom hook for registration logic
 * Uses TanStack Query for state management
 */
export const useRegister = () => {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth);

    return useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            // Store auth data in Zustand store
            setAuth(data.user, data.token);
            // Redirect to search
            navigate('/search');
        },
        onError: (error) => {
            console.error('Registration error:', error);
        },
    });
};

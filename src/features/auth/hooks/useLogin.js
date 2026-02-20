import { useAuthStore } from '@stores/authStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, login } from '../api/authApi';

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
      const token = data.access_token;

      if (token) {
        localStorage.setItem('authToken', token);
      }

      try {
        const user = await getCurrentUser();

        setAuth(user, token);
        navigate('/search');
      } catch (error) {
        console.error('Failed to fetch user details after login:', error);
      }
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });
};

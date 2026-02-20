import { useMutation } from '@tanstack/react-query';
import { getApiErrorMessage } from '@utils/apiError';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/authApi';

/**
 * Custom hook for registration logic
 * Uses TanStack Query for state management
 */
export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate('/secure-login');
    },
    onError: (error) => {
      console.error(
        'Registration error:',
        getApiErrorMessage(error, 'Error al registrar usuario.'),
      );
    },
  });
};

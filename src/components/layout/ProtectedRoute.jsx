import { useAuthStore } from '@stores/authStore';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children, allowedRoles = null }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page with the return url
    return <Navigate to="/secure-login" state={{ from: location }} replace />;
  }

  if (
    Array.isArray(allowedRoles) &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user?.role) &&
    !user?.is_superuser
  ) {
    return <Navigate to="/search" replace />;
  }

  return children;
};

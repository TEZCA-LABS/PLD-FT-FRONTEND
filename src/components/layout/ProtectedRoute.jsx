import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@stores/authStore';

export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirect to login page with the return url
        return <Navigate to="/secure-login" state={{ from: location }} replace />;
    }

    return children;
};

import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '@components/layout/ProtectedRoute';

import SecureLoginPage from '@pages/SecureLoginPage';
import SearchPage from '@pages/SearchPage';
import UsersPage from '@pages/UsersPage';
import RolesPage from '@pages/RolesPage';
import AuditPage from '@pages/AuditPage';
import AIChatPage from '@pages/AIChatPage';
import NotFound from '@pages/NotFound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/search" replace />} />
            <Route path="/secure-login" element={<SecureLoginPage />} />

            {/* Protected Routes */}
            <Route
                path="/search"
                element={
                    <ProtectedRoute>
                        <SearchPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/users"
                element={
                    <ProtectedRoute>
                        <UsersPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/roles"
                element={
                    <ProtectedRoute>
                        <RolesPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/audit"
                element={
                    <ProtectedRoute>
                        <AuditPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/ai-chat"
                element={
                    <ProtectedRoute>
                        <AIChatPage />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;

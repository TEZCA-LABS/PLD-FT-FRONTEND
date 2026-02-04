import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '@pages/Dashboard';
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
            <Route path="/" element={<Navigate to="/secure-login" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/secure-login" element={<SecureLoginPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/audit" element={<AuditPage />} />
            <Route path="/ai-chat" element={<AIChatPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;

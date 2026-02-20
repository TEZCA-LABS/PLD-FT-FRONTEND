import { ProtectedRoute } from '@components/layout/ProtectedRoute';
import AIChatPage from '@pages/AIChatPage';
import AuditPage from '@pages/AuditPage';
import NotFound from '@pages/NotFound';
import RolesPage from '@pages/RolesPage';
import SearchPage from '@pages/SearchPage';
import SecureLoginPage from '@pages/SecureLoginPage';
import UsersPage from '@pages/UsersPage';
import { Navigate, Route, Routes } from 'react-router-dom';

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

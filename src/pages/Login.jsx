import { AuthLayout } from '@layouts/AuthLayout';
import { LoginForm } from '@features/auth';

/**
 * Login Page
 * Uses AuthLayout and LoginForm from auth feature
 */
const Login = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};

export default Login;

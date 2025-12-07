import { AuthLayout } from '@layouts/AuthLayout';
import { RegisterForm } from '@features/auth';

/**
 * Register Page
 * Uses AuthLayout and RegisterForm from auth feature
 */
const Register = () => {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
};

export default Register;

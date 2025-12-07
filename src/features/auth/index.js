/**
 * Auth Feature - Public API
 * Barrel file exporting only what other parts of the app need
 */

// Components
export { LoginForm } from './components/LoginForm';
export { RegisterForm } from './components/RegisterForm';

// Hooks
export { useLogin } from './hooks/useLogin';
export { useRegister } from './hooks/useRegister';

// API functions are NOT exported - they're internal to this feature

/**
 * AuthLayout
 * Layout wrapper for authentication pages (login, register)
 */
export const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md animate-fade-in">
                {children}
            </div>
        </div>
    );
};

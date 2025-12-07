import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';

/**
 * DashboardLayout
 * Layout wrapper for dashboard pages with header and footer
 */
export const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <Header />
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

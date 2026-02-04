import { Sidebar, TopBar } from '@components/layout';

export const SidebarLayout = ({ children }) => {
    return (
        <div className="flex h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden antialiased selection:bg-primary/20 selection:text-primary">
            <Sidebar />
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <TopBar />
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        {children}
                    </div>
                    <div className="h-10"></div>
                </div>
            </main>
        </div>
    );
};

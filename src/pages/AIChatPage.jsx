import { AIChatHeader, ChatSidebar, ChatInterface, ContextSidebar } from '@features/ai-chat';

const AIChatPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#121417] dark:text-white overflow-hidden h-screen flex flex-col font-display">
            <AIChatHeader />
            <div className="flex flex-1 overflow-hidden">
                <ChatSidebar />
                <ChatInterface />
                <ContextSidebar />
            </div>
        </div>
    );
};

export default AIChatPage;

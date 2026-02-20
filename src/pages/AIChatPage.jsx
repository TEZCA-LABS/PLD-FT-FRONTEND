import {
  AIChatHeader,
  ChatInterface,
  ChatSidebar,
  ContextSidebar,
} from '@features/ai-chat';
import { SidebarLayout } from '@layouts/SidebarLayout';

const AIChatPage = () => {
  return (
    <SidebarLayout fullWidth>
      <div className="bg-background-light dark:bg-background-dark text-[#121417] dark:text-white flex flex-col h-full font-display">
        <AIChatHeader />
        <div className="flex flex-1 overflow-hidden">
          <ChatSidebar />
          <ChatInterface />
          <ContextSidebar />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AIChatPage;

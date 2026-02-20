import React from 'react';

export const ChatInterface = ({
  messages,
  input,
  onInputChange,
  onSend,
  isPending,
}) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isPending]);

  return (
    <main className="flex-1 flex flex-col relative bg-[#f8fafc] dark:bg-background-dark min-w-0">
      {/* Header omitted, keeping assumed surrounding layout if any, but this replaces the component */}
      <div className="flex items-center gap-2 px-6 py-4 border-b border-[#e2e8f0]/50 dark:border-gray-700/50 bg-white/50 dark:bg-[#1a232e]/50 backdrop-blur-sm sticky top-0 z-10">
        <button className="text-[#64748b] dark:text-gray-400 text-sm hover:text-primary transition-colors">
          Casos
        </button>
        <span className="text-[#64748b] dark:text-gray-400 text-sm">/</span>
        <button className="text-[#64748b] dark:text-gray-400 text-sm hover:text-primary transition-colors">
          #ActiveSession
        </button>
        <span className="text-[#64748b] dark:text-gray-400 text-sm">/</span>
        <span className="text-primary font-medium text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-base">smart_toy</span>
          Asistente
        </span>
      </div>

      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto custom-scrollbar px-6 py-6 pb-32 space-y-8 scroll-smooth"
        id="chat-container"
      >
        <div className="flex justify-center">
          <span className="bg-gray-100 dark:bg-gray-800 text-[#64748b] dark:text-gray-400 text-xs font-medium px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
            Hoy
          </span>
        </div>

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : ''}`}
          >
            {msg.role === 'assistant' && (
              <div className="mr-3 shrink-0">
                <div className="size-8 rounded bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-white text-lg">
                    smart_toy
                  </span>
                </div>
              </div>
            )}

            <div
              className={`max-w-[85%] lg:max-w-[75%] ${msg.role === 'user' ? '' : ''}`}
            >
              <div
                className={`${msg.role === 'user' ? 'bg-[#f1f5f9] dark:bg-[#252f3d]' : 'bg-white dark:bg-[#1a232e]'} text-[#121417] dark:text-white p-4 rounded-2xl ${msg.role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm border border-gray-200 dark:border-gray-700`}
              >
                <div className="prose prose-sm max-w-none text-[#121417] dark:text-gray-200 whitespace-pre-wrap">
                  {msg.content}
                </div>
              </div>
              <div
                className={`flex mt-1 ${msg.role === 'user' ? 'justify-end pr-1' : 'pl-1'}`}
              >
                <span className="text-[10px] text-[#64748b] dark:text-gray-400">
                  {msg.role === 'user' ? 'Tú' : 'Asistente'} • {msg.timestamp}
                </span>
              </div>
            </div>

            {msg.role === 'user' && (
              <div className="ml-3 shrink-0">
                <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-gray-500">
                    person
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}

        {isPending && (
          <div className="flex w-full">
            <div className="mr-3 shrink-0">
              <div className="size-8 rounded bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-lg">
                  smart_toy
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1a232e] p-4 rounded-2xl rounded-tl-none shadow-sm border border-[#e2e8f0] dark:border-gray-700">
              <div className="flex gap-2">
                <span className="size-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="size-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                <span className="size-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc] to-transparent dark:from-background-dark dark:via-background-dark">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-[#1a232e] rounded-xl shadow-input border border-[#e2e8f0] dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all overflow-hidden group">
            <textarea
              className="w-full bg-transparent border-0 focus:ring-0 text-[#121417] dark:text-white placeholder-[#64748b] dark:placeholder-gray-500 p-4 pr-24 min-h-[60px] max-h-[200px] resize-none text-sm leading-relaxed"
              placeholder="Escribe tu consulta aquí..."
              rows="2"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  onSend();
                }
              }}
            ></textarea>
            <div className="flex justify-between items-center px-2 pb-2">
              <div className="pl-2 flex items-center gap-2">
                <button
                  className="p-2 text-[#64748b] dark:text-gray-400 hover:text-primary transition-colors"
                  title="Adjuntar Archivo"
                >
                  <span className="material-symbols-outlined text-xl">
                    attach_file
                  </span>
                </button>
                <button
                  className="p-2 text-[#64748b] dark:text-gray-400 hover:text-primary transition-colors"
                  title="Usar Micrófono"
                >
                  <span className="material-symbols-outlined text-xl">mic</span>
                </button>
              </div>
              <button
                onClick={onSend}
                disabled={isPending || !input.trim()}
                className="bg-primary hover:bg-[#2c5c9e] text-white rounded-lg p-2 pr-4 pl-4 flex items-center gap-2 text-sm font-bold shadow-sm transition-all transform active:scale-95 disabled:opacity-50 disabled:scale-100"
              >
                <span>Analizar</span>
                <span className="material-symbols-outlined text-lg">
                  arrow_upward
                </span>
              </button>
            </div>
          </div>
          <p className="text-center text-[10px] text-[#64748b] dark:text-gray-400 mt-2">
            La IA puede cometer errores. Verifique los datos críticos de
            cumplimiento.
          </p>
        </div>
      </div>
    </main>
  );
};

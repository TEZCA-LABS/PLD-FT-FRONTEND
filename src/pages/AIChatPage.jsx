import { getApiErrorMessage } from '@utils/apiError';
import React from 'react';
import {
  AIChatHeader,
  ChatInterface,
  ChatSidebar,
  ContextSidebar,
} from '@features/ai-chat';
import {
  useAttachments,
  useCreateSession,
  useExportSession,
  useMessages,
  useSendMessage,
  useSessions,
  useUploadAttachment,
} from '@features/ai-chat/hooks/useIntelligence';
import { useRecordAiEvent } from '@features/audit/hooks/useAudit';
import { SidebarLayout } from '@layouts/SidebarLayout';

const deriveSessionTitle = (query) => {
  const normalized = String(query || '').trim();
  if (!normalized) return 'Nueva investigación';
  return normalized.length > 48
    ? `${normalized.slice(0, 48).trim()}...`
    : normalized;
};

const formatTime = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--:--';

  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const mapRelatedEntities = (entities) => {
  if (!Array.isArray(entities)) return [];

  return entities.slice(0, 6).map((item, index) => {
    if (typeof item === 'string') {
      return {
        name: item,
        relation: 'Entidad relacionada',
        type: 'domain',
      };
    }

    return {
      name: item?.name || item?.entity_name || `Entidad ${index + 1}`,
      relation: item?.relationship || item?.relation || item?.role || 'Entidad relacionada',
      type: item?.type || 'domain',
    };
  });
};

const mapContext = (context) => {
  if (!context) return { source: null, relatedEntities: [] };

  return {
    source: context.source
      ? {
          name: context.source.name || 'Fuente referenciada',
          organization: context.source.organization || 'Fuente externa',
          date: context.source.date || null,
          snippet: context.source.snippet || null,
          url: context.source.url || null,
        }
      : null,
    relatedEntities: mapRelatedEntities(context.related_entities || context.relatedEntities),
  };
};

const AIChatPage = () => {
  const [activeSessionId, setActiveSessionId] = React.useState(null);
  const [input, setInput] = React.useState('');
  const [feedback, setFeedback] = React.useState(null);
  const [isExportingJson, setIsExportingJson] = React.useState(false);

  const sessionsQuery = useSessions({ skip: 0, limit: 20 });
  const sessions = React.useMemo(
    () =>
      (sessionsQuery.data?.items || []).map((session) => ({
        id: session.id,
        title: session.title,
        status: session.status,
        updatedAt: session.updated_at,
      })),
    [sessionsQuery.data],
  );

  const activeSession = React.useMemo(
    () => sessions.find((session) => session.id === activeSessionId) || null,
    [sessions, activeSessionId],
  );

  const messagesQuery = useMessages(activeSessionId, { skip: 0, limit: 200 });
  const messages = React.useMemo(
    () =>
      (messagesQuery.data?.items || []).map((message) => ({
        id: message.id,
        role: message.role,
        content: message.content,
        timestamp: formatTime(message.created_at),
        context: mapContext(message.context),
      })),
    [messagesQuery.data],
  );

  const attachmentsQuery = useAttachments(activeSessionId, { skip: 0, limit: 10 });
  const attachments = attachmentsQuery.data?.items || [];

  const activeContext = React.useMemo(() => {
    for (let index = messages.length - 1; index >= 0; index -= 1) {
      const message = messages[index];
      if (message.role === 'assistant' && message.context) {
        return message.context;
      }
    }

    return { source: null, relatedEntities: [] };
  }, [messages]);

  const { mutate: createSession, isPending: isCreatingSession } =
    useCreateSession();
  const { mutate: sendMessage, isPending: isSendingMessage } = useSendMessage();
  const { mutate: uploadAttachment, isPending: isUploadingAttachment } =
    useUploadAttachment();
  const { mutateAsync: exportSession, isPending: isExporting } = useExportSession();
  const { mutate: recordAiEvent } = useRecordAiEvent();

  React.useEffect(() => {
    if (!activeSessionId && sessions.length > 0) {
      setActiveSessionId(sessions[0].id);
    }
  }, [activeSessionId, sessions]);

  const handleCreateSession = () => {
    const title = deriveSessionTitle(input || 'Nueva investigación');
    setFeedback(null);

    createSession(
      {
        title,
        initial_context: null,
      },
      {
        onSuccess: (createdSession) => {
          setActiveSessionId(createdSession.id);
          setInput('');
        },
        onError: (error) => {
          setFeedback(getApiErrorMessage(error, 'No fue posible crear la sesion.'));
        },
      },
    );
  };

  const handleExportCase = async () => {
    if (!activeSessionId) return;

    try {
      const data = await exportSession({
        sessionId: activeSessionId,
        options: {
          format: isExportingJson ? 'json' : 'pdf',
          include: ['messages', 'sources', 'entities', 'metadata'],
        },
      });

      const isPdfExport = !isExportingJson;
      const blob = data instanceof Blob
        ? data
        : new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const extension = isPdfExport ? 'pdf' : 'json';
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${activeSession?.title?.replace(/\s+/g, '-').toLowerCase() || 'caso-ai-chat'}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      recordAiEvent({
        session_id: activeSessionId,
        event_type: 'case_exported',
        metadata: { format: extension, mode: isPdfExport ? 'download' : 'json' },
      });
    } catch (error) {
      setFeedback(getApiErrorMessage(error, 'No fue posible exportar el expediente.'));
    }
  };

  const handleSend = () => {
    const query = String(input || '').trim();
    if (!query || isSendingMessage) return;
    if (!activeSessionId) {
      setFeedback('Primero crea o selecciona una investigación para enviar mensajes.');
      return;
    }

    setFeedback(null);
    setInput('');

    sendMessage(
      {
        sessionId: activeSessionId,
        messageData: {
          query,
          options: {
            redact_pii: true,
          },
        },
      },
      {
        onSuccess: (result) => {
          recordAiEvent({
            session_id: activeSessionId,
            event_type: 'analysis_generated',
            metadata: {
              message_id: result?.message_id || null,
              model: result?.model_version || 'unknown',
            },
          });
      },
      onError: (error) => {
          setFeedback(
            getApiErrorMessage(
              error,
              'Lo siento, hubo un error al procesar tu solicitud.',
            ),
          );

          recordAiEvent({
            session_id: activeSessionId,
            event_type: 'analysis_error',
            metadata: {
              detail: getApiErrorMessage(error, 'Error de analisis'),
            },
          });
        },
      },
    );
  };

  const handleUploadAttachment = (file) => {
    if (!activeSessionId || !file) return;

    setFeedback(null);
    uploadAttachment(
      {
        sessionId: activeSessionId,
        file,
      },
      {
        onSuccess: (attachment) => {
          recordAiEvent({
            session_id: activeSessionId,
            event_type: 'attachment_uploaded',
            metadata: {
              attachment_id: attachment?.id || null,
              file_name: attachment?.file_name || file.name,
            },
          });
        },
        onError: (error) => {
          setFeedback(getApiErrorMessage(error, 'No fue posible cargar el archivo.'));
        },
      },
    );
  };

  return (
    <SidebarLayout fullWidth>
      <div className="bg-background-light dark:bg-background-dark text-[#121417] dark:text-white flex flex-col h-full font-display">
        {feedback && (
          <div className="px-6 py-2 bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-700 text-xs text-amber-800 dark:text-amber-100">
            {feedback}
          </div>
        )}
        <AIChatHeader
          onToggleExportFormat={() => setIsExportingJson((prev) => !prev)}
          exportFormat={isExportingJson ? 'json' : 'pdf'}
          onExportCase={handleExportCase}
          isExportDisabled={!activeSessionId || isExporting}
        />
        <div className="flex flex-1 overflow-hidden">
          <ChatSidebar
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={setActiveSessionId}
            onNewSession={handleCreateSession}
          />
          <ChatInterface
            messages={messages}
            input={input}
            onInputChange={setInput}
            onSend={handleSend}
            onUploadAttachment={handleUploadAttachment}
            attachments={attachments}
            attachmentsLoading={attachmentsQuery.isFetching}
            isAttachmentPending={isUploadingAttachment}
            isPending={
              isSendingMessage ||
              isCreatingSession ||
              messagesQuery.isFetching ||
              sessionsQuery.isFetching
            }
          />
          <ContextSidebar context={activeContext} />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AIChatPage;

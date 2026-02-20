import { getApiErrorMessage } from '@utils/apiError';
import React from 'react';
import {
  AIChatHeader,
  ChatInterface,
  ChatSidebar,
  ContextSidebar,
} from '@features/ai-chat';
import { useAnalyzeEntity } from '@features/ai-chat/hooks/useIntelligence';
import { SidebarLayout } from '@layouts/SidebarLayout';

const CHAT_STORAGE_KEY = 'pld-ai-chat-sessions-v1';

const getCurrentTime = () =>
  new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

const getCurrentIsoDate = () => new Date().toISOString();

const createMessage = (role, content) => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
  role,
  content,
  timestamp: getCurrentTime(),
});

const createWelcomeMessage = () =>
  createMessage(
    'assistant',
    'Hola, soy tu asistente de inteligencia de riesgos. Puedo analizar entidades, resumir perfiles de riesgo o redactar informes. ¿En qué puedo ayudarte hoy?',
  );

const createEmptySession = () => {
  const nowIso = getCurrentIsoDate();
  return {
    id: `session-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: 'Nueva investigación',
    status: 'Lista para analizar',
    updatedAt: nowIso,
    messages: [createWelcomeMessage()],
    context: {
      source: null,
      relatedEntities: [],
    },
  };
};

const deriveSessionTitle = (query) => {
  const normalized = String(query || '').trim();
  if (!normalized) return 'Nueva investigación';
  return normalized.length > 48
    ? `${normalized.slice(0, 48).trim()}...`
    : normalized;
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
      relation: item?.relationship || item?.role || 'Entidad relacionada',
      type: item?.type || 'domain',
    };
  });
};

const normalizeAnalysisResponse = (data) => {
  const analysis = [data?.analysis, data?.answer, data?.response, data?.message].find(
    (candidate) => typeof candidate === 'string' && candidate.trim().length > 0,
  );

  const sourceRaw =
    data?.context?.source ||
    data?.source ||
    data?.citation ||
    (Array.isArray(data?.sources) ? data.sources[0] : null);

  const source = sourceRaw
    ? {
        name: sourceRaw?.title || sourceRaw?.name || 'Fuente referenciada',
        organization:
          sourceRaw?.publisher ||
          sourceRaw?.organization ||
          sourceRaw?.source ||
          'Fuente externa',
        date: sourceRaw?.date || getCurrentIsoDate(),
        snippet:
          sourceRaw?.snippet ||
          sourceRaw?.extract ||
          sourceRaw?.match ||
          String(analysis || '').slice(0, 180),
        url: sourceRaw?.url || sourceRaw?.link || null,
      }
    : null;

  const relatedEntities = mapRelatedEntities(
    data?.context?.relatedEntities || data?.related_entities || data?.entities,
  );

  return {
    analysis:
      analysis ||
      'El análisis se completó, pero no se recibió contenido textual en la respuesta.',
    context: {
      source,
      relatedEntities,
    },
  };
};

const loadStoredSessions = () => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    if (!stored) {
      const initialSession = createEmptySession();
      return {
        sessions: [initialSession],
        activeSessionId: initialSession.id,
      };
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      const initialSession = createEmptySession();
      return {
        sessions: [initialSession],
        activeSessionId: initialSession.id,
      };
    }

    const sessions = parsed.map((session) => ({
      ...session,
      messages: Array.isArray(session?.messages) ? session.messages : [],
      context: session?.context || { source: null, relatedEntities: [] },
    }));

    return {
      sessions,
      activeSessionId: sessions[0].id,
    };
  } catch {
    const initialSession = createEmptySession();
    return {
      sessions: [initialSession],
      activeSessionId: initialSession.id,
    };
  }
};

const AIChatPage = () => {
  const initialState = React.useMemo(() => loadStoredSessions(), []);
  const [sessions, setSessions] = React.useState(initialState.sessions);
  const [activeSessionId, setActiveSessionId] = React.useState(
    initialState.activeSessionId,
  );
  const [input, setInput] = React.useState('');
  const [pendingSessionId, setPendingSessionId] = React.useState(null);
  const { mutate: analyze, isPending } = useAnalyzeEntity();

  React.useEffect(() => {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions]);

  const activeSession = React.useMemo(
    () => sessions.find((session) => session.id === activeSessionId) || sessions[0],
    [sessions, activeSessionId],
  );

  React.useEffect(() => {
    if (!activeSession && sessions.length > 0) {
      setActiveSessionId(sessions[0].id);
    }
  }, [activeSession, sessions]);

  const updateSessionById = React.useCallback((sessionId, updater) => {
    setSessions((previousSessions) =>
      previousSessions.map((session) =>
        session.id === sessionId ? updater(session) : session,
      ),
    );
  }, []);

  const handleCreateSession = () => {
    const nextSession = createEmptySession();
    setSessions((previousSessions) => [nextSession, ...previousSessions]);
    setActiveSessionId(nextSession.id);
    setInput('');
  };

  const handleExportCase = () => {
    if (!activeSession?.messages?.length) return;

    const header = [
      `Caso: ${activeSession.title}`,
      `Actualizado: ${new Date(activeSession.updatedAt).toLocaleString()}`,
      '',
      '--- Conversación ---',
    ];

    const conversation = activeSession.messages.map(
      (message) =>
        `[${message.timestamp}] ${message.role === 'user' ? 'Tú' : 'Asistente'}: ${message.content}`,
    );

    const sourceSection = activeSession.context?.source
      ? [
          '',
          '--- Fuente seleccionada ---',
          `Título: ${activeSession.context.source.name}`,
          `Organización: ${activeSession.context.source.organization}`,
          `Fecha: ${new Date(activeSession.context.source.date).toLocaleDateString()}`,
          `Detalle: ${activeSession.context.source.snippet}`,
          activeSession.context.source.url
            ? `URL: ${activeSession.context.source.url}`
            : null,
        ].filter(Boolean)
      : [];

    const fileContent = [...header, ...conversation, ...sourceSection].join('\n');
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${activeSession.title.replace(/\s+/g, '-').toLowerCase() || 'caso-ai-chat'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
  };

  const handleSend = () => {
    const query = input.trim();
    if (!query || !activeSessionId || isPending) return;

    const sessionId = activeSessionId;
    const userMessage = createMessage('user', query);
    setInput('');
    setPendingSessionId(sessionId);

    updateSessionById(sessionId, (session) => ({
      ...session,
      title:
        session.title === 'Nueva investigación'
          ? deriveSessionTitle(query)
          : session.title,
      status: 'Procesando consulta...',
      updatedAt: getCurrentIsoDate(),
      messages: [...session.messages, userMessage],
    }));

    analyze(query, {
      onSuccess: (data) => {
        const normalized = normalizeAnalysisResponse(data);
        const assistantMessage = createMessage('assistant', normalized.analysis);

        updateSessionById(sessionId, (session) => ({
          ...session,
          status: 'Análisis completado',
          updatedAt: getCurrentIsoDate(),
          messages: [...session.messages, assistantMessage],
          context: {
            source: normalized.context.source || session.context?.source || null,
            relatedEntities:
              normalized.context.relatedEntities.length > 0
                ? normalized.context.relatedEntities
                : session.context?.relatedEntities || [],
          },
        }));
      },
      onError: (error) => {
        const assistantErrorMessage = createMessage(
          'assistant',
          getApiErrorMessage(
            error,
            'Lo siento, hubo un error al procesar tu solicitud.',
          ),
        );

        updateSessionById(sessionId, (session) => ({
          ...session,
          status: 'Error en el análisis',
          updatedAt: getCurrentIsoDate(),
          messages: [...session.messages, assistantErrorMessage],
        }));
      },
      onSettled: () => {
        setPendingSessionId((currentSessionId) =>
          currentSessionId === sessionId ? null : currentSessionId,
        );
      },
    });
  };

  return (
    <SidebarLayout fullWidth>
      <div className="bg-background-light dark:bg-background-dark text-[#121417] dark:text-white flex flex-col h-full font-display">
        <AIChatHeader
          onExportCase={handleExportCase}
          isExportDisabled={!activeSession?.messages?.length}
        />
        <div className="flex flex-1 overflow-hidden">
          <ChatSidebar
            sessions={sessions}
            activeSessionId={activeSession?.id}
            onSelectSession={setActiveSessionId}
            onNewSession={handleCreateSession}
          />
          <ChatInterface
            messages={activeSession?.messages || []}
            input={input}
            onInputChange={setInput}
            onSend={handleSend}
            isPending={isPending && pendingSessionId === activeSession?.id}
          />
          <ContextSidebar context={activeSession?.context} />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AIChatPage;

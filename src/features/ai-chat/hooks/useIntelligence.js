import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  analyzeEntity,
  createSession,
  deleteSession,
  exportSession,
  getAttachments,
  getMessages,
  getSessions,
  sendMessage,
  updateSession,
  uploadAttachment,
} from '../api/intelligenceApi';

/**
 * Hook to analyze entity (legacy compatible)
 */
export const useAnalyzeEntity = () => {
  return useMutation({
    mutationFn: analyzeEntity,
  });
};

/**
 * Hook to fetch user's AI sessions
 */
export const useSessions = (params = {}) => {
  return useQuery({
    queryKey: ['aiSessions', params],
    queryFn: () => getSessions(params),
  });
};

/**
 * Hook to create new AI session
 */
export const useCreateSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['aiSessions'] });
    },
  });
};

/**
 * Hook to update session metadata
 */
export const useUpdateSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ sessionId, updates }) => updateSession(sessionId, updates),
    onSuccess: (_, { sessionId }) => {
      queryClient.invalidateQueries({ queryKey: ['aiSessions'] });
      queryClient.invalidateQueries({ queryKey: ['aiMessages', sessionId] });
    },
  });
};

/**
 * Hook to delete/archive session
 */
export const useDeleteSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['aiSessions'] });
    },
  });
};

/**
 * Hook to fetch messages in a session
 */
export const useMessages = (sessionId, params = {}) => {
  return useQuery({
    queryKey: ['aiMessages', sessionId, params],
    queryFn: () => getMessages(sessionId, params),
    enabled: !!sessionId,
  });
};

/**
 * Hook to send message and get AI response
 */
export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ sessionId, messageData }) =>
      sendMessage(sessionId, messageData),
    onSuccess: (_, { sessionId }) => {
      queryClient.invalidateQueries({ queryKey: ['aiMessages', sessionId] });
      queryClient.invalidateQueries({ queryKey: ['aiSessions'] });
    },
  });
};

/**
 * Hook to upload attachment to session
 */
export const useUploadAttachment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ sessionId, file }) => uploadAttachment(sessionId, file),
    onSuccess: (_, { sessionId }) => {
      queryClient.invalidateQueries({
        queryKey: ['aiAttachments', sessionId],
      });
    },
  });
};

/**
 * Hook to fetch attachments in a session
 */
export const useAttachments = (sessionId, params = {}) => {
  return useQuery({
    queryKey: ['aiAttachments', sessionId, params],
    queryFn: () => getAttachments(sessionId, params),
    enabled: !!sessionId,
  });
};

/**
 * Hook to export session as case file
 */
export const useExportSession = () => {
  return useMutation({
    mutationFn: ({ sessionId, options }) => exportSession(sessionId, options),
  });
};

import apiClient from '@lib/axios';

/**
 * Intelligence API endpoints (RAG, chat sessions, analysis)
 */

/**
 * Analyze Entity (legacy compatible)
 * @param {string} query - Natural language analysis query
 * @returns {Promise} Analysis result with context and sources
 */
export const analyzeEntity = async (query) => {
  const response = await apiClient.post('/intelligence/analyze-entity', {
    query,
  });
  return response.data;
};

/**
 * Get user's AI chat sessions
 * @param {object} params - Query parameters (skip, limit, status)
 * @returns {Promise} List of sessions
 */
export const getSessions = async (params = {}) => {
  const response = await apiClient.get('/intelligence/sessions', {
    params: {
      skip: 0,
      limit: 20,
      ...params,
    },
  });
  return response.data;
};

/**
 * Create new AI chat session
 * @param {object} sessionData - Session metadata (title, initial_context)
 * @returns {Promise} Created session
 */
export const createSession = async (sessionData) => {
  const response = await apiClient.post('/intelligence/sessions', sessionData);
  return response.data;
};

/**
 * Update session metadata (title, status)
 * @param {number|string} sessionId - Session ID
 * @param {object} updates - Fields to update
 * @returns {Promise} Updated session
 */
export const updateSession = async (sessionId, updates) => {
  const response = await apiClient.patch(
    `/intelligence/sessions/${sessionId}`,
    updates,
  );
  return response.data;
};

/**
 * Delete/archive session
 * @param {number|string} sessionId - Session ID
 * @returns {Promise} Deleted session
 */
export const deleteSession = async (sessionId) => {
  const response = await apiClient.delete(`/intelligence/sessions/${sessionId}`);
  return response.data;
};

/**
 * Get messages in a session
 * @param {number|string} sessionId - Session ID
 * @param {object} params - Query parameters (skip, limit)
 * @returns {Promise} List of messages
 */
export const getMessages = async (sessionId, params = {}) => {
  const response = await apiClient.get(
    `/intelligence/sessions/${sessionId}/messages`,
    {
      params: {
        skip: 0,
        limit: 50,
        ...params,
      },
    },
  );
  return response.data;
};

/**
 * Send message/prompt and get AI response
 * @param {number|string} sessionId - Session ID
 * @param {object} messageData - Prompt and options (query, options)
 * @returns {Promise} Message with AI analysis and context
 */
export const sendMessage = async (sessionId, messageData) => {
  const response = await apiClient.post(
    `/intelligence/sessions/${sessionId}/messages`,
    messageData,
  );
  return response.data;
};

/**
 * Upload attachment/evidence to session
 * @param {number|string} sessionId - Session ID
 * @param {File} file - File to upload
 * @returns {Promise} Attachment metadata
 */
export const uploadAttachment = async (sessionId, file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient.post(
    `/intelligence/sessions/${sessionId}/attachments`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};

/**
 * Get attachments in a session
 * @param {number|string} sessionId - Session ID
 * @param {object} params - Query parameters (skip, limit)
 * @returns {Promise} List of attachments
 */
export const getAttachments = async (sessionId, params = {}) => {
  const response = await apiClient.get(
    `/intelligence/sessions/${sessionId}/attachments`,
    {
      params: {
        skip: 0,
        limit: 50,
        ...params,
      },
    },
  );
  return response.data;
};

/**
 * Export session as case file (PDF or JSON)
 * @param {number|string} sessionId - Session ID
 * @param {object} options - Export options (format, include)
 * @returns {Promise} Binary attachment or JSON response
 */
export const exportSession = async (sessionId, options = {}) => {
  const response = await apiClient.post(
    `/intelligence/sessions/${sessionId}/export`,
    {
      format: options.format || 'pdf',
      include: options.include || ['messages', 'sources', 'entities', 'metadata'],
    },
    {
      responseType: options.format === 'pdf' ? 'blob' : 'json',
    },
  );
  return response.data;
};

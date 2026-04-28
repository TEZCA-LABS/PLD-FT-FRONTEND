import apiClient from '@lib/axios';

/**
 * Search & Sanctions API endpoints
 */

/**
 * Search sanctions
 * @param {string} query - Search query
 * @param {number} limit - Result limit (default 10)
 * @param {object} filters - Optional filters
 * @returns {Promise} Search results
 */
export const searchSanctions = async (query, limit = 10, filters = {}) => {
  const normalizedQuery = String(query || '').trim();
  if (normalizedQuery.length < 2) {
    throw new Error('La búsqueda requiere al menos 2 caracteres');
  }

  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 50);
  const params = {
    q: normalizedQuery,
    limit: safeLimit,
  };

  if (filters?.source) params.source = filters.source;
  if (filters?.program) params.program = filters.program;
  if (filters?.listed_after) params.listed_after = filters.listed_after;
  if (filters?.listed_before) params.listed_before = filters.listed_before;

  const response = await apiClient.get('/search/sanctions', {
    params,
  });
  return response.data;
};

/**
 * Upload Sanctions XML (Superuser only)
 * @param {File} file - XML file to upload
 * @returns {Promise} Upload result
 */
export const uploadSanctionsXml = async (file) => {
  if (!file) {
    throw new Error('Debes seleccionar un archivo XML');
  }

  const fileName = (file.name || '').toLowerCase();
  if (!fileName.endsWith('.xml')) {
    throw new Error('El archivo debe tener extensión .xml');
  }

  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient.post('/sanctions/upload-xml', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/**
 * Sync Sanctions Source via Celery (Admin only)
 * @param {string} source - Source ID (un, mex, sat, ofac_sdn, ofac_cons)
 * @returns {Promise} Sync trigger result
 */
export const syncSanctionsSource = async (source) => {
  if (!source) throw new Error('Se requiere una fuente válida');
  const response = await apiClient.post(`/sanctions/sync/${source}`);
  return response.data;
};

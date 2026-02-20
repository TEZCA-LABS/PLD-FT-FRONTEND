import apiClient from '@lib/axios';

/**
 * Search & Sanctions API endpoints
 */

/**
 * Search sanctions
 * @param {string} query - Search query
 * @param {number} limit - Result limit (default 10)
 * @returns {Promise} Search results
 */
export const searchSanctions = async (query, limit = 10) => {
  const response = await apiClient.get('/search/sanctions', {
    params: { q: query, limit },
  });
  return response.data;
};

/**
 * Upload Sanctions XML (Superuser only)
 * @param {File} file - XML file to upload
 * @returns {Promise} Upload result
 */
export const uploadSanctionsXml = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient.post('/sanctions/upload-xml', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

/**
 * Returns a user-friendly API error message using backend conventions.
 * Priority: detail -> message -> generic error message -> fallback.
 *
 * @param {unknown} error
 * @param {string} fallbackMessage
 * @returns {string}
 */
export const getApiErrorMessage = (
  error,
  fallbackMessage = 'Ocurrió un error inesperado.',
) => {
  if (!error || typeof error !== 'object') {
    return fallbackMessage;
  }

  const apiError = /** @type {{ response?: { data?: { detail?: string; message?: string } }; message?: string }} */ (
    error
  );

  return (
    apiError.response?.data?.detail ||
    apiError.response?.data?.message ||
    apiError.message ||
    fallbackMessage
  );
};

/**
 * Formatting utilities
 * Pure functions for data formatting
 */

/**
 * Format a number as currency
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
};

/**
 * Format a date
 * @param {Date|string} date - The date to format
 * @param {string} locale - Locale code (default: 'es-ES')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, locale = 'es-ES') => {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));
};

/**
 * Format a date with time
 * @param {Date|string} date - The date to format
 * @param {string} locale - Locale code (default: 'es-ES')
 * @returns {string} Formatted date and time string
 */
export const formatDateTime = (date, locale = 'es-ES') => {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(date));
};

/**
 * Capitalize first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncate = (text, maxLength = 50) => {
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

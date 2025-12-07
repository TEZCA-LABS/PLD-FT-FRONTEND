/**
 * Validation utilities
 * Pure functions for data validation
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Validation result with isValid and message
 */
export const validatePassword = (password) => {
    if (!password) {
        return { isValid: false, message: 'La contraseña es requerida' };
    }
    if (password.length < 8) {
        return { isValid: false, message: 'La contraseña debe tener al menos 8 caracteres' };
    }
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: 'La contraseña debe contener al menos una mayúscula' };
    }
    if (!/[a-z]/.test(password)) {
        return { isValid: false, message: 'La contraseña debe contener al menos una minúscula' };
    }
    if (!/[0-9]/.test(password)) {
        return { isValid: false, message: 'La contraseña debe contener al menos un número' };
    }
    return { isValid: true, message: 'Contraseña válida' };
};

/**
 * Validate phone number (basic)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
export const isValidPhone = (phone) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
};

/**
 * Check if string is empty or whitespace
 * @param {string} str - String to check
 * @returns {boolean} True if empty
 */
export const isEmpty = (str) => {
    return !str || str.trim().length === 0;
};

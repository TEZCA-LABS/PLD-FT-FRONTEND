/**
 * Input Component
 * Reusable input field with error states
 */

export const Input = ({
    label,
    error,
    type = 'text',
    className = '',
    id,
    ...props
}) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                    {label}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                className={`
          w-full px-4 py-2 rounded-lg border
          ${error
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                    }
          focus:outline-none focus:ring-2
          disabled:bg-gray-100 disabled:cursor-not-allowed
          transition-colors duration-200
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
};

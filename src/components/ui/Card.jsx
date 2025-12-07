/**
 * Card Component
 * Reusable card container for content
 */

export const Card = ({
    children,
    className = '',
    padding = 'md',
    hover = false,
    ...props
}) => {
    const paddingClasses = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        none: '',
    };

    return (
        <div
            className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

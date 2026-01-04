// components/Button.tsx
import React from 'react';

/**
 * Props for the Button component.
 */
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

/**
 * A reusable Button component with kid-friendly styling and hover effects.
 *
 * @param {ButtonProps} props - The properties for the button.
 * @returns {JSX.Element} The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 font-bold text-white rounded-full shadow-lg
        transform transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-offset-2
        ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-400 to-green-500 active:scale-95'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
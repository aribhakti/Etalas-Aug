import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'hire';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  ...props 
}) => {
  const baseStyles = "font-medium transition-all duration-300 rounded-lg flex items-center justify-center gap-2 relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-etalas-cyan text-white hover:bg-violet-700 shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] dark:bg-etalas-cyan dark:text-white dark:hover:bg-violet-500 dark:shadow-[0_0_15px_rgba(124,58,237,0.4)]",
    secondary: "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md dark:bg-etalas-gray dark:text-white dark:hover:bg-slate-700 dark:border-slate-600",
    outline: "border-2 border-etalas-cyan text-etalas-cyan hover:bg-etalas-cyan/10 dark:border-etalas-teal dark:text-etalas-teal dark:hover:bg-etalas-teal/10",
    hire: "bg-slate-900 text-white hover:bg-black shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] border border-purple-500/20 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Shine Effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer" />
    </button>
  );
};
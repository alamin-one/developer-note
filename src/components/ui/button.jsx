import clsx from 'clsx';
import React from 'react';

const Button = ({
  children,
  className,
  size,
  variant,
  disabled = false,
  loading = false,
  ...props
}) => {
  const variantClasses = {
    blue: 'bg-neo-blue text-neo-black',
    green: 'bg-neo-green text-neo-black',
    pink: 'bg-neo-pink text-neo-black',
  };

  const sizeClasses = {
    sm: 'px-4 py-1 text-[12px] ',
    md: 'px-6 py-1.5 text-[14px] ',
    lg: 'px-6 py-2 text-base',
  };

  const selectedVariantClass = variantClasses[variant] || variantClasses.blue;
  const selectedSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'flex items-center justify-center gap-2 tracking-wide font-medium  uppercase  rounded-md cursor-pointer',
        'active:scale-98  disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100',
        selectedVariantClass,
        selectedSizeClass,
        className,
      )}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border border-t-2 border-neo-black/20 border-t-neo-black rounded-full animate-spin"></div>
      )}

      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;

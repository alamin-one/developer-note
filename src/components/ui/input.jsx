import clsx from 'clsx';
import React from 'react';

const Input = ({ className, label, error, ...props }) => {
  return (
    <>
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-neo-grey">
            {label}
          </label>
        )}

        <input
          className={clsx(
            'w-full border border-neo-border rounded-md px-4 py-1.5 ',
            'outline-none focus:ring-1 ring-neo-blue disabled:opacity-60',
            'disabled:cursor-not-allowed',
            error && 'border-red-500 ring-red-500 ',
            className,
          )}
          {...props}
        />
        {error && (
          <span className="text-[14px] text-red-500">{error.message}</span>
        )}
      </div>
    </>
  );
};

export default Input;

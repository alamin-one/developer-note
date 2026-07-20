import clsx from 'clsx';

const Textarea = ({ label, error, className, ...props }) => {
  return (
    <>
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-neo-grey">
            {label}
          </label>
        )}

        <textarea
          className={clsx(
            'w-full border border-neo-border rounded-md px-4 py-1.5 ',
            'outline-none focus:ring-1 ring-neo-blue disabled:opacity-60',
            'disabled:cursor-not-allowed',
            error && 'border-red-500 ring-red-500 cursor-not-allowed',
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

export default Textarea;

import clsx from 'clsx';
const Badeg = ({ children, className, variant = 'blue', ...props }) => {
  const variantClasses = {
    blue: 'bg-neo-blue  text-neo-black',
    green: 'bg-neo-green  text-neo-black',
    pink: 'bg-neo-pink  text-neo-black',
  };

  const selectedVariantClass = variantClasses[variant] || variantClasses.blue;

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-1 text-xs tracking-wider font-medium uppercase rounded-[5px] ',
        className,
        selectedVariantClass,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badeg;

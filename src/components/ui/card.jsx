import clsx from 'clsx';

const Card = ({ children, className, ...props }) => {
  return (
    <div className={clsx('bg-neo-black p-5 border border-neo-border rounded-xl', className)} {...props}>
      {children}
    </div>
  );
};

export default Card;

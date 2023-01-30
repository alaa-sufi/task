const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`${className}  text-white  shadow rounded-lg  p-1 min-w-max w-32`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button

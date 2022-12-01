import "./button.css";

export const Button = (props) => {
  const { children, variant, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

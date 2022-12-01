import "./input.css";

export const Input = (props) => {
  const { size, ...rest } = props;

  return <input className={`input ${size}`} {...rest} />;
};

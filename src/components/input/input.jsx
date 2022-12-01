import "./input.css";

export const Input = (props) => {
  const { size, ...rest } = props;

  return <Input className={`input ${size}`} {...rest} />;
};

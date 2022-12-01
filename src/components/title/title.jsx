export const Title = (props) => {
  const { label, ...rest } = props;
  console.log(props, rest);

  return <div {...rest}>{label}</div>;
};

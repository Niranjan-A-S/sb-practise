import { Input } from "./input";

const component = {
  title: "Form/Input",
  component: Input,
};

export default component;

export const Large = () => <Input size="large" />;
export const Medium = () => <Input size="medium" />;
export const Small = () => <Input size="small" />;

import { Input } from "./input";

const component = {
  title: "Form/Input",
  component: Input,
};

export default component;

export const Large = () => <Input size="large" placeholder="Large Input" />;
export const Medium = () => <Input size="medium" placeholder="Medium Input" />;
export const Small = () => <Input size="small" placeholder="Small Input" />;

Small.storyName = "Small Input"; //way to change the story name

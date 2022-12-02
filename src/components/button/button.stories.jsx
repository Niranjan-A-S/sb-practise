import { Button } from "./button";

const component = {
  title: "form/control/Button",
  component: Button,
  args: {
    children: "Common Name",
  },
};

export default component;

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

//args mechanism
const Template = (args) => <Button {...args} />;

export const PrimaryArgs = Template.bind({});
PrimaryArgs.args = {
  variant: "primary",
  // children: "Primary Args",
};

export const SecondaryArgs = Template.bind({});
SecondaryArgs.args = {
  variant: "secondary",
  children: "Secondary Args",
};

export const SuccessArgs = Template.bind({});
SuccessArgs.args = {
  ...PrimaryArgs.args,
  variant: "success",
  children: "Success Args",
};

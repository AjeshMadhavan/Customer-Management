import ButtonComponent from "../components/ButtonComponent.vue";
import { ButtonVariants } from "../Type/Enums";

export default {
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    icon: {
      control: "text",
    },
    variant: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    components: { ButtonComponent },
    props: Object.keys(argTypes),
    template:
      '<button-component :text="text" :prependIcon="icon" :buttonBackgroundColor="buttonBackgroundColor" :icon="icon" :variant="variant" />',
  }),
};

export const Primary = {
  args: {
    text: "ADD CONTACT",
    icon: "mdi-plus",
    variant: ButtonVariants.PRIMARY,
  },
};

export const Outlined = {
  args: {
    text: "DETAILS",
    variant: ButtonVariants.OUTLINED,
  },
};

export const Icon = {
  args: {
    icon: "mdi-account",
    variant: ButtonVariants.ICON,
  },
};
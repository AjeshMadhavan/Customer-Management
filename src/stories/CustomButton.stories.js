import CustomButton from "../components/CustomButton.vue";
import { ButtonVariants } from "../constants";

export default {
  component: CustomButton,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    icon: {
      control: "text",
    },
    variant: {
      control: "select",
      options: Object.values(ButtonVariants),
    },
    buttonBackgroundColor: {
      control: "color",
    },
    buttonFontWeight: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    components: { CustomButton },
    props: Object.keys(argTypes),
    template: `<custom-button v-bind="$props" />`,
  }),
};

export const Normal = {
  args: {
    text: "ADD CONTACT",
    icon: "mdi-plus",
    variant: ButtonVariants.Normal,
  },
};

export const Outlined = {
  args: {
    text: "DETAILS",
    variant: ButtonVariants.Outlined,
  },
};

export const Icon = {
  args: {
    icon: "mdi-account",
    variant: ButtonVariants.Normal,
  },
};
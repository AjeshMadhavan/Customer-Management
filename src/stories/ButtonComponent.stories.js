import ButtonComponent from "../components/ButtonComponent.vue";
import { ButtonVariants } from "../Type/Enums";

export default {
  component: ButtonComponent,
  render: (args, { argTypes }) => ({
    components: { ButtonComponent },
    props: Object.keys(argTypes),
    template: `<button-component v-bind="$props"`,
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

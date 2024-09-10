import IconTextField from "../components/IconTextField.vue";

export default {
  component: IconTextField,
  tags: ["autodocs"],
  argTypes: {
    isVertically: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
    prependIconStyle: {
      control: "text",
    },
    text: {
      control: "text",
    },
    textStyle: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    components: { IconTextField },
    props: Object.keys(argTypes),
    template: `<icon-text-field v-bind="$props"/>`,
  }),
};

export const iconTextField = {
  args: {
    label: "Position",
    text: "CTO",
    textStyle: "text-cyan-400",
  },
};
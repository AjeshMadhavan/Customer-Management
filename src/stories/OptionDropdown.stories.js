import OptionsDropdown from "../components/OptionsDropdown.vue";
import "../index.css";

export default {
  component: OptionsDropdown,
  title: "Common Components/Options Dropdown",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
    optionButtonStyle: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { OptionsDropdown },
    template: '<options-dropdown v-bind="$props" />',
  }),
};

export const Default = {
  args: {
    text: "hi mone",
    prependIcon: "mdi-magnify",
  },
};

export const Primary = {
  args: {
    text: "Primary",
    prependIcon: "mdi-account",
  },
};
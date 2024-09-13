import "../index.css";

import OptionsDropdown from "../components/OptionsDropdown.vue";
import UIdata from "../Json/UIdata.json";
import { DropdownContentPosition } from "../constants";

export default {
  component: OptionsDropdown,
  tags: ["autodocs"],
  argTypes: {
    contentPosition: {
      type: "select",
      options: Object.values(DropdownContentPosition),
    },
    hideToggleArrow: {
      control: "boolean",
    },
    icon: {
      control: "text",
    },
    imageUrl: {
      control: "text",
    },
    toggleButtonStyle: {
      control: "text",
    },
    text: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { OptionsDropdown },
    template: `<options-dropdown v-bind="$props" />`,
  }),
};

export const Dropdown = {
  args: {
    text: "All",
    contentPosition: DropdownContentPosition.Left,
    dropdownContent: UIdata.contactListPage.categoryOptions.options,
    toggleButtonStyle: "p-2",
  },
};
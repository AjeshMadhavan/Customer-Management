import OptionsDropdown from "../components/OptionsDropdown.vue";
import "../index.css";

export default {
  component: OptionsDropdown,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    appendIcon: {
      control: "text",
    },
    optionButtonStyle: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { OptionsDropdown },
    template: `<options-dropdown v-bind="$props">      
      <template v-slot:optionsSlot>
        <div v-if="optionsSlot" v-html="optionsSlot" />
      </template>
    </options-dropdown>`,
  }),
};

export const Menu = {
  args: {
    text: "All",
    appendIcon: "mdi-menu-down",
    optionsSlot: `<ul>
            <li>Mango</li>
            <li>Apple</li>
            <li>Banana</li>
        </ul>`,
  },
};

export const ProfileIconMenu = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1518815068914-038920b6f0c6?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    optionsSlot: `<ul>
            <li>John Heart</li>
            <li>Log Out</li>
        </ul>`,
  },
};
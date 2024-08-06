import DropdownComponent from "../components/DropdownComponent.vue";

export default {
  component: DropdownComponent,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
    dropdownButtonStyle: {
      control: "text",
    },
    dropdownContainerStyle: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DropdownComponent },
    template: `<dropdown-component v-bind="$props">
            <template v-slot:item-slot>
                <div v-if="itemSlot" v-html="itemSlot" />
            </template>
        </dropdown-component>`,
  }),
};

export const DropdownWithIcon = {
  args: {
    text: "CRM",
    prependIcon: "mdi-account",
    dropdownButtonStyle: "py-[9px] pr-4",
    itemSlot: `<ul class="text-[13px] ">
                <li>Contact List</li>
                <li>Contact Details</li>
            </ul>`,
  },
};

export const DropdownWithoutIcon = {
  args: {
    text: "Oppertunities",
    dropdownButtonStyle: "py-1.5 pr-2.5 pl-[11px]",
    dropdownContainerStyle: "bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.2)]",
    itemSlot: `<ul class="text-[13px] p-[11px]">
                <li>Incoming Request</li>
                <li>POS Touch Screens</li>
            </ul>`,
  },
};
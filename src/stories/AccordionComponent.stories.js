import AccordionComponent from "../components/AccordionComponent.vue";

export default {
  component: AccordionComponent,
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
    components: { AccordionComponent },
    template: `<accordion-component v-bind="$props">
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
    dropdownButtonStyle: "py-2.5 pr-4",
    itemSlot: `<ul class="text-xs ">
                <li>Contact List</li>
                <li>Contact Details</li>
            </ul>`,
  },
};

export const DropdownWithoutIcon = {
  args: {
    text: "Oppertunities",
    dropdownButtonStyle: "py-1.5 pr-2.5 pl-3",
    dropdownContainerStyle: "bg-white dropdown-shadow]",
    itemSlot: `<ul class="text-sm p-3">
                <li>Incoming Request</li>
                <li>POS Touch Screens</li>
            </ul>`,
  },
};
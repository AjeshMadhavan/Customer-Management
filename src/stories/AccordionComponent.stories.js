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
    dropdownContainerStyle: "bg-zinc-100",
    itemSlot: `<ul>
                <li class="py-1.5 pr-4 pl-6 cursor-pointer text-sm">Contact List</li>
                <li class="py-1.5 pr-4 pl-6 cursor-pointer text-sm">Contact Details</li>
            </ul>`,
  },
};

export const DropdownWithoutIcon = {
  args: {
    text: "Oppertunities",
    dropdownButtonStyle: "py-1.5 pr-2.5 pl-3",
    dropdownContainerStyle: "shadow-md",
    itemSlot: `<ul>
                <li class="text-sm py-1">Incoming Request</li>
                <li class="text-sm py-1">POS Touch Screens</li>
            </ul>`,
  },
};
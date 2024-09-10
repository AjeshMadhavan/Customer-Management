import AccordionComponent from "../components/AccordionComponent.vue";

export default {
  component: AccordionComponent,
  tags: ["autodocs"],
  argTypes: {
    containerStyle: {
      control: "text",
    },
    hideToggleArrow: {
      control: "boolean",
    },
    prependIcon: {
      control: "text",
    },
    text: {
      control: "text",
    },
    toggleButtonStyle: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccordionComponent },
    template: `<accordion-component v-bind="$props">
            <template v-slot:content-slot>
                <div v-if="contentSlot" v-html="contentSlot" />
            </template>
        </accordion-component>`,
  }),
};

export const Accordion = {
  args: {
    text: "CRM",
    prependIcon: "mdi-account",
    toggleButtonStyle: "py-2.5 pr-4",
    containerStyle: "bg-zinc-100",
    contentSlot: `<ul>
                <li class="py-1.5 pr-4 pl-6 cursor-pointer text-sm">Contact List</li>
                <li class="py-1.5 pr-4 pl-6 cursor-pointer text-sm">Contact Details</li>
            </ul>`,
  },
};
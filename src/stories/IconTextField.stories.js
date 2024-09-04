import IconTextField from "../components/IconTextField.vue";

export default {
  component: IconTextField,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    linkText: {
      control: "text",
    },
    linkTextStyle: {
      control: "text",
    },
    textContainerStyle: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    components: { IconTextField },
    props: Object.keys(argTypes),
    template: `<icon-text-field 
                :text="text" 
                :linkText="linkText" 
                :linkTextStyle="linkTextStyle"
                :textContainerStyle="textContainerStyle"
                :prependIcon="prependIcon"        
        />`,
  }),
};

export const TextwithLink = {
  args: {
    text: "Position",
    linkText: "CTO",
    linkTextStyle: "text-cyan-400",
  },
};

export const TextWithIcon = {
  args: {
    linkText: "+1(213)555-4276",
    prependIcon: "mdi-phone",
    textContainerStyle: "px-3 pb-1",
  },
};
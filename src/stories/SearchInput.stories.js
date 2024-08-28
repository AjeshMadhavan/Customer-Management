import SearchInput from "../components/SearchInput.vue";

export default {
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    placeholderText: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
    inputBoxValue: {
      control: "text",
    },
    inputType: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SearchInput },
    template: `<search-input v-bind="$props"/>`,
  }),
};

export const SearchBox = {
  args: {
    placeholderText: "Search",
    prependIcon: "mdi-magnify",
  },
};
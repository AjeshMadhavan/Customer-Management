import SearchInput from "../components/SearchInput.vue";

export default {
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
    value: {
      control: "text",
    },
    type: {
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
    placeholder: "Search",
    prependIcon: "mdi-magnify",
  },
};
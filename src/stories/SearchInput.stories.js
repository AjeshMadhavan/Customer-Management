import SearchInput from "../components/SearchInput.vue";

export default {
  component: SearchInput,
  title: "Common Components/Search Input",
  tags: ["autodocs"],
  argTypes: {
    placeholderText: {
      control: "text",
    },
    prependIcon: {
      control: "text",
    },
    appendIcon: {
      control: "text",
    },
    inputStype: {
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
    appendIcon: "mdi-close",
  },
};
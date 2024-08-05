import StatusText from "../components/StatusText.vue";
import "../index.css";

export default {
  component: StatusText,
  tags: ["autodocs"],
  argTypes: {
    statusText: {
      control: "text",
    },
    textStyle: {
      control: "text",
    },
  },
  render: (args, { argTypes }) => ({
    components: { StatusText },
    props: Object.keys(argTypes),
    template: '<status-text :statusText="statusText" :textStyle="textStyle" />',
  }),
};

export const Salaried = {
  args: {
    statusText: "Salaried",
    textStyle: "text-green-400",
  },
};

export const Commisioned = {
  args: {
    statusText: "Commissioned",
    textStyle: "text-orange-400",
  },
};

export const Terminated = {
  args: {
    statusText: "Terminated",
    textStyle: "text-red-400",
  },
};
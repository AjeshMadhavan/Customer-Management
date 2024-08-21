import TableComponent from "../components/TableComponent.vue";

import UserDetails from "../Json/UserDetails.json";

export default {
  component: TableComponent,
  title: "Table Component",
  tags: ["autodocs"],
  render: (args, { argTypes }) => ({
    components: { TableComponent },
    props: Object.keys(argTypes),
    template: "<table-component :userData='userData'/>",
  }),
};

export const Table = {
  args: {
    userData: UserDetails.userDetails.users,
  },
};
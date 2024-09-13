import TableComponent from "../components/TableComponent.vue";

import UserDetails from "../Json/UserDetails.json";

export default {
  component: TableComponent,
  tags: ["autodocs"],
  render: (args, { argTypes }) => ({
    components: { TableComponent },
    props: Object.keys(argTypes),
    template: "<table-component v-bind='$props'/>",
  }),
};

export const Table = {
  args: {
    userData: UserDetails.userDetails.users,
    tableHeader: [
      {
        text: "Name",
        sortable: true,
        value: "name",
        align: "start",
      },
      {
        text: "Company",
        sortable: true,
        value: "company",
        align: "start max-[447px]:hidden",
      },
      {
        text: "Status",
        sortable: true,
        value: "status",
        align: "start max-[726px]:hidden",
      },
      {
        text: "Assigned to",
        sortable: true,
        value: "assignedTo",
        align: "start max-[616px]:hidden",
      },
      {
        text: "Phone",
        sortable: true,
        value: "phone",
        align: "start max-[854px]:hidden",
      },
      {
        text: "Email",
        sortable: true,
        value: "email",
        align: "start max-[1372px]:hidden",
      },
      {
        text: "",
        value: "data-table-expand",
      },
    ],
  },
};
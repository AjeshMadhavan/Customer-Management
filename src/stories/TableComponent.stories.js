import TableComponent from "../components/TableComponent.vue";

export default {
  component: TableComponent,
  title: "Table Component",
  tags: ["autodocs"],
};

export const Table = {
  render: () => ({
    components: { TableComponent },
    template: "<table-component />",
  }),
};
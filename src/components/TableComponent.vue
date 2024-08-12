<template>
  <v-data-table
    :headers="headers"
    :items="values"
    hide-default-footer
    show-select
    checkbox-color="#03a9f4"
    item-key="name"
    :headers-length="30"
    class="table"
  >
    <template v-slot:header.name="{ header }">
        {{header.text}}
        <v-icon class="left-10"> mdi-magnify </v-icon>      
    </template>
    <template v-slot:header.company="{ header }">
        {{header.text}}
        <v-icon> mdi-magnify </v-icon>      
    </template>
    <template v-slot:header.status="{ header }">
        {{header.text}}
        <v-icon> mdi-magnify </v-icon>      
    </template>
    <template v-slot:header.assignedTo="{ header }">
        {{header.text}}
        <v-icon> mdi-magnify </v-icon>      
    </template>
    <template v-slot:header.phone="{ header }">
        {{header.text}}
        <v-icon> mdi-magnify </v-icon>      
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
const headers = [
  {
    text: "Dessert",
    sortable: true,
    value: "name",
    filterable: true,
    divider: true,
    class: "dummy",
    icon: "mdi-magnify",
    align: "left",
    groupable: true,
  },
  {
    text: "Company",
    sortable: false,
    value: "company",
    align: "left",
  },
  {
    text: "Status",
    sortable: false,
    value: "status",
    align: "left",
  },
  {
    text: "Assigned to",
    sortable: false,
    value: "assignedTo",
    align: "left",
  },
  {
    text: "Phone",
    sortable: false,
    value: "phone",
    align: "start",
  },
];

const values = [
  {
    name: "Todd Hoffman",
    company: "K&S Musics",
    status: "Commission",
    assignedTo: "Samantha Bright",
    phone: "+1(925)555-3579",
  },
  {
    name: "Billy Zimmer",
    company: "Braeburn",
    status: "Salaried",
    assignedTo: "Samantha Bright",
    phone: "+1(925)555-3579",
  },
  {
    name: "Clark Morgan",
    company: "Electronics Depot",
    status: "Commision",
    assignedTo: "John Heart",
    phone: "+1(925)555-3579",
  },
];
</script>

<style lang="scss" scoped>
.table::v-deep {
  width: 100%;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 0;

  .v-data-table-header > tr > th {
    height: min-content !important;
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
    padding: 0;
    padding-left: 8px;
    text-align: left;

    &:hover:not(:first-child) {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &:first-child {
      padding: 8px;
    }
  }

  .v-simple-checkbox {
    width: min-content;
  }

  .v-simple-checkbox .v-icon {
    font-size: 16px !important;
    width: auto !important;
  }

  .v-input--selection-controls__ripple {
    height: max-content;
  }

  .v-data-table__wrapper table tbody tr:hover {
    background-color: transparent !important;
  }

  .v-data-table__wrapper table tbody tr td {
    padding: 0;
    padding-left: 8px;
    text-align: left;

    &:first-child {
      padding: 8px;
    }
  }

  .v-data-table__selected {
    background-color: rgba(3, 169, 244, 0.04) !important;
  }
}
</style>

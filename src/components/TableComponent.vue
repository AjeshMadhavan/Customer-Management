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
    mobile-breakpoint
    item-class="are-you-item"
    :header-props="{ 'sort-icon': 'mdi-arrow-up-thin' }"
  >
  </v-data-table>
</template>

<script setup lang="ts">
const headers = [
  {
    text: "Dessert",
    sortable: true,
    value: "name",
    align: "start",
  },
  {
    text: "Company",
    sortable: true,
    value: "company",
    align: "start",
  },
  {
    text: "Status",
    sortable: true,
    value: "status",
    align: "start",
  },
  {
    text: "Assigned to",
    sortable: true,
    value: "assignedTo",
    align: "start",
  },
  {
    text: "Phone",
    sortable: true,
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

      .theme--light {
        color: rgb(3, 169, 244) !important;
      }

      .mdi-checkbox-blank-outline.theme--light {
        color: rgba(0, 0, 0, 0.54) !important;
      }
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

  .v-data-table__wrapper table tbody tr {
    // background-color: #fff;
    cursor: pointer;

    &:hover {
      background: #fff !important;
    }

    &:focus {
      background-color: green !important;
    }

    &.v-data-table__selected {
      background-color: rgba(3, 169, 244, 0.04) !important;
    }
  }

  .v-data-table__wrapper table tbody tr td {
    padding: 0;
    padding-left: 8px;
    text-align: left;

    &:first-child {
      padding: 8px;
    }
  }
}
</style>

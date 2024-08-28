<template>
  <v-data-table
    :headers="props.tableHeader"
    :items="tableData"
    :headers-length="30"
    :item-class="getRowClass"
    :show-expand="expandMenuData.length > 0"
    :expanded="expandMenuData"
    hide-default-footer
    show-select
    must-sort
    class="table"
    item-key="name"
    mobile-breakpoint="100"
    checkbox-color="#03a9f4"
    expand-icon="mdi-dots-horizontal"
    :header-props="{ 'sort-icon': 'mdi-arrow-up-thin' }"
    @click:row="handleRowClick"
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" class="expanded-data">
        <ul>
          <li v-for="data in expandMenuData" :key="data" class="pb-2.5">
            <span class="expand-item-title capitalize">{{ data }}</span>
            <br />
            <span class="expand-item-data">{{ item[data] }}</span>
          </li>
        </ul>
      </td>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, withDefaults } from "vue";

import { UserData, TableHeader } from "../Type/Types";

interface Props {
  userData: UserData[];
  tableHeader: TableHeader[];
  expandMenuData?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  expandMenuData: () => [],
});

const selectedRow = ref<string>("");

const tableData = computed(() => {
  return props.userData;
});

const handleRowClick = (item) => {
  selectedRow.value = item.name;
};

const getRowClass = (item) => {
  if (item.name === selectedRow.value) {
    return "active-row";
  }
};
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

    .v-icon.mdi-arrow-up-thin {
      transition: none;
      font-size: 15px !important;
      line-height: 15px;
    }

    &:hover:not(:first-child) {
      background-color: rgba(0, 0, 0, 0.04);

      .v-icon.mdi-arrow-up-thin {
        opacity: 0;
      }
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

    &.active {
      .v-icon.mdi-arrow-up-thin {
        opacity: 1 !important;
      }

      &:hover {
        .v-icon.mdi-arrow-up-thin {
          color: rgba(0, 0, 0, 0.38);
        }
      }
    }

    @media (min-width: 1372px) {
      &:last-child {
        display: none;
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

    &.active-row {
      background-color: rgb(205, 238, 253) !important;
    }

    &.v-data-table__expanded {
      box-shadow: none;
    }

    .expanded-data {
      padding: 16px !important;
      background-color: rgb(250, 250, 250);
      box-shadow: none !important;
      text-align: left !important;
    }
  }

  .v-data-table__wrapper table tbody tr td {
    padding: 0;
    padding-left: 8px;
    text-align: left;

    &:first-child {
      padding: 8px;
    }

    .v-data-table__expand-icon {
      transition: none !important;
      background-color: transparent !important;
      font-size: 18px;

      &::after {
        background-color: transparent !important;
      }
    }

    &:last-child {
      padding: 0;
      min-width: 40px;
      text-align: center;
    }

    @media (min-width: 1372px) {
      &:last-child {
        display: none;
        padding: 0;
      }
    }
  }

  .expand-item-title {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.6);
    padding: 0 12px 2px;
  }

  .expand-item-data {
    font-size: 13px;
    font-weight: 400;
    line-height: 26px;
    padding: 0 12px;
  }
}

// <table-component
//   :userData="UserDetails.userDetails.users"
//   :tableHeader="headers"
//   :expandMenuData="expandMenuData"
// />

// const headers = [
//   {
//     text: "Name",
//     sortable: true,
//     value: "name",
//     align: "start",
//   },
//   {
//     text: "Company",
//     sortable: true,
//     value: "company",
//     align: "start max-[447px]:hidden",
//   },
//   {
//     text: "Status",
//     sortable: true,
//     value: "status",
//     align: "start max-[726px]:hidden",
//   },
//   {
//     text: "Assigned to",
//     sortable: true,
//     value: "assignedTo",
//     align: "start max-[616px]:hidden",
//   },
//   {
//     text: "Phone",
//     sortable: true,
//     value: "phone",
//     align: "start max-[854px]:hidden",
//   },
//   {
//     text: "Email",
//     sortable: true,
//     value: "email",
//     align: "start max-[1372px]:hidden",
//   },
//   {
//     text: "",
//     value: "data-table-expand",
//   },
// ];

// const expandMenuData = ref<string[]>([
//   "company",
//   "assignedTo",
//   "status",
//   "phone",
//   "email",
// ]);

// const updateExpandMenuData = () => {
//   if (window.innerWidth < 448) {
//     expandMenuData.value = [
//       "company",
//       "assignedTo",
//       "status",
//       "phone",
//       "email",
//     ];
//   } else if (window.innerWidth >= 448 && window.innerWidth < 617) {
//     expandMenuData.value = ["assignedTo", "status", "phone", "email"];
//   } else if (window.innerWidth >= 617 && window.innerWidth < 727) {
//     expandMenuData.value = ["status", "phone", "email"];
//   } else if (window.innerWidth >= 727 && window.innerWidth < 855) {
//     expandMenuData.value = ["phone", "email"];
//   } else if (window.innerWidth >= 855 && window.innerWidth < 1371) {
//     expandMenuData.value = ["email"];
//   } else {
//     expandMenuData.value = [];
//   }
// };

// window.addEventListener("resize", () => updateExpandMenuData());

// onMounted(() => updateExpandMenuData());
</style>
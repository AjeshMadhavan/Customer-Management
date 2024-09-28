<template>
  <v-data-table
    :headers="props.tableHeader"
    :items="tableData"
    :headers-length="30"
    :item-class="getRowClass"
    :show-expand="expandedMenuData.length > 0"
    :expanded="expandedMenuData"
    :items-per-page="ITEMS_PER_PAGE"
    fixed-header
    hide-default-footer
    show-select
    must-sort
    class="table"
    item-key="name"
    mobile-breakpoint="100"
    :height="TABLE_HEIGHT"
    checkbox-color="#03a9f4"
    expand-icon="mdi-dots-horizontal"
    :header-props="{ 'sort-icon': 'mdi-arrow-up-thin' }"
    @click:row="handleRowClick"
  >
    <template v-slot:expanded-item="{ headers: columnHeaders, item }">
      <td :colspan="columnHeaders.length" class="expanded-data">
        <ul>
          <li v-for="data in expandedMenuData" :key="data" class="pb-2.5">
            <span class="expand-item-title capitalize">{{ data }}</span>
            <br />
            <span class="expand-item-data">{{ item[data] }}</span>
          </li>
        </ul>
      </td>
    </template>
    <template
      v-if="props.itemSlotData"
      v-slot:[`item.${props.itemSlotData.slotKey}`]="{ item }"
    >
      <td>
        <span class="leading-4">{{ item[props.itemSlotData.slotKey] }}</span>
        <span
          v-for="value in props.itemSlotData.values"
          :key="value"
          class="block text-xs text-black-6"
        >
          {{ item[value] ?? value }}
        </span>
      </td>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, withDefaults } from "vue";

import { TableHeader, UserData } from "../Type/Types";

interface Props {
  tableHeader: TableHeader[];
  userData: UserData[];
  expandedMenuData?: string[];
  itemSlotData?: ItemSlotData;
}

interface ItemSlotData {
  slotKey: string;
  values: string[];
}

const props = withDefaults(defineProps<Props>(), {
  expandedMenuData: () => [],
  itemSlotData: undefined,
});

const emits = defineEmits<{
  (e: "row-click", value: UserData): void;
}>();

const selectedRow = ref<string>("");
const ITEMS_PER_PAGE = -1;
const TABLE_HEIGHT = "100%";

const tableData = computed(() => props.userData);

const handleRowClick = (TableRowData: UserData) => {
  selectedRow.value = TableRowData.name;
  emits("row-click", TableRowData);
};

const getRowClass = (TableRowData: UserData) => {
  if (TableRowData.name === selectedRow.value) return "active-row";
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
    z-index: 0;

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
    font-size: 21px !important;
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
    font-size: 13px;
    height: 52.5px;

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
</style>
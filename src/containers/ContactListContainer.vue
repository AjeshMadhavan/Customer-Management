<template>
  <div class="w-full px-8">
    <div class="flex justify-between p-6">
      <div class="flex items-center">
        <h1 class="pr-7 text-2xl h-9.5">{{ containerData.title }}</h1>
        <div class="category-options">
          <options-dropdown
            :text="containerData.categoryOptions.title"
            :dropdown-content="containerData.categoryOptions.options"
            toggle-button-style="py-1.5 pr-2 pl-3 font-bold"
          />
        </div>
      </div>
      <div class="flex items-center justify-end">
        <div class="pr-1.5">
          <custom-button
            :text="containerData.addContactButton.title"
            :icon="containerData.addContactButton.icon"
            class="add-contact"
          />
        </div>
        <custom-button
          :icon="containerData.refreshDataButton.icon"
          button-style="shadow-none custom-button data-refresh-button"
        />
        <span class="separator ml-1.5" />
        <div class="pl-1.5 export-data">
          <options-dropdown
            :icon="containerData.exportOptions.icon"
            :dropdown-content="containerData.exportOptions.options"
            toggle-button-style="py-1.5 px-2"
          />
        </div>
        <span class="separator mx-1.5 hidden sm:block" />
        <custom-button
          :icon="containerData.columnChooserButton.icon"
          button-style="shadow-none custom-button column-chooser"
        />
        <div class="ml-5 contact-search">
          <search-input
            :placeholder="containerData.searchBoxLabel"
            prepend-icon="mdi-magnify"
          />
        </div>
        <div class="ml-2.5 hidden dropdown-button">
          <custom-button
            icon="mdi-dots-vertical"
            class="shadow-none custom-button"
          />
        </div>
      </div>
    </div>
    <table-component
      :table-header="props.tableHeader"
      :user-data="props.tableData"
      :expanded-menu-data="props.tableExpandData"
      @row-click="handleTableRowClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, withDefaults } from "vue";

import { TableHeader, UserData } from "@/Type/Types";

import UIdata from "@/Json/UIdata.json";
import TableComponent from "@/components/TableComponent.vue";
import SearchInput from "@/components/SearchInput.vue";
import OptionsDropdown from "@/components/OptionsDropdown.vue";
import CustomButton from "@/components/CustomButton.vue";

interface Props {
  tableData: UserData[];
  tableHeader: TableHeader[];
  tableExpandData?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  tableExpandData: () => [],
});

const emits = defineEmits<{
  (e: "row-click", value: UserData): void;
}>();

const containerData = computed(() => UIdata.contactListPage);

const handleTableRowClick = (TableRowData: UserData) => {
  emits("row-click", TableRowData);
};
</script>

<style scoped lang="scss">
.separator {
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;

  @media (max-width: 539px) {
    display: none;
  }
}

.custom-button {
  font-size: 16px;
  line-height: 16px;
  background-color: transparent !important;
}

.category-options {
  height: 38px;
}

@media (max-width: 367px) {
  .category-options {
    display: none;
  }
}

@media (max-width: 500px) {
  .add-contact {
    display: none;
  }
}

@media (max-width: 533px) {
  .data-refresh-button {
    display: none;
  }
}

@media (max-width: 644px) {
  .export-data {
    display: none;
  }
}

@media (max-width: 683px) {
  .column-chooser {
    display: none;
  }
}

@media (max-width: 820px) {
  .contact-search {
    display: none;
  }

  .dropdown-button {
    display: block;
  }
}
</style>
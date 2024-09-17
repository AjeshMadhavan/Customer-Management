<template>
  <div class="w-full px-8">
    <div class="flex justify-between p-6">
      <div class="flex items-center">
        <h1 class="pr-7 text-2xl h-9.5">{{ containerData.title }}</h1>
        <div class="h-9.5">
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
          />
        </div>
        <custom-button
          :icon="containerData.refreshDataButton.icon"
          button-style="shadow-none !bg-transparent !text-base/4"
        />
        <span class="separator ml-1.5" />
        <div class="pl-1.5">
          <options-dropdown
            :icon="containerData.exportOptions.icon"
            :dropdown-content="containerData.exportOptions.options"
            toggle-button-style="py-1.5 px-2"
          />
        </div>
        <span class="separator mx-1.5" />
        <custom-button
          :icon="containerData.columnChooserButton.icon"
          button-style="shadow-none !bg-transparent !text-base/4"
        />
        <div class="ml-5">
          <search-input
            :placeholder="containerData.searchBoxLabel"
            prepend-icon="mdi-magnify"
          />
        </div>
      </div>
    </div>
    <table-component
      :table-header="props.tableHeader"
      :user-data="props.tableData"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import { TableHeader, UserData } from "@/Type/Types";

import UIdata from "@/Json/UIdata.json";
import TableComponent from "@/components/TableComponent.vue";
import SearchInput from "@/components/SearchInput.vue";
import OptionsDropdown from "@/components/OptionsDropdown.vue";
import CustomButton from "@/components/CustomButton.vue";

interface Props {
  tableHeader: TableHeader;
  tableData: UserData;
}

const props = defineProps<Props>();

const containerData = computed(() => UIdata.contactListPage);
</script>

<style scoped lang="scss">
.separator {
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;
}
</style>
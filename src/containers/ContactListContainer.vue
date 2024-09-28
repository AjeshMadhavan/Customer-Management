<template>
  <div class="w-full px-8">
    <div class="flex justify-between p-6">
      <div class="flex items-center">
        <h1 class="title">{{ containerData.title }}</h1>
        <div class="category-options">
          <options-dropdown
            :text="containerData.categoryOptions.title"
            :dropdown-content="containerData.categoryOptions.options"
            toggle-button-style="py-1.25 pr-2 pl-3 font-bold leading-3.50"
            @dropdown-item-click="onDropdownItemClick"
          />
        </div>
      </div>
      <div class="flex items-center justify-end pl-3.75">
        <div>
          <custom-button
            :text="containerData.addContactButton.title"
            :icon="containerData.addContactButton.icon"
            class="add-contact"
          />
        </div>
        <div class="pl-1.25 data-refresh-button">
          <custom-button
            :icon="containerData.refreshDataButton.icon"
            button-style="shadow-none custom-button"
          />
        </div>
        <span class="separator ml-1.25" />
        <div class="export-data pl-1.25">
          <options-dropdown
            :icon="containerData.exportOptions.icon"
            :dropdown-content="containerData.exportOptions.options"
            toggle-button-style="py-1.25 px-2"
          />
        </div>
        <span class="separator ml-1.25" />
        <div class="pl-1.25 column-chooser">
          <custom-button
            :icon="containerData.columnChooserButton.icon"
            button-style="shadow-none custom-button"
          />
        </div>
        <div class="contact-search">
          <search-input
            :placeholder="containerData.searchBoxLabel"
            prepend-icon="mdi-magnify"
            @on-input-change="onUserSearch"
          />
        </div>
        <div class="dropdown-button">
          <custom-button
            icon="mdi-dots-vertical"
            class="shadow-none custom-button"
          />
        </div>
      </div>
    </div>
    <table-component
      :table-header="props.tableHeader"
      :user-data="users"
      :expanded-menu-data="props.tableExpandData"
      :item-slot-data="tableSlotData"
      @row-click="handleTableRowClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, withDefaults } from "vue";

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

const searchText = ref<string>("");
const selectedUserStatus = ref<string>("");

const tableSlotData = {
  slotKey: "name",
  values: ["position"],
};

const containerData = computed(() => UIdata.contactListPage);

const users = computed(() => {
  return props.tableData.filter(
    (user: UserData) =>
      user.status.includes(selectedUserStatus.value) &&
      user.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const handleTableRowClick = (TableRowData: UserData) => {
  emits("row-click", TableRowData);
};

const onDropdownItemClick = (status: string) => {
  selectedUserStatus.value =
    containerData.value.categoryOptions.options[0].text === status
      ? ""
      : (selectedUserStatus.value = status);
};

const onUserSearch = (inputValue: string) => {
  searchText.value = inputValue;
};
</script>

<style scoped lang="scss">
.separator {
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;

  &:first-of-type {
    @media (max-width: 539px) {
      display: none;
    }
  }

  &:last-of-type {
    @media (max-width: 650px) {
      display: none;
    }
  }
}

.title {
  font-size: 22px;
  padding-right: 25px;
  line-height: 28px;
  height: 38px;
  display: inline-flex;
  align-items: center;
}

.add-contact {
  font-size: 13px !important;
  min-height: 28px;
  width: 132.95px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
}

.custom-button {
  font-size: 16px;
  line-height: 16px;
  background-color: transparent !important;
}

.data-refresh-button,
.column-chooser {
  width: 33px;
}

.export-data {
  padding-left: 5px;
}

.contact-search {
  margin-left: 20px;
  width: 160px;
}

.dropdown-button {
  display: none;
  margin-left: 10px;
  padding-left: 5px;
  width: 33px;
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
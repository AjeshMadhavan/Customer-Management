<template>
  <div class="w-full h-full">
    <header-container class="z-10" @toggle-button-click="onToggleButtonClick" />
    <div class="flex relative">
      <div
        :class="[
          'sidebar-container-wrapper',
          { 'sidebar-container-wrapper__minimize': !shouldMinimizeSidebar },
        ]"
      >
        <sidebar-container :should-minimize-sidebar="shouldMinimizeSidebar" />
      </div>
      <div class="w-full">
        <contact-list-container
          :table-data="UserDetailsData.userDetails.users"
          :table-header="tableHeaders"
          :table-expand-data="tableExpandColumns"
          @row-click="handleTableRowClick"
        />
      </div>
      <div
        :class="[
          'user-details-container bg-white shadow-md',
          { 'user-details-container__show': userData },
        ]"
      >
        <user-details
          :user-data="userData"
          @close-button-click="onUserDetailsCloseClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import UserDetailsData from "@/Json/UserDetails.json";
import { UserData } from "@/Type/Types";

import HeaderContainer from "@/containers/HeaderContainer.vue";
import SidebarContainer from "@/containers/SidebarContainer.vue";
import ContactListContainer from "@/containers/ContactListContainer.vue";
import UserDetails from "@/containers/UserDetails.vue";

const userData = ref<UserData>();
const shouldMinimizeSidebar = ref<boolean>(true);
const tableExpandColumns = ref<string[]>([]);

const tableHeaders = [
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
    value: "data-table-expand",
  },
];

const handleTableRowClick = (tableRowData: UserData) => {
  userData.value = tableRowData;
};

const onUserDetailsCloseClick = () => {
  userData.value = undefined;
};

const onToggleButtonClick = () => {
  shouldMinimizeSidebar.value = !shouldMinimizeSidebar.value;
};

const updateExpandedMenuData = () => {
  switch (true) {
    case window.innerWidth < 448:
      tableExpandColumns.value = [
        "company",
        "assignedTo",
        "status",
        "phone",
        "email",
      ];
      break;
    case window.innerWidth >= 448 && window.innerWidth < 617:
      tableExpandColumns.value = ["assignedTo", "status", "phone", "email"];
      break;
    case window.innerWidth >= 617 && window.innerWidth < 727:
      tableExpandColumns.value = ["status", "phone", "email"];
      break;
    case window.innerWidth >= 727 && window.innerWidth < 855:
      tableExpandColumns.value = ["phone", "email"];
      break;
    case window.innerWidth >= 855 && window.innerWidth < 1371:
      tableExpandColumns.value = ["email"];
      break;
    default:
      tableExpandColumns.value = [];
      break;
  }
};

window.addEventListener("resize", () => updateExpandedMenuData());

onMounted(() => updateExpandedMenuData());
</script>

<style scoped lang="scss">
.sidebar-container-wrapper {
  width: 250px;
  height: calc(100vh - 58px);
  transition: all 0.5s ease;

  &__minimize {
    width: 48px;
  }
}

.user-details-container {
  position: absolute;
  right: -350px;
  height: calc(100vh - 58px);
  transition: right 0.4s ease;

  &__show {
    right: 0;
  }
}
</style>
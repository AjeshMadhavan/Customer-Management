<template>
  <div class="w-full h-full">
    <header-container class="z-10" />
    <div class="flex relative">
      <div class="sidebar-container-wrapper">
        <sidebar-container />
      </div>
      <contact-list-container
        :table-data="UserDetailsData.userDetails.users"
        :table-header="tableHeaders"
        @row-click="handleTableRowClick"
      />
      <div
        :class="[
          'user-details-container bg-white shadow-md',
          { '!right-0': userData },
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
import { ref } from "vue";

import UserDetailsData from "@/Json/UserDetails.json";
import { UserData } from "@/Type/Types";

import HeaderContainer from "@/containers/HeaderContainer.vue";
import SidebarContainer from "@/containers/SidebarContainer.vue";
import ContactListContainer from "@/containers/ContactListContainer.vue";
import UserDetails from "@/containers/UserDetails.vue";

const userData = ref<UserData>();

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
</script>

<style scoped lang="scss">
.sidebar-container-wrapper {
  width: 250px;
  height: calc(100vh - 58px);
}

.user-details-container {
  position: absolute;
  right: -350px;
  height: calc(100vh - 58px);
  transition: right 0.4s ease;
}
</style>
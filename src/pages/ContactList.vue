<template>
  <div class="w-full h-full">
    <header-container class="z-10" />
    <div class="flex relative">
      <div class="sidebar-container">
        <sidebar-container />
      </div>
      <contact-list-container
        :table-data="UserDetailsData.userDetails.users"
        :table-header="tableHeader"
        @row-click="handleTableRowClick"
      />
      <div
        :class="['user-details-container bg-white', { '!right-0': userData }]"
      >
        <user-details
          :user-data="userData"
          @close-button-click="closeUserDetailsContainer"
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

const userData = ref<UserData | undefined>(undefined);

const tableHeader = [
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
    text: "",
    value: "data-table-expand",
  },
];

const handleTableRowClick = (TableRowData: UserData) => {
  userData.value = TableRowData;
};

const closeUserDetailsContainer = () => {
  userData.value = undefined;
};
</script>

<style scoped lang="scss">
.sidebar-container {
  width: 250px;
  position: relative;
  left: 0;
  bottom: 0;
  height: calc(100vh - 58px);
}

.user-details-container {
  position: absolute;
  right: -350px;
  bottom: 0;
  height: calc(100vh - 58px);
  transition: right 0.4s ease;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.04), 0 4px 4px 0 rgba(0, 0, 0, 0.12);
}
</style>
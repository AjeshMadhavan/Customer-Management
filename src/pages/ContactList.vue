<template>
  <div class="w-full h-full">
    <header-container class="z-10" @toggle-button-click="onToggleButtonClick" />
    <div class="flex relative">
      <div
        :class="[
          'sidebar-container-wrapper',
          { 'sidebar-container-wrapper__minimize': !shouldShowSidebar },
        ]"
      >
        <sidebar-container :should-show-sidebar="shouldShowSidebar" />
      </div>
      <div class="w-full">
        <contact-list-container
          :table-data="UserDetailsData.userDetails.users"
          :table-header="tableHeaders"
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
import { computed, ref } from "vue";

import UserDetailsData from "@/Json/UserDetails.json";
import { UserData } from "@/Type/Types";

import HeaderContainer from "@/containers/HeaderContainer.vue";
import SidebarContainer from "@/containers/SidebarContainer.vue";
import ContactListContainer from "@/containers/ContactListContainer.vue";
import UserDetails from "@/containers/UserDetails.vue";

const searchText = ref<string>("");
const selectedUserStatus = ref<string>("");
const userData = ref<UserData>();
const shouldShowSidebar = ref<boolean>(true);

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

const users = computed(() => {
  return UserDetailsData.userDetails.users.filter(
    (user: UserData) =>
      user.status.includes(selectedUserStatus.value) &&
      user.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const handleTableRowClick = (tableRowData: UserData) => {
  userData.value = tableRowData;
};

const onUserDetailsCloseClick = () => {
  userData.value = undefined;
};

const onToggleButtonClick = () => {
  shouldShowSidebar.value = !shouldShowSidebar.value;
};
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
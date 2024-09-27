<template>
  <div class="w-full h-full relative">
    <div class="fixed z-50 w-screen">
      <header-container @toggle-button-click="onToggleButtonClick" />
    </div>
    <div class="flex relative contact-list-body">
      <div
        :class="[
          'sidebar-container-wrapper',
          { 'sidebar-container-wrapper__minimize': !shouldMinimizeSidebar },
        ]"
      >
        <sidebar-container :should-minimize-sidebar="shouldMinimizeSidebar" />
      </div>
      <div
        :class="['overlay-box', { 'overlay-box__show': shouldMinimizeSidebar }]"
        @click="onToggleButtonClick"
      />
      <div class="w-full contact-list-container">
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
          v-if="shouldShowUserDetails"
          :user-data="userData"
          @close-button-click="onUserDetailsCloseClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import UserDetailsData from "@/Json/UserDetails.json";
import { UserData } from "@/Type/Types";

import HeaderContainer from "@/containers/HeaderContainer.vue";
import SidebarContainer from "@/containers/SidebarContainer.vue";
import ContactListContainer from "@/containers/ContactListContainer.vue";
import UserDetails from "@/containers/UserDetails.vue";

const userData = ref<UserData>();
const shouldMinimizeSidebar = ref<boolean>(true);
const shouldShowUserDetails = ref<boolean>(false);
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
      return ["company", "assignedTo", "status", "phone", "email"];

    case window.innerWidth >= 448 && window.innerWidth < 617:
      return ["assignedTo", "status", "phone", "email"];

    case window.innerWidth >= 617 && window.innerWidth < 850:
      return ["status", "phone", "email"];

    case window.innerWidth >= 850 && window.innerWidth < 950:
      return ["phone", "email"];

    case window.innerWidth >= 950 && window.innerWidth < 1371:
      return ["email"];

    default:
      return [];
  }
};

watch(userData, (newValue) => {
  if (newValue) {
    shouldShowUserDetails.value = true;
  } else {
    setTimeout(() => {
      shouldShowUserDetails.value = false;
    }, 400);
  }
});

window.addEventListener("resize", () => {
  tableExpandColumns.value = updateExpandedMenuData();

  if (window.innerWidth === 800) {
    shouldMinimizeSidebar.value = false;
  }
});

onMounted(() => (tableExpandColumns.value = updateExpandedMenuData()));
</script>

<style scoped lang="scss">
.contact-list-body {
  padding-top: 58px;
}

.sidebar-container-wrapper {
  min-width: 250px;
  height: calc(100vh - 58px);
  transition: all 0.5s ease;

  &__minimize {
    min-width: 48px;
  }

  @media (max-width: 800px) {
    position: absolute;
    left: 0;
    z-index: 41;

    &__minimize {
      left: -250px;
    }
  }
}

.contact-list-container {
  height: calc(100vh - 58px);
  overflow: hidden;
}

.user-details-container {
  position: absolute;
  right: -350px;
  height: calc(100vh - 58px);
  transition: all 0.4s ease;
  overflow: auto;
  z-index: 2;

  &__show {
    right: 0;

    @media (max-width: 500px) {
      left: 0;
    }
  }
}

.overlay-box {
  position: absolute;
  top: 58px;
  left: 0;
  width: 100%;
  height: calc(100vh - 58px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0;
  transition: all 0.5s ease;

  @media (min-width: 801px) {
    display: none;
  }

  &__show {
    opacity: 1;
    z-index: 40;
  }
}
</style>
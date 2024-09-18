<template>
  <div class="w-full">
    <header-container />
    <div class="flex">
      <div class="sidebar-container">
        <sidebar-container />
      </div>
      <contact-list-container />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserDetails from "@/Json/UserDetails.json";

import HeaderContainer from "@/containers/HeaderSection.vue";
import SidebarContainer from "@/containers/SidebarContainer.vue";
import ContactListContainer from "@/containers/ContactListContainer.vue";
</script>

<style scoped lang="scss">
.sidebar-container {
  width: 250px;
}
</style>
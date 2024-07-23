<template>
  <div id="app">
    <sidebar-dropdown variant="primary" prependIcon="mdi-account" />
    <sidebar-dropdown variant="secondary" prependIcon="mdi-account" />
  </div>
</template>

<script lang="ts" setup>
import SidebarDropdown from "@/components/SidebarDropdown.vue";
</script>

<style>
#app {
  width: 250px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  margin-left: 20px;
  column-gap: 10px;
}
</style>
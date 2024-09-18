<template>
  <div id="app">
    <contact-list-page />
  </div>
</template>

<script lang="ts" setup>
import ContactListPage from '@/pages/ContactListPage.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  display: flex;
  column-gap: 10px;
}
</style>
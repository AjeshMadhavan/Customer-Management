<template>
  <div id="app">
    <contact-list />
  </div>
</template>

<script lang="ts" setup>
import ContactList from '@/pages/ContactList.vue'
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  display: flex;
  column-gap: 10px;
}
</style>
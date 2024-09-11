<template>
  <div id="app">
    <user-details />
  </div>
</template>

<script lang="ts" setup>
import UserDetails from './containers/UserDetails.vue'
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
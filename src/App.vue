<template>
  <div id="app">
    <user-details :user-data="UserDetailsJson.userDetails.users[0]"/>
  </div>
</template>

<script lang="ts" setup>
import UserDetails from './containers/UserDetails.vue'
import UserDetailsJson from './Json/UserDetails.json'
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
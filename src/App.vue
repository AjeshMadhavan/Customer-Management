<template>
  <div id="app">
    <button-tag :icon="plus" :iconBtn="plus"  />
  </div>
</template>

<script lang="ts" setup>
import ButtonTag from './components/ButtonTag.vue'
import plus from './assets/plus-solid.svg'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

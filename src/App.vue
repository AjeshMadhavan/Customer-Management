<template>
  <div id="app">
    <button-tag className="icon-icon" :icon="Plus" :appendIcon="Plus" :buttonFontWeight="700" buttonBackgroundColor="salmon" text=""/>
  </div>
</template>

<script lang="ts" setup>
import ButtonTag from './components/ButtonTag.vue'
import Plus from './assets/plus-solid.svg'
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

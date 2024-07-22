<template>
  <div id="app">
    <button-tag  icon="mdi-magnify" text="add contact" :variant="ButtonVariants.backgroundColor"/>
    <button-tag  icon="mdi-magnify"  :variant="ButtonVariants.icon"/>
    <button-tag   text="add contact" :variant="ButtonVariants.outlined"/>
  </div>
</template>

<script lang="ts" setup>
import ButtonTag from './components/ButtonTag.vue'
import Plus from './assets/plus-solid.svg'

import {ButtonVariants} from '@/Types/Enums'
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
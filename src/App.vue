<template>
  <div id="app">
    <button-component text="ADD CONTACT" icon="mdi-plus" :variant="ButtonVariants.Primary"/>
    <button-component text="DETAILS" :variant="ButtonVariants.Outlined" />
    <button-component icon="mdi-menu" :variant="ButtonVariants.Icon" />
  </div>
</template>

<script lang="ts" setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ButtonVariants } from './Type/Enums'
</script>

<style>
#app {
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
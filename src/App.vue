<template>
  <div id="app">
    <options-dropdown
      icon="mdi-account"
      :imageUrl="UserImage"
      optionButtonStyle="font-medium border border-[rgb(224,224,224)]"
    >
      <template v-slot:options-slot>
        <ul class="shadow-[0_2px_4px_rgba(0,0,0,0.2)] p-px absolute">
          <li
            v-for="item in content"
            :key="item"
            class="first:mt-1 hover:bg-[rgba(0,0,0,0.04)] pt-2.5 px-[11px] pb-[9px] cursor-pointer text-[13px] leading-4 text-left capitalize"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </options-dropdown>    
  </div>
</template>

<script lang="ts" setup>
import OptionsDropdown from '@/components/OptionsDropdown.vue'
import UserImage from './assets/userProfileImage.png'

const content = ['apple', 'mango', 'grapes']
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
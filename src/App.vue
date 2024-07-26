<template>
  <div id="app">
    <dropdown-component :dropdownStyle="DropdownStyles.DropdownWithIcon" text="CRM" prependIcon="mdi-magnify">
      <template v-slot:item-slot>
        <li
          v-for="option in content.options"
          :key="option.text"
          class="dropdown-item"
        >
          {{ option.text }}
        </li>
      </template>
    </dropdown-component>
  </div>
</template>

<script lang="ts" setup>
import { DropdownStyles } from "@/Type/Enums";
import DropdownComponent from "@/components/DropdownComponent.vue";

const content = {
  title: "Fruits",
  icon: "mdi-account",
  options: [
    {
      text: "Apple",
    },
    {
      text: "Mango",
    },
    {
      text: "Grapes",
    },
  ],
};

const content2 = {
  title: "Jackie Chan",
  icon: "mdi-account",
  options: [
    {
      text: "Jackie",
      price: "$1200",
    },
    {
      text: "Jooly",
      price: "$1200",
    },
    {
      text: "Uncle",
      price: "$1200",
    },
  ],
};

const content3 = {
  title: "ALL",
  options: [
    {
      text: "Bus",
    },
    {
      text: "Heavy Load Truck",
    },
    {
      text: "Car",
    },
  ],
};
</script>

<style>
#app {
  width: 650px;
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

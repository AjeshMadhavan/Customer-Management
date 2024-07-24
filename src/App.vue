<template>
  <div id="app">
    <sidebar-dropdown
      :dropdownContents="content"
      :variant="SidebarDropdownVariants.SidebarDropdown"
    />
    <sidebar-dropdown
      :dropdownContents="content2"
      :variant="SidebarDropdownVariants.UserOppertunitiesDropdown"
    />
    <sidebar-dropdown
      :dropdownContents="content3"
      :variant="SidebarDropdownVariants.PrimaryDropdown"
    />
  </div>
</template>

<script lang="ts" setup>
import { SidebarDropdownVariants } from "@/Type/Enums";
import SidebarDropdown from "@/components/SidebarDropdown.vue";

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
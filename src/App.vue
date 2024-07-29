<template>
  <div id="app">
    <dropdown-component
      :dropdownStyle="DropdownStyles.DropdownWithIcon"
      text="CRM"
      prependIcon="mdi-magnify"
    >
      <template v-slot:item-slot>
        <ul>
          <li
            v-for="option in content.options"
            :key="option.text"
            class="dropdown-item pt-[9px] pr-4 pb-[9px] pl-12 cursor-pointer"
          >
            {{ option.text }}
          </li>
        </ul>
      </template>
    </dropdown-component>
    <dropdown-component
      :dropdownStyle="DropdownStyles.DropdownWithoutIcon"
      text="excuse me"
    >
      <template v-slot:item-slot>
        <ul class="p-[11px]">
          <li
            v-for="option in content2.options"
            :key="option.text"
            class="dropdown-item pb-2.5"
          >
            {{ option.text }} <br />
            {{ option.price }}
          </li>
        </ul>
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

.dropdown-item {
  text-align: left;
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
}
</style>
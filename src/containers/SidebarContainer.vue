<template>
  <div
    :class="[
      'h-full sidebar-container',
      {
        'w-full': props.shouldMinimizeSidebar,
        'w-12': !props.shouldMinimizeSidebar,
      },
    ]"
  >
    <div class="accordion-container w-full pt-4">
      <accordion-component
        v-for="accordion in sidebarData.sidebarContents"
        :key="accordion.title"
        :text="accordion.title"
        :prepend-icon="accordion.icon"
        toggle-button-style="py-2.25 pr-4 font-bold text-black-87"
        container-style="border-b border-b-zinc-200"
        :hide-toggle-arrow="!props.shouldMinimizeSidebar"
      >
        <template #content-slot>
          <ul>
            <li
              v-for="accordionItem in accordion.options"
              :key="accordionItem.text"
              class="py-2.5 pr-4 text-3xs/4 text-left whitespace-nowrap"
            >
              <span class="pl-12">{{ accordionItem.text }}</span>
            </li>
          </ul>
        </template>
      </accordion-component>
    </div>
    <div
      :class="[
        'pt-5 pb-4 absolute right-0 bottom-0 left-0 sidebar-label-container transition-opacity',
        {
          'opacity-0 delay-0 duration-100': !props.shouldMinimizeSidebar,
          'opacity-1 delay-300 duration-500': props.shouldMinimizeSidebar,
        },
      ]"
    >
      <span class="sidebar-container__label">
        {{ sidebarData.copyrightText }}
      </span>
      <span class="sidebar-container__label">
        {{ sidebarData.companyName }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import UIdata from "@/Json/UIdata.json";

import AccordionComponent from "@/components/AccordionComponent.vue";

interface Props {
  shouldMinimizeSidebar: boolean;
}

const props = defineProps<Props>();

const sidebarData = computed(() => UIdata.sidebar);
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  transition: width 0.5s ease-in-out;
  position: relative;
  z-index: 10;
  background-color: rgb(242, 242, 242);

  .accordion-container {
    padding-bottom: 70px;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .sidebar-label-container {
    background-color: rgb(242, 242, 242);
    padding-left: 15px;
    height: 70px;
  }

  &__label {
    display: block;
    text-align: left;
    font-size: 13px;
    line-height: 16.7141px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.608);
  }
}
</style>
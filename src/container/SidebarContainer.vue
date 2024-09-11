<template>
  <div
    :class="['w-full bg-zinc-100 sidebar-container', { '!w-12': !showSidebar }]"
  >
    <div class="accordion-container w-full">
      <accordion-component
        v-for="accordion in accordionList"
        :key="accordion.title"
        :text="accordion.title"
        :prependIcon="accordion.icon"
        toggleButtonStyle="py-2.5 pr-4 font-bold"
        containerStyle="border-b border-b-zinc-200"
      >
        <template #content-slot>
          <ul>
            <li
              v-for="accordionItem in accordion.options"
              :key="accordionItem.text"
              class="py-2.5 pr-4 text-xs/4 text-left"
            >
              <span class="pl-12">{{ accordionItem.text }}</span>
            </li>
          </ul>
        </template>
      </accordion-component>
    </div>
    <div v-if="showSidebar" class="pt-5 pb-4 pl-4">
      <span class="sidebar-container__label">
        {{ UIdata.sidebar.copyrightText }}
      </span>
      <span class="sidebar-container__label">
        {{ UIdata.sidebar.companyName }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import UIdata from "@/Json/UIdata.json";

import AccordionComponent from "@/components/AccordionComponent.vue";

const showSidebar = ref<boolean>(true);

const accordionList = computed(() => UIdata.sidebar.sidebarContents);
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  transition: width 0.5s ease-in-out;

  &__label {
    display: block;
    text-align: left;
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
  }
}
</style>
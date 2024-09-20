<template>
  <div
    :class="[
      'h-full bg-zinc-100 sidebar-container',
      showSidebar ? 'w-full' : 'w-12',
    ]"
  >
    <div class="accordion-container w-full pt-4">
      <accordion-component
        v-for="accordion in sidebarData.sidebarContents"
        :key="accordion.title"
        :text="accordion.title"
        :prepend-icon="accordion.icon"
        toggle-button-style="py-2.5 pr-4 font-bold"
        container-style="border-b border-b-zinc-200"
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
    <div
      v-if="showSidebar"
      class="pt-5 pb-4 pl-4 absolute right-0 bottom-0 left-0 bg-zinc-100"
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
import { computed, ref } from "vue";

import UIdata from "@/Json/UIdata.json";

import AccordionComponent from "@/components/AccordionComponent.vue";

const showSidebar = ref<boolean>(true);

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

  .accordion-container {
    padding-bottom: 70px;
    height: 100%;
    overflow-y: scroll;
  }

  &__label {
    display: block;
    text-align: left;
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
  }
}
</style>
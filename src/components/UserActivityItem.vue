<template>
  <div
    class="flex justify-between mr-px py-2 pr-0.5 pl-4 items-center border-l-2 border-[rgb(3,169,244)] font-normal shadow-[0_1px_4px_0_rgba(0,0,0,0.149)]"
  >
    <span class="text-[13px]">{{ props.activityTitle }}</span>
    <div class="flex">
      <div class="flex flex-col gap-[5px] px-2.5 text-[rgba(0,0,0,0.6)]">
        <span class="text-xs">{{ props.date }}</span>
        <span class="text-xs">{{ props.userName }}</span>
      </div>
      <v-icon class="py-[5px] px-2 !text-base"> {{ props.appendIcon }} </v-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  activityTitle: string;
  date: string;
  userName: string;
  appendIcon: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex items-center">
    <v-icon v-if="props.prependIcon" class="!text-base/4 !text-slate-400 p-1.5">
      {{ props.prependIcon }}
    </v-icon>
    <div :class="['font-normal', 'list-text', props.textContainerStyle]">
      <span v-if="props.text" class="text-2xs">
        {{ props.text }}
      </span>
      <span v-if="props.linkText" :class="['text-xs', props.linkTextStyle]">
        {{ props.linkText }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  prependIcon?: string;
  text?: string;
  linkText?: string;
  linkTextStyle?: string;
  textContainerStyle?: string;
}

const props = defineProps<Props>();

//<text-component prependIcon="mdi-phone" textContainerStyle="px-3 py-2.5"  linkText="CTO" />
//<text-component textContainerStyle="px-3 pb-1" text="Position" linkText="CTO" linkTextStyle="text-blue-600"/>
</script>

<style scoped lang="scss">
.list-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 5px;
  font-weight: 400;
}
</style>
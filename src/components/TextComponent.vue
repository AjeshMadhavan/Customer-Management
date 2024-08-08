<template>
  <div class="flex items-center">
    <v-icon
      v-if="props.prependIcon"
      class="!text-base/4 !text-slate-400 p-[5px]"
    >
      {{ props.prependIcon }}
    </v-icon>
    <div
      :class="[
        'flex',
        'flex-col',
        'items-start',
        'justify-center',
        'gap-y-[5px]',
        'font-normal',
        props.textContainerStyle,
      ]"
    >
      <span v-if="props.text" class="text-[10px]/[10px]">
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

//<text-component prependIcon="mdi-phone" textContainerStyle="px-3 py-[9px]"  linkText="CTO" />
//<text-component textContainerStyle="px-3 pb-[3px]" text="Position" linkText="CTO" linkTextStyle="text-blue-600"/>
</script>
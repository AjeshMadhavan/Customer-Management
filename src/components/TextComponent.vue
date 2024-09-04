<template>
  <div class="flex items-center">
    <v-icon
      v-if="props.prependIcon"
      :class="['!text-base/4', '!text-slate-400', 'p-1.5', prependIconStyle]"
    >
      {{ props.prependIcon }}
    </v-icon>
    <div
      :class="[
        'font-normal',
        'text-container',
        { 'flex-col !items-start': isDirectionColumn },
      ]"
    >
      <span v-if="props.label" class="text-2xs pr-1">
        {{ props.label }}
      </span>
      <span v-if="props.text" :class="['text-xs', props.textStyle]">
        {{ props.text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  isDirectionColumn?: boolean;
  label?: string;
  prependIcon?: string;
  prependIconStyle: string;
  text: string;
  textStyle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isDirectionColumn: false,
  label: "",
  prependIcon: "",
  prependIconStyle: "",
  textStyle: "",
});

//<text-component prependIcon="mdi-phone" textContainerStyle="px-3 py-2.5"  linkText="CTO" />
//<text-component textContainerStyle="px-3 pb-1" text="Position" linkText="CTO" linkTextStyle="text-blue-600"/>
</script>

<style scoped lang="scss">
.text-container {
  display: flex;
  align-items: center;
  row-gap: 5px;
  font-weight: 400;
}
</style>
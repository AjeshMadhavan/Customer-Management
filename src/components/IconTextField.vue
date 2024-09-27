<template>
  <div :class="['flex', isVertically ? 'flex-col items-start' : 'items-center']">
    <v-icon
      v-if="props.prependIcon"
      :class="['prepend-icon p-1.5', prependIconStyle]"
    >
      {{ props.prependIcon }}
    </v-icon>
    <div :class="['font-normal text-container', isVertically ? 'flex-col items-start' : 'items-center']">
      <span v-if="props.label" class="text-2xs pr-1">
        {{ props.label }}
      </span>
      <span v-if="props.text" :class="props.textStyle">
        {{ props.text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  text: string;
  isVertically?: boolean;
  label?: string;
  prependIcon?: string;
  prependIconStyle?: string;
  textStyle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  isVertically: false,
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
  row-gap: 5px;
  font-weight: 400;
}

.prepend-icon {
  font-size: 16px;
  line-height: 16px;
  color: rgb(148 163 184);
}
</style>
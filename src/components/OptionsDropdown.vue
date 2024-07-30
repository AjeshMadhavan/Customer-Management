<template>
  <div class="relative">
    <button
      :class="[
        'text-[13px]',
        'tracking-[.52px]',
        'rounded-sm',
        'min-w-max',
        'h-fit',
        'flex',
        'items-center',
        props.optionButtonStyle,
      ]"
      text
      @click="toggleOptions"
      @focusout="toggleOptions"
    >
      <span class="uppercase">{{ props.text }}</span>
      <v-icon class="!text-[16px] ml-1">
        {{ props.icon }}
      </v-icon>
    </button>
    <slot name="options-slot" v-if="shouldShowOptions" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults } from "vue";

interface Props {
  optionButtonStyle?: string;
  icon?: string;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: "mdi-menu-down",
});

const shouldShowOptions = ref<boolean>(false);

const toggleOptions = () => {
  shouldShowOptions.value = !shouldShowOptions.value;
};

/**
 * ---------- using this component --------
 * <options-dropdown
      text="hi mone"
      optionButtonStyle="!py-[5px] !pr-2 !pl-3 font-medium focus:bg-[rgba(0,0,0,0.08)] hover:bg-[rgba(0,0,0,0.08)]"
    >
      <template v-slot:options-slot>
        <ul class="shadow-[0_2px_4px_rgba(0,0,0,0.2)] p-px absolute">
          <li
            v-for="item in content"
            :key="item"
            class="first:mt-1 hover:bg-[rgba(0,0,0,0.04)] pt-2.5 px-[11px] pb-[9px] cursor-pointer text-[13px] leading-4 text-left capitalize"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </options-dropdown>
 */
</script>
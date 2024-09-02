<template>
  <div :class="['dropdown-menu', props.dropdownContainerStyle]">
    <button
      @click="toggleDropdownItems"
      :class="['toggle-button', props.dropdownButtonStyle]"
    >
      <div class="toggle-button__title flex justify-start items-center">
        <v-icon v-if="props.prependIcon" class="prepend-icon">
          {{ props.prependIcon }}
        </v-icon>
        <span>{{ props.text }}</span>
      </div>
      <v-icon class="arrow-icon"> {{ dropdownArrow }} </v-icon>
    </button>
    <slot name="item-slot" v-if="showDropdownItems" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref, withDefaults } from "vue";

interface Props {
  dropdownButtonStyle?: string;
  dropdownContainerStyle?: string;
  prependIcon?: string;
  text: string;
}

const props = withDefaults(defineProps<Props>(), {
  dropdownButtonStyle: "",
  dropdownContainerStyle: "",
  prependIcon: "",
});

const showDropdownItems = ref<boolean>(false);

const toggleDropdownItems = () => {
  showDropdownItems.value = !showDropdownItems.value;
};

const dropdownArrow = computed(() => {
  if (props.prependIcon) {
    return showDropdownItems.value ? "mdi-chevron-down" : "mdi-chevron-right";
  } else {
    return showDropdownItems.value ? "mdi-chevron-up" : "mdi-chevron-down";
  }
});
</script>

<style lang="scss" scoped>
.dropdown-menu {
  width: 100% !important;
  height: max-content;

  .toggle-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    line-height: 16px;

    &__title {
      width: 100%;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }

    .prepend-icon {
      min-width: 48px;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.87);
    }

    .arrow-icon {
      font-size: 18px;
    }
  }
}

// <dropdown-component
//   text="CRM"
//   prependIcon="mdi-magnify"
//   :dropdownButtonStyle="buttonStyle1"
//   :dropdownContainerStyle="container1"
// >
//   <template v-slot:item-slot>
//     <ul>
//       <li
//         v-for="option in content.options"
//         :key="option.text"
//         class="dropdown-item pt-2.5 pr-4 pb-2.5 pl-12 cursor-pointer"
//       >
//         {{ option.text }}
//       </li>
// </ul>
//   </template>
// </dropdown-component>

// const buttonStyle1 = '!font-bold pt-2.5 pr-4 pb-2.5'
// const container2 = 'bg-white dropdown-shadow'
</style>
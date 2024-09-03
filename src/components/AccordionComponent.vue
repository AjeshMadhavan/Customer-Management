<template>
  <div :class="['dropdown-menu', props.accordionContainerStyle]">
    <button
      @click="toggleDropdownItems"
      :class="['toggle-button', props.accordionButtonStyle]"
    >
      <div class="toggle-button__title flex justify-start items-center">
        <v-icon v-if="props.prependIcon" class="prepend-icon">
          {{ props.prependIcon }}
        </v-icon>
        <span>{{ props.text }}</span>
      </div>
      <v-icon class="arrow-icon"> {{ dropdownArrow }} </v-icon>
    </button>
    <div
      class="slot-container"
      ref="dropdownContent"
      :style="dropdownContentStyle"
    >
      <slot name="item-slot" class="slot-items" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref, withDefaults, onMounted } from "vue";

interface Props {
  accordionButtonStyle?: string;
  accordionContainerStyle?: string;
  prependIcon?: string;
  text: string;
}

const props = withDefaults(defineProps<Props>(), {
  accordionButtonStyle: "",
  accordionContainerStyle: "",
  prependIcon: "",
});

const showDropdownItems = ref<boolean>(true);
const dropdownContent = ref<HTMLDivElement | null>(null);
let dropdownContentHeight = ref<number | undefined>(
  dropdownContent.value?.offsetHeight
);

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

const dropdownContentStyle = computed(() => {
  if (showDropdownItems.value) {
    return {
      height: dropdownContentHeight.value + "px",
    };
  }

  return { height: 0 };
});

onMounted(() => {
  dropdownContentHeight.value = dropdownContent.value?.offsetHeight;
  showDropdownItems.value = false;
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

  .slot-container {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
  }
}

// <dropdown-component
//   text="CRM"
//   prependIcon="mdi-magnify"
//   :accordionButtonStyle="buttonStyle1"
//   :accordionContainerStyle="container1"
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
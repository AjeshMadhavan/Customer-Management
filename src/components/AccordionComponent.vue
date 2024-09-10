<template>
  <div :class="['accordion-menu', props.containerStyle]">
    <button
      @click="toggleAccordionContent"
      :class="['toggle-button', props.toggleButtonStyle]"
    >
      <div class="toggle-button__title flex justify-start items-center">
        <v-icon v-if="props.prependIcon" class="prepend-icon">
          {{ props.prependIcon }}
        </v-icon>
        <span>{{ props.text }}</span>
      </div>
      <v-icon class="arrow-icon"> {{ toggleArrow }} </v-icon>
    </button>
    <div
      class="slot-container"
      ref="accordionContentElement"
      :style="accordionContentStyle"
    >
      <slot name="content-slot" class="slot-content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref, withDefaults, onMounted } from "vue";

interface Props {
  text: string;
  containerStyle?: string;
  prependIcon?: string;
  toggleButtonStyle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  containerStyle: "",
  prependIcon: "",
  toggleButtonStyle: "",
});

const showAccordionContent = ref<boolean>(true);
const accordionContentElement = ref<HTMLDivElement | null>(null);
let accordionContentHeight = ref<number | undefined>(
  accordionContentElement.value?.offsetHeight
);

const toggleAccordionContent = () => {
  showAccordionContent.value = !showAccordionContent.value;
};

const toggleArrow = computed(() => {
  if (props.prependIcon) {
    return showAccordionContent.value ? "mdi-chevron-down" : "mdi-chevron-right";
  } else {
    return showAccordionContent.value ? "mdi-chevron-up" : "mdi-chevron-down";
  }
});

const accordionContentStyle = computed(() => {
  if (showAccordionContent.value) {
    return {
      height: accordionContentHeight.value + "px",
    };
  }

  return { height: 0 };
});

onMounted(() => {
  accordionContentHeight.value = accordionContentElement.value?.offsetHeight;
  showAccordionContent.value = false;
});
</script>

<style lang="scss" scoped>
.accordion-menu {
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

// <accordion-component
//   text="CRM"
//   prependIcon="mdi-magnify"
//   :toggleButtonStyle="buttonStyle1"
//   :containerStyle="container1"
// >
//   <template v-slot:item-slot>
//     <ul>
//       <li
//         v-for="option in content.options"
//         :key="option.text"
//         class="accordion-item pt-2.5 pr-4 pb-2.5 pl-12 cursor-pointer"
//       >
//         {{ option.text }}
//       </li>
// </ul>
//   </template>
// </accordion-component>

// const buttonStyle1 = '!font-bold pt-2.5 pr-4 pb-2.5'
// const container2 = 'bg-white dropdown-shadow'
</style>
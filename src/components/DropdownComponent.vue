<template>
  <div :class="['dropdown-menu', className]">
    <button class="toggle-button flex justify-between items-center" @click="toggleDropdownItems">
      <div class="toggle-button__title flex justify-start items-center ">
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
import { ref, computed, defineProps } from "vue";

import { DropdownStyles } from "@/Type/Enums";

interface Props {
  dropdownStyle?: string;
  prependIcon?: string;
  text: string;
}

const props = defineProps<Props>();

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

const className = computed(() => {
  switch (props.dropdownStyle) {
    case DropdownStyles.DropdownWithIcon:
      return "dropdown-with-icon";
    case DropdownStyles.DropdownWithoutIcon:
      return "dropdown-without-icon";
    default:
      return "";
  }
});
</script>

<style lang="scss" scoped>
.dropdown-menu {
  width: 100%;
  height: max-content;
  font-family: "roboto", sans-serif;

  .toggle-button {
    width: 100%;

    &__title {
      width: 100%;
      font-size: 13px;
    }

    .arrow-icon {
      font-size: 18px;
    }
  }
}

/**sidebar dropdown menu */
.dropdown-with-icon {
  background-color: transparent;

  .toggle-button {
    padding: 9px 16px 9px 0;

    .prepend-icon {
      min-width: 48px;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.87);
    }

    &__title {
      font-size: 13px;
      font-weight: 700;
    }

    &.hover-effect {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
}

/**user oppertunities dropdown menu*/
.dropdown-without-icon {
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  .toggle-button {
    padding: 6px 10px 6px 11px;
    min-height: 40px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &:focus {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &__title {
      font-weight: 400;
    }
  }
}
</style>

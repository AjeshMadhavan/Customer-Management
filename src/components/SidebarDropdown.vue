<template>
  <div :class="['dropdown-menu', dropdownVariant]">
    <button
      :class="[
        'toggle-button',
        {
          'hover-effect': shouldAddHoverClass,
        },
      ]"
      @click="toggleDropdownItems"
      @focusout="hideDropdownItems"
      @mouseover="toggleHoverClass(ToggleHoverClassPatameters.MouseOver)"
      @mouseout="toggleHoverClass(ToggleHoverClassPatameters.MouseOut)"
    >
      <div class="toggle-button__title">
        <v-icon
          v-if="props.variant === SidebarDropdownVariants.SidebarDropdown"
          class="prepend-icon"
        >
          {{ props.dropdownContents.icon }}
        </v-icon>
        <span>{{ props.dropdownContents.title }}</span>
        <v-icon
          v-if="props.variant === SidebarDropdownVariants.PrimaryDropdown"
          class="append-icon"
        >
          {{ props.dropdownContents.icon }}
        </v-icon>
      </div>
      <v-icon class="append-icon"> {{ dropdownArrow }} </v-icon>
      <ul
        v-if="showDropdownItems"
        class="dropdown-items"
        @click.stop
        @mouseover.stop
        @mouseout.stop
      >
        <li
          v-for="option in dropdownOptions"
          :key="option.text"
          class="dropdown-item"
        >
          <span v-if="isUserOpertunitiesVariant">
            {{ option.text }} <br />
            {{ option.price }}
          </span>
          <span v-else>
            {{ option.text }}
          </span>
        </li>
      </ul>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";

import {
  SidebarDropdownVariants,
  ToggleHoverClassPatameters,
} from "@/Type/Enums";

const props = defineProps({
  variant: {
    type: String,
    default: SidebarDropdownVariants.SidebarDropdown,
  },
  dropdownContents: {
    default: Object,
  },
});

const showDropdownItems = ref<boolean>(false);
const shouldAddHoverClass = ref<boolean>(false);

const toggleDropdownItems = () => {
  showDropdownItems.value = !showDropdownItems.value;
};

const hideDropdownItems = () => {
  if (!isUserOpertunitiesVariant.value) {
    showDropdownItems.value = false;
  }
};

const toggleHoverClass = (mouseEvent: string) => {
  if (
    mouseEvent === ToggleHoverClassPatameters.MouseOver &&
    props.variant === SidebarDropdownVariants.SidebarDropdown
  ) {
    shouldAddHoverClass.value = true;
  } else {
    shouldAddHoverClass.value = false;
  }
};

const dropdownArrow = computed(() => {
  if (props.variant === SidebarDropdownVariants.SidebarDropdown) {
    return showDropdownItems.value ? "mdi-chevron-down" : "mdi-chevron-right";
  } else if (props.variant === SidebarDropdownVariants.PrimaryDropdown) {
    return "mdi-chevron-down";
  } else {
    return showDropdownItems.value ? "mdi-chevron-up" : "mdi-chevron-down";
  }
});

const dropdownOptions = computed(() => props.dropdownContents?.options);

const isUserOpertunitiesVariant = computed(() => {
  return props.variant === SidebarDropdownVariants.UserOppertunitiesDropdown;
});

const dropdownVariant = computed(() => {
  switch (props.variant) {
    case SidebarDropdownVariants.SidebarDropdown:
      return "sidebar-dropdown";
    case SidebarDropdownVariants.UserOppertunitiesDropdown:
      return "user-oppertunities-dropdown";
    case SidebarDropdownVariants.PrimaryDropdown:
      return "primary-dropdown";
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;

    &__title {
      width: 100%;
      font-size: 13px;
      display: flex;
      justify-self: start;
      align-items: center;
    }

    .append-icon {
      font-size: 18px;
    }
  }

  .dropdown-items {
    position: absolute;
    top: 36px;
    left: 0;
    width: 100%;
  }

  .dropdown-item {
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    text-transform: capitalize;
    cursor: pointer;
    list-style-type: none;
  }
}

/**sidebar dropdown menu */
.sidebar-dropdown {
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

  .dropdown-items {
    transition: height 2s ease;
  }

  .dropdown-item {
    padding: 9px 16px 9px 48px;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    background-color: #fff;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);

      .toggle-button:hover {
        background-color: red !important;
      }
    }
  }
}

/**user oppertunities dropdown menu*/
.user-oppertunities-dropdown {
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

  .dropdown-items {
    padding: 11px;
  }

  .dropdown-item {
    padding: 0;
    padding-bottom: 10px;
    cursor: default;
  }
}

/*Primary Dropdown */
.primary-dropdown {
  width: 70px;
  position: relative;

  .toggle-button {
    padding: 5px 8px 5px 12px;
    height: 28px;

    &__title {
      font-weight: 600;
      letter-spacing: 0.52px;

      .append-icon {
        margin-left: 4px;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    &:focus {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  .dropdown-items {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 2px;
    padding: 1px;
    position: absolute;
    top: 0;
    left: 0;
    width: max-content;
    transform: translate(0, 28px);
    box-sizing: content-box;
  }

  .dropdown-item {
    padding: 10px 11px 9px 11px;
    white-space: nowrap;

    &:first-child {
      margin-top: 4px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
}
</style>
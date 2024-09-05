<template>
  <div class="relative w-max" ref="dropdownContainer">
    <button
      :class="['dropdown-button', props.toggleButtonStyle]"
      @click.stop="toggleOptions(!shouldShowOptions)"
    >
      <div class="flex items-center">
        <v-icon class="mr-1 !text-base/4">{{ props.icon }}</v-icon>
        <img
          v-if="props.imageUrl"
          :src="props.imageUrl"
          class="dropdown-image mr-1"
          alt="dropdown image"
        />
        <span v-if="props.text" class="dropdown-title">
          {{ props.text }}
        </span>
      </div>
      <v-icon v-if="!hideToggleArrow" class="!text-base/4 ml-1">
        mdi-menu-down
      </v-icon>
    </button>
    <div
      v-if="shouldShowOptions"
      :class="[
        'absolute shadow-md bg-white',
        {
          'left-0': contentPosition === DropdownContentPosition.Left,
          'right-0': contentPosition === DropdownContentPosition.Right,
        },
      ]"
    >
      <ul class="w-max">
        <li
          v-for="dropdownItem in dropdownContent"
          :key="dropdownItem.text"
          :class="[
            'dropdown-item',
            { 'hover:bg-black-04 cursor-pointer': !dropdownItem.disableHover },
          ]"
        >
          <v-icon v-if="dropdownItem.prependIcon" class="dropdown-item__icon">
            {{ dropdownItem.prependIcon }}
          </v-icon>
          <span>{{ dropdownItem.text }}</span>
          <v-icon v-if="dropdownItem.appendIcon" class="dropdown-item__icon">
            {{ dropdownItem.appendIcon }}
          </v-icon>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, withDefaults } from "vue";

import { DropdownContentPosition } from "../constants";

interface DropdownContent {
  text: string;
  appendIcon?: string;
  prependIcon?: string;
}

interface Props {
  dropdownContent: DropdownContent[];
  contentPosition?: string;
  hideToggleArrow?: boolean;
  icon?: string;
  imageUrl?: string;
  text?: string;
  toggleButtonStyle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  contentPosition: DropdownContentPosition.Left,
  hideToggleArrow: false,
  icon: "",
  imageUrl: "",
  text: "",
  toggleButtonStyle: "",
});

const shouldShowOptions = ref<boolean>(false);
const dropdownContainer = ref<HTMLDivElement | null>(null);

const toggleOptions = (toggleValue: boolean) => {
  shouldShowOptions.value = toggleValue;
};

document.addEventListener("click", (event: Event) => {
  if (!dropdownContainer.value?.contains(event?.target))
    shouldShowOptions.value = false;
});
</script>

<style lang="scss" scoped>
.dropdown-button {
  width: 100%;
  font-size: 13px;
  letter-spacing: 0.52px;
  display: flex;
  align-items: center;
}

.dropdown-image {
  width: 28px;
  height: 28px;
  border: 1px solid rgb(224, 224, 224);
  object-fit: cover;
  object-position: 50% 0%;
  border-radius: 50%;

  &:hover {
    border-color: rgb(3, 169, 244);
    color: hsla(0, 0%, 0%, 0.078);
  }
}

.dropdown-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
}

.dropdown-container {
  width: max-content;
}

.dropdown-item {
  padding: 10px 11px 9px;
  font-size: 13px;
  font-weight: 400;
  text-align: left;

  &:first-child {
    margin-top: 4px;
  }

  &:last-child {
    margin-bottom: 4px;
  }

  &__icon {
    width: 29px;
    font-size: 18px;
    justify-content: left;
  }
}
</style>
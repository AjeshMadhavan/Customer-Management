<template>
  <div class="relative w-full" @click.stop>
    <button
      :class="['dropdown-button', props.optionButtonStyle]"
      @click.stop="toggleOptions(!shouldShowOptions)"
    >
      <div class="flex items-center">
        <v-icon class="mr-1 !text-base/4">{{ props.icon }}</v-icon>
        <img
          v-if="props.imageUrl"
          :src="props.imageUrl"
          class="profile-image mr-1"
          alt="user profile"
        />
        <span v-if="props.text" class="dropdown-title">
          {{ props.text }}
        </span>
      </div>
      <v-icon v-if="!hideToggleArrow" class="!text-base/4 ml-1">
        mdi-menu-down
      </v-icon>
    </button>
    <slot name="optionsSlot" v-if="shouldShowOptions" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, withDefaults } from "vue";

interface Props {
  hideToggleArrow?: boolean;
  icon?: string;
  imageUrl?: string;
  optionButtonStyle?: string;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  hideToggleArrow: false,
  icon: "",
  imageUrl: "",
  optionButtonStyle: "",
  text: "",
});

const shouldShowOptions = ref<boolean>(false);

const toggleOptions = (toggleValue: boolean) => {
  shouldShowOptions.value = toggleValue;
};

window.addEventListener("click", () => {
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

.profile-image {
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

//  * ---------- using this component --------
// <options-dropdown
// text="Options"
// optionButtonStyle="!py-1 !pr-2 !pl-3 font-medium focus:bg-neutral-100 hover:neutral-100"
// >
//   <template v-slot:optionsSlot>
//     <ul class="shadow-dropdown p-px absolute">
//       <li
//         v-for="item in content"
//         :key="item"
//         class="first:mt-1 hover:bg-neutral-50 pt-2.5 px-3 pb-2 cursor-pointer text-xs leading-4 text-left capitalize"
//       >
//         {{ item }}
//       </li>
//     </ul>
//   </template>
// </options-dropdown>
</style>
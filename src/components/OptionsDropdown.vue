<template>
  <div class="relative w-max" @click.stop>
    <button
      :class="['dropdown-button', props.optionButtonStyle]"
      @click.stop="toggleOptions(!shouldShowOptions)"
    >
      <span v-if="props.text" class="uppercase">{{ props.text }}</span>
      <img
        v-if="props.imageUrl"
        :src="props.imageUrl"
        class="profile-image"
        alt="user profile"
      />
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
  imageUrl?: string;
  optionButtonStyle?: string;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  appendIcon: "",
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
<template>
  <div class="relative w-max">
    <button
      :class="['dropdown-button', props.optionButtonStyle]"
      text
      @click="toggleOptions"
      @focusout="toggleOptions"
    >
      <span v-if="props.text" class="uppercase">{{ text }}</span>
      <img v-if="props.imageUrl" :src="props.imageUrl" class="profile-image" />
      <v-icon v-if="props.appendIcon" class="!text-base/4 ml-1">
        {{ props.appendIcon }}
      </v-icon>
    </button>
    <slot name="optionsSlot" v-if="shouldShowOptions" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";

interface Props {
  optionButtonStyle?: string;
  appendIcon?: string;
  text?: string;
  imageUrl?: string;
}

const props = defineProps<Props>();

const shouldShowOptions = ref<boolean>(false);

const toggleOptions = () => {
  shouldShowOptions.value = !shouldShowOptions.value;
};
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
  }
}

//  * ---------- using this component --------
// <options-dropdown
// text="Options"
// optionButtonStyle="!py-[5px] !pr-2 !pl-3 font-medium focus:bg-[rgba(0,0,0,0.08)] hover:bg-[rgba(0,0,0,0.08)]"
// >
//   <template v-slot:options-slot>
//     <ul class="shadow-[0_2px_4px_rgba(0,0,0,0.2)] p-px absolute">
//       <li
//         v-for="item in content"
//         :key="item"
//         class="first:mt-1 hover:bg-[rgba(0,0,0,0.04)] pt-2.5 px-[11px] pb-[9px] cursor-pointer text-[13px] leading-4 text-left capitalize"
//       >
//         {{ item }}
//       </li>
//     </ul>
//   </template>
// </options-dropdown>
</style>
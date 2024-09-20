<template>
  <div class="header-section w-full relative py-2.5">
    <div class="flex items-center">
      <custom-button
        button-style="shadow-none !mx-2.5 custom-button"
        :icon="headerData.icons.hamburgerIcon"
        @click="handleToggleButtonClick"
      />
      <h1 class="font-medium header-title">{{ headerData.title }}</h1>
    </div>
    <div class="flex items-center justify-end">
      <search-input
        :placeholder="headerData.searchBoxLabel"
        prepend-icon="mdi-magnify"
        class="pl-1.5 search-input"
      />
      <custom-button
        button-style="shadow-none ml-1 custom-button"
        :icon="headerData.icons.themeSwitchingIcon"
      />
      <custom-button
        button-style="shadow-none ml-1 custom-button"
        :icon="headerData.icons.notificationIcon"
      />
      <options-dropdown
        class="pl-2.5 w-max"
        :content-position="DropdownContentPosition.Right"
        :dropdown-content="headerData.userProfile.options"
        :icon="profileIcon"
        :image-url="profileImage"
        should-hide-toggle-arrow
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, onMounted, ref } from "vue";

import UiData from "@/Json/UIdata.json";
import { DropdownContentPosition } from "@/constants";

import UserProfileImage from "@/assets/userProfileImage.png";
import CustomButton from "@/components/CustomButton.vue";
import SearchInput from "@/components/SearchInput.vue";
import OptionsDropdown from "@/components/OptionsDropdown.vue";

const emits = defineEmits<{
  (e: "toggle-button-click", value: Event): void;
}>();

const profileIcon = ref<string>("");
const profileImage = ref<string>("");
const windowWidth = 536;

const headerData = computed(() => UiData.topPanel);

const setProfileIcon = () => {
  profileImage.value = window.innerWidth <= windowWidth ? "" : UserProfileImage;
  profileIcon.value = window.innerWidth <= windowWidth ? "mdi-dots-vertical" : "";
};

const handleToggleButtonClick = (event: Event) => {
  emits("toggle-button-click", event);
};

window.addEventListener("resize", () => setProfileIcon());

onMounted(() => setProfileIcon());
</script>

<style lang="scss" scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
  height: 58px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 0 0 4px rgba(0, 0, 0, 0.15);

  .header-title {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
  }

  .search-input {
    max-width: 191px;
    padding-right: 11px;

    @media (max-width: 531px) {
      display: none;
    }
  }

  .custom-button {
    background-color: transparent;
    font-size: 16px;
    line-height: 16px;
  }
}
</style>
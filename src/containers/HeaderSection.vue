<template>
  <div class="header-section w-full py-2.5">
    <div class="flex items-center">
      <custom-button
        button-style="shadow-none !mx-2.5"
        :icon="headerData.icons.hamburgerIcon"
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
        button-style="shadow-none ml-1"
        :icon="headerData.icons.themeSwitchingIcon"
      />
      <custom-button
        button-style="shadow-none ml-1"
        :icon="headerData.icons.notificationIcon"
      />
      <options-dropdown
        class="pl-2.5 w-max"
        :content-position="DropdownContentPosition.Right"
        :dropdown-content="headerData.userProfile.options"
        :icon="profileIcon"
        :image-url="profileImage"
        :hide-toggle-arrow="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import UiData from "@/Json/UIdata.json";
import { DropdownContentPosition } from "@/constants";

import UserProfileImage from "@/assets/userProfileImage.png";
import CustomButton from "@/components/CustomButton.vue";
import SearchInput from "@/components/SearchInput.vue";
import OptionsDropdown from "@/components/OptionsDropdown.vue";

const profileIcon = ref<string>("");
const profileImage = ref<string>("");
const windowWidth = 536

const headerData = computed(() => UiData.topPanel);

const setProfileIcon = () => {
  profileImage.value = window.innerWidth <= windowWidth ? "" : UserProfileImage;
  profileIcon.value = window.innerWidth <= windowWidth ? "mdi-dots-vertical" : "";
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
}
</style>
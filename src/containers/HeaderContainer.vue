<template>
  <div class="header-section w-full py-2.5">
    <div class="title-section">
      <div class="w-12">
        <custom-button
          button-style="shadow-none custom-button"
          :icon="headerData.icons.hamburgerIcon"
          @click="handleToggleButtonClick"
        />
      </div>
      <h1 class="font-medium header-title">{{ headerData.title }}</h1>
    </div>
    <div class="flex items-center justify-end w-full">
      <search-input
        :placeholder="headerData.searchBoxLabel"
        prepend-icon="mdi-magnify"
        class="pl-1.5 search-input"
      />
      <div class="min-w-7 ml-1.25">
        <custom-button
          button-style="shadow-none custom-button"
          :icon="headerData.icons.themeSwitchingIcon"
        />
      </div>
      <div class="min-w-7 ml-1.25">
        <custom-button
          button-style="shadow-none custom-button"
          :icon="headerData.icons.notificationIcon"
        />
      </div>
      <div>
        <options-dropdown
          class="pl-1.25 w-fit"
          :content-position="DropdownContentPosition.Right"
          :dropdown-content="headerData.userProfile.options"
          :toggle-button-style="headerStyle.dropdownToggleButton"
          :icon="headerStyle.profileIcon"
          :image-url="headerStyle.profileImage"
          should-hide-toggle-arrow
        />
      </div>
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

interface HeaderStyle {
  profileIcon: string;
  profileImage: string;
  dropdownToggleButton: string;
}

const headerStyle = ref<HeaderStyle>({
  profileIcon: "",
  profileImage: "",
  dropdownToggleButton: "",
});

const windowWidth = 536;

const headerData = computed(() => UiData.topPanel);

const onWindowResize = () => {
  if (window.innerWidth <= windowWidth) {
    headerStyle.value.profileIcon = "mdi-dots-vertical";
    headerStyle.value.dropdownToggleButton = "px-1.25 text-black";
    headerStyle.value.profileImage = "";
  } else {
    headerStyle.value.profileImage = UserProfileImage;
    headerStyle.value.profileIcon = "";
    headerStyle.value.dropdownToggleButton = "";
  }
};

const handleToggleButtonClick = (event: Event) => {
  emits("toggle-button-click", event);
};

onMounted(() => {
  onWindowResize();
  window.addEventListener("resize", () => onWindowResize());
});
</script>

<style lang="scss" scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
  height: 58px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 0 0 4px rgba(0, 0, 0, 0.15);

  .title-section {
    width: max-content;
    display: flex;
    align-items: center;

    @media (max-width: 550px) {
      width: calc(100% - 78px);
    }
  }

  .header-title {
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .search-input {
    max-width: 192px;
    padding-right: 12px;
    border-radius: 0;

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
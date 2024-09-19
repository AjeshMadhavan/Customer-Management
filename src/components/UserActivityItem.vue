<template>
  <div
    class="user-activity mr-px py-2 pr-0.5 pl-4 border-l-2 font-normal w-full"
  >
    <span class="user-activity__title text-left w-full">
      {{ props.userActivity.activity }}
    </span>
    <div class="flex items-center">
      <div class="user-activity__details px-2.5">
        <span class="text-xs">
          {{ props.userActivity.date }}
        </span>
        <span class="text-xs whitespace-nowrap">
          {{ props.userActivity.assignedUser }}
        </span>
      </div>
      <options-dropdown
        :content-position="DropdownContentPosition.Right"
        :dropdown-content="userActivityMenu.options"
        should-hide-toggle-arrow
        :icon="userActivityMenu.icon"
        toggle-button-style="py-1.5 px-2 rounded-sm"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

import { UserActivity, UserActivitiesMenu } from "@/Type/Types";
import { DropdownContentPosition } from "@/constants";

import OptionsDropdown from "@/components/OptionsDropdown.vue";

interface Props {
  userActivity: UserActivity;
  userActivityMenu: UserActivitiesMenu;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.user-activity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-color: rgb(3, 169, 244);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.149);

  &__title {
    font-size: 13px;
    line-height: 16px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
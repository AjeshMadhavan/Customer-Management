<template>
  <div class="user-details relative">
    <div
      class="flex justify-between items-center p-2 pl-4 fixed user-details__header"
    >
      <div class="flex items-center">
        <h2 class="mr-2 pr-1.25 text-3xs/4 font-bold">
          {{ props.userData.name }}
        </h2>
        <icon-text-field
          :class="`${userStatusClass[props.userData.status.toLowerCase()]}`"
          :text="props.userData.status"
          text-style="text-inherit text-3xs"
          prepend-icon="mdi-circle"
          prepend-icon-style="p-0 mr-1.25 status-prepend-icon"
        />
      </div>
      <div class="flex items-center justify-end gap-x-1.5">
        <div class="w-7">
          <custom-button
            icon="mdi-pin-outline"
            button-style="shadow-none -rotate-90 header-button"
          />
        </div>
        <div class="w-7">
          <custom-button
            :icon="containerData.icons.close"
            button-style="shadow-none header-button"
            @click="handleCloseButtonClick"
          />
        </div>
      </div>
    </div>
    <div class="user-details__contents">
      <div class="px-4 border-b border-b-zinc-200">
        <div class="flex gap-x-5 items-start">
          <img
            :src="props.userData.imageUrl"
            class="user-details__image object-cover object-top rounded-lg border border-solid border-grey-400"
          />
          <ul class="pl-3">
            <li
              v-for="jobDetail in jobDetails"
              :key="jobDetail.key"
              class="pt-2.5 md:pt-5 first:pt-0 min-h-8"
            >
              <icon-text-field
                class="min-h-8"
                :label="jobDetail.key"
                :text="jobDetail.value"
                is-vertically
                :text-style="`text-xs leading-3.25
                  ${jobDetail.shouldAddColor ? 'text-light-blue-500' : ''}`"
              />
            </li>
          </ul>
        </div>
        <ul class="pt-5 pb-3.75 md:py-3.75">
          <li
            v-for="personalDetail in personalDetails"
            :key="personalDetail.value"
            class="pt-2.5 md:pt-5 first:pt-0 min-h-8"
          >
            <icon-text-field
              class="min-h-8"
              :prepend-icon="personalDetail.prependIcon"
              :prepend-icon-style="personalDetail.prependIconStyle"
              :text="personalDetail.value"
              text-style="text-xs leading-3.25"
            />
          </li>
        </ul>
      </div>
      <div
        class="flex items-center justify-between py-2.5 px-4 border-b border-zinc-200 mb-6"
      >
        <div
          class="flex items-center justify-center sm:pr-3 user-details__navigation-panel"
        >
          <options-dropdown
            :text="containerData.actionsButton.title"
            :dropdown-content="containerData.actionsButton.options"
            toggle-button-style="pt-1.5 pb-1.25 sm:pr-2 pl-2 min-h-7 font-semibold"
          />
        </div>
        <div
          class="flex items-center justify-end pl-3.75 user-details__navigation-panel"
        >
          <custom-button
            :text="containerData.editButtonTitle.title"
            :icon="containerData.editButtonTitle.icon"
            button-style="font-medium action-button min-h-7 shadow-md"
          />
          <custom-button
            :text="containerData.detailsButtonTitle"
            :variant="ButtonVariants.Outlined"
            button-style="font-medium action-button min-h-7 border-gray-300  "
          />
        </div>
      </div>
      <div class="user-details__selection-panel">
        <accordion-component
          :text="containerData.userOpportunitiesTitle"
          toggle-button-style="py-1.5 pr-2.5 pl-2.75 h-10"
          container-style="shadow-md"
        >
          <template #content-slot>
            <ul class="p-2.75">
              <li
                v-for="userOpportunity in props.userData.userOpportunities"
                :key="userOpportunity.text"
                class="text-left pb-2.5 text-3xs h-min"
              >
                <span>{{ userOpportunity.text }}</span> <br />
                <span>{{ userOpportunity.price }}</span>
              </li>
            </ul>
          </template>
        </accordion-component>
        <accordion-component
          :text="containerData.userActivities.title"
          toggle-button-style="py-1.5 pr-2.5 pl-2.75 h-10"
          container-style="shadow-md"
        >
          <template #content-slot>
            <ul class="p-2.5">
              <li
                v-for="userActivity in props.userData.userActivities"
                :key="userActivity.activity"
                class="my-2.5"
              >
                <user-activity-item
                  :user-activity="userActivity"
                  :user-activity-menu="containerData.userActivities.activitiesMenu"
                />
              </li>
            </ul>
          </template>
        </accordion-component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from "vue";

import { UserData } from "@/Type/Types";
import { ButtonVariants } from "@/constants";

import UIdata from "@/Json/UIdata.json";
import UserActivityItem from "@/components/UserActivityItem.vue";
import OptionsDropdown from "@/components/OptionsDropdown.vue";
import IconTextField from "@/components/IconTextField.vue";
import CustomButton from "@/components/CustomButton.vue";
import AccordionComponent from "@/components/AccordionComponent.vue";

interface Props {
  userData: UserData;
}

interface UserStatusClass {
  salaried: string;
  terminated: string;
  commission: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (event: "close-button-click", value: Event): void;
}>();

const containerData = computed(() => UIdata.contactListPage.userData);

const userStatusClass: UserStatusClass = {
  salaried: "salaried-color",
  terminated: "terminated-color",
  commission: "commission-color",
};

const jobDataLables = {
  company: "Company",
  position: "Position",
  assignedTo: "Assigned to",
};

const jobDetails = computed(() => {
  const jobDataKeys = ["company", "position", "assignedTo"];

  const restrictedKeys = ["position"];

  return jobDataKeys.map((key: string) => {
    return {
      key: jobDataLables[key],
      value: props.userData[key],
      shouldAddColor: !restrictedKeys.includes(key),
    };
  });
});

const personalDetails = computed(() => {
  const personalDataKeys = ["phone", "email", "address"];

  return personalDataKeys.map((key: string) => {
    return {
      prependIcon: containerData.value.icons[key],
      prependIconStyle: "pr-[18px] personal-details-prepend-icon",
      value: props.userData[key],
    };
  });
});

const handleCloseButtonClick = (event: Event) => {
  emits("close-button-click", event);
};
</script>

<style lang="scss">
.header-button {
  background-color: transparent !important;
  min-width: 18px !important;
  font-size: 16px !important;
}

.action-button {
  min-width: 90px !important;
  max-width: 90px;
  width: min-content;
  font-size: 13px !important;
  line-height: 28px !important;
}

.user-details {
  width: 350px;
  height: calc(100vh - 58px);

  &__header {
    width: 350px;
    height: 54px;
    z-index: 2;
    background-color: #fff;
  }

  @media (max-width: 500px) {
    width: 100%;

    &__header {
      width: 100%;
    }
  }

  &__image {
    width: 124px;
    height: 124px;
  }

  &__contents {
    padding-top: 54px;
  }

  &__navigation-panel {
    min-height: 38px;
    column-gap: 5px;
  }

  &__selection-panel {
    padding: 0 19px;
  }
}

.terminated-color {
  color: #de8e8c;
}

.salaried-color {
  color: rgb(46, 181, 44);
}

.commission-color {
  color: #03a9f4;
}

.status-prepend-icon {
  font-size: 12px !important;
  width: 10px;
  height: 10px;
  padding: 0 !important;
  line-height: 10px !important;
  color: inherit !important;
  margin-bottom: 2px;
}

.personal-details-prepend-icon {
  color: rgba(0, 0, 0, 0.1) !important;
}
</style>
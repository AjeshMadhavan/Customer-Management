<template>
  <div class="user-details relative">
    <div
      class="flex justify-between items-center p-2 pl-4 h-14 fixed user-details__header"
    >
      <div class="flex items-center">
        <h2 class="mr-2">{{ props.userData.name }}</h2>
        <icon-text-field
          :text="props.userData.status"
          prepend-icon="mdi-circle"
          :prepend-icon-style="`p-0 
          ${userStatusClass[props.userData.status.toLowerCase()]}`"
        />
      </div>
      <div class="flex items-center justify-end gap-x-1.5">
        <custom-button
          icon="mdi-pin-outline"
          button-style="shadow-none -rotate-90 header-button"
        />
        <custom-button
          :icon="containerData.icons.close"
          button-style="shadow-none header-button"
          @click="handleCloseButtonClick"
        />
      </div>
    </div>
    <div class="pt-14">
      <div class="px-4 border-b border-b-zinc-200">
        <div class="flex gap-x-5 items-start">
          <img
            :src="props.userData.imageUrl"
            class="w-32 h-32 object-cover object-top rounded-lg border-solid border border-grey-400"
          />
          <ul class="pl-3">
            <li
              v-for="jobDetail in jobDetails"
              :key="jobDetail.key"
              class="pt-5 first:pt-0"
            >
              <icon-text-field
                :label="jobDetail.key"
                :text="jobDetail.value"
                is-vertically
                :text-style="jobDetail.shouldAddColor ? 'text-light-blue-500' : ''"
              />
            </li>
          </ul>
        </div>
        <ul class="py-4">
          <li
            v-for="personalDetail in personalDetails"
            :key="personalDetail.value"
            class="pt-5 first:pt-0"
          >
            <icon-text-field
              :prepend-icon="personalDetail.prependIcon"
              :prepend-icon-style="personalDetail.prependIconStyle"
              :text="personalDetail.value"
            />
          </li>
        </ul>
      </div>
      <div class="flex items-center py-2.5 px-4 border-b border-zinc-200 mb-6">
        <div class="pr-3.5">
          <options-dropdown
            :text="containerData.actionsButton.title"
            :dropdown-content="containerData.actionsButton.options"
            toggle-button-style="py-1.5 pr-2 pl-2.5"
          />
        </div>
        <div class="flex items-center gap-x-1.5 pl-3.5">
          <custom-button
            :text="containerData.editButtonTitle.title"
            :icon="containerData.editButtonTitle.icon"
            button-style="font-semibold action-button"
          />
          <custom-button
            :text="containerData.detailsButtonTitle"
            :variant="ButtonVariants.Outlined"
            button-style="font-semibold action-button"
          />
        </div>
      </div>
      <div class="px-4">
        <accordion-component
          :text="containerData.userOpportunitiesTitle"
          toggle-button-style="py-1.5 px-2.5 h-10"
          container-style="shadow-md"
        >
          <template #content-slot>
            <ul class="p-2.5">
              <li
                v-for="userOpportunity in props.userData.userOpportunities"
                :key="userOpportunity.text"
                class="text-left pb-2.5 text-xs"
              >
                <span class="block">{{ userOpportunity.text }}</span>
                <span>{{ userOpportunity.price }}</span>
              </li>
            </ul>
          </template>
        </accordion-component>
        <accordion-component
          :text="containerData.userActivities.title"
          toggle-button-style="py-1.5 px-2.5 h-10"
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
  salaried: "color-green",
  terminated: "color-red",
  commission: "color-blue",
};

const jobDataLables = {
  company: "Company",
  position: "Position",
  assignedTo: "Assigned To",
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
      prependIconStyle: "pr-4",
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
}

.action-button {
  min-width: 90px !important;
  max-width: 90px;
  width: min-content;
}

.user-details {
  width: 350px;
  height: calc(100vh - 58px);

  &__header {
    width: 350px;
    z-index: 9;
    background-color: #fff;
  }

  @media (max-width: 500px) {
    width: 100%;

    &__header {
      width: 100%;
    }
  }
}

.color-red {
  color: #de8e8c !important;
}

.color-green {
  color: green !important;
}

.color-blue {
  color: #03a9f4 !important;
}
</style>
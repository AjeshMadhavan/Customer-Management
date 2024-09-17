<template>
  <div class="w-full">
    <div class="flex justify-between items-center p-2 pl-4 h-14">
      <div class="flex items-center">
        <h2 class="mr-2">{{ props.userData.name }}</h2>
        <icon-text-field
          :text="props.userData.status"
          prepend-icon="mdi-circle"
          prepend-icon-style="!text-red-100 p-0"
        />
      </div>
      <div class="flex items-center gap-x-1.5">
        <custom-button
          icon="mdi-pin-outline"
          button-style="!shadow-none -rotate-90 !bg-transparent"
        />
        <custom-button
          :icon="containerData.icons.closeIcon"
          button-style="!shadow-none !bg-transparent"
        />
      </div>
    </div>
    <div class="px-4 border-b border-b-zinc-200">
      <div class="flex gap-x-5 items-start">
        <img
          :src="UserProfileImage"
          class="w-32 h-32 object-cover object-top rounded-lg border-solid border border-grey-400"
        />
        <ul class="pl-3">
          <li
            v-for="item in jobDetails"
            :key="item.key"
            class="pt-5 first:pt-0"
          >
            <icon-text-field
              :label="item.key"
              :text="item.value"
              is-vertically
              :text-style="item.style"
            />
          </li>
        </ul>
      </div>
      <ul class="py-4">
        <li
          v-for="item in personalDetails"
          :key="item.value"
          class="pt-5 first:pt-0"
        >
          <icon-text-field
            :prepend-icon="item.prependIcon"
            :prepend-icon-style="item.prependIconStyle"
            :text="item.value"
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
          button-style="!w-min font-semibold"
        />
        <custom-button
          :text="containerData.detailsButtonTitle"
          :variant="ButtonVariants.Outlined"
          button-style="!w-min font-semibold"
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
                :userActivity="userActivity"
                :userActivityMenu="containerData.userActivities.activitiesMenu"
              />
            </li>
          </ul>
        </template>
      </accordion-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import { UserData } from "@/Type/Types";
import { ButtonVariants } from "@/constants";

import UIdata from "@/Json/UIdata.json";
import UserProfileImage from "@/assets/userProfileImage.png";
import UserActivityItem from "@/components/UserActivityItem.vue";
import OptionsDropdown from "@/components/OptionsDropdown.vue";
import IconTextField from "@/components/IconTextField.vue";
import CustomButton from "@/components/CustomButton.vue";
import AccordionComponent from "@/components/AccordionComponent.vue";

interface Props {
  userData: UserData;
}

const props = defineProps<Props>();

const containerData = computed(() => UIdata.contactListPage.userData);

const jobDetails = computed(() => {
  const jobData = [];

  jobData.push({
    key: "Company",
    value: props.userData.company,
    style: "text-light-blue-500",
  });
  jobData.push({ key: "Position", value: props.userData.position, style: "" });
  jobData.push({
    key: "Assigned To",
    value: props.userData.assignedTo,
    style: "text-light-blue-500",
  });

  return jobData;
});

const personalDetails = computed(() => {
  const personalData = [];

  personalData.push({
    prependIcon: containerData.value.icons.phoneIcon,
    prependIconStyle: "pr-4",
    value: props.userData.phone,
  });
  personalData.push({
    prependIcon: containerData.value.icons.emailIcon,
    prependIconStyle: "pr-4",
    value: props.userData.email,
  });
  personalData.push({
    prependIcon: containerData.value.icons.homeIcon,
    prependIconStyle: "pr-4",
    value: props.userData.address,
  });

  return personalData;
});
</script>
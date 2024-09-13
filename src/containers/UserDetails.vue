<template>
  <div class="w-full">
    <div class="flex justify-between items-center p-2 pl-4 h-14">
      <div class="flex items-center">
        <h2 class="mr-2">Amelia Harper</h2>
        <icon-text-field
          text="Salaried"
          prepend-icon="mdi-circle"
          prepend-icon-style="!text-red-100 p-0"
        />
      </div>
      <div class="flex items-center gap-x-1.5">
        <custom-button
          icon="mdi-pin-outline"
          button-style="!shadow-none -rotate-90"
        />
        <custom-button
          :icon="userData.icons.closeIcon"
          button-style="!shadow-none"
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
          :text="userData.actionsButton.title"
          :dropdown-content="userData.actionsButton.options"
          toggle-button-style="py-1.5 pr-2 pl-2.5"          
        />
      </div>
      <div class="flex items-center gap-x-1.5 pl-3.5">
        <custom-button
          :text="userData.editButtonTitle.title"
          :icon="userData.editButtonTitle.icon"
          button-style="!w-min font-semibold"
        />
        <custom-button
          :text="userData.detailsButtonTitle"
          :variant="ButtonVariants.Outlined"
          button-style="!w-min font-semibold"
        />
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

import { ButtonVariants } from "@/constants";
import { UserData } from "@/Type/Types";

import UIdata from "@/Json/UIdata.json";
import IconTextField from "@/components/IconTextField.vue";
import CustomButton from "@/components/CustomButton.vue";
import UserProfileImage from "@/assets/userProfileImage.png";
import OptionsDropdown from "@/components/OptionsDropdown.vue";
import AccordionComponent from '@/components/AccordionComponent.vue'

interface Props {
  userData: UserData;
}

const props = defineProps<Props>();

const userData = computed(() => UIdata.contactListPage.userData);

const jobDetails = computed(() => {
  const arr = [];

  arr.push({
    key: "Company",
    value: props.userData.company,
    style: "text-light-blue-500",
  });
  arr.push({ key: "Position", value: props.userData.position, style: "" });
  arr.push({
    key: "Assigned To",
    value: props.userData.assignedTo,
    style: "text-light-blue-500",
  });

  return arr;
});

const personalDetails = computed(() => {
  const arr = [];

  arr.push({
    prependIcon: userData.value.icons.phoneIcon,
    prependIconStyle: "pr-4",
    value: props.userData.phone,
  });
  arr.push({
    prependIcon: userData.value.icons.emailIcon,
    prependIconStyle: "pr-4",
    value: props.userData.email,
  });
  arr.push({
    prependIcon: userData.value.icons.homeIcon,
    prependIconStyle: "pr-4",
    value: props.userData.address,
  });

  return arr;
});
</script>
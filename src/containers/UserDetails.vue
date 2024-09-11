<template>
  <div class="w-full">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <h2>Amelia Harper</h2>
        <icon-text-field
          text="Salaried"
          prepend-icon="mdi-circle"
          prepend-icon-style="!text-red-100 p-0"
        />
      </div>
      <div>
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
    <div>
      <div class="flex gap-x-5 items-start">
        <img
          :src="UserProfileImage"
          class="w-32 h-32 object-cover object-top rounded-lg border-solid border border-grey-400"
        />
        <ul class="pl-3">
          <li>
            <icon-text-field
              label="Company"
              text="ACME"
              :is-vertically="true"
              text-style="text-light-blue-500"
            />
          </li>
          <li class="pt-5">
            <icon-text-field
              label="Position"
              text="Netword Admin"
              :is-vertically="true"
            />
          </li>
          <li class="pt-5">
            <icon-text-field
              label="Assigned to"
              text="John Heart"
              :is-vertically="true"
              text-style="text-light-blue-500"
            />
          </li>
        </ul>
      </div>
      <ul class="py-4">
        <li>
          <icon-text-field
            :prepend-icon="userData.icons.phoneIcon"
            text="+1(213)555-4276"
            prepend-icon-style="pr-4"
          />
        </li>
        <li>
          <icon-text-field
            :prepend-icon="userData.icons.emailIcon"
            text="ameliah@dx-email.com"
            prepend-icon-style="pr-4"
          />
        </li>
        <li>
          <icon-text-field
            :prepend-icon="userData.icons.homeIcon"
            text="528 W 7t St"
            prepend-icon-style="pr-4"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import UIdata from "@/Json/UIdata.json";
import IconTextField from "@/components/IconTextField.vue";
import CustomButton from "@/components/CustomButton.vue";
import UserProfileImage from "@/assets/userProfileImage.png";

const userData = computed(() => UIdata.contactListPage.userData);
</script>

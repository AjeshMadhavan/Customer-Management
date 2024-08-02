<template>
  <v-text-field
    v-model="inputValue"
    filled
    :placeholder="props.placeholderText"
    hide-details
    loader-height="3"
    :class="[
      '!text-[rgb(3,169,244)]',
      'text-xs',
      'text-input',
      props.inputStyles,
    ]"
  >
    <template v-if="props.prependIcon" v-slot:prepend-inner>
      <v-icon class="mr-2.5 !text-base">{{ props.prependIcon }}</v-icon>
    </template>
    <template v-if="inputValue && props.appendIcon" v-slot:append>
      <v-icon
        @click="clearText"
        class="w-4 h-4 !text-base rounded-full bg-[#c2c2c2de] text-[#757575de] translate-y-[20%]"
      >
        {{ props.appendIcon }}
      </v-icon>
    </template>
  </v-text-field>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

interface Props {
  placeholderText: string;
  prependIcon: string;
  inputStyle: string;
  appendIcon: string;
}

const props = defineProps<Props>();

const inputValue = ref<string>("");

const clearText = () => {
  inputValue.value = "";
};
</script>

<style lang="scss" scoped>
.text-input {
  &::v-deep .v-input__slot {
    min-height: 32px;
  }

  &::v-deep .v-input__prepend-inner {
    margin-top: 4px;
  }

  &::v-deep .v-input__append-inner {
    margin-top: 5px;
    padding-left: 12px;
  }
}

// <search-input prependIcon="mdi-magnify" appendIcon="mdi-close" placeholderText="Search"/>
</style>
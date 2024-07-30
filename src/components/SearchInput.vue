<template>
  <div class="search-field h-8 flex">
    <v-text-field
      v-model="inputValue"
      filled
      :placeholder="props.placeholderText"
      hide-details
      dense
      min-height="38"
      loader-height="3"
      class="!text-red-400 min-h-8"
    >
      <template v-slot:prepend-inner>
        <v-icon class="mr-2.5">mdi-magnify</v-icon>
      </template>

      <template v-if="inputValue" v-slot:append>
        <v-icon
          @click="clearText"
          class="clear-icon w-4 h-4 !text-base rounded-full bg-[#c2c2c2de] text-[#757575de] translate-y-[20%]"
        >
          mdi-close
        </v-icon>
      </template>
    </v-text-field>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  placeholderText: {
    type: String,
    default: "Search",
  },
  prependIcon: {
    type: String,
    default: "mdi-magnify",
  },
});

const inputValue = ref<string>("");

const clearText = () => {
  inputValue.value = "";
};
</script>
<style lang="scss" scoped>
.v-text-field .v-input__control .v-input__slot {
  min-height: 30px !important;
}

.v-text-field .v-input__slot {
  min-height: 38px !important;
}
</style>

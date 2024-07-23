<template>
  <div class="search-field">
    <v-text-field
      v-model="inputValue"
      filled
      :placeholder="props.placeholderText"
      hide-details
      loader-height="3"
      class="search-bar"
      :height="38"
    >
      <template v-slot:prepend-inner>
        <v-icon class="prepend-icon">mdi-magnify</v-icon>
      </template>

      <template v-if="inputValue" v-slot:append>
        <v-icon @click="clearText" class="clear-icon">mdi-close </v-icon>
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
.search-field {
  width: 400px;
  height: 38px;
}
.prepend-icon {
  margin-right: 10px;
}

.clear-icon {
  background-color: rgba(194, 194, 194, 0.87);
  color: rgba(117, 117, 117, 0.87);
  border-radius: 50%;
  font-size: 16px;
}
</style>
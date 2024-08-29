<template>
  <v-text-field
    v-model.trim="inputValue"
    filled
    hide-details
    clearable
    :type="inputType"
    clear-icon="mdi-close"
    loader-height="3"
    :placeholder="props.placeholderText"
    :prepend-inner-icon="props.prependIcon"
    class="!text-sky-500 text-xs text-input"
    @keyup.enter="onValueChange"
  />
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, withDefaults } from "vue";

interface Props {
  placeholderText?: string;
  prependIcon?: string;
  inputBoxValue?: string;
  inputType?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholderText: "",
  prependIcon: "",
  inputBoxValue: "",
  inputType: "text",
});

const emit = defineEmits(["onValueChange"]);

const inputValue = ref<string>(props.inputBoxValue);

const onValueChange = () => {
  emit("onValueChange", inputValue.value);
};
</script>

<style lang="scss" scoped>
.text-input::v-deep {
  .v-input__slot {
    min-height: 32px;
  }

  .v-input__prepend-inner {
    margin-top: 4px;
    margin-right: 10px;

    .v-icon {
      font-size: 16px;
    }
  }

  .v-input__append-inner {
    margin-top: 7px;
    padding-left: 12px;
    width: 28px;

    .v-input__icon--clear {
      background-color: rgba(194, 194, 194, 0.87);
      min-width: 16px;
      width: 16px;
      height: 16px;

      .v-icon {
        font-size: 16px;
      }
    }
  }
}

// <search-input prependIcon="mdi-magnify" placeholderText="Search"/>
</style>
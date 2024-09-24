<template>
  <v-text-field
    v-model.trim="inputValue"
    filled
    hide-details
    clearable
    id="input-box"
    :type="type"
    clear-icon="mdi-close"
    loader-height="3"
    :placeholder="placeholder.trim()"
    :prepend-inner-icon="props.prependIcon"
    hide-spin-buttons
    class="text-xs text-input"
    @keydown="onKeyDown"
    @keydown.enter="onEnter"
    @scroll.prevent
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch, withDefaults } from "vue";

interface Props {
  placeholder?: string;
  prependIcon?: string;
  type?: string;
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
  prependIcon: "",
  type: "text",
  value: "",
});

const emit = defineEmits<{
  (e: "change", value: string | number): void;
}>();

const inputValue = ref<string>(props.value);
const shouldInitiateSearch = ref<boolean>(false);
const restrictedValues = ["ArrowUp", "ArrowDown", "e", "E"];
const onKeyDownTimeoutTime = 3000;
const inputMinLength = 3;
let timeoutID;

const onKeyDown = (event: KeyboardEvent) => {
  if (restrictedValues.includes(event.key) && props.type === "number")
    event.preventDefault();

  shouldInitiateSearch.value = false;
  clearTimeout(timeoutID);

  timeoutID = setTimeout(() => {
    if (inputValue.value.length >= inputMinLength)
      shouldInitiateSearch.value = true;
  }, onKeyDownTimeoutTime);
};

const onEnter = () => {
  emit("change", inputValue.value);
};

watch(shouldInitiateSearch, (newValue) => {
  if (newValue) emit("change", inputValue.value);
});
</script>

<style lang="scss" scoped>
.text-input::v-deep {
  color: rgb(3, 169, 244);

  .v-input__slot {
    min-height: 32px;
  }

  #input-box::placeholder {
    text-transform: capitalize;
  }

  .v-input__prepend-inner {
    margin-top: 4px;

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
</style>
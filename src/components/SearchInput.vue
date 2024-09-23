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
    @keyup.enter="onValueChange"
    @keydown="onKeyDown"
    @scroll.prevent
  />
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, withDefaults } from "vue";

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
  (e: "on-value-change", value: string | number): void;
}>();

const inputValue = ref<string>(props.value);
const restrictedValues = ["ArrowUp", "ArrowDown", "e", "E"];

const onKeyDown = (event: KeyboardEvent) => {
  if (restrictedValues.includes(event.key) && props.type === "number")
    event.preventDefault();
};

const onValueChange = () => {
  if (inputValue.value) emit("on-value-change", inputValue.value);
};
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
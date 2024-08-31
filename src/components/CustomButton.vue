<template>
  <v-btn
    v-bind="buttonAttributes"
    elevation="1"
    :class="[buttonStyleVariant, { icon: isIcon }]"
    :style="buttonStyles"
    @click="handleButtonClick"
  >
    <v-icon v-if="props.icon" class="button-icon">
      {{ props.icon }}
    </v-icon>
    <span v-if="props.text" class="button-text">
      {{ props.text }}
    </span>
  </v-btn>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, computed, withDefaults } from "vue";

import { ButtonVariants } from "../constants";

interface Props {
  text?: string;
  icon?: string;
  variant: string;
  buttonBackgroundColor?: string;
  buttonFontWeight?: string;
}

const emits = defineEmits<{
  (e: "handleButtonClick", value: Event): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  buttonFontWeight: "500",
});

const buttonStyles = computed(() => {
  return {
    backgroundColor: props.buttonBackgroundColor,
    fontWeight: props.buttonFontWeight,
  };
});

const buttonAttributes = computed(() => {
  return {
    outlined: props.variant === ButtonVariants.Outlined,
  };
});

const buttonStyleVariant = computed(() => {
  switch (props.variant) {
    case ButtonVariants.Normal:
      return "normal";
    case ButtonVariants.Outlined:
      return "outlined";
    default:
      return "";
  }
});

const isIcon = computed(() => props.icon && !props.text);

const handleButtonClick = (event: Event) => {
  emits("handleButtonClick", event);
};
</script>

<style lang="scss" scoped>
.button-text {
  letter-spacing: 0.52px;
  font-size: 13px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.v-btn {
  width: 100%;

  &::v-deep &__content {
    width: 100%;
  }

  .button-icon {
    font-size: 16px;
  }

  /**outlined varient */
  &.outlined {
    padding: 5px 12px;
    height: 28px;
    border-radius: 2px;
  }

  /**primary varient */
  &.primary {
    padding: 5px 12px 5px 8px;
    color: #fff;
    background-color: #03a9f4;
    height: 28px;
    border-radius: 2px;

    &::before {
      color: rgba(0, 0, 0);
      transition: none;
    }

    .button-icon {
      margin-right: 4px;
    }
  }

  /**icon varient */
  .v-btn.icon {
    padding: 5px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    min-width: fit-content;
    margin-right: 0;

    .button-icon {
      margin-right: -1px;
    }

    &::before {
      background-color: rgba(0, 0, 0);
    }
  }
}

/**
<custom-button text="ADD CONTACT" icon="mdi-plus" :variant="ButtonVariants.Normal"/>
<custom-button text="DETAILS" :variant="ButtonVariants.Outlined" />
*/
</style>
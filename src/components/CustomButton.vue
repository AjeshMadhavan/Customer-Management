<template>
  <v-btn
    v-bind="buttonAttributes"
    elevation="1"
    :class="buttonStyleVariant"
    :style="buttonStyles"
    @click="handleButtonClick"
  >
    <v-icon v-if="props.icon" class="button-icon">
      {{ props.icon }}
    </v-icon>
    <span v-if="shouldShowText" class="button-text">
      {{ props.text }}
    </span>
  </v-btn>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, computed, withDefaults } from "vue";

import { ButtonVariants } from "../Type/Enums";

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
    outlined: props.variant === ButtonVariants.OUTLINED,
    icon: props.variant === ButtonVariants.ICON,
  };
});

const buttonStyleVariant = computed(() => {
  switch (props.variant) {
    case ButtonVariants.PRIMARY:
      return "primary";
    case ButtonVariants.OUTLINED:
      return "outlined";
    case ButtonVariants.ICON:
      return "icon";
    default:
      return "";
  }
});

const shouldShowText = computed(() => {
  return (
    props.variant === ButtonVariants.PRIMARY ||
    props.variant === ButtonVariants.OUTLINED
  );
});

const handleButtonClick = (event: Event) => {
  emits("handleButtonClick", event);
};
</script>

<style lang="scss" scoped>
.button-text {
  letter-spacing: 0.52px;
  font-size: 13px;
}

.v-btn .button-icon {
  font-size: 16px;
}

/**outlined varient */
.v-btn.outlined {
  padding: 5px 12px;
  height: 28px;
  border-radius: 2px;
}

/**icon varient */
.v-btn.icon {
  padding: 5px;
  width: 28px;
  height: 28px;

  &::before {
    background-color: rgba(0, 0, 0);
  }
}

/**primary varient */
.v-btn.primary {
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

/**
<custom-button text="ADD CONTACT" icon="mdi-plus" :variant="ButtonVariants.Primary"/>
<custom-button text="DETAILS" :variant="ButtonVariants.OUTLINED" />
<custom-button icon="mdi-menu" :variant="ButtonVariants.ICON" />
*/
</style>
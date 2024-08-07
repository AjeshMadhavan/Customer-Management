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
    <span v-if="props.text" class="button-text">
      {{ props.text }}
    </span>
  </v-btn>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, computed } from "vue";

import { ButtonVariants } from "@/Type/Enums";

const emits = defineEmits(["handleButtonClick"]);
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "",
  },
  buttonBackgroundColor: {
    type: String,
    default: "",
  },
  buttonFontWeight: {
    type: String,
    default: "500",
  },
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

const handleButtonClick = () => {
  emits("handleButtonClick");
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
<button-component text="ADD CONTACT" icon="mdi-plus" :variant="ButtonVariants.Primary"/>
<button-component text="DETAILS" :variant="ButtonVariants.OUTLINED" />
<button-component icon="mdi-menu" :variant="ButtonVariants.ICON" />
*/
</style>
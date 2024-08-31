<template>
  <v-btn
    v-bind="buttonAttributes"
    elevation="1"
    :class="[buttonStyleVariant, { icon: hasIcon }]"
    :style="buttonStyles"
    @click="handleButtonClick"
    @mouseover="changeBgColor(true)"
    @mouseout="changeBgColor(false)"
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
import { computed, defineEmits, defineProps, ref, withDefaults } from "vue";

import { ButtonVariants } from "../constants";

interface Props {
  text?: string;
  icon?: string;
  variant: string;
  buttonBackgroundColor?: string;
  buttonFontWeight?: string;
  backgroundColorOnHover?: string;
}

const emits = defineEmits<{
  (e: "handleButtonClick", value: Event): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  buttonFontWeight: "500",
});

const shouldChangeBgColor = ref<boolean>(false);

const buttonStyles = computed(() => {
  const buttonStyleData = {
    backgroundColor: props.buttonBackgroundColor,
    fontWeight: props.buttonFontWeight,
  };

  if (shouldChangeBgColor.value) {
    buttonStyleData.backgroundColor =
      props.backgroundColorOnHover || props.buttonBackgroundColor;
  }

  return buttonStyleData;
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

const hasIcon = computed(() => props.icon && !props.text);

const changeBgColor = (shouldChange: boolean) => {
  shouldChangeBgColor.value = shouldChange;
};

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

  /* outlined varient */
  &.outlined {
    padding: 5px 12px;
    height: 28px;
    border-radius: 2px;
  }

  /* normal varient */
  &.normal {
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

  /* icon varient */
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
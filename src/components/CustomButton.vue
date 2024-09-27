<template>
  <v-btn
    elevation="1"
    :class="[
      buttonStyle,
      {
        normal: variant === ButtonVariants.Normal,
        outlined: variant === ButtonVariants.Outlined,
      },
      {
        icon: hasIcon,
      },
    ]"
    :outlined="showAsOutlined"
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
import { computed, defineEmits, defineProps, withDefaults } from "vue";

import { ButtonVariants } from "../constants";

interface Props {
  buttonStyle?: string;
  icon?: string;
  text?: string;
  variant?: string;
}

const emits = defineEmits<{
  (e: "click", value: Event): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  buttonStyle: "",
  icon: "",
  text: "",
  variant: ButtonVariants.Normal,
});

const showAsOutlined = computed(() => props.variant === ButtonVariants.Outlined);

const hasIcon = computed(() => props.icon && !props.text);

const handleButtonClick = (event: Event) => {
  emits("click", event);
};
</script>

<style lang="scss" scoped>
.button-text {
  letter-spacing: 0.52px;
  font-size: inherit;
  width: max-content;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.v-btn {
  width: 100%;
  height: fit-content !important;

  &::v-deep &__content {
    width: 100%;
  }

  .button-icon {
    margin-right: 4px;
    font-size: inherit;
  }

  /* outlined varient */
  &.outlined {
    padding: 5px 12px;
    border-radius: 2px;
  }

  /* normal varient */
  &.normal {
    padding: 5px 12px 5px 8px;
    color: #fff;
    background-color: #03a9f4;
    border-radius: 2px;

    &::before {
      color: rgba(0, 0, 0);
      transition: none;
    }
  }

  /* icon varient */
  &.icon {
    padding: 5px;
    width: fit-content;
    border-radius: 50%;
    min-width: fit-content;
    margin-right: 0;
    color: #000;

    .button-icon {
      margin-right: 0px;
    }

    &::before {
      background-color: rgba(0, 0, 0);
    }
  }
}
</style>
<template>
  <span :class="['status-text', className]" :style="statusTextStyle">
    {{ props.statusText }}
  </span>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

import { StatusTextVarients } from "@/Type/Enums";

const props = defineProps({
  statusText: {
    type: String,
    default: "",
  },
  varient: {
    type: String,
    default: "",
  },
  textColor: {
    type: String,
    default: "",
  },
});

const statusTextStyle = computed(() => {
  return {
    color: props.textColor,
  };
});

const className = computed(() => {
  if (props.varient === StatusTextVarients.salaried) {
    return "salaried";
  } else if (props.varient === StatusTextVarients.commission) {
    return "commision";
  } else if (props.varient === StatusTextVarients.terminated) {
    return "terminated";
  } else {
    return "";
  }
});
</script>

<style lang="scss" scoped>
.status-text {
  font-size: 13px;
  font-weight: 400;
  color: blue;
  text-transform: capitalize;
  width: 100%;
  text-align: left;

  &:before {
    content: "";
    display: inline-block;
    background-color: currentColor;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 3px;
  }
}

.salaried {
  color: #2eb52c;
}

.commision {
  color: #03a9f4;
}

.terminated {
  color: #de8e8c;
}
</style>
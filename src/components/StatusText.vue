<template>
  <span :class="['status-text', props.textStyle]">
    {{ props.statusText }}
  </span>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  statusText: {
    type: String,
    default: "",
  },
  textStyle: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.status-text {
  width: 100%;
  font-size: 13px;
  text-transform: capitalize;
  text-align: left;
  font-weight: 400;

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

/**
------ using status text component ---------------
<status-text statusText="Salaried" textStyle="text-orange-500" />
*/
</style>
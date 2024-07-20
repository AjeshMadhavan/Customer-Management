<template>
  <button
    :class="{
      button: true,
      [props.className]: true,
    }"
    @click="handleButtonClick"
    :style="buttonStyles"
  >
    <div
      :class="{
        'icon-text-wrapper': true,
      }"
      v-if="props.text || props.icon"
    >
      <div v-if="props.prependIcon" class="prepend-icon-wrapper">
        <img :src="props.prependIcon" class="prepend-icon" />
      </div>
      <span v-if="props.text" class="btn__text">
        {{ props.text }}
      </span>
      <img v-if="props.icon" :src="props.icon" class="icon" />
    </div>
    <div v-if="props.appendIcon" class="append-icon-wrapper">
      <img :src="props.appendIcon" />
    </div>
    <div v-if="props.tableHeadButton" class="table-button-icons">
      <img :src="props.sortIcon" class="sort-icon" />
      <img :src="props.filterIcon" class="filter-icon" />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, reactive } from "vue";

const emits = defineEmits(["handleButtonClick"]);
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
  buttonBackgroundColor: {
    type: String,
    default: "transparent",
  },
  buttonFontWeight: {
    type: Number,
    default: 500,
  },
  icon: {
    type: String,
    default: "",
  },
  appendIcon: {
    type: String,
    defalut: "",
  },
  prependIcon: {
    type: String,
    default: "",
  },
  sortIcon: {
    type: String,
    default: "",
  },
  filterIcon: {
    type: String,
    default: "",
  },
});

const buttonStyles = reactive({
  backgroundColor: props.buttonBackgroundColor,
  fontWeight: props.buttonFontWeight,
});

const handleButtonClick = () => {
  emits("handleButtonClick");
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 8px 5px 12px;
  white-space: nowrap;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: max-content;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 2px;
  }
}

.icon-text-wrapper {
  display: flex;
  align-items: center;

  .icon {
    width: 16px;
  }
}

.prepend-icon-wrapper {
  display: flex;
  min-width: 48px;
  justify-content: center;
  align-items: center;
}

.append-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
}

.prepend-icon {
  width: 18px;
  height: 18px;
}

.sort-icon,
.filter-icon {
  width: 15px;
  height: 15px;
}

.table-button-icons {
  display: flex;
  align-items: center;
}

.bg-blue {
  color: #fff;
  background-color: #03a9f4;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
  padding: 5px 12px 5px 8px;
  flex-direction: row-reverse;

  &:hover {
    background-color: rgb(2, 139, 201);
  }
}

.text-with-icon {
  padding: 5px 8px 5px 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 2px;
  }
}

.icon-with-text {
  padding: 5px 12px 5px 8px;
}

.icon-icon {
  padding: 5px 8px;
}

.table-head-button {
  padding: 12px 11px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.dropdown-icon-text-icon {
  padding: 9px 16px 9px 0;
  justify-content: space-between;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.dropdown-text-icon {
  padding: 6px 10px 6px 11px;
  justify-content: space-between;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.outlined {
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.24);
}
</style>
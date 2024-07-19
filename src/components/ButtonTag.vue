<template>
  <button
    :class="{
      btn: true,
      'icon-left': props.iconPositionLeft,
      'apply-border': props.addBorder,
      'dropdown-title': props.dropdownTitle,
      'dropdown-title-bold': props.dropdownTitleBold,
      'bg-blue': props.bgBlue,
      'show-lighter': props.showLight,
      'show-bolder': props.showBolder,
      'table-btn': props.tableHeadBtn,
      'showas-icon': props.showAsIcon,
      'icon-btn': props.iconBtn,
    }"
    @click="handleBtnClick"
  >
    <div
      :class="{
        'icon-text-wrapper': true,
      }"
      v-if="props.text || props.iconBtn"
    >
      <div v-if="props.prependIcon" class="prepend-icon-wrapper">
        <img :src="props.prependIcon" class="prepend-icon" />
      </div>
      <span v-if="props.text" class="btn__text">
        {{ props.text }}
      </span>
      <img v-if="props.iconBtn" :src="props.iconBtn" class="icon" />
    </div>
    <div v-if="props.icon" class="btn-icon-wrapper">
      <img :src="props.icon" />
    </div>
    <div v-if="props.tableHeadBtn" class="table-btn-icons">
      <img :src="props.sortIcon" class="sort-icon" />
      <img :src="props.filterIcon" class="filter-icon" />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";

const emits = defineEmits(["handleBtnClick"]);
const props = defineProps({
  text: {
    type: String,
    default: undefined,
  },
  showAsIcon: {
    type: Boolean,
    default: false,
  },
  iconBtn: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    defalut: undefined,
  },
  prependIcon: {
    type: String,
    default: undefined,
  },
  sortIcon: {
    type: String,
    default: undefined,
  },
  filterIcon: {
    type: String,
    default: undefined,
  },
  iconPositionLeft: {
    type: Boolean,
    defalut: false,
  },
  bgBlue: {
    type: Boolean,
    default: false,
  },
  showLight: {
    type: Boolean,
    defalut: false,
  },
  showBolder: {
    type: Boolean,
    defalut: false,
  },
  addBorder: {
    type: Boolean,
    defalut: false,
  },
  dropdownTitle: {
    type: Boolean,
    default: false,
  },
  dropdownTitleBold: {
    type: Boolean,
    default: false,
  },
  tableHeadBtn: {
    type: Boolean,
    default: false,
  },
});

const handleBtnClick = () => {
  emits("handleBtnClick");
};
</script>

<style lang="scss" scoped>
.btn {
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

.showas-icon {
  padding: 5px;

  &:hover {
    border-radius: 50%;
  }
}

.icon-btn {
  padding: 5px 8px;
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

.btn-icon-wrapper {
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

.icon-left {
  flex-direction: row-reverse;
}

.apply-border {
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.24);
}

.show-lighter {
  font-weight: 400;
}

.show-bolder {
  font-weight: 700;
}

.bg-blue {
  color: #fff;
  background-color: #03a9f4;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.24);
  padding: 5px 12px 5px 8px;

  &:hover {
    background-color: rgb(2, 139, 201);
  }
}

.dropdown-title {
  padding: 6px 10px 6px 11px;
  justify-content: space-between;
  font-weight: 400;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.dropdown-title-bold {
  justify-content: space-between;
  padding: 9px 16px 9px 0;
  font-weight: 700;
}

.table-btn {
  padding: 12px 11px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.table-btn-icons {
  display: flex;
}
</style>
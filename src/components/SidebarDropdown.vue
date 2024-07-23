<template>
  <div :class="['dropdown-menu', props.variant]">
    <button class="toggle-button" @click="toggleDropdownItems">
      <div class="toggle-button__title">
        <v-icon v-if="props.variant === 'primary'" class="prepend-icon">
          {{ props.prependIcon }}
        </v-icon>
        <span>{{ props.title }}</span>
      </div>
      <v-icon class="append-icon"> {{ dropdownArrow }} </v-icon>
    </button>
    <ul v-if="showDropdownItems" class="dropdown-items">
      <li v-for="item in contents" :key="item" class="dropdown-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  title: {
    type: String,
    default: "CRM",
  },
  prependIcon: {
    type: String,
    default: "",
  },
});

const showDropdownItems = ref<boolean>(false);

const toggleDropdownItems = () => {
  showDropdownItems.value = !showDropdownItems.value;
};

const contents = ["Apple", "Mango fruit", "Grapes"];

const dropdownArrow = computed(() => {
  if (props.variant === "primary") {
    return showDropdownItems.value ? "mdi-chevron-down" : "mdi-chevron-right";
  } else {
    return showDropdownItems.value ? "mdi-chevron-up" : "mdi-chevron-down";
  }
});
</script>

<style lang="scss" scoped>
.dropdown-menu {
  width: 100%;
  transition: all 1s ease;

  .toggle-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &__title {
      width: 100%;
      font-size: 13px;
      display: flex;
      justify-self: start;
      align-items: center;
    }

    .append-icon {
      font-size: 18px;
    }
  }

  .dropdown-item {
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    text-transform: capitalize;
    cursor: pointer;
    list-style-type: none;
  }
}

/**primary dropdown menu */
.primary {
  .toggle-button {
    padding: 9px 16px 9px 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    .prepend-icon {
      min-width: 48px;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.87);
    }

    &__title {
      font-size: 13px;
      font-weight: 700;
    }
  }

  .dropdown-items {
    transition: height 2s ease;
  }

  .dropdown-item {
    padding: 9px 16px 9px 48px;
    font-size: 13px;
    font-weight: 400;
    text-align: left;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
}

/**secondary dropdown menu*/
.secondary {
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  .toggle-button {
    padding: 6px 10px 6px 11px;
    min-height: 40px;

    &__title {
      font-weight: 400;
    }
  }

  .dropdown-items {
    padding: 11px;
  }

  .dropdown-item {
    padding: 0;
    padding-bottom: 10px;
    cursor: default;
  }
}
</style>
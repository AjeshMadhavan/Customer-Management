<template>
    <v-text-field
        filled
        :prepend-inner-icon="props.prependIcon"
        :placeholder="props.placeholderText"
        clearable
        hide-details
    />
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'

const props = defineProps({
    placeholderText: {
        type: String,
        default: "Search"
    },
    prependIcon: {
        type: String,
        default: 'mdi-magnify' 
    }
})
</script>

<style lang="scss" scoped>
.v-input__icon {
    margin-right: 20px !important;
}
</style>
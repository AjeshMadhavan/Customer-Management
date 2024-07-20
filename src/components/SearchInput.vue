<template>
<div class="search-field">
    <v-text-field
        filled
        :placeholder="props.placeholderText"
        clearable
        clear-icon="mdi-close-circle"
        hide-details
        loader-height="3"
    >
        
        <template v-slot:prepend-inner>
            <v-icon class="prepend-icon">mdi-magnify</v-icon>
        </template>
    </v-text-field>
</div>
</template>

<script lang="ts" setup>
import colors from "vuetify/lib/util/colors"
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
.search-field {
    width: 400px;
}
.prepend-icon {
    margin-right: 10px;
}

.v-text-field__slot {
    margin-left: 20px !important;
}
</style>
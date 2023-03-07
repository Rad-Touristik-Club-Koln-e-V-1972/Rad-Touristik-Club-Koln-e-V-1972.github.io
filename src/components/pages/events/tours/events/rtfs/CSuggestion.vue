<template>
    <v-card id="CSuggestion" color="primary" :href="props.value.url.toString()" max-width="20em">
        <v-card-title>{{ props.value.title }}</v-card-title>
        <v-card-text>{{ props.value.text }}</v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import Suggestion from '~/models/entities/events/tours/events/Suggestion'

const props = defineProps<{ value: Suggestion }>()
</script>

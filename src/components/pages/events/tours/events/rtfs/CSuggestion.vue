<template>
    <a :href="props.modelValue.url.toString()" target="_blank">
        <q-card class="bg-primary" max-width="20em">
            <q-card-section class="text-h6">{{ props.modelValue.title }}</q-card-section>
            <q-card-section>{{ props.modelValue.text }}</q-card-section>
        </q-card>
    </a>
</template>

<script lang="ts" setup>
import Suggestion from 'src/models/entities/events/tours/events/Suggestion'

const props = defineProps<{ modelValue: Suggestion }>()
</script>

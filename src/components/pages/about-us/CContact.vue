<template>
    <v-card id="CContact" max-width="20em">
        <v-img contain :src="props.value.imageUrl.toString()" />
        <v-card-title>{{ props.value.name }}</v-card-title>
        <v-card-subtitle>{{ props.value.position }}</v-card-subtitle>
        <v-divider />
        <v-card-actions>
            <v-btn icon :href="`mailto:${props.value.eMail}`">
                <v-icon>{{ icons.mdiEmailArrowRight }}</v-icon>
            </v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<script lang="ts" setup>
import { mdiChevronDown, mdiChevronUp, mdiEmailArrowRight } from '@mdi/js'
import Contact from '~/models/entities/about-us/Contact'

const props = defineProps<{ value: Contact }>()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
    mdiEmailArrowRight,
}
</script>

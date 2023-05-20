<template>
    <v-card id="CContact" max-width="20em">
        <v-img contain :src="props.value.imageUrl.toString()" />
        <v-card-title>{{ props.value.name }}</v-card-title>
        <v-card-subtitle>{{ props.value.position }}</v-card-subtitle>
        <v-divider />
        <v-card-actions>
            <v-btn :href="`mailto:${props.value.eMail}`" text>
                <v-icon left>{{ mdiEmailArrowRight }}</v-icon>
                E-Mail senden
            </v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<script lang="ts" setup>
import { mdiEmailArrowRight } from '@mdi/js'
import Contact from '~/models/entities/rtc-cologne/Contact'

const props = defineProps<{ value: Contact }>()
</script>

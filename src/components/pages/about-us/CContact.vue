<template>
    <v-card id="CContact" max-width="20em">
        <v-img contain :src="props.value.imageUrl.toString()" />
        <v-card-title>{{ props.value.name }}</v-card-title>
        <v-card-subtitle>{{ props.value.position }}</v-card-subtitle>
        <v-card-actions>
            <v-btn icon :href="`mailto:${props.value.eMail}`">
                <v-icon>{{ icons.mdiEmailArrowRight }}</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Über mich
                <v-icon right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText">
                <v-divider />
                <v-card-text>{{ props.value.description }}</v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiChevronDown, mdiChevronUp, mdiEmailArrowRight } from '@mdi/js'
import Contact from '~/models/entities/about-us/Contact'

const props = defineProps<{ value: Contact }>()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
    mdiEmailArrowRight,
}
const showText = ref(false)
</script>

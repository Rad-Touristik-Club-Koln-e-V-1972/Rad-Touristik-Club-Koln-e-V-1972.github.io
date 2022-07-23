<template>
    <v-card id="CGallery" max-width="20em">
        <v-card-title>{{ props.value.title }}</v-card-title>
        <v-card-subtitle>
            <pre>
Datum: {{ dateTime.format(props.value.dateFrom, props.value.dateTo, true) }}
Ort: {{ props.value.location }}
</pre
            >
        </v-card-subtitle>
        <v-card-text>
            <c-gallery-card :value="props.value" />
        </v-card-text>
        <v-card-actions v-if="props.value.description">
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Details
                <v-icon right v-text="showText ? icons.mdiChevronUp : icons.mdiChevronDown" />
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText" class="text-start">
                <v-divider />
                <pre>{{ props.value.description }}</pre>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import CGalleryCard from '~/components/pages/gallery/CGalleryCard.vue'
import Gallery from '~/models/entities/Gallery'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: Gallery }>()

const dateTime = useDateTime()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
}
const showText = ref(false)
</script>

<style lang="scss" scoped />

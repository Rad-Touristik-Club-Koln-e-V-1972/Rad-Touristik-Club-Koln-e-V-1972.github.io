<template>
    <v-card id="CGallery" width="30em">
        <v-card-title class="text-wrap">{{ props.value.title }}</v-card-title>
        <v-card-subtitle>
            <div v-text="`Datum: ${dateTime.format(props.value.dateFrom, props.value.dateTo, true)}`" />
            <div v-text="`Ort: ${props.value.location}`" />
        </v-card-subtitle>
        <v-card-text>
            <nuxt-link :to="{ name: 'gallery-album', params: { value: props.value.id } }">
                <v-img eager :src="props.value.titleImageUrl" style="cursor: pointer">
                    <template #placeholder>
                        <c-loading-skeleton />
                    </template>
                </v-img>
            </nuxt-link>
        </v-card-text>
        <v-card-actions v-if="props.value.description">
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Details
                <v-icon right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText">
                <v-divider />
                <v-card-text>
                    <pre v-text="props.value.description" />
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import Gallery from '~/models/entities/Gallery'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: Gallery }>()

const dateTime = useDateTime()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
}
const showText = ref(false)

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)
</script>

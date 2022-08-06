<template>
    <v-card id="CGallery" :loading="isLoading" max-width="20em">
        <template #progress>
            <v-progress-linear color="primary" height="15">Bitte warten</v-progress-linear>
        </template>
        <v-card-title class="text-wrap">{{ props.value.title }}</v-card-title>
        <v-card-subtitle>
            <div v-text="`Datum: ${dateTime.format(props.value.start, props.value.end, true)}`" />
            <div v-text="`Ort: ${props.value.location}`" />
        </v-card-subtitle>
        <v-card-text>
            <v-img eager :src="props.value.titleImageUrl.toString()" style="cursor: pointer" @click="open">
                <template #placeholder>
                    <c-loading-skeleton />
                </template>
            </v-img>
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
import { getCurrentInstance, nextTick, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'
import Gallery from '~/models/entities/about-us/Gallery'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: Gallery }>()

const router = getCurrentInstance()?.proxy.$router

const dateTime = useDateTime()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
}
const isLoading = ref(false)
const open = () => {
    isLoading.value = true
    nextTick(() => {
        setTimeout(() => {
            router?.push({ name: 'about-us-galleries-album', params: { value: props.value.id } })
        }, 0)
    })
}
const showText = ref(false)
</script>

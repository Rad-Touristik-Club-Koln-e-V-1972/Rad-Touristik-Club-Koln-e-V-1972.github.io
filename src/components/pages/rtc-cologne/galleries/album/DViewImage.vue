<template>
    <div style="max-width: 20em">
        <q-img :src="currentGalleryEntry.imageUrl.toString()" style="cursor: pointer" @click="dialog = true" />
        <q-dialog v-model="dialog" class="z-top" maximized persistent>
            <q-card flat>
                <d-view-image-original :model-value="currentGalleryEntry.imageUrl" />
                <q-btn class="absolute-top-right z-max" color="primary" :icon="mdiClose" text-color="accent" @click="dialog = false" />
                <c-slideshow v-model="currentGalleryEntry.id" :gallery-entries="props.modelValue" :infinite="false" />
            </q-card>
        </q-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose } from '@quasar/extras/mdi-v7'
import CSlideshow from 'components/pages/CSlideshow.vue'
import DViewImageOriginal from 'components/pages/rtc-cologne/galleries/album/DViewImageOriginal.vue'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{
    modelValue: GalleryEntry[]
    startValue?: GalleryEntry
}>()

const currentGalleryEntry = ref(props.startValue ?? props.modelValue[0])
const dialog = ref(false)
</script>

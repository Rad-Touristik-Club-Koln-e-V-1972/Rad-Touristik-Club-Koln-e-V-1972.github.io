<template>
    <q-img :src="props.startValue.previewUrl.toString()" style="cursor: pointer" @click="dialog = true" />
    <q-dialog v-model="dialog" maximized persistent>
        <q-card flat>
            <d-view-image-original :model-value="props.startValue.imageUrl" />
            <q-btn color="primary" :icon="mdiClose" style="position: absolute; right: 0; z-index: 2" text-color="accent" @click="dialog = false" />
            <c-slideshow :infinite="false" :model-value="props.modelValue" :start-id="startValue.id" />
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose } from '@quasar/extras/mdi-v7'
import CSlideshow from 'components/pages/CSlideshow.vue'
import DViewImageOriginal from 'components/pages/rtc-cologne/galleries/album/DViewImageOriginal.vue'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{
    modelValue: GalleryEntry[]
    startValue: GalleryEntry
}>()

const dialog = ref(false)
</script>

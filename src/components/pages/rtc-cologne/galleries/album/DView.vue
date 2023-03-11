<template>
    <div id="DView">
        <d-p-d-f-view v-if="isMimeTypePDF" :value="props.value[props.startIndex]" />
        <d-view-image v-else :value="props.value" :start-index="props.startIndex" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import DPDFView from '~/components/pages/rtc-cologne/galleries/album/DPDFView.vue'
import DViewImage from '~/components/pages/rtc-cologne/galleries/album/DViewImage.vue'

const props = defineProps<{
    value: GalleryEntry[]
    startIndex: number
}>()

const isMimeTypePDF = computed(() => props.value[props.startIndex].mimeType === 'application/pdf')
</script>

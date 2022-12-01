<template>
    <div id="DView">
        <d-p-d-f-view v-if="props.value[props.startIndex].mimeType === 'application/pdf'" :value="props.value[props.startIndex]" />
        <d-view-image v-else :value="props.value" :start-index="props.startIndex" />
    </div>
</template>

<script lang="ts" setup>
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import DPDFView from '~/components/pages/about-us/galleries/album/DPDFView.vue'
import DViewImage from '~/components/pages/about-us/galleries/album/DViewImage.vue'

const props = defineProps<{
    value: GalleryEntry[]
    startIndex: number
}>()
</script>

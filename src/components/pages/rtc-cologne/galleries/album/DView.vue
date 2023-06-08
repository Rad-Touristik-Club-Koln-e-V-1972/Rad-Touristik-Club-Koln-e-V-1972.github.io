<template>
    <div v-if="props.startIndex && props.value" id="DView">
        <d-p-d-f-view v-if="isMimeTypePDF" :value="props.value[props.startIndex]" />
        <d-view-image v-else :value="props.value" :start-index="props.startIndex" />
    </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import DPDFView from '~/components/pages/rtc-cologne/galleries/album/DPDFView.vue'
import DViewImage from '~/components/pages/rtc-cologne/galleries/album/DViewImage.vue'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps({
    startIndex: { default: 0, type: Number },
    value: { required: true, type: Array as PropType<GalleryEntry[]> },
})

const isMimeTypePDF = computed(() => props.value?.at(props.startIndex ?? 0)?.mimeType === 'application/pdf')
</script>

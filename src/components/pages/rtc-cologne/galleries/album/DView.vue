<template>
    <div v-if="props.modelValue">
        <d-p-d-f-view v-if="isMimeTypePDF" :model-value="props.modelValue[props.startIndex]" />
        <d-view-image v-else :model-value="props.modelValue" :start-value="props.modelValue[props.startIndex]" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import DPDFView from 'components/pages/rtc-cologne/galleries/album/DPDFView.vue'
import DViewImage from 'components/pages/rtc-cologne/galleries/album/DViewImage.vue'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = withDefaults(defineProps<{ modelValue: GalleryEntry[]; startIndex?: number }>(), { startIndex: 0 })

const isMimeTypePDF = computed(() => props.modelValue.at(props.startIndex)?.mimeType === 'application/pdf')
</script>

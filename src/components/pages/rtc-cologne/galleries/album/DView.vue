<template>
  <div>
    <d-p-d-f-view v-if="isMimeTypePDF && modelValueEntry" :model-value="modelValueEntry" />
    <d-view-image v-else :model-value="props.modelValue" :start-index="props.startIndex" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import DPDFView from 'components/pages/rtc-cologne/galleries/album/DPDFView.vue'
import DViewImage from 'components/pages/rtc-cologne/galleries/album/DViewImage.vue'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{ modelValue: GalleryEntry[]; startIndex?: number }>()

const isMimeTypePDF = computed(() => modelValueEntry.value?.mimeType === 'application/pdf')

const modelValueEntry = computed(() => props.modelValue[props.startIndex ?? 0])
</script>

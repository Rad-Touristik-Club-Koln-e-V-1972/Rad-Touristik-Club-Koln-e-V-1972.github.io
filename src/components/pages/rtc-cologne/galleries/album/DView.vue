<template>
  <d-p-d-f-view v-if="isMimeTypePDF" :model-value="modelValueAsArray[props.startIndex]" />
  <d-view-image v-else :model-value="modelValueAsArray" :start-value="modelValueAsArray[props.startIndex]" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import DPDFView from 'components/pages/rtc-cologne/galleries/album/DPDFView.vue'
import DViewImage from 'components/pages/rtc-cologne/galleries/album/DViewImage.vue'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = withDefaults(defineProps<{ modelValue: GalleryEntry[] | GalleryEntry; startIndex?: number }>(), { startIndex: 0 })

const isMimeTypePDF = computed(() => (Array.isArray(props.modelValue) ? props.modelValue[props.startIndex] : props.modelValue).mimeType === 'application/pdf')

const modelValueAsArray = computed(() => (Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]))
</script>

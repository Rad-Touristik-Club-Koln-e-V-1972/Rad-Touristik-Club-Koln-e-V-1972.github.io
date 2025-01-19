<template>
  <q-img :src style="cursor: pointer" @click="openURL(props.modelValue.imageUrl.toString())" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { openURL } from 'quasar'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{ modelValue: GalleryEntry }>()

const src = computed(() => (props.modelValue.previewUrl ?? props.modelValue.imageUrl).toString())
</script>

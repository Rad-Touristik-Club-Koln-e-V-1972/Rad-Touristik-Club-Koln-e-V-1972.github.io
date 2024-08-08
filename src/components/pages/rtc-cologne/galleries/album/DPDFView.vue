<template>
  <q-img :src="props.modelValue.previewUrl.toString()" style="cursor: pointer" @click="openURL(props.modelValue.imageUrl.toString())" />
</template>

<script lang="ts" setup>
import { openURL } from 'quasar'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

const props = defineProps<{ modelValue: GalleryAlbumEntry }>()
</script>

<template>
  <q-carousel ref="carousel" v-model="item" animated :autoplay="12000" control-color="primary" draggable="false" :height="props.height" :infinite="props.infinite" swipeable>
    <q-carousel-slide v-for="it in props.galleryEntries" :key="it.id" :name="it.id">
      <q-img class="absolute-center full-height" fit="contain" :src="it.imageUrl.toString()" style="z-index: 1" />
      <q-img class="absolute-center full-height" :src="it.imageUrl.toString()" style="filter: blur(20px)" />
    </q-carousel-slide>
    <template #control>
      <q-carousel-control v-if="props.galleryEntries.length > 1" position="bottom-left" style="z-index: 1">
        <q-btn color="primary" :icon="mdiArrowLeft" round size="md" text-color="accent" @click="carousel?.previous()" />
      </q-carousel-control>
      <q-carousel-control v-if="props.galleryEntries.length > 1" position="bottom-right" style="z-index: 1">
        <q-btn color="primary" :icon="mdiArrowRight" round size="md" text-color="accent" @click="carousel?.next()" />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { QCarousel } from 'quasar'
import { mdiArrowLeft, mdiArrowRight } from '@quasar/extras/mdi-v7'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = withDefaults(defineProps<{ entryID?: string; galleryEntries: GalleryEntry[]; height?: string; infinite?: boolean }>(), {
  entryID: undefined,
  galleryEntries: () => [] as GalleryEntry[],
  height: '100%',
  infinite: true,
})

const carousel = ref<InstanceType<typeof QCarousel>>()

const item = ref(props.entryID ?? props.galleryEntries[0]?.id.toString() ?? '')
</script>

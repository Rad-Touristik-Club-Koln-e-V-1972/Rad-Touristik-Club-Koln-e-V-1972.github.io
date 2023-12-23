<template>
    <q-carousel
        ref="carousel"
        v-model="modelValue"
        animated
        :autoplay="12000"
        control-color="primary"
        draggable="false"
        :height="props.height"
        :infinite="props.infinite"
        swipeable
    >
        <q-carousel-slide v-for="it in props.galleryEntries" :key="it" :name="it">
            <q-img class="absolute-center full-height" fit="contain" :placeholder-src="it.previewUrl.toString()" :src="it.imageUrl.toString()" style="z-index: 1" />
            <q-img class="absolute-center full-height" :src="it.previewUrl.toString()" style="filter: blur(20px)" />
        </q-carousel-slide>
        <template #control>
            <q-carousel-control position="bottom-left" style="z-index: 1">
                <q-btn color="primary" :icon="mdiArrowLeft" round size="md" text-color="accent" @click="$refs.carousel.previous()" />
            </q-carousel-control>
            <q-carousel-control position="bottom-right" style="z-index: 1">
                <q-btn color="primary" :icon="mdiArrowRight" round size="md" text-color="accent" @click="$refs.carousel.next()" />
            </q-carousel-control>
        </template>
    </q-carousel>
</template>

<script lang="ts" setup>
import { defineModel, ref } from 'vue'
import { mdiArrowLeft, mdiArrowRight } from '@quasar/extras/mdi-v7'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const modelValue = defineModel<GalleryEntry>({ local: true })
const props = withDefaults(defineProps<{ galleryEntries: GalleryEntry[]; height?: string; infinite?: boolean }>(), {
    height: '100%',
    infinite: true,
})

const carousel = ref()

if (modelValue.value === undefined) {
    const [first] = props.galleryEntries
    modelValue.value = first
}
</script>

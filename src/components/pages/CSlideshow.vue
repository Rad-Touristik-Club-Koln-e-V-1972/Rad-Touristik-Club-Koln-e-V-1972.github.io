<template>
    <q-carousel
        ref="carousel"
        v-model="slide"
        animated
        :autoplay="12000"
        control-color="primary"
        draggable="false"
        :height="props.height"
        :infinite="props.infinite"
        swipeable
        @update:model-value="(value) => emits('update:modelValue', value)"
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
import { onMounted, PropType, ref } from 'vue'
import { mdiArrowLeft, mdiArrowRight } from '@quasar/extras/mdi-v7'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const emits = defineEmits<{ 'update:modelValue': [value: GalleryEntry] }>()
const props = defineProps({
    galleryEntries: { required: true, type: Array as PropType<GalleryEntry[]> },
    height: { default: '100%', type: String },
    infinite: { default: true, type: Boolean },
    modelValue: { default: undefined, type: GalleryEntry },
})

const carousel = ref()
const slide = ref()

onMounted(() => {
    const [first] = props.galleryEntries

    if (props.modelValue) slide.value = props.modelValue
    else slide.value = first
})
</script>

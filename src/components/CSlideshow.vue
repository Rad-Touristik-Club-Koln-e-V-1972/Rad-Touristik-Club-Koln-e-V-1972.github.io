<template>
    <v-carousel
        id="CSlideshow"
        :cycle="props.cycle"
        :height="props.height"
        hide-delimiters
        interval="12000"
        :show-arrows="props.value.length > 1"
        show-arrows-on-hover
        :value="startIndex"
    >
        <v-carousel-item v-for="it in props.value" :key="it.imageUrl.toString()" contain :src="it.imageUrl.toString()">
            <template #placeholder>
                <c-loading-skeleton />
            </template>
            <template #default>
                <v-img height="100%" :src="it.previewUrl.toString()" style="filter: blur(20px); z-index: -2">
                    <template #placeholder>
                        <c-loading-skeleton />
                    </template>
                </v-img>
            </template>
        </v-carousel-item>
    </v-carousel>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'

const props = defineProps({
    cycle: { default: true, type: Boolean },
    height: { default: '100%', type: String },
    startIndex: { default: 0, type: Number },
    value: { required: true, type: Array as PropType<GalleryEntry[]> },
})
</script>

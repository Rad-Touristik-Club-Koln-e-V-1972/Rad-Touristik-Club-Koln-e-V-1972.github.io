<template>
    <v-card id="DPDFView">
        <v-img :src="props.value.previewUrl.toString()" style="cursor: pointer" @click="open">
            <template #placeholder>
                <c-loading-skeleton />
            </template>
        </v-img>
    </v-card>
</template>

<script lang="ts" setup>
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{ value: GalleryEntry }>()

const open = () => window.open(props.value.imageUrl.toString(), '_blank')
</script>

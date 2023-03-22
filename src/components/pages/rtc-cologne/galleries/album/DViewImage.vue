<!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support.
      See https://github.com/vuetifyjs/vuetify/issues/11177 -->
<template>
    <v-card id="DViewImage">
        <v-dialog v-model="isOpen" fullscreen persistent>
            <template #activator="{ attrs, on }">
                <v-img :src="props.value[startIndex].previewUrl.toString()" style="cursor: pointer" v-bind="attrs" v-on="on">
                    <template #placeholder>
                        <c-loading-skeleton />
                    </template>
                </v-img>
            </template>
            <v-sheet height="100%">
                <d-view-image-original style="left: 0; z-index: 1" :value="props.value[startIndex].imageUrl" />
                <v-btn absolute color="primary" style="right: 0; z-index: 1" @click="isOpen = false">
                    <v-icon color="accent">{{ icons.mdiClose }}</v-icon>
                </v-btn>
                <!-- TODO KEYBOARD SUPPORT COMES WITH VUETIFY 3.x https://github.com/vuetifyjs/vuetify/issues/11544 -->
                <c-slideshow :cycle="false" :start-index="startIndex" :value="props.value" />
            </v-sheet>
        </v-dialog>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose } from '@mdi/js'
import CLoadingSkeleton from '~/components/pages/CLoadingSkeleton.vue'
import CSlideshow from '~/components/pages/CSlideshow.vue'
import DViewImageOriginal from '~/components/pages/rtc-cologne/galleries/album/DViewImageOriginal.vue'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{
    value: GalleryEntry[]
    startIndex: number
}>()

const icons = { mdiClose }
const isOpen = ref(false)
</script>

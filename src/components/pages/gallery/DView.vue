<!-- TODO WORKAROUND UNTIL VUETIFY GETS A NATIVE IMAGE GALLERY IN https://github.com/vuetifyjs/vuetify/issues/11177
      OR USE https://github.com/sachinchoolur/lightgallery.js/ WITH VUE/NUXT 3 -->
<template>
    <v-card id="DView" min-height="100">
        <v-dialog v-model="isOpen" fullscreen persistent>
            <template #activator="{ attrs, on }">
                <v-img :src="props.value[startIndex].previewUrl" style="cursor: pointer" v-bind="attrs" v-on="on">
                    <template #placeholder>
                        <c-loading-skeleton />
                    </template>
                </v-img>
            </template>
            <v-sheet height="100%">
                <d-view-original style="left: 0; z-index: 1" :value="props.value[startIndex].srcUrl" />
                <v-btn absolute color="primary" style="right: 0; z-index: 1" @click="isOpen = false">
                    <v-icon color="accent">{{ icons.mdiClose }}</v-icon>
                </v-btn>
                <!-- TODO KEYBOARD SUPPORT COMES WITH VUETIFY 3.x https://github.com/vuetifyjs/vuetify/issues/11544 -->
                <c-slideshow :cycle="false" :start-index="startIndex" :value="props.value.flatMap((it) => it.srcUrl)" />
            </v-sheet>
        </v-dialog>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose } from '@mdi/js'
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'
import CSlideshow from '~/components/CSlideshow.vue'
import DViewOriginal from '~/components/pages/gallery/DViewOriginal.vue'
import Entry from '~/models/entities/gallery/Entry'

const props = defineProps<{
    value: Entry[]
    startIndex: number
}>()

const icons = { mdiClose }
const isOpen = ref(false)
</script>

<template>
    <div id="VIndex">
        <v-row no-gutters>
            <v-col>
                <c-slideshow height="200" :value="useSlideshowStore().all" />
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <v-sheet>
                    <v-card-text>
                        <v-timeline :dense="vuetify?.breakpoint.mobile">
                            <v-timeline-item v-for="it in value" :key="it.id">
                                <template #opposite>
                                    <span class="font-weight-bold primary--text text-h5" v-text="dateTime.format(it.start, it.end, true)" />
                                </template>
                                <v-card max-width="40em">
                                    <v-toolbar color="primary" flat>
                                        <v-toolbar-title class="accent--text text-title">{{ it.title }}</v-toolbar-title>
                                    </v-toolbar>
                                    <v-card-text>
                                        <pre class="black--text text-pre-wrap" v-html="it.text" />
                                    </v-card-text>
                                    <v-card-actions v-if="Object.keys(it.albumIDs).length" class="justify-center">
                                        <c-gallery
                                            v-for="gallery in galleryStore.findByIds(...Object.keys(it.albumIDs))"
                                            :key="gallery.id"
                                            :value="gallery"
                                            :album="it.albumIDs[gallery.id]"
                                        />
                                    </v-card-actions>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
// TODO WORKAROUND UNTIL VUETIFY 2.7
import { getCurrentInstance, ref } from 'vue'
import CSlideshow from '~/components/CSlideshow.vue'
import CGallery from '~/components/pages/rtc-cologne/galleries/CGallery.vue'
import { useGalleryStore } from '~/store/rtc-cologne/Gallery'
import { useBlogStore } from '~/store/index/Blog'
import { useSlideshowStore } from '~/store/index/Slideshow'
import useDateTime from '~/utils/DateTime'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const dateTime = useDateTime()

const galleryStore = useGalleryStore()

const value = useBlogStore().all
</script>

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
                                    <span class="font-weight-bold text-h5 primary--text" v-text="dateTime.format(it.start, it.end, true)" />
                                </template>
                                <v-card max-width="40em">
                                    <v-toolbar color="primary" dense flat>
                                        <v-toolbar-title class="accent--text">{{ it.title }}</v-toolbar-title>
                                    </v-toolbar>
                                    <v-card-text>
                                        <pre class="black--text text-pre-wrap" v-html="it.text" />
                                    </v-card-text>
                                    <v-card-actions v-if="it.albumIDs.length">
                                        <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                                        <c-gallery v-for="gallery in galleryStore.findByIds(...it.albumIDs)" :key="gallery.id" :value="gallery" />
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
import CGallery from '~/components/pages/about-us/galleries/CGallery.vue'
import { useGalleryStore } from '~/store/about-us/Gallery'
import { useBlogStore } from '~/store/index/Blog'
import { useSlideshowStore } from '~/store/index/Slideshow'
import useDateTime from '~/utils/DateTime'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const dateTime = useDateTime()

const galleryStore = useGalleryStore()

const value = useBlogStore().all
</script>

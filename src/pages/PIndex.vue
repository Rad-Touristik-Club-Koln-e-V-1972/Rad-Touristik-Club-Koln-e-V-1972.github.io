<template>
    <div class="row">
        <div class="col">
            <c-slideshow height="200px" :model-value="useSlideshowStore().all" />
        </div>
    </div>
    <div class="row">
        <div class="col">
            <c-news />
        </div>
    </div>
    <div class="row">
        <div class="col">
            <q-card flat>
                <q-card-section>
                    <q-timeline :layout="$q.platform.is.mobile ? 'dense' : 'loose'">
                        <q-timeline-entry
                            v-for="(it, index) in useBlogStore().findAllBeforeTomorrow()"
                            :key="it.id"
                            :side="index % 2 === 0 ? 'right' : 'left'"
                            :subtitle="dateTime.format(it.start, it.end, true)"
                            :title="it.title"
                        >
                            <q-card>
                                <q-card-section class="text-left">
                                    <span v-html="it.text" />
                                </q-card-section>
                                <q-card-actions v-if="$q.platform.is.mobile && Object.keys(it.albumIDs).length" class="justify-center">
                                    <c-gallery
                                        v-for="gallery in galleryStore.findByIds(...Object.keys(it.albumIDs))"
                                        :key="gallery.id"
                                        :album="it.albumIDs[gallery.id]"
                                        :model-value="gallery"
                                    />
                                </q-card-actions>
                            </q-card>
                            <template v-if="$q.platform.is.desktop" #subtitle>
                                <span class="text-h6" v-text="useDateTime().format(it.start, it.end, true)" />
                                <div v-if="Object.keys(it.albumIDs).length">
                                    <c-gallery
                                        v-for="gallery in galleryStore.findByIds(...Object.keys(it.albumIDs))"
                                        :key="gallery.id"
                                        :album="it.albumIDs[gallery.id]"
                                        :model-value="gallery"
                                    />
                                </div>
                            </template>
                        </q-timeline-entry>
                    </q-timeline>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CSlideshow from 'components/pages/CSlideshow.vue'
import CNews from 'components/pages/index/CNews.vue'
import CGallery from 'components/pages/rtc-cologne/galleries/CGallery.vue'
import useBlogStore from 'stores/index/Blog'
import useSlideshowStore from 'stores/index/Slideshow'
import useGalleryStore from 'stores/rtc-cologne/Gallery'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

const galleryStore = useGalleryStore()
</script>

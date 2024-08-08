<template>
  <div>
    <div class="row">
      <div class="col">
        <c-slideshow :gallery-entries="slideshowRepo.all()" height="200px" />
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
              <q-timeline-entry v-for="(it, index) in blogRepo.allBeforeTomorrow()" :key="it.id" :side="index % 2 === 0 ? 'right' : 'left'" :subtitle="dateTime.format(it.start, it.end)" :title="it.title">
                <q-card>
                  <q-card-section class="text-left">
                    <span v-html="it.text" />
                  </q-card-section>
                  <q-card-actions v-if="$q.platform.is.mobile" class="justify-center">
                    <c-gallery v-for="gallery in it.galleries" :key="gallery.id" :model-value="gallery" />
                  </q-card-actions>
                </q-card>
                <template v-if="$q.platform.is.desktop" #subtitle>
                  <span class="text-h6">{{ dateTime.format(it.start, it.end, true) }}</span>
                  <div>
                    <c-gallery v-for="gallery in it.galleries" :key="gallery.id" :model-value="gallery" />
                  </div>
                </template>
              </q-timeline-entry>
            </q-timeline>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { useRepo } from 'pinia-orm'
import CSlideshow from 'components/pages/CSlideshow.vue'
import CNews from 'components/pages/home/CNews.vue'
import CGallery from 'components/pages/rtc-cologne/galleries/CGallery.vue'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'
import BlogRepository from 'stores/home/BlogRepository'
import useDateTime from 'src/utils/DateTime'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const dateTime = useDateTime()

const blogRepo = useRepo(BlogRepository)
const slideshowRepo = useRepo(GalleryAlbumEntry)
</script>

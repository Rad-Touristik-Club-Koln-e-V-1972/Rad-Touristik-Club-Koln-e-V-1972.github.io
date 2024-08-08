<template>
  <div>
    <q-card v-if="value" flat>
      <q-toolbar class="bg-primary">
        <q-btn dense flat :icon="mdiClose" round @click="close" />
        <q-toolbar-title class="text-accent">{{ value.time.name }}</q-toolbar-title>
      </q-toolbar>
      <q-card-section class="text-subtitle1">{{ useDateTime().format(value.time.start, value.time.end) }} bei {{ value.location }}</q-card-section>
      <q-card-section>
        <q-tabs v-show="value.albums.length && value.youtubeVideoIds.length" v-model="tab" active-bg-color="primary" active-color="accent" indicator-color="secondary">
          <q-tab v-for="name in tabs" :key="name" :label="name" :name />
        </q-tabs>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="Bilder">
            <q-tabs v-show="value.albums.length > 1" v-model="tabPictures" active-bg-color="primary" active-color="accent" indicator-color="secondary">
              <q-tab v-for="{ id, name } in value.albums" :key="id" :label="name" :name />
            </q-tabs>
            <q-tab-panels v-model="tabPictures">
              <q-tab-panel v-for="(item, key) in value.albums" :key :name="key">
                <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
                                & https://drafts.csswg.org/css-grid-3/
                                & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
                <masonry-wall :column-width="280" :gap="16" :items="item">
                  <template #default="{ index }">
                    <d-view :start-index="index" :model-value="item" />
                  </template>
                </masonry-wall>
              </q-tab-panel>
            </q-tab-panels>
          </q-tab-panel>
          <q-tab-panel name="Videos">
            <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
                        & https://drafts.csswg.org/css-grid-3/
                        & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
            <masonry-wall :column-width="useQuasar().platform.is.mobile ? 280 : 560" :gap="16" :items="value.youtubeVideoIds">
              <template #default="{ item }">
                <q-video :ratio="16 / 9" :src="`https://www.youtube-nocookie.com/embed/${item}`" />
              </template>
            </masonry-wall>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { mdiClose } from '@quasar/extras/mdi-v7'
import { useRepo } from 'pinia-orm'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ album: string; galleryId: string }>()

const router = useRouter()

const galleriesRepo = useRepo(Gallery)

const value = ref<Gallery | null>()

const tab = ref('Bilder')
const tabPictures = ref()

const tabs = computed(() => {
  const tabs = []

  if (value.value?.albums.length) tabs.push('Bilder')
  if (value.value?.youtubeVideoIds.length) tabs.push('Videos')

  return tabs
})

const close = () => {
  router.go(-1)
}

onMounted(() => {
  value.value = galleriesRepo.query().find(props.galleryId)
  if (!value.value) router.go(-1)

  tabPictures.value = props.album
})
</script>

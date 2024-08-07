<template>
  <div>
    <q-card v-if="value" flat>
      <q-toolbar class="bg-primary">
        <q-btn dense flat :icon="mdiClose" round @click="close" />
        <q-toolbar-title class="text-accent">{{ value.title }}</q-toolbar-title>
      </q-toolbar>
      <q-card-section class="text-subtitle1">{{ useDateTime().format(value.start, value.end) }} bei {{ value.location }}</q-card-section>
      <q-card-section>
        <q-tabs v-show="Object.keys(value.images).length && value.youtubeVideoIds.length" v-model="tab" active-bg-color="primary" active-color="accent" indicator-color="secondary">
          <q-tab v-for="name in tabs" :key="name" :label="name" :name />
        </q-tabs>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="Bilder">
            <q-tabs v-show="Object.keys(value.images).length > 1" v-model="tabPictures" active-bg-color="primary" active-color="accent" indicator-color="secondary">
              <q-tab v-for="name in Object.keys(value.images)" :key="name" :label="name" :name />
            </q-tabs>
            <q-tab-panels v-model="tabPictures">
              <q-tab-panel v-for="(item, key) in value.images" :key :name="key">
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
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { mdiClose } from '@quasar/extras/mdi-v7'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import useGalleryStore from 'stores/rtc-cologne/Gallery'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ album: string; id: string }>()

const router = useRouter()

const value = ref<Gallery>()

const tab = ref('Bilder')
const tabPictures = ref()

const tabs = computed(() => {
  const tabs = []

  if (Object.keys(value.value?.images ?? {}).length) tabs.push('Bilder')
  if (value.value?.youtubeVideoIds.length) tabs.push('Videos')

  return tabs
})

const close = () => {
  router.go(-1)
}

onMounted(() => {
  value.value = useGalleryStore().findById(props.id)
  if (!value.value) router.go(-1)

  tabPictures.value = props.album
})
</script>

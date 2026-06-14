<template>
  <q-card-section>
    <q-tabs v-show="Object.keys(modelValue.images).length && modelValue.youtubeVideoIds.length" v-model="tab" active-bg-color="primary" active-color="accent" indicator-color="secondary">
      <q-tab v-for="name in tabs" :key="name" :label="name" :name />
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="Bilder">
        <q-tabs v-show="Object.keys(modelValue.images).length > 1" v-model="tabPictures" active-bg-color="primary" active-color="accent" indicator-color="secondary">
          <q-tab v-for="name in Object.keys(modelValue.images)" :key="name" :label="name" :name />
        </q-tabs>
        <q-tab-panels v-model="tabPictures">
          <q-tab-panel v-for="(item, key) in modelValue.images" :key :name="key">
            <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
                            & https://drafts.csswg.org/css-grid-3/
                            & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
            <masonry-wall :column-width="280" :gap="16" :items="item">
              <template #default="{ index }">
                <d-view style="max-width: 280px" :model-value="item" :start-index="index" />
              </template>
            </masonry-wall>
          </q-tab-panel>
        </q-tab-panels>
      </q-tab-panel>
      <q-tab-panel name="Videos">
        <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
                    & https://drafts.csswg.org/css-grid-3/
                    & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
        <masonry-wall :column-width="useQuasar().platform.is.mobile ? 280 : 560" :gap="16" :items="modelValue.youtubeVideoIds">
          <template #default="{ item }">
            <q-video :ratio="16 / 9" :src="`https://www.youtube-nocookie.com/embed/${item}`" />
          </template>
        </masonry-wall>
      </q-tab-panel>
    </q-tab-panels>
  </q-card-section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { MasonryWall } from '@yeger/vue-masonry-wall'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import type Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

const props = defineProps<{ album?: string; modelValue: Gallery }>()

const tab = ref('Bilder')
const tabPictures = ref(props.album ? props.album : Object.keys(props.modelValue.images)[0])
const value = ref<Gallery>()

const tabs = computed(() => {
  const tabs: string[] = []

  if (Object.keys(value.value?.images ?? {}).length) tabs.push('Bilder')
  if (value.value?.youtubeVideoIds.length) tabs.push('Videos')

  return tabs
})
</script>

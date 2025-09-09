<template>
  <q-card v-if="items?.length">
    <q-card-section>
      <q-carousel
        v-model="slide"
        animated
        :arrows="items.length > 1"
        autoplay
        class="full-height"
        control-color="primary"
        control-type="push"
        draggable="false"
        infinite
        padding
        swipeable
        transition-next="slide-left"
        transition-prev="slide-right"
      >
        <q-carousel-slide v-for="it in items" :key="it.id" :name="it.id" class="column flex-center no-wrap">
          <div v-if="useQuasar().platform.is.mobile || !it.text" style="width: 20em">
            <q-video v-if="it.youtubeVideoId" :src="`https://www.youtube-nocookie.com/embed/${it.youtubeVideoId}`" />
            <q-img v-else-if="it.url" :src="it.image.imageUrl.toString()" style="cursor: pointer" @click="openURL(it.url.toString())" />
            <d-view v-else :model-value="[it.image]" />
            <q-expansion-item v-if="it.text" expand-icon-toggle expand-separator label="Details">
              <q-card>
                <q-card-section>
                  <span class="text-pre-wrap" v-html="it.text" />
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
          <div v-else class="full-width">
            <div class="row no-wrap">
              <div class="col-5">
                <q-video v-if="it.youtubeVideoId" :ratio="0.563" :src="`https://www.youtube-nocookie.com/embed/${it.youtubeVideoId}`" />
                <q-img v-else-if="it.url" :src="it.image.imageUrl.toString()" style="cursor: pointer" @click="openURL(it.url.toString())" />
                <d-view v-else :model-value="[it.image]" />
              </div>
              <div class="col-auto q-px-lg" style="width: 80ch">
                <q-card>
                  <q-card-section>
                    <span class="text-pre-wrap" v-html="it.text" />
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { openURL, useQuasar } from 'quasar'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import useNewsStore from 'stores/home/News'

const items = useNewsStore().allValid

const slide = ref(items[0]?.id)
</script>

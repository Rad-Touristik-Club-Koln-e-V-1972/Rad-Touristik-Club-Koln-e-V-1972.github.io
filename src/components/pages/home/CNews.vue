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
          <div style="width: 20em">
            <d-view :model-value="[it.galleryEntry]" />
            <q-expansion-item v-if="it.text" expand-icon-toggle expand-separator label="Details">
              <q-card>
                <q-card-section>
                  <span class="text-pre-wrap" v-html="it.text" />
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRepo } from 'pinia-orm'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import NewsRepository from 'stores/home/NewsRepository'

const newsRepo = useRepo(NewsRepository)

const items = newsRepo.allValid()
const slide = ref(items[0]?.id)
</script>

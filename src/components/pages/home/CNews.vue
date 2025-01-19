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
            <q-img v-if="it.url" :src="it.image.imageUrl.toString()" style="cursor: pointer" @click="openURL(it.url.toString())" />
            <d-view v-else :model-value="[it.image]" />
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
import { openURL } from 'quasar'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import useNewsStore from 'stores/home/News'

const items = useNewsStore().allValid

const slide = ref(items[0]?.id)
</script>

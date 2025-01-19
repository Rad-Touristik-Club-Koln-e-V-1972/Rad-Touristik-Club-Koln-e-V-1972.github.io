<template>
  <q-card flat>
    <q-card-section>
      <div class="justify-center row">
        <div class="col-auto">
          <q-card style="max-width: 40em">
            <q-card-section class="bg-primary text-accent text-h6">Vorwort</q-card-section>
            <q-card-section>
              <span class="text-pre-wrap" v-html="props.text" />
            </q-card-section>
          </q-card>
        </div>
        <div v-for="(it, index) in props.images" :key="it.id" class="col-auto">
          <d-view :start-index="index" :model-value="props.images" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{ images: GalleryEntry[]; text: string }>()
</script>

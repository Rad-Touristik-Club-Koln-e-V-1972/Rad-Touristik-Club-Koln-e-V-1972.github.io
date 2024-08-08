<template>
  <div v-if="training">
    <q-card v-if="training.galleryEntries">
      <q-card-section>
        <c-slideshow :gallery-entries="training.galleryEntries as GalleryAlbumEntry[]" height="200px" />
      </q-card-section>
      <q-card-section class="bg-primary text-accent text-h6">{{ training.title }}</q-card-section>
    </q-card>
    <q-card class="row">
      <q-card-section class="col-auto">
        <q-markup-table>
          <tbody>
            <tr>
              <td class="text-bold">Trainingstag:</td>
              <td>{{ training.day }}</td>
            </tr>
            <tr>
              <td class="text-bold">Ausweichtrainingstag:</td>
              <td>{{ training.alternativeDay }}</td>
            </tr>
            <tr>
              <td class="text-bold">Treffpunkt:</td>
              <td>{{ training.location }}</td>
            </tr>
            <tr>
              <td class="text-bold">Abfahrt:</td>
              <td>{{ training.departure }}</td>
            </tr>
            <tr>
              <td class="text-bold">Streckenlänge:</td>
              <td>{{ training.length }}</td>
            </tr>
            <tr>
              <td class="text-bold">Tempo:</td>
              <td>{{ training.speed }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-card-section class="col-auto">
        <span class="text-pre-wrap" v-html="training.text" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRepo } from 'pinia-orm'
import CSlideshow from 'components/pages/CSlideshow.vue'
import Training from 'src/models/entities/events/Training'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

const trainingsRepository = useRepo(Training)

const training = ref(trainingsRepository.with('galleryEntries').all()[0])
</script>

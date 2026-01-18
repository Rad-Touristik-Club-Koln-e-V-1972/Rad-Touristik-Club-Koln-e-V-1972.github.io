<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Der RTC Köln e.V. bietet euch {{ permanents.length }} Permanente</q-card-section>
    <q-card-section class="text-subtitle1">
      <div class="row justify-center">
        <div class="col-5">
          Wir haben {{ permanents.length }} anspruchsvolle und landschaftlich reizvolle Strecke{{ permanents.length > 1 ? 'n' : '' }} ausgearbeitet,
          <br />
          die in der Rennradsaison (auch im Winter) alleine oder in der Gruppe und nach eigenem Einschätzungsvermögen abgefahren werden k{{ permanents.length > 1 ? 'önne' : 'an' }}n.
        </div>
        <div class="col-1" />
        <!-- // TODO Also delete from News.ts -->
        <div class="col" style="max-width: 25em">
          <d-view class="q-mt-sm" :model-value="images" />
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="justify-center q-gutter-lg row">
        <div v-for="it in permanents" :key="it.id" class="col-auto">
          <c-permanent :model-value="it" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import CPermanent from 'components/pages/events/tours/CPermanent.vue'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import useTourStore from 'stores/events/Tour'

const permanents = useTourStore().permanents

// TODO Also delete from News.ts
const images = [new GalleryEntryBuilder().setId('267309be-72a2-43c0-b45c-41bb6bcc85e8').setImageUrl('content.rtc-koeln.de/pages/news/signal-2026-01-01-165641.jpg.avif').buildGalleryEntry()]
</script>

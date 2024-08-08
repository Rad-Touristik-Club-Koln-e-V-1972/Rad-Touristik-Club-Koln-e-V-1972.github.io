<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Kontakte</q-card-section>
    <q-card-section class="text-subtitle1">Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</q-card-section>
    <q-card-section>
      <q-card class="row" flat>
        <d-view-image class="col-auto" :model-value="images" style="margin: 10px; width: 20em" />
        <q-card-section class="col-auto text-subtitle2">
          Der Vorstand vom RTC Köln e.V. (von links):
          <br />
          Judith (Geschäftsführerin), Diana (1. Vorsitzende), Matthias (Kassenwart), Manni (Sportwart) und Frank (2. Vorsitzender).
        </q-card-section>
      </q-card>
      <div class="row">
        <c-contact v-for="it in contactsRepo.all()" :key="it.id" class="col-auto" :model-value="it" style="margin: 10px; width: 20em" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import CContact from 'components/pages/rtc-cologne/CContact.vue'
import DViewImage from 'components/pages/rtc-cologne/galleries/album/DViewImage.vue'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'
import Contact from 'src/models/entities/rtc-cologne/Contact'

const contactsRepo = useRepo(Contact)

const images = useRepo(GalleryAlbumEntry).make([
  {
    imageUrl: new URL('https://content.rtc-koeln.de/pages/rtc-cologne/contacts/IMG_9235.jpg.avif'),
  },
])
</script>

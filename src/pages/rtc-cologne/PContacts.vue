<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Kontakte</q-card-section>
    <q-card-section class="text-subtitle1">Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</q-card-section>
    <q-card-section>
      <q-card class="row" flat>
        <d-view-image class="col-auto" :model-value="imageUrls" style="margin: 10px; width: 20em" />
        <q-card-section class="col-auto text-subtitle2">
          Der Vorstand vom RTC Köln e.V. (von links):
          <br />
          Matthias (Kassenwart), Frank (2. Vorsitzender & Geschäftsführung), Manni (Sportwart) und Diana (1. Vorsitzende).
        </q-card-section>
      </q-card>
      <div class="row">
        <c-contact v-for="it in useContactsStore().all" :key="it.id" class="col-auto" :model-value="it" style="margin: 10px; width: 20em" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CContact from 'components/pages/rtc-cologne/CContact.vue'
import DViewImage from 'components/pages/rtc-cologne/galleries/album/DViewImage.vue'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import useContactsStore from 'stores/rtc-cologne/Contacts'

const imageUrls = ref([new GalleryEntryBuilder().setId('abeba013-67c5-4974-aa02-4675a8db7042').setImageUrl('content.rtc-koeln.de/pages/rtc-cologne/contacts/image0.jpeg.avif').buildGalleryEntry()])
</script>

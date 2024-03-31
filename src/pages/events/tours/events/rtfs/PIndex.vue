<template>
  <q-card v-if="value" flat>
    <q-card-section class="bg-primary text-accent text-h6">{{ value.title }}</q-card-section>
    <q-card-section class="text-subtitle1">Stand: {{ dateTime.format(value.lastChange) }}</q-card-section>
    <q-card-section>
      <q-tabs v-model="tab" active-bg-color="primary" active-color="accent" class="bg-primary" indicator-color="accent">
        <q-tab :icon="mdiBike" label="Allgemein" name="general" />
        <q-tab :icon="mdiInformation" label="Info" name="info" />
        <q-tab :icon="mdiGoKartTrack" label="Strecken" name="tracks" />
        <q-tab :icon="mdiCurrencyEur" label="Anmeldung" name="registration" />
      </q-tabs>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="general">
          <c-general :images="value.images" :text="value.text" />
        </q-tab-panel>
        <q-tab-panel name="info">
          <c-info :fees="value.fees" :location="value.location" :times="value.times" :tracks="value.tracks" />
        </q-tab-panel>
        <q-tab-panel name="tracks">
          <c-tracks :tracks="value.tracks" />
        </q-tab-panel>
        <q-tab-panel name="registration">
          <c-registration />
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
    <d-popup v-if="value.popup" :model-value="value.popup" />
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiBike, mdiCurrencyEur, mdiGoKartTrack, mdiInformation } from '@quasar/extras/mdi-v7'
import CGeneral from 'components/pages/events/tours/events/rtfs/CGeneral.vue'
import CInfo from 'components/pages/events/tours/events/rtfs/CInfo.vue'
import CRegistration from 'components/pages/events/tours/events/rtfs/CRegistration.vue'
import CTracks from 'components/pages/events/tours/events/rtfs/CTracks.vue'
import DPopup from 'components/pages/events/tours/events/rtfs/DPopup.vue'
import Event from 'src/models/entities/events/tours/Event'
import useTourStore from 'stores/events/Tour'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

const value: Event | undefined = useTourStore().rtf

const tab = ref('info')
</script>

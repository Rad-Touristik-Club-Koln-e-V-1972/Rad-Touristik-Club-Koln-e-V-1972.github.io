<template>
  <q-card v-if="props.value" flat>
    <q-card-section class="bg-primary text-accent text-h6">{{ props.value.title }}</q-card-section>
    <q-card-section class="text-subtitle1">Stand: {{ useDateTime().format(props.value.lastChange) }}</q-card-section>
    <q-card-section>
      <q-tabs v-model="tab" active-bg-color="primary" active-color="accent" class="bg-primary" indicator-color="accent">
        <q-tab :icon="mdiBike" label="Allgemein" name="general" />
        <q-tab :icon="mdiInformation" label="Info" name="info" />
        <q-tab :icon="mdiGoKartTrack" label="Strecken" name="tracks" />
        <q-tab :icon="mdiCurrencyEur" label="Anmeldung" name="registration" />
      </q-tabs>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="general">
          <c-general :images="props.value.images" :text="props.value.text" />
        </q-tab-panel>
        <q-tab-panel name="info">
          <c-info :fee-hints="props.feeHints" :fees="props.value.fees" :location="props.value.location" :times="props.value.times" :tracks="props.value.tracks" />
        </q-tab-panel>
        <q-tab-panel name="tracks">
          <c-tracks :tracks="props.value.tracks" />
        </q-tab-panel>
        <q-tab-panel name="registration">
          <c-registration :category="props.value?.category" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
    <d-popup v-if="props.value.popup" :model-value="props.value.popup" />
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiBike, mdiCurrencyEur, mdiGoKartTrack, mdiInformation } from '@quasar/extras/mdi-v7'
import CGeneral from 'components/pages/events/tours/CGeneral.vue'
import CInfo from 'components/pages/events/tours/CInfo.vue'
import CRegistration from 'components/pages/events/tours/CRegistration.vue'
import CTracks from 'components/pages/events/tours/CTracks.vue'
import DPopup from 'components/pages/events/tours/DPopup.vue'
import Event from 'src/models/entities/events/tours/Event'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ feeHints?: string; value: Event | undefined }>()

const tab = ref('info')
</script>

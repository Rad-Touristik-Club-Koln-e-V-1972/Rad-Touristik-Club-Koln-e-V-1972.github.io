<template>
  <q-card v-if="props.modelValue" flat>
    <q-card-section class="bg-primary text-accent text-h6">{{ props.modelValue.title }}</q-card-section>
    <q-card-section>
      <span>Stand: {{ useDateTime().format(props.modelValue.lastChange) }}</span>
      <div class="text-subtitle1" v-if="calendarStore.nextRTF">
        Unsere <b>{{ calendarStore.nextRTF.name }}</b> ist am <b>{{ useDateTime().format(calendarStore.nextRTF.start) }}.</b>
      </div>
      <i>Wir unterstützen den neuen Kids-Cup in der Radsport-Region Köln-Bonn-Aachen für Kinder und Jugendliche in den Altersklassen 2012-2015 und 2016-2019.</i>
    </q-card-section>
    <q-card-actions align="left">
      <q-btn class="bg-secondary" v-if="route.name === 'events-tours-rtfs'" color="primary" label="Zur Family Tour" :to="{ name: 'events-tours-rtfs-family' }" />
      <q-btn v-if="route.name === 'events-tours-rtfs-family'" class="bg-secondary" color="primary" label="Zur RTF" :to="{ name: 'events-tours-rtfs' }" />
      <q-btn v-if="route.name === 'events-tours-rtfs-family'" class="bg-secondary" color="primary" label="Zum Gothaer Kids-Cup 2025" href="https://www.svmalefinkbach.de/gothaer-kids-cup-2025/" target="_blank" />
    </q-card-actions>
    <q-card-section>
      <q-tabs v-model="tab" active-bg-color="primary" active-color="accent" class="bg-primary" indicator-color="accent" :vertical="$q.platform.is.mobile">
        <q-tab :icon="mdiBike" label="Allgemein" name="general" />
        <q-tab :icon="mdiInformation" label="Info" name="info" />
        <q-tab :icon="mdiGoKartTrack" label="Strecken" name="tracks" />
        <q-tab :icon="mdiCurrencyEur" label="Anmeldung" name="registration" />
      </q-tabs>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="general">
          <c-general :text="props.modelValue.text" />
        </q-tab-panel>
        <q-tab-panel name="info">
          <c-info :fee-hints="props.feeHints" :fees="props.modelValue.fees" :location="props.modelValue.location" :times="props.modelValue.times" :tracks="props.modelValue.tracks" />
        </q-tab-panel>
        <q-tab-panel name="tracks">
          <c-tracks :tracks="props.modelValue.tracks" />
        </q-tab-panel>
        <q-tab-panel name="registration">
          <c-registration :category="props.modelValue?.category" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { mdiBike, mdiCurrencyEur, mdiGoKartTrack, mdiInformation } from '@quasar/extras/mdi-v7'
import CGeneral from 'components/pages/events/tours/CGeneral.vue'
import CInfo from 'components/pages/events/tours/CInfo.vue'
import CRegistration from 'components/pages/events/tours/CRegistration.vue'
import CTracks from 'components/pages/events/tours/CTracks.vue'
import type Event from 'src/models/entities/events/tours/Event'
import useCalendarStore from 'stores/events/Calendar'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ feeHints?: string; modelValue: Event | undefined }>()

const route = useRoute()

const calendarStore = useCalendarStore()

const tab = ref('info')
</script>

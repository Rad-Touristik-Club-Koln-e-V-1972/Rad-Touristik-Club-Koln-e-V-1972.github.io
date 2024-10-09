<template>
  <q-dialog v-model="dialog" persistent>
    <q-card v-if="calendarStore.nextRTF">
      <q-card-section class="bg-primary text-accent text-h6">NICHT VERPASSEN</q-card-section>
      <q-card-section>
        Unsere <b>{{ calendarStore.nextRTF.name }}</b> ist am <b>{{ useDateTime().format(calendarStore.nextRTF.start) }}.</b>
      </q-card-section>
      <q-card-section>
        <b>Weitere Informationen folgen!</b>
      </q-card-section>
      <q-card-section>
        <div>Wir freuen uns auf Euch!</div>
        <br />
        <div>Euer RTC Köln e.V.</div>
      </q-card-section>
      <q-card-actions align="between">
        <q-btn v-close-popup color="primary" label="Family Tour" :to="{ name: 'events-tours-rtfs-family' }" />
        <q-btn v-close-popup color="primary" label="OK" />
        <q-btn v-close-popup color="primary" label="RTF" :to="{ name: 'events-tours-rtfs' }" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useCalendarStore from 'stores/events/Calendar'
import useDateTime from 'src/utils/DateTime'

const calendarStore = useCalendarStore()

const dialog = ref(!!calendarStore.nextRTF)
</script>

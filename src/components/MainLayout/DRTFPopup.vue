<template>
  <q-dialog v-model="dialog" persistent>
    <q-card v-if="calendarStore.nextRTF">
      <q-card-section class="bg-primary text-accent text-h6">NICHT VERPASSEN</q-card-section>
      <q-card-section>
        Unsere <b>{{ calendarStore.nextRTF.name }}</b> ist am <b>{{ useDateTime().format(calendarStore.nextRTF.start) }}.</b>
      </q-card-section>
      <q-card-section>
        <b>Alle Strecken wurden von uns ausgeschildert.</b>
      </q-card-section>
      <q-card-section>
        Es gibt 3 tolle Neuerungen:
        <br />
        <br />
        ➡️ Wir bieten in diesem Jahr wieder eine 150er-Strecke an!
        <br />
        <br />
        ➡️ Außerdem gibt es eine geführte Tour (82 km) für RTF-Neueinsteiger!
        <div class="row">
          <div class="col-1" />
          <div class="col-auto">Abfahrt:</div>
          <div class="col-1" />
          <div class="col-auto">9 Uhr</div>
        </div>
        <div class="row">
          <div class="col-1" />
          <div class="col-auto">Tempo:</div>
          <div class="col-1" />
          <div class="col-auto">max. 20er Schnitt</div>
        </div>
        <div class="row">
          <div class="col-1" />
          <div class="col-auto"><q-icon :name="mdiArrowRightBottom" size="xs" /> Der/die langsamste Fahrer:in bestimmt die Geschwindigkeit.</div>
        </div>
        <br />
        ➡️ Oder ihr nehmt unsere neue Family Tour (22 km) unter die Reifen
        <div class="row">
          <div class="col-1" />
          <div class="col-auto"><q-icon :name="mdiArrowRightBottom" size="xs" />mit Fährfahrten für ein schönes Ausflugserlebnis.</div>
        </div>
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
import { mdiArrowRightBottom } from '@quasar/extras/mdi-v7'
import useCalendarStore from 'stores/events/Calendar'
import useDateTime from 'src/utils/DateTime'

const calendarStore = useCalendarStore()

const dialog = ref(!!calendarStore.nextRTF)
</script>

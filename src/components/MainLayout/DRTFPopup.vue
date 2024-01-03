<template>
    <q-dialog v-model="dialog" persistent>
        <q-card v-if="calendarStore.nextRTF">
            <q-card-section class="bg-primary text-accent text-h6">NICHT VERPASSEN</q-card-section>
            <q-card-section>
                Unsere <b>{{ calendarStore.nextRTF.name }}</b> ist am <b>{{ dateTime.format(calendarStore.nextRTF.start) }}</b>
                <br />
                <br />
                <div class="text-center">Wir bieten entgegen dem Breitensportkalender eine 150er-Strecke an!</div>
                <br />
                <div class="text-center">Wir bieten in diesem Jahr eine geführte Touren (70 km) für Neueinsteiger an!</div>
                <div class="row">
                    <div class="col-4 text-right">Tempo:</div>
                    <div class="col-1" />
                    <div class="col">max. 20er Schnitt</div>
                </div>
                <div class="row">
                    <div class="col-4 text-right">
                        <q-icon left :name="mdiArrowRightBottom" size="xs" />
                    </div>
                    <div class="col-1" />
                    <div class="col">Der/die langsamste Fahrer:in bestimmt die Geschwindigkeit.</div>
                </div>
                <br />
                Notiert Euch schon mal den Termin.
                <br />
                Wir freuen uns auf Euch!
                <br />
                <br />
                Euer RTC Köln e.V.
            </q-card-section>
            <q-card-actions align="right">
                <q-btn v-close-popup color="primary" label="OK" />
                <q-btn v-close-popup color="primary" label="Infos" :to="{ name: 'events-tours-events-rtfs' }" />
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
const dateTime = useDateTime()

const dialog = ref(!!calendarStore.nextRTF)
</script>

<template>
    <q-dialog v-model="dialog" persistent>
        <q-card v-if="nextRTF">
            <q-card-section class="bg-primary text-accent text-h6">NICHT VERPASSEN</q-card-section>
            <q-card-section>
                Unsere <b>{{ nextRTF.name }}</b> ist am <b>{{ dateTime.format(nextRTF.start, null, true) }}</b>
                <br />
                <br />
                <div class="row">
                    <div class="col text-center">Die 120er-Strecke hat sich geändert!</div>
                </div>
                <div class="row">
                    <div class="col text-center">Wir bieten in diesem Jahr erstmalig zwei geführte Touren (51 km) für Neueinsteiger an!</div>
                </div>
                <div class="row">
                    <div class="col-4 text-right">Tempo:</div>
                    <div class="col text-left">max. 20er Schnitt</div>
                </div>
                <div class="row">
                    <div class="col-4 text-right">
                        <q-icon left :name="mdiArrowRightBottom" size="xs" />
                    </div>
                    <div class="col text-left">Der/die langsamste Fahrer:in bestimmt die Geschwindigkeit.</div>
                </div>
                <div class="row">
                    <div class="col-4 text-right">Startzeiten:</div>
                    <div class="col text-left">8 Uhr und ca. 11 Uhr</div>
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

const dateTime = useDateTime()

const nextRTF = useCalendarStore().nextRTF()
const dialog = ref(!!nextRTF)
</script>

<template>
    <v-dialog id="DPopup" v-model="dialog" scrollable width="auto">
        <v-card v-if="nextRTF">
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text">NICHT VERPASSEN</v-toolbar-title>
            </v-toolbar>
            <!-- TODO style="padding: 16px" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/12170 -->
            <v-card-text class="black--text" style="padding: 16px">
                Unsere <b>{{ nextRTF.name }}</b> ist am <b>{{ dateTime.format(nextRTF.start, null, true) }}</b>
                <br />
                <br />
                <v-row dense>
                    <v-col class="text-center">Die 120er-Strecke hat sich geändert!</v-col>
                </v-row>
                <v-row dense>
                    <v-col class="text-center">Wir bieten in diesem Jahr erstmalig zwei geführte Touren (51 km) für Neueinsteiger an!</v-col>
                </v-row>
                <v-row dense>
                    <v-col class="text-right" cols="4">Tempo:</v-col>
                    <v-col class="text-left">max. 20er Schnitt</v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="text-right" cols="4">
                        <v-icon color="secondary" x-small left>{{ mdiArrowRightBottom }}</v-icon>
                    </v-col>
                    <v-col class="text-left">Der/die langsamste Fahrer:in bestimmt die Geschwindigkeit.</v-col>
                </v-row>
                <v-row dense>
                    <v-col class="text-right" cols="4">Startzeiten:</v-col>
                    <v-col class="text-left">8 Uhr und ca. 11 Uhr</v-col>
                </v-row>
                <br />
                Notiert Euch schon mal den Termin.
                <br />
                Wir freuen uns auf Euch!
                <br />
                <br />
                Euer RTC Köln e.V.
            </v-card-text>
            <v-card-actions>
                <v-btn class="font-weight-black" color="primary" text @click="dialog = false">OK</v-btn>
                <v-spacer />
                <v-btn class="font-weight-black" color="primary" :to="{ name: 'events-tours-events-rtfs' }" @click="dialog = false">Infos</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiArrowRightBottom } from '@mdi/js'
import useCalendarStore from '~/store/events/Calendar'
import useDateTime from '~/utils/DateTime'

const dateTime = useDateTime()

const nextRTF = useCalendarStore().nextRTF()
const dialog = ref(!!nextRTF)
</script>

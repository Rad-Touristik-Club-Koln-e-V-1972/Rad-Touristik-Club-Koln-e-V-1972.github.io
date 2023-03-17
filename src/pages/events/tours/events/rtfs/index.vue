<template>
    <v-card id="VIndex" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text">{{ value.title }}</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle>Stand: {{ dateTime.format(value.lastChange, null, true) }}</v-card-subtitle>
        <v-card-text>
            <v-row class="justify-center" no-gutters>
                <v-col cols="auto">
                    <v-card max-width="40em">
                        <v-toolbar color="primary" flat>
                            <v-toolbar-title class="accent--text">Vorwort</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <span class="black--text text-pre-wrap" v-html="value.text" />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col v-for="(it, index) in value.images" :key="it.id" cols="auto">
                    <d-view :start-index="index" :value="value.images" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="auto">
                    <v-card class="text-no-wrap">
                        <v-toolbar color="primary" flat>
                            <v-toolbar-title class="accent--text">Strecken</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-simple-table dense>
                                <thead>
                                    <tr>
                                        <th class="text-left" v-text="'Startzeit'" />
                                        <th class="text-left" v-text="'Streckenlänge'" />
                                        <th class="text-left" v-text="'Höhenmeter'" />
                                        <th class="text-left" v-text="'Profil'" />
                                        <th class="text-left" v-text="'Kontrollen'" />
                                        <th class="text-right" v-text="'Links'" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="it in value.tracks.filter((t) => t.controls)" :key="it.id" :class="it.important ? 'primary--text' : ''">
                                        <td v-text="dateTime.formatTime(it.start, it.end)" />
                                        <td v-text="`${it.length} km`" />
                                        <td v-text="it.height" />
                                        <td v-text="it.profile" />
                                        <td v-text="it.controls" />
                                        <td>
                                            <ul>
                                                <li v-for="(url, key) in it.urls" :key="key" class="my-2" style="list-style: none">
                                                    <a :href="url.toString()" v-text="key" />
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-row dense>
                        <v-col cols="auto">
                            <v-card>
                                <v-toolbar color="primary" flat>
                                    <v-toolbar-title class="accent--text">Gebühren</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-row dense>
                                        <v-col>
                                            <v-simple-table dense>
                                                <thead>
                                                    <th colspan="2" v-text="'RTF'" />
                                                </thead>
                                                <tbody>
                                                    <tr v-for="it in value.fees.filter((f) => f.category !== EEvent.Marathon)" :key="it.id">
                                                        <td class="text-right text-no-wrap" v-text="`${it.price ?? 'N/A'} €`" />
                                                        <td v-text="it.name" />
                                                    </tr>
                                                </tbody>
                                            </v-simple-table>
                                        </v-col>
                                        <v-col v-if="feesMarathon.length">
                                            <v-simple-table dense>
                                                <thead>
                                                    <th colspan="2" v-text="'Marathon'" />
                                                </thead>
                                                <tbody>
                                                    <tr v-for="it in feesMarathon" :key="it.id">
                                                        <td class="text-right text-no-wrap" v-text="`${it.price ?? 'N/A'} €`" />
                                                        <td v-text="it.name" />
                                                    </tr>
                                                </tbody>
                                            </v-simple-table>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="auto">
                            <v-card>
                                <v-toolbar color="primary" flat>
                                    <v-toolbar-title class="accent--text">Zeiten</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-simple-table dense>
                                        <tbody>
                                            <tr v-for="it in value.times" :key="it.id">
                                                <td class="text-right text-no-wrap" v-text="dateTime.formatTime(it.start, it.end)" />
                                                <td v-text="it.name" />
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <v-timeline :dense="vuetify?.breakpoint.mobile">
                        <v-timeline-item v-for="it in value.tracks" :key="it.id">
                            <template #opposite>
                                <span class="font-weight-bold primary--text text-h5" v-text="it.name" />
                            </template>
                            <v-card>
                                <v-toolbar color="primary" flat>
                                    <v-toolbar-title class="accent--text">{{ it.name }}</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <span class="black--text text-pre-line" v-html="it.text" />
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, ref } from 'vue'
import DView from '~/components/pages/rtc-cologne/galleries/album/DView.vue'
import EEvent from '~/models/enums/EEvent'
import { useTourStore } from '~/store/events/Tour'
import useDateTime from '~/utils/DateTime'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const dateTime = useDateTime()

const value = useTourStore().rtf

const feesMarathon = computed(() => value.fees.filter((f) => f.category === EEvent.Marathon))
</script>

<template>
    <v-card id="VIndex" flat>
        <v-card-title>
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text">
                    {{ value.title }}
                    <div class="text-subtitle-1" v-text="value.subtitle" />
                </v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-subtitle class="text-subtitle-1">Stand: {{ dateTime.format(value.lastChange, undefined, true) }}</v-card-subtitle>
        <v-card-text>
            <v-row class="justify-center">
                <v-col cols="auto">
                    <v-card max-width="40em">
                        <v-toolbar color="primary" dense flat>
                            <v-toolbar-title class="accent--text">Vorwort</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <pre class="text-pre-wrap" v-html="value.text" />
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
                        <v-toolbar color="primary" dense flat>
                            <v-toolbar-title class="accent--text">Strecken</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-simple-table dense>
                                <thead>
                                    <tr>
                                        <th class="text-left" v-text="'Uhrzeit'" />
                                        <th class="text-left" v-text="'Streckenlänge'" />
                                        <th class="text-left" v-text="'Höhenmeter'" />
                                        <th class="text-left" v-text="'Profil'" />
                                        <th class="text-left" v-text="'Kontrollen'" />
                                        <th class="text-left" v-text="'Links'" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="it in value.tracks.filter((it) => it.controls)" :key="it.id" :class="it.important ? 'primary--text' : ''">
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
                    <v-row>
                        <v-col cols="auto">
                            <v-card>
                                <v-toolbar color="primary" dense flat>
                                    <v-toolbar-title class="accent--text">Gebühren</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-row>
                                        <v-col>
                                            <v-simple-table dense>
                                                <thead>
                                                    <th colspan="2" v-text="'RTF'" />
                                                </thead>
                                                <tbody>
                                                    <tr v-for="it in value.fees.filter((it) => it.category !== EEvent.Marathon)" :key="it.id">
                                                        <td v-text="it.name" />
                                                        <td class="text-no-wrap" v-text="`${it.price} €`" />
                                                    </tr>
                                                </tbody>
                                            </v-simple-table>
                                        </v-col>
                                        <v-col>
                                            <v-simple-table dense>
                                                <thead>
                                                    <th colspan="2" v-text="'Marathon'" />
                                                </thead>
                                                <tbody>
                                                    <tr v-for="it in value.fees.filter((it) => it.category === EEvent.Marathon)" :key="it.id">
                                                        <td v-text="it.name" />
                                                        <td class="text-no-wrap" v-text="`${it.price} €`" />
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
                                <v-toolbar color="primary" dense flat>
                                    <v-toolbar-title class="accent--text">Zeiten</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="auto">
                                            <v-simple-table dense>
                                                <tbody>
                                                    <tr v-for="it in value.times" :key="it.id">
                                                        <td v-text="it.name" />
                                                        <td class="text-no-wrap" v-text="dateTime.formatTime(it.start, it.end)" />
                                                    </tr>
                                                </tbody>
                                            </v-simple-table>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-timeline :dense="vuetify?.breakpoint.mobile">
                        <v-timeline-item v-for="it in value.tracks" :key="it.id">
                            <template #opposite>
                                <span class="font-weight-bold text-h5 primary--text" v-text="it.name" />
                            </template>
                            <v-card>
                                <v-toolbar color="primary" dense flat>
                                    <v-toolbar-title class="accent--text">{{ it.name }}</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <pre class="black--text text-pre-wrap" v-html="it.text" />
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-card-text>
        <c-popup v-if="value.popup" :value="value.popup" />
    </v-card>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import DView from '~/components/pages/about-us/galleries/album/DView.vue'
import EEvent from '~/models/enums/EEvent'
import { useTourStore } from '~/store/events/Tour'
import useDateTime from '~/utils/DateTime'
import CPopup from '~/components/pages/events/tours/CPopup.vue'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const dateTime = useDateTime()

const value = useTourStore().rtf
</script>

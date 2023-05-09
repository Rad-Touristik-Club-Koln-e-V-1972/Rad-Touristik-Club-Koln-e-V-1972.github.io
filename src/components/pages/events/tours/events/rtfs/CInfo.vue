<template>
    <v-card flat>
        <v-card-text>
            <v-row class="justify-center">
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
                                    <tr v-for="it in props.tracks.filter((t) => t.controls)" :key="it.id" :class="it.important ? 'primary--text' : ''">
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
                <v-col cols="auto">
                    <v-card>
                        <v-toolbar color="primary" flat>
                            <v-toolbar-title class="accent--text">Gebühren</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-simple-table dense>
                                <tbody>
                                    <tr v-for="it in props.fees.filter((f) => f.category)" :key="it.id">
                                        <td class="text-right text-no-wrap" v-text="`${it.price ?? 'N/A'} €`" />
                                        <td v-html="it.name" />
                                    </tr>
                                </tbody>
                            </v-simple-table>
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
                                    <tr v-for="it in props.times" :key="it.id">
                                        <td class="text-right text-no-wrap" v-text="dateTime.formatTime(it.start, it.end)" />
                                        <td v-text="it.name" />
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import useDateTime from '~/utils/DateTime'
import Fee from '~/models/entities/events/tours/events/Fee'
import Time from '~/models/entities/events/tours/events/Time'
import Track from '~/models/entities/events/tours/events/Track'

const props = defineProps<{ fees: Fee[]; times: Time[]; tracks: Track[] }>()

const dateTime = useDateTime()
</script>

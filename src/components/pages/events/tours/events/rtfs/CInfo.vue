<template>
    <q-card flat>
        <q-card-section>
            <div class="justify-center q-gutter-lg row">
                <div class="col-auto">
                    <q-card>
                        <q-card-section class="bg-primary text-accent text-h6">Adresse</q-card-section>
                        <q-card-section>
                            <b>{{ props.location.title }}</b>
                            <br />
                            {{ props.location.street }}
                            <br />
                            {{ props.location.zipCode }} {{ props.location.city }}
                            <br />
                            <a :href="props.location.url?.toString()" target="_blank">Anfahrt bei Google Maps</a>
                            <br />
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-auto">
                    <q-card>
                        <q-card-section class="bg-primary text-accent text-h6">Zeiten</q-card-section>
                        <q-card-section>
                            <q-markup-table flat>
                                <tbody>
                                    <tr v-for="it in props.times" :key="it.id">
                                        <td class="text-right text-no-wrap">{{ dateTime.formatTime(it.start, it.end) }}</td>
                                        <td>{{ it.name }}</td>
                                    </tr>
                                </tbody>
                            </q-markup-table>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-auto">
                    <q-card>
                        <q-card-section class="bg-primary text-accent text-h6">Gebühren</q-card-section>
                        <q-card-section>
                            <q-markup-table flat>
                                <tbody>
                                    <tr v-for="it in props.fees.filter((f) => f.category)" :key="it.id">
                                        <td class="text-right text-no-wrap">{{ it.price }}€</td>
                                        <td v-html="it.name" />
                                    </tr>
                                </tbody>
                            </q-markup-table>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-auto">
                    <q-card class="text-no-wrap">
                        <q-card-section class="bg-primary text-accent text-h6">Strecken</q-card-section>
                        <q-card-section>
                            <q-markup-table flat>
                                <thead>
                                    <tr>
                                        <th class="text-left" scope="col">Startzeit</th>
                                        <th class="text-left" scope="col">Streckenlänge</th>
                                        <th class="text-left" scope="col">Höhenmeter</th>
                                        <th class="text-left" scope="col">Profil</th>
                                        <th class="text-left" scope="col">Kontrollen</th>
                                        <th class="text-right" scope="col">Links</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="it in props.tracks.filter((t) => t.controls)" :key="it.id" :class="it.important ? 'text-primary' : ''">
                                        <td>{{ dateTime.formatTime(it.start, it.end) }}</td>
                                        <td>{{ it.length }}km</td>
                                        <td>{{ it.height }}</td>
                                        <td>{{ it.profile }}</td>
                                        <td>{{ it.controls }}</td>
                                        <td>
                                            <ul>
                                                <li v-for="(url, key) in it.urls" :key="key" class="my-2" style="list-style: none">
                                                    <a :href="url.toString()">{{ key }}</a>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </q-markup-table>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import Control from 'src/models/entities/events/tours/Control'
import Fee from 'src/models/entities/events/tours/events/Fee'
import Time from 'src/models/entities/events/tours/events/Time'
import Track from 'src/models/entities/events/tours/events/Track'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ fees: Fee[]; location: Control; times: Time[]; tracks: Track[] }>()

const dateTime = useDateTime()
</script>

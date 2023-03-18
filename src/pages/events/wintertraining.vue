<template>
    <v-card v-if="value" id="VWinter" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text">{{ value.title }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <c-slideshow height="200" :value="value.imageUrls" />
        </v-card-text>
        <v-card-text>
            <v-row class="justify-center">
                <v-col cols="auto">
                    <v-card max-width="40em">
                        <v-toolbar color="primary" flat>
                            <v-toolbar-title class="accent--text">Details</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-simple-table dense>
                                <tbody>
                                    <tr>
                                        <td class="text-right" v-text="'Streckenlänge:'" />
                                        <td v-text="`${value.length} km`" />
                                    </tr>
                                    <tr>
                                        <td class="text-right" v-text="'Höhenmeter:'" />
                                        <td v-text="`ca. ${value.height} hm`" />
                                    </tr>
                                    <tr>
                                        <td class="text-right" v-text="'Geschwindigkeit:'" />
                                        <td v-text="`${value.speed} km/h`" />
                                    </tr>
                                    <tr>
                                        <td class="text-no-wrap text-right" v-text="'Letzte Änderung:'" />
                                        <td v-text="dateTime.format(value.lastChange, null, true)" />
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="auto">
                    <v-card max-width="40em">
                        <v-card-text>
                            <span class="black--text text-pre-wrap" v-html="value.text" />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CSlideshow from '~/components/CSlideshow.vue'
import Training from '~/models/entities/events/Training'
import { useTrainingStore } from '~/store/events/Training'
import useDateTime from '~/utils/DateTime'

const dateTime = useDateTime()

const value: Training | undefined = useTrainingStore().winter
</script>

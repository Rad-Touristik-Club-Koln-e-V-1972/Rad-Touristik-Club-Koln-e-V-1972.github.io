<template>
    <v-card id="VWinter" flat>
        <v-card-title>
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">{{ value.title }}</v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <v-row class="justify-center">
                <v-col cols="auto">
                    <v-card max-width="40em">
                        <v-toolbar color="primary" dense flat>
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
                                        <td v-text="dateTime.format(value.lastChange, undefined, true)" />
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="auto">
                    <v-card max-width="40em">
                        <v-card-text>
                            <pre class="black--text text-pre-wrap" v-html="value.text" />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useTrainingStore } from '~/store/events/Training'
import useDateTime from '~/utils/DateTime'

const dateTime = useDateTime()

const value = useTrainingStore().winter
</script>

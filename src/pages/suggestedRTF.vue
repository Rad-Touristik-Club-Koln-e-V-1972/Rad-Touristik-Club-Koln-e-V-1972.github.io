<template>
    <v-card id="VSuggestedRTF" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Empfohlene RTF's außerhalb NRW</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">
            Viele unserer Vereinsmitglieder sind diese Radsportveranstaltungen außerhalb von NRW in den vergangenen Jahren gefahren und fanden sie sehr schön.
            <br />
            Daher haben wir sie für Euch als Tipps zusammengestellt.
            <br />
            Weitere Tipps werden folgen.
        </v-card-subtitle>
        <v-card-text>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Beschreibung</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="it in useSuggestedRTFStore().all" :key="it.title" class="accent">
                        <td style="white-space: nowrap; width: auto">
                            <a :href="it.url" target="_blank">{{ it.title }}</a>
                        </td>
                        <td style="width: 100%">Dummytext</td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useSuggestedRTFStore } from '~/store/events/SuggestedRTF'
</script>

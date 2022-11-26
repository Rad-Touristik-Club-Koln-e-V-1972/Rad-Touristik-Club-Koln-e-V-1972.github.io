<template>
    <v-dialog id="CEvent" v-model="isOpen" width="auto">
        <v-card flat>
            <v-toolbar class="accent--text" :color="selectedEvent?.color" dense flat>
                <v-toolbar-title class="text-title">{{ selectedEvent?.name }}</v-toolbar-title>
                <v-spacer />
                <v-btn icon @click="isOpen = false">
                    <v-icon color="accent">{{ icons.mdiClose }}</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <!-- TODO "pointer-events: none" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/5787 -->
                <v-simple-table style="pointer-events: none">
                    <tbody>
                        <tr v-if="selectedEvent?.category !== EEvent.Mitgliederversammlung">
                            <td class="text-end">Art:</td>
                            <td v-text="selectedEvent?.category" />
                        </tr>
                        <tr v-if="selectedEvent">
                            <td class="text-end">Termin:</td>
                            <td v-text="getDate(selectedEvent)" />
                        </tr>
                        <tr v-if="selectedEvent?.contact">
                            <td class="text-end">Ansprechpartner:</td>
                            <td v-text="selectedEvent.contact" />
                        </tr>
                        <tr v-if="selectedEvent?.clubPoints">
                            <td class="text-end">Vereinspunkte:</td>
                            <td v-text="selectedEvent.clubPoints" />
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose } from '@mdi/js'
import Event from '~/models/entities/events/calendar/Event'
import EEvent from '~/models/enums/EEvent'
import useDateTime from '~/utils/DateTime'

const icons = { mdiClose }
const isOpen = ref(false)
const selectedEvent = ref<Event>()

const getDate = (event: Event) => useDateTime().format(event?.start, event?.end, !event?.timed)
// TODO nur event parameter ohne objekt kapselung?
const showEvent = ({ event }: { event: Event }) => {
    selectedEvent.value = event
    isOpen.value = true
}

defineExpose({ showEvent })
</script>

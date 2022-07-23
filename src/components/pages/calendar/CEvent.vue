<template>
    <v-dialog id="CEvent" v-model="isOpen" width="auto">
        <v-card flat>
            <v-toolbar class="accent--text" :color="selectedEvent?.color" flat>
                <v-toolbar-title>
                    {{ selectedEvent?.name }}
                </v-toolbar-title>
                <v-spacer />
                <v-btn icon @click="isOpen = false">
                    <v-icon color="accent" v-text="icons.mdiClose" />
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <!-- TODO "pointer-events: none" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/5787 -->
                <v-simple-table class="mt-2" style="pointer-events: none">
                    <template #default>
                        <tbody>
                            <tr v-if="selectedEvent?.category !== EEvent.Mitgliederversammlung">
                                <td class="text-end" v-text="'Art:'" />
                                <td v-text="selectedEvent?.category" />
                            </tr>
                            <tr v-if="selectedEvent">
                                <td class="text-end" v-text="'Termin:'" />
                                <td v-text="getDate(selectedEvent)" />
                            </tr>
                            <tr v-if="selectedEvent?.contact">
                                <td class="text-end" v-text="'Ansprechpartner:'" />
                                <td v-text="selectedEvent.contact" />
                            </tr>
                            <tr v-if="selectedEvent?.clubPoints">
                                <td class="text-end" v-text="'Vereinspunkte:'" />
                                <td v-text="selectedEvent.clubPoints" />
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose } from '@mdi/js'
import Event from '~/models/entities/calendar/Event'
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

<style lang="scss" scoped />

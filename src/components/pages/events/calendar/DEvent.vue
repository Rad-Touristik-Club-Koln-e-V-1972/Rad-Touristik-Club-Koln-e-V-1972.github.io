<template>
    <q-dialog v-model="dialog">
        <q-card v-if="selectedEvent" flat>
            <q-card-section :class="`bg-${selectedEvent.color}`" class="row">
                <div class="text-accent text-h6">{{ selectedEvent?.name }}</div>
                <q-space />
                <q-btn v-close-popup dense flat :icon="mdiClose" round text-color="accent" />
            </q-card-section>
            <q-card-section>
                <q-markup-table flat>
                    <tbody>
                        <tr v-if="!isEventMitgliederversammlung" class="q-tr--no-hover">
                            <td class="text-end">Art:</td>
                            <td v-text="selectedEvent?.category" />
                        </tr>
                        <tr v-if="selectedEvent" class="q-tr--no-hover">
                            <td class="text-end">Termin:</td>
                            <td v-text="getDate(selectedEvent)" />
                        </tr>
                        <tr v-if="selectedEvent?.contact" class="q-tr--no-hover">
                            <td class="text-end">Ansprechpartner:</td>
                            <td v-text="selectedEvent.contact" />
                        </tr>
                        <tr v-if="selectedEvent?.kilometer" class="q-tr--no-hover">
                            <td class="text-end">Kilometer:</td>
                            <td v-text="selectedEvent.kilometer" />
                        </tr>
                    </tbody>
                </q-markup-table>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { mdiClose } from '@quasar/extras/mdi-v7'
import Event from 'src/models/entities/events/calendar/Event'
import EEvent from 'src/models/enums/EEvent'
import useDateTime from 'src/utils/DateTime'

const dialog = ref(false)
const selectedEvent = ref<Event>()

const isEventMitgliederversammlung = computed(() => selectedEvent.value?.category === EEvent.Mitgliederversammlung)

const getDate = (event: Event) => useDateTime().format(event.start, event.end, event.allDay)
const showEvent = (event: Event) => {
    selectedEvent.value = event
    dialog.value = true
}

defineExpose({ showEvent })
</script>

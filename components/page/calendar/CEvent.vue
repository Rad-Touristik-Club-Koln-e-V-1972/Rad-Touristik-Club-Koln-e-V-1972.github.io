<template>
    <v-dialog id="CEvent" v-model="selectedOpen" :activator="selectedElement" :fullscreen="vuetify.breakpoint.mobile" width="auto">
        <v-card flat>
            <v-toolbar :color="selectedEvent?.color">
                <v-toolbar-title class="accent--text">
                    {{ selectedEvent?.name }}
                </v-toolbar-title>
                <v-spacer />
                <v-btn icon @click="selectedOpen = false">
                    <v-icon color="accent" v-text="icons.mdiClose" />
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <!-- TODO "pointer-events: none" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/5787 -->
                <v-simple-table style="pointer-events: none">
                    <template #default>
                        <tbody>
                            <tr>
                                <td class="align-end">Art:</td>
                                <td>{{ selectedEvent?.category }}</td>
                            </tr>
                            <tr>
                                <td>Event:</td>
                                <td>
                                    <a v-if="selectedEvent?.url" :href="selectedEvent?.url" target="_blank" v-text="selectedEvent?.name" />
                                    <span v-else v-text="selectedEvent?.name" />
                                </td>
                            </tr>
                            <tr>
                                <td>Termin:</td>
                                <td><div v-html="getDate(selectedEvent)" /></td>
                            </tr>
                            <tr v-if="selectedEvent?.contact">
                                <td>Ansprechpartner:</td>
                                <td>{{ selectedEvent.contact }}</td>
                            </tr>
                            <tr v-if="selectedEvent?.clubPoints">
                                <td>Vereinspunkte:</td>
                                <td>{{ selectedEvent.clubPoints }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { mdiClose } from '@mdi/js'
import Event from '@/models/entities/calendar/Event'
import DateTime from '@/utils/DateTime'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const icons = { mdiClose }
const selectedElement = ref<EventTarget | null>()
const selectedEvent = ref<Event>()
const selectedOpen = ref(false)

const getDate = (event: Event) => DateTime.format(event?.start, event?.end, !event?.timed)
const showEvent = ({ event, nativeEvent }: { event: Event; nativeEvent: MouseEvent | TouchEvent | null }) => {
    const open = () => {
        selectedEvent.value = event
        selectedElement.value = nativeEvent?.target
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                selectedOpen.value = true
            })
        })
    }

    if (selectedOpen) {
        selectedOpen.value = false
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                open()
            })
        })
    } else open()

    nativeEvent?.stopPropagation()
}

defineExpose({ showEvent })
</script>

<style lang="scss" scoped />

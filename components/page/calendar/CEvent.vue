<template>
    <v-menu id="CEvent" v-model="selectedOpen" :activator="selectedElement" :close-on-content-click="false" offset-x>
        <v-card flat min-width="350px">
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
                <v-list dense>
                    <v-list-item>
                        <v-list-item-content>Art:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent?.category }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>Event:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent?.name }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>Termin:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            <div v-html="getDate(selectedEvent)" />
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="selectedEvent?.contact">
                        <v-list-item-content>Ansprechpartner:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent?.contact }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="selectedEvent?.clubPoints">
                        <v-list-item-content>VP:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent?.clubPoints }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose } from '@mdi/js'
import Event from '@/models/entities/calendar/Event'
import DateTime from '@/utils/DateTime'

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

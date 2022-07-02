<template>
    <v-menu id="CEvent" v-model="selectedOpen" :activator="selectedElement" :close-on-content-click="false" offset-x>
        <v-card flat min-width="350px">
            <v-toolbar :color="selectedEvent.color">
                <v-toolbar-title class="accent--text">
                    {{ selectedEvent.name }}
                </v-toolbar-title>
                <v-spacer />
                <v-btn icon @click="selectedOpen = false">
                    <v-icon class="accent--text">
                        {{ icons.mdiClose }}
                    </v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-content>Art:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent.category }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>Event:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent.name }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>Termin:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            <div v-html="getDate(selectedEvent)" />
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="selectedEvent.contact">
                        <v-list-item-content>Ansprechpartner:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent.contact }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="selectedEvent.clubPoints">
                        <v-list-item-content>VP:</v-list-item-content>
                        <v-list-item-content class="align-end">
                            {{ selectedEvent.clubPoints }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-menu>
</template>

<script lang="ts">
import { mdiClose } from '@mdi/js'
import { defineComponent, ref } from '@nuxtjs/composition-api'
import DateTime from '@/utils/DateTime'
import Event from '@/models/entities/calendar/Event'

export default defineComponent({
    name: 'CEvent',
    setup() {
        const selectedElement = ref(null)
        const selectedEvent = ref({})
        const selectedOpen = ref(false)

        const showEvent = ({ event, nativeEvent }: { event: Event; nativeEvent: any }) => {
            const open = () => {
                selectedEvent.value = event
                selectedElement.value = nativeEvent?.target
                requestAnimationFrame(() =>
                    requestAnimationFrame(() => {
                        selectedOpen.value = true
                    })
                )
            }

            if (selectedOpen) {
                selectedOpen.value = false
                requestAnimationFrame(() => requestAnimationFrame(() => open()))
            } else open()

            nativeEvent?.stopPropagation()
        }

        return {
            getDate: (event: Event) => DateTime.format(event.start, event.end, !event.timed),
            icons: { mdiClose },
            selectedElement,
            selectedEvent,
            selectedOpen,
            showEvent,
        }
    },
})
</script>

<style lang="scss" scoped></style>

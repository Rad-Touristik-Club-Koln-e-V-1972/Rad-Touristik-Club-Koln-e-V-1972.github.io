<template>
    <v-sheet v-if="nextEvent" id="CCountdown" class="text-center">
        <v-row style="cursor: pointer" @click="event.showEvent({ event: nextEvent })">
            <v-col>
                <v-progress-circular color="primary" rotate="270" size="60" :value="getPercentageDays(days)">{{ days }}d</v-progress-circular>
            </v-col>
            <v-col>
                <v-progress-circular color="primary darken-1" rotate="180" size="60" :value="getPercentageHours(hours)">{{ hours }}h</v-progress-circular>
            </v-col>
            <v-col>
                <v-progress-circular color="primary darken-2" rotate="90" size="60" :value="getPercentageMinutes(minutes)">{{ minutes }}m</v-progress-circular>
            </v-col>
        </v-row>
        <v-row>
            <v-col>{{ nextEvent.name }}</v-col>
        </v-row>
        <c-event ref="event" />
    </v-sheet>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import CEvent from '~/components/pages/events/calendar/CEvent.vue'
import Event from '~/models/entities/events/calendar/Event'
import { useCalendarStore } from '~/store/events/Calendar'
import useDateTime from '~/utils/DateTime'

const event = ref()

const calendarStore = useCalendarStore()

const _millisecondsSecond = 1000
const _millisecondsMinute = 60 * _millisecondsSecond
const _millisecondsHour = 60 * _millisecondsMinute
const _millisecondsDay = 24 * _millisecondsHour

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)

const nextEvent = calendarStore.nextEvent()
const daysOfMonth = nextEvent ? useDateTime().getDaysInMonth(nextEvent.start.getMonth(), nextEvent.start.getFullYear()) : 30

let interval: NodeJS.Timeout

const calcCountdown = (nextEvent: Event) => {
    const milliseconds = Math.abs(calendarStore.today().getTime() - nextEvent.start.getTime())
    days.value = Math.floor(milliseconds / _millisecondsDay)
    hours.value = Math.floor((milliseconds % _millisecondsDay) / _millisecondsHour)
    minutes.value = Math.floor((milliseconds % _millisecondsHour) / _millisecondsMinute)
}
const getPercentage = (max: number, value: number) => Math.round((100 / max) * value)

onMounted(() => {
    if (nextEvent) {
        calcCountdown(nextEvent)
        interval = setInterval(() => calcCountdown(nextEvent), 60000)
    }
})

onUnmounted(() => {
    clearInterval(interval)
})

const getPercentageDays = (value: number) => getPercentage(daysOfMonth, value)
const getPercentageHours = (value: number) => getPercentage(24, value)
const getPercentageMinutes = (value: number) => getPercentage(60, value)
</script>

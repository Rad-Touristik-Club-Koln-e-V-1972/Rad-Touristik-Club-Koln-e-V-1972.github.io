<template>
    <q-card v-if="nextEvents.length" class="cursor-pointer text-center" flat @click="event.showEvent(nextEvents[0])">
        <div class="justify-center row">
            <div class="col-auto">
                <q-circular-progress class="q-ma-md" color="primary" rounded size="60px" show-value :thickness="0.2" track-color="transparent" :value="getPercentageDays(days)">
                    {{ days }}
                    <br />
                    Tage
                </q-circular-progress>
            </div>
            <div class="col-auto">
                <q-circular-progress
                    class="q-ma-md"
                    color="primary-darkened"
                    reverse
                    rounded
                    show-value
                    size="60px"
                    :thickness="0.2"
                    track-color="transparent"
                    :value="getPercentageHours(hours)"
                >
                    {{ hours }}
                    <br />
                    Std
                </q-circular-progress>
            </div>
            <div class="col-auto">
                <q-circular-progress
                    class="q-ma-md"
                    color="primary-darkened"
                    rounded
                    show-value
                    size="60px"
                    :thickness="0.2"
                    track-color="transparent"
                    :value="getPercentageMinutes(minutes)"
                >
                    {{ minutes }}
                    <br />
                    Min
                </q-circular-progress>
            </div>
        </div>
        <div class="row">
            <div class="col-auto offset-1">Zuerst:</div>
        </div>
        <div class="row">
            <div class="col text-bold">{{ nextEvents[0].name }}</div>
        </div>
        <div v-if="nextEvents[1]">
            <div class="row">
                <div class="col-auto offset-1">Danach:</div>
            </div>
            <div class="row">
                <div class="col text-bold">{{ nextEvents[1].name }}</div>
            </div>
        </div>
    </q-card>
    <d-event ref="event" />
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { date } from 'quasar'
import DEvent from 'components/pages/events/calendar/DEvent.vue'
import Event from 'src/models/entities/events/calendar/Event'
import useCalendarStore from 'stores/events/Calendar'
import useDateTime from 'src/utils/DateTime.ts'

const event = ref()

const dateTime = useDateTime()
const calendarStore = useCalendarStore()

const _millisecondsSecond = 1000
const _millisecondsMinute = 60 * _millisecondsSecond
const _millisecondsHour = 60 * _millisecondsMinute
const _millisecondsDay = 24 * _millisecondsHour

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)

const nextEvents = calendarStore.nextEvents
const daysOfMonth = nextEvents.length ? date.daysInMonth(nextEvents[0].start) : 30

let interval: number

const calcCountdown = (nextEvent: Event) => {
    const milliseconds = Math.abs(dateTime.today.value.getTime() - nextEvent.start.getTime())

    days.value = Math.floor(milliseconds / _millisecondsDay)
    hours.value = Math.floor((milliseconds % _millisecondsDay) / _millisecondsHour)
    minutes.value = Math.floor((milliseconds % _millisecondsHour) / _millisecondsMinute)
}
const getPercentage = (max: number, value: number) => Math.round((100 / max) * value)

onMounted(() => {
    if (nextEvents.length) {
        calcCountdown(nextEvents[0])
        interval = window.setInterval(() => {
            calcCountdown(nextEvents[0])
        }, 60000)
    }
})

onUnmounted(() => {
    clearInterval(interval)
})

const getPercentageDays = (value: number) => getPercentage(daysOfMonth, value)
const getPercentageHours = (value: number) => getPercentage(24, value)
const getPercentageMinutes = (value: number) => getPercentage(60, value)
</script>

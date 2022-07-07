<template>
    <div v-if="nextEvent" id="CCountdown" class="text-center">
        <v-row dense style="cursor: pointer" @click="event.showEvent({ event: nextEvent, nativeEvent: undefined })">
            <v-col>
                <v-progress-circular color="primary lighten-5" rotate="270" size="60" :value="getPercentageDays(days)">{{ days }}d</v-progress-circular>
            </v-col>
            <v-col>
                <v-progress-circular color="primary lighten-3" rotate="180" size="60" :value="getPercentageHours(hours)">{{ hours }}h</v-progress-circular>
            </v-col>
            <v-col>
                <v-progress-circular color="primary lighten-1" rotate="90" size="60" :value="getPercentageMinutes(minutes)">{{ minutes }}m</v-progress-circular>
            </v-col>
            <v-col>
                <v-progress-circular color="primary" rotate="0" size="60" :value="getPercentageSeconds(seconds)">{{ seconds }}s</v-progress-circular>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>{{ nextEvent.name }}</v-col>
        </v-row>
        <c-event ref="event" />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from '@nuxtjs/composition-api'
import CEvent from '@/components/page/calendar/CEvent.vue'
import DateTime from '@/utils/DateTime'
import { useCalendarStore } from '@/store/Calendar'

export default defineComponent({
    name: 'CCountdown',
    components: { CEvent },
    setup() {
        const calendarStore = useCalendarStore()

        const _millisecondsSecond = 1000
        const _millisecondsMinute = 60 * _millisecondsSecond
        const _millisecondsHour = 60 * _millisecondsMinute
        const _millisecondsDay = 24 * _millisecondsHour

        const days = ref(0)
        const hours = ref(0)
        const minutes = ref(0)
        const seconds = ref(0)

        const nextEvent = calendarStore.nextEvent()
        const daysOfMonth = nextEvent ? DateTime.getDaysInMonth(nextEvent.start.getMonth(), nextEvent.start.getFullYear()) : 30

        let interval: NodeJS.Timeout

        const getPercentage = (max: number, value: number) => Math.round((100 / max) * value)

        onMounted(() => {
            if (nextEvent) {
                interval = setInterval(() => {
                    const milliseconds = Math.abs(calendarStore.today().getTime() - nextEvent.start.getTime())
                    days.value = Math.floor(milliseconds / _millisecondsDay)
                    hours.value = Math.floor((milliseconds % _millisecondsDay) / _millisecondsHour)
                    minutes.value = Math.floor((milliseconds % _millisecondsHour) / _millisecondsMinute)
                    seconds.value = Math.floor((milliseconds % _millisecondsMinute) / _millisecondsSecond)
                }, 1000)
            }
        })

        onUnmounted(() => {
            clearInterval(interval)
        })

        return {
            days,
            event: ref(''),
            getPercentageSeconds: (value: number) => getPercentage(60, value),
            getPercentageMinutes: (value: number) => getPercentage(60, value),
            getPercentageHours: (value: number) => getPercentage(24, value),
            getPercentageDays: (value: number) => getPercentage(daysOfMonth, value),
            hours,
            minutes,
            nextEvent,
            seconds,
        }
    },
})
</script>

<style lang="scss" scoped />

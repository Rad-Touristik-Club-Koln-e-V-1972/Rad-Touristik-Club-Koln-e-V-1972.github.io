<template>
    <v-row id="calendar" class="fill-height">
        <v-col>
            <c-control v-model="type" :title="title" @next="calendar.next()" @prev="calendar.prev()" @showToday="setFocus('')" />
            <v-calendar
                v-if="type !== ECalendar.list && event"
                ref="calendar"
                v-model="focus"
                color="primary"
                :event-color="getEventColor"
                :events="events.filter((it) => it.category !== EEvent.Abgesagt)"
                show-week
                :type="getTypeString(type)"
                @click:date="switchToDayView"
                @click:event="event.showEvent"
                @click:more="switchToDayView"
            />
            <c-list v-if="type === ECalendar.list" />
            <c-event ref="event" />
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import CControl from '~/components/pages/calendar/CControl.vue'
import CEvent from '~/components/pages/calendar/CEvent.vue'
import CList from '~/components/pages/calendar/CList.vue'
import Event from '~/models/entities/calendar/Event'
import ECalendar from '~/models/enums/ECalendar'
import EEvent from '~/models/enums/EEvent'
import { useCalendarStore } from '~/store/Calendar'

const calendar = ref()
const event = ref()

const events = useCalendarStore().all
const focus = ref('')
const title = ref('')
const type = ref<ECalendar>(ECalendar.month)

const getEventColor = (event: Event) => event.color
const getTypeString = (ec: ECalendar) => Object.entries(ECalendar).find((it) => it[1] === ec)?.[0] ?? ''
const setFocus = (val: string) => {
    focus.value = val
}
const switchToDayView = ({ date }: { date: string }) => {
    focus.value = date
    type.value = ECalendar.day
}

watch(
    () => calendar.value?.title,
    (currentValue) => {
        title.value = currentValue ?? ''
    },
    { immediate: true }
)
</script>

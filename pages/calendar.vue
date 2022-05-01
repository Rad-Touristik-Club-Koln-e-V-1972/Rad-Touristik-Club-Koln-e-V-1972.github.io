<template>
    <v-row id="CalendarView" class="fill-height">
        <v-col>
            <c-control v-model="type" :title="title" @next="calendar.next()" @prev="calendar.prev()" @showToday="setFocus('')" />
            <v-calendar
                v-if="type !== ECalendar.list && event"
                ref="calendar"
                v-model="getFocus().value"
                color="primary"
                :event-color="getEventColor"
                :events="events"
                show-week
                :type="getTypeString(type)"
                @click:date="switchToDayView"
                @click:event="event.showEvent"
                @click:more="switchToDayView"
            />
            <c-list v-if="type === ECalendar.list" :events="events" />
            <c-event ref="event" />
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, nextTick, Ref, ref, watch } from '@nuxtjs/composition-api'
import CControl from '@/components/page/calendar/CControl.vue'
import CEvent from '@/components/page/calendar/CEvent.vue'
import CList from '@/components/page/calendar/CList.vue'
import DB2022 from '@/databases/pages/calendar/DB2022'
import ECalendar from '@/models/enums/ECalendar'
import Event from '@/models/entities/calendar/Event'

export default defineComponent({
    name: 'CalendarView',
    components: { CControl, CEvent, CList },
    setup() {
        const currentInstance = getCurrentInstance()
        const calendar = ref('')
        const event = ref('')
        const focus = ref('')
        const title = ref('')
        const type: Ref<ECalendar> = ref(ECalendar.month)

        nextTick(() => {
            watch(
                () => (currentInstance!.refs.calendar as any)!.title,
                (currentValue) => {
                    title.value = currentValue
                },
                { immediate: true }
            )
        })

        return {
            calendar,
            ECalendar,
            event,
            events: ([] as Event[]).concat(DB2022),
            getEventColor: (event: Event) => event.color,
            getFocus: () => focus,
            getTypeString: (ec: ECalendar) => Object.entries(ECalendar).find((it) => it[1] === ec)?.[0] ?? '',
            setFocus: (val: string) => {
                focus.value = val
            },
            switchToDayView: ({ date }: { date: string }) => {
                focus.value = date
                type.value = ECalendar.day
            },
            title,
            type,
        }
    },
})
</script>

<style lang="scss" scoped></style>

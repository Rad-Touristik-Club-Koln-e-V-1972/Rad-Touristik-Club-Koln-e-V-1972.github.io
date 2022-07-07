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

<script lang="ts">
import { defineComponent, getCurrentInstance, nextTick, Ref, ref, watch } from '@nuxtjs/composition-api'
import CControl from '@/components/page/calendar/CControl.vue'
import CEvent from '@/components/page/calendar/CEvent.vue'
import CList from '@/components/page/calendar/CList.vue'
import Event from '@/models/entities/calendar/Event'
import ECalendar from '@/models/enums/ECalendar'
import EEvent from '@/models/enums/EEvent'
import { useCalendarStore } from '@/store/Calendar'

export default defineComponent({
    name: 'CalendarView',
    components: { CControl, CEvent, CList },
    setup() {
        const currentInstance = getCurrentInstance()
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
            calendar: ref(''),
            ECalendar,
            EEvent,
            event: ref(''),
            events: useCalendarStore().all,
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

<style lang="scss" scoped />

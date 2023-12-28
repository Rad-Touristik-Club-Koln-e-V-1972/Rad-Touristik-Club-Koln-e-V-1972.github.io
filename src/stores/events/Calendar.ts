import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import _2023 from './calendar/2023'
import _2024 from './calendar/2024'
import EEvent from 'src/models/enums/EEvent'
import Event from 'src/models/entities/events/calendar/Event'
import useCalendar from 'src/utils/Calendar'

export default defineStore('calendar', () => {
    const events = ref<Record<string, Event[]>>({
        2023: _2023.concat(useCalendar().getHolidays(2023)),
        2024: _2024.concat(useCalendar().getHolidays(2024)),
    })

    const all = computed(() => Object.values(events.value).flatMap((it) => it.flatMap((it) => it)))
    const allActualYearAndFuture = () => all.value.filter((it) => it.start.getFullYear() >= today().getFullYear())
    const allFuture = () => all.value.filter((it) => it.start.getTime() > today().getTime())
    const allNotCancelled = computed(() => all.value.filter((it) => it.category !== EEvent.Abgesagt))
    const nextEvents = () =>
        allFuture()
            .filter((it) => ![EEvent.Abgesagt, EEvent.Feiertag, EEvent.Mitgliederversammlung, EEvent.Vereinsfahrt].includes(it.category))
            .sort((a, b) => a.start.getTime() - b.start.getTime())
            .slice(0, 2)
    const nextRTF = () => allFuture().find((it) => it.category === EEvent.RTF)
    const today = () => new Date(Date.now())

    return { all, allActualYearAndFuture, allFuture, allNotCancelled, nextEvents, nextRTF, today }
})

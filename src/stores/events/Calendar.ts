import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import _2024 from './calendar/2024'
import EEvent from 'src/models/enums/EEvent'
import Event from 'src/models/entities/events/calendar/Event'
import useCalendar from 'src/utils/Calendar'

export default defineStore('calendar', () => {
    const calendar = useCalendar()

    const events = ref<Record<string, Event[]>>({
        2024: _2024.concat(calendar.getHolidays(2024)),
    })

    const all = computed(() => Object.values(events.value).flatMap((it) => it.flatMap((it) => it)))
    const allFuture = () => all.value.filter((it) => it.start.getTime() > calendar.today().getTime())
    const allNotCancelled = computed(() => all.value.filter((it) => it.category !== EEvent.Abgesagt))
    const nextEvents = () =>
        allFuture()
            .filter((it) => ![EEvent.Abgesagt, EEvent.Feiertag, EEvent.Mitgliederversammlung, EEvent.Vereinsfahrt].includes(it.category))
            .sort((a, b) => a.start.getTime() - b.start.getTime())
            .slice(0, 2)
    const nextRTF = () => allFuture().find((it) => it.category === EEvent.RTF)

    return { all, allFuture, allNotCancelled, nextEvents, nextRTF }
})

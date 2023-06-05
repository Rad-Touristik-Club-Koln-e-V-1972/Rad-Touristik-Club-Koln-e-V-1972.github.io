import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import EEvent from '~/models/enums/EEvent'
import Event from '~/models/entities/events/calendar/Event'
import _2022 from '~/store/events/calendar/2022'
import _2023 from '~/store/events/calendar/2023'
import useCalendar from '~/utils/Calendar'

export default defineStore('calendar', () => {
    const events = ref<Record<string, Event[]>>({
        2022: _2022.concat(useCalendar().getHolidays(2022)),
        2023: _2023.concat(useCalendar().getHolidays(2023)),
    })

    const all = computed(() => Object.values(events.value).flatMap((it) => it.flatMap((it) => it)))

    const today = () => new Date(Date.now())
    const allFuture = () => all.value.filter((it) => it.start.getTime() > today().getTime())
    const nextEvents = () =>
        allFuture()
            .filter((it) => ![EEvent.Abgesagt, EEvent.Feiertag, EEvent.Mitgliederversammlung, EEvent.Vereinsfahrt].includes(it.category))
            .sort((a, b) => a.start.getTime() - b.start.getTime())
            .slice(0, 2)
    const nextRTF = () => allFuture().find((it) => it.category === EEvent.RTF)

    return { all, allFuture, nextEvents, nextRTF, today }
})

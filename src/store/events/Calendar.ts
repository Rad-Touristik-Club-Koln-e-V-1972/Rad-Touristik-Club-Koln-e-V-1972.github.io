import { defineStore } from 'pinia'
import Event from '~/models/entities/events/calendar/Event'
import EEvent from '~/models/enums/EEvent'
import _2022 from '~/store/events/calendar/2022'
import _2023 from '~/store/events/calendar/2023'
import useCalendar from '~/utils/Calendar'

export const useCalendarStore = defineStore('calendar', {
    actions: {
        allFuture(): Event[] {
            return this.all.filter((it) => it.start.getTime() > this.today().getTime())
        },
        nextEvents(): Event[] {
            return this.allFuture()
                .filter((it) => ![EEvent.Abgesagt, EEvent.Feiertag, EEvent.Mitgliederversammlung, EEvent.Vereinsfahrt].includes(it.category))
                .sort((a, b) => a.start.getTime() - b.start.getTime())
                .slice(0, 2)
        },
        today: (): Date => new Date(Date.now()),
    },
    getters: {
        all: (state): Event[] => Object.values(state.events).flatMap((it) => it.flatMap((it) => it)),
    },
    state: () => ({
        events: {
            2022: _2022.concat(useCalendar().getHolidays(2022)),
            2023: _2023.concat(useCalendar().getHolidays(2023)),
        } as Record<string, Event[]>,
    }),
})

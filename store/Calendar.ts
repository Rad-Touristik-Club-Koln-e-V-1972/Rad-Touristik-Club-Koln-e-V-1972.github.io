import { defineStore } from 'pinia'
import Event from '@/models/entities/calendar/Event'
import EEvent from '@/models/enums/EEvent'
import db2022 from '@/store/calendar/DB2022'

export const useCalendarStore = defineStore('calendar', {
    state: () => ({ db2022 }),
    getters: {
        all: (state): Event[] => ([] as Event[]).concat(state.db2022),
    },
    actions: {
        allFuture(): Event[] {
            return this.all.filter((it) => it.start.getTime() > this.today().getTime())
        },
        nextEvent(): Event | undefined {
            this.allFuture().filter((it) => it.category === EEvent.Feiertag)
            const nextStartTime = Math.min(
                ...this.allFuture()
                    .filter((it) => it.category !== EEvent.Feiertag)
                    .map((it) => it.start.getTime())
            )
            return this.allFuture().find((it) => it.start.getTime() === nextStartTime)
        },
        today: (): Date => new Date(Date.now()),
    },
})

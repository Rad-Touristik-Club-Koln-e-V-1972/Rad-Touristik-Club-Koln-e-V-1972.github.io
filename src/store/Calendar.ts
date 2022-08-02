import { defineStore } from 'pinia'
import Event from '~/models/entities/calendar/Event'
import EEvent from '~/models/enums/EEvent'
import _2022 from '~/store/calendar/2022'

export const useCalendarStore = defineStore('calendar', {
    state: () => ({
        events: {
            2022: _2022,
        } as Record<string, Event[]>,
    }),
    getters: {
        all: (state): Event[] => Object.values(state.events).flatMap((it) => it.flatMap((it) => it)),
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

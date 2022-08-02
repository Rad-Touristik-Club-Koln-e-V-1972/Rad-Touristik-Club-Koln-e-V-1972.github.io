import { defineStore } from 'pinia'
import Entry from '~/models/entities/guestbook/Entry'
import _2012 from '~/store/guestbook/2012'
import _2014 from '~/store/guestbook/2014'
import _2015 from '~/store/guestbook/2015'
import _2016 from '~/store/guestbook/2016'
import _2017 from '~/store/guestbook/2017'
import _2018 from '~/store/guestbook/2018'
import _2019 from '~/store/guestbook/2019'
import useDateTime from '~/utils/DateTime'

const dateTime: {
    getDaysInMonth: (month: number, year: number) => number
    format: (start: Date, end?: Date, allDay?: boolean) => string
    isBetween: (date: Date, start: Date, end: Date) => boolean
    sort: (a: Date, b: Date) => number
    isSameDay: (start: Date, end: Date) => boolean
} = useDateTime()

const sortByDate = (entries: Entry[]) => entries.sort((a, b) => dateTime.sort(a.date, b.date))

export const useGuestbookStore = defineStore('guestbook', {
    state: () => ({
        guestbook: {
            2019: sortByDate(_2019),
            2018: sortByDate(_2018),
            2017: sortByDate(_2017),
            2016: sortByDate(_2016),
            2015: sortByDate(_2015),
            2014: sortByDate(_2014),
            2012: sortByDate(_2012),
        } as Record<number, Entry[]>,
    }),
    getters: {
        all: (state): Entry[] =>
            Object.values(state.guestbook)
                .flatMap((it) => it.flatMap((it) => it))
                .reverse(),
        getGroupedByYear: (state): Record<number, Entry[]> => state.guestbook,
    },
})

import { defineStore } from 'pinia'
import Entry from '~/models/entities/guestbook/Entry'
import _2012 from '~/store/guestbook/2012'
import _2014 from '~/store/guestbook/2014'
import _2015 from '~/store/guestbook/2015'
import _2016 from '~/store/guestbook/2016'
import _2017 from '~/store/guestbook/2017'
import _2018 from '~/store/guestbook/2018'
import _2019 from '~/store/guestbook/2019'

const sortByDate = (entries: Entry[]) => entries.sort((a, b) => b.date.getTime() - a.date.getTime())

export const useGuestbookStore = defineStore('guestbook', {
    getters: {
        all: (state): Entry[] =>
            Object.values(state.guestbooks)
                .flatMap((it) => it.flatMap((it) => it))
                .reverse(),
        getGroupedByYear: (state): Record<string, Entry[]> => state.guestbooks,
    },
    state: () => ({
        guestbooks: {
            2019: sortByDate(_2019),
            2018: sortByDate(_2018),
            2017: sortByDate(_2017),
            2016: sortByDate(_2016),
            2015: sortByDate(_2015),
            2014: sortByDate(_2014),
            2012: sortByDate(_2012),
        } as Record<string, Entry[]>,
    }),
})

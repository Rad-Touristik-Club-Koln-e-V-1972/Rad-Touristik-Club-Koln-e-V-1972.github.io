import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import GuestbookEntry from '~/models/entities/rtc-cologne/guestbook/GuestbookEntry'
import _2012 from '~/store/rtc-cologne/guestbook/2012'
import _2014 from '~/store/rtc-cologne/guestbook/2014'
import _2015 from '~/store/rtc-cologne/guestbook/2015'
import _2016 from '~/store/rtc-cologne/guestbook/2016'
import _2017 from '~/store/rtc-cologne/guestbook/2017'
import _2018 from '~/store/rtc-cologne/guestbook/2018'
import _2019 from '~/store/rtc-cologne/guestbook/2019'
import _2023 from '~/store/rtc-cologne/guestbook/2023'

const sortByDate = (entries: GuestbookEntry[]) => {
    entries.sort((a, b) => b.date.getTime() - a.date.getTime())
    return entries
}

export default defineStore('guestbook', () => {
    const guestbooks = ref<Record<string, GuestbookEntry[]>>({
        2023: sortByDate(_2023),
        2019: sortByDate(_2019),
        2018: sortByDate(_2018),
        2017: sortByDate(_2017),
        2016: sortByDate(_2016),
        2015: sortByDate(_2015),
        2014: sortByDate(_2014),
        2012: sortByDate(_2012),
    })

    const all = computed(() =>
        Object.values(guestbooks.value)
            .flatMap((it) => it.flatMap((it) => it))
            .reverse()
    )
    const getGroupedByYear = computed(() => guestbooks.value)

    return { all, getGroupedByYear }
})

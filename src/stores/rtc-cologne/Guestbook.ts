import { computed, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type GuestbookEntry from 'src/models/entities/rtc-cologne/guestbook/GuestbookEntry'
import _2012 from './guestbook/2012'
import _2014 from './guestbook/2014'
import _2015 from './guestbook/2015'
import _2016 from './guestbook/2016'
import _2017 from './guestbook/2017'
import _2018 from './guestbook/2018'
import _2019 from './guestbook/2019'
import _2023 from './guestbook/2023'

export default defineStore('guestbook', () => {
  const sortByDate: (entries: GuestbookEntry[]) => GuestbookEntry[] = (entries: GuestbookEntry[]) => entries.toSorted((a, b) => b.date.getTime() - a.date.getTime())

  const groupedByYear: ComputedRef<Record<string, GuestbookEntry[]>> = computed(() => ({
    2023: sortByDate(_2023),
    2019: sortByDate(_2019),
    2018: sortByDate(_2018),
    2017: sortByDate(_2017),
    2016: sortByDate(_2016),
    2015: sortByDate(_2015),
    2014: sortByDate(_2014),
    2012: sortByDate(_2012),
  }))

  const all: ComputedRef<GuestbookEntry[]> = computed(() =>
    Object.values(groupedByYear.value)
      .flatMap((it) => it.flatMap((it) => it))
      .reverse(),
  )

  return { all, groupedByYear }
})

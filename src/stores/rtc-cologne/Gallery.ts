import { computed, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import _2009 from './gallery/2009/Gallery'
import _2010 from './gallery/2010/Gallery'
import _2011 from './gallery/2011/Gallery'
import _2012 from './gallery/2012/Gallery'
import _2013 from './gallery/2013/Gallery'
import _2014 from './gallery/2014/Gallery'
import _2015 from './gallery/2015/Gallery'
import _2016 from './gallery/2016/Gallery'
import _2017 from './gallery/2017/Gallery'
import _2018 from './gallery/2018/Gallery'
import _2019 from './gallery/2019/Gallery'
import _2020 from './gallery/2020/Gallery'
import _2021 from './gallery/2021/Gallery'
import _2022 from './gallery/2022/Gallery'
import _2023 from './gallery/2023/Gallery'
import _2024 from './gallery/2024/Gallery'

export default defineStore('gallery', () => {
  const sortByDate: (galleries: Gallery[]) => Gallery[] = (galleries: Gallery[]) => galleries.toSorted((a, b) => b.start.getTime() - a.start.getTime())

  const groupedByYear: ComputedRef<Record<string, Gallery[]>> = computed(() => ({
    2024: sortByDate(_2024),
    2023: sortByDate(_2023),
    2022: sortByDate(_2022),
    2021: sortByDate(_2021),
    2020: sortByDate(_2020),
    2019: sortByDate(_2019),
    2018: sortByDate(_2018),
    2017: sortByDate(_2017),
    2016: sortByDate(_2016),
    2015: sortByDate(_2015),
    2014: sortByDate(_2014),
    2013: sortByDate(_2013),
    2012: sortByDate(_2012),
    2011: sortByDate(_2011),
    2010: sortByDate(_2010),
    2009: sortByDate(_2009),
  }))

  const all: ComputedRef<Gallery[]> = computed(() =>
    Object.values(groupedByYear.value)
      .flatMap((it) => it.flatMap((it) => it))
      .reverse(),
  )

  return {
    all,
    findById: (id: string) => all.value.find((gallery) => gallery.id === id),
    findByIds: (...ids: string[]) => all.value.filter((gallery) => ids.includes(gallery.id)),
    groupedByYear,
  }
})

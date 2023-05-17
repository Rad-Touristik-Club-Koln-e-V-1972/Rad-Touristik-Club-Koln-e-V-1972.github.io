import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import Gallery from '~/models/entities/rtc-cologne/gallery/Gallery'
import _2009 from '~/store/rtc-cologne/gallery/2009/Gallery'
import _2010 from '~/store/rtc-cologne/gallery/2010/Gallery'
import _2011 from '~/store/rtc-cologne/gallery/2011/Gallery'
import _2012 from '~/store/rtc-cologne/gallery/2012/Gallery'
import _2013 from '~/store/rtc-cologne/gallery/2013/Gallery'
import _2014 from '~/store/rtc-cologne/gallery/2014/Gallery'
import _2015 from '~/store/rtc-cologne/gallery/2015/Gallery'
import _2016 from '~/store/rtc-cologne/gallery/2016/Gallery'
import _2017 from '~/store/rtc-cologne/gallery/2017/Gallery'
import _2018 from '~/store/rtc-cologne/gallery/2018/Gallery'
import _2019 from '~/store/rtc-cologne/gallery/2019/Gallery'
import _2020 from '~/store/rtc-cologne/gallery/2020/Gallery'
import _2021 from '~/store/rtc-cologne/gallery/2021/Gallery'
import _2022 from '~/store/rtc-cologne/gallery/2022/Gallery'
import _2023 from '~/store/rtc-cologne/gallery/2023/Gallery'

const sortByDate = (galleries: Gallery[]) => galleries.sort((a, b) => b.start.getTime() - a.start.getTime())

export const useGalleryStore = defineStore('gallery', () => {
    const galleries = ref<Record<string, Gallery[]>>({
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
    })

    const all = computed(() =>
        Object.values(galleries.value)
            .flatMap((it) => it.flatMap((it) => it))
            .reverse()
    )
    const getGroupedByYear = computed(() => galleries.value)

    const findById = (id: string) => all.value.find((gallery) => gallery.id === id)
    const findByIds = (...ids: string[]) => all.value.filter((gallery) => ids.includes(gallery.id))

    return { all, findById, findByIds, getGroupedByYear }
})

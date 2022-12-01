import { defineStore } from 'pinia'
import Gallery from '~/models/entities/about-us/gallery/Gallery'
import _2009 from '~/store/about-us/gallery/2009/Gallery'
import _2010 from '~/store/about-us/gallery/2010/Gallery'
import _2011 from '~/store/about-us/gallery/2011/Gallery'
import _2012 from '~/store/about-us/gallery/2012/Gallery'
import _2013 from '~/store/about-us/gallery/2013/Gallery'
import _2014 from '~/store/about-us/gallery/2014/Gallery'
import _2015 from '~/store/about-us/gallery/2015/Gallery'
import _2016 from '~/store/about-us/gallery/2016/Gallery'
import _2017 from '~/store/about-us/gallery/2017/Gallery'
import _2018 from '~/store/about-us/gallery/2018/Gallery'
import _2019 from '~/store/about-us/gallery/2019/Gallery'
import _2020 from '~/store/about-us/gallery/2020/Gallery'
import _2021 from '~/store/about-us/gallery/2021/Gallery'
import _2022 from '~/store/about-us/gallery/2022/Gallery'

const sortByDate = (galleries: Gallery[]) => galleries.sort((a, b) => b.start.getTime() - a.start.getTime())

export const useGalleryStore = defineStore('gallery', {
    actions: {
        findById(id: string): Gallery | undefined {
            return this.all.find((gallery) => gallery.id === id)
        },
        findByIds(...ids: string[]): Gallery[] {
            return this.all.filter((gallery) => ids.includes(gallery.id))
        },
    },
    getters: {
        all: (state): Gallery[] =>
            Object.values(state.galleries)
                .flatMap((it) => it.flatMap((it) => it))
                .reverse(),
        getGroupedByYear: (state): Record<string, Gallery[]> => state.galleries,
    },
    state: () => ({
        galleries: {
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
        } as Record<string, Gallery[]>,
    }),
})

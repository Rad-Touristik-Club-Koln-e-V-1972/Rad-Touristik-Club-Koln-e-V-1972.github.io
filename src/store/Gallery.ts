import { defineStore } from 'pinia'
import Gallery from '~/models/entities/Gallery'
import _2009 from '~/store/gallery/2009/Gallery'
import _2010 from '~/store/gallery/2010/Gallery'
import _2011 from '~/store/gallery/2011/Gallery'
import _2012 from '~/store/gallery/2012/Gallery'
import _2013 from '~/store/gallery/2013/Gallery'
import _2014 from '~/store/gallery/2014/Gallery'
import _2015 from '~/store/gallery/2015/Gallery'
import _2016 from '~/store/gallery/2016/Gallery'
import _2017 from '~/store/gallery/2017/Gallery'
import _2018 from '~/store/gallery/2018/Gallery'
import _2019 from '~/store/gallery/2019/Gallery'
import _2020 from '~/store/gallery/2020/Gallery'
import _2021 from '~/store/gallery/2021/Gallery'
import _2022 from '~/store/gallery/2022/Gallery'

export const useGalleryStore = defineStore('gallery', {
    state: () => ({ galleries: [..._2022, ..._2021, ..._2020, ..._2019, ..._2018, ..._2017, ..._2016, ..._2015, ..._2014, ..._2013, ..._2012, ..._2011, ..._2010, ..._2009] }),
    getters: {
        all: (state): Gallery[] => state.galleries.sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime()),
    },
})

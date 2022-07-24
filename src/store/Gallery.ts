import { defineStore } from 'pinia'
import Gallery from '~/models/entities/Gallery'
import _20171027CTF3 from '~/store/gallery/2017/10_27_CTF_3'
import _20181014RTFSaisonAbschluss from '~/store/gallery/2018/10_14_RTF_Saison_Abschluss'
import _20181229RTCWeihnachtsfeier from '~/store/gallery/2018/12_29_RTC_Weihnachtsfeier'
import _20181027CTF4 from '~/store/gallery/2018/10_27_CTF_4'
import _20191026CTF5 from '~/store/gallery/2019/10_26_CTF_5'
import _20210526RTF49 from '~/store/gallery/2021/05_26_RTF_49'
import _20210807RTFLohmar from '~/store/gallery/2021/08_07_RTF_Lohmar'
import _2021GemischteEindruecke from '~/store/gallery/2021/Gemischte_Eindruecke'
import _2021RTCRueckblick from '~/store/gallery/2021/RTC_Rueckblick'
import _20220507ChronologieUnsererTrikots from '~/store/gallery/2022/05_07_Chronologie_Unserer_Trikots'
import _20220529RTF50 from '~/store/gallery/2022/05_29_RTF_50'
import _2022070103WaxweilerStVith from '~/store/gallery/2022/07_01_03_Waxweiler_St.Vith'

export const useGalleryStore = defineStore('gallery', {
    state: () => ({
        galleries: [
            _2022070103WaxweilerStVith,
            _20220529RTF50,
            _20220507ChronologieUnsererTrikots,
            _2021RTCRueckblick,
            _2021GemischteEindruecke,
            _20210807RTFLohmar,
            _20210526RTF49,
            _20191026CTF5,
            _20181027CTF4,
            _20181014RTFSaisonAbschluss,
            _20181229RTCWeihnachtsfeier,
            _20171027CTF3,
        ],
    }),
    getters: {
        all: (state): Gallery[] => state.galleries.sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime()),
    },
})

import { ref } from 'vue'
import { defineStore } from 'pinia'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default defineStore('news', () => {
    const all = ref<GalleryEntry[]>([
        new GalleryEntryBuilder()
            .setId('dc4f7f66-df30-405b-abd9-a0560c13e038')
            .setImageUrl('content.rtc-koeln.de/pages/index/news/A4_Flyer_Mosel-Genussstour_RTC_Köln_2023_SMedia.pdf')
            .setPreviewUrl('content.rtc-koeln.de/pages/index/news/preview/preview.A4_Flyer_Mosel-Genussstour_RTC_Köln_2023_SMedia.png')
            .build(),
    ])

    return { all }
})

import { defineStore } from 'pinia'
import PressReportBuilder from '~/models/builder/about-us/PressReportBuilder'
import PressReport from '~/models/entities/about-us/PressReport'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'

export const usePressReportsStore = defineStore('about-us-press-reports', {
    getters: {
        all: (state): PressReport[] => state.pressReports,
    },
    state: () => ({
        pressReports: [
            new PressReportBuilder()
                .setDate('2022-11-14')
                .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-11-14_porz-am-montag.jpg').build())
                .setTitle('Porz am Montag')
                .build(),
            new PressReportBuilder()
                .setDate('2022-04-05')
                .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.jpeg').build())
                .setTitle('Roadbike')
                .build(),
        ],
    }),
})

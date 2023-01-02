import { defineStore } from 'pinia'
import PressReportBuilder from '~/models/builder/rtc-cologne/PressReportBuilder'
import PressReport from '~/models/entities/rtc-cologne/PressReport'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export const usePressReportsStore = defineStore('rtc-cologne-press-reports', {
    getters: {
        all: (state): PressReport[] => state.pressReports,
    },
    state: () => ({
        pressReports: [
            new PressReportBuilder()
                .setDate('2022-12-06')
                .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-12-06_porz-im-blick.jpg').build())
                .setTitle('Porz im Blick')
                .build(),
            new PressReportBuilder()
                .setDate('2022-11-14')
                .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-11-14_porz-am-montag.jpg').build())
                .setTitle('Porz am Montag')
                .build(),
            new PressReportBuilder()
                .setDate('2022-04-05')
                .setImages(
                    new GalleryEntryBuilder()
                        .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.pdf')
                        .setPreviewUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/preview/preview.2022-05_roadbike.jpeg')
                        .build()
                )
                .setTitle('Roadbike')
                .build(),
        ],
    }),
})

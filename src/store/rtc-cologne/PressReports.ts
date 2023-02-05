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
                .setId('df7bdf29-d6ad-4b8a-9a48-aa8ff8dfe176')
                .setImages(
                    new GalleryEntryBuilder()
                        .setId('9ee7921e-2cd4-4a93-9a99-0fe1e1493713')
                        .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-12-06_porz-im-blick.jpg')
                        .build()
                )
                .setTitle('Porz im Blick')
                .build(),
            new PressReportBuilder()
                .setDate('2022-11-14')
                .setId('f4682fd0-7b07-4e7b-9454-9a5b2dc710af')
                .setImages(
                    new GalleryEntryBuilder()
                        .setId('eb1d1fd0-18a9-40a8-9d5f-9abafa7d3324')
                        .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-11-14_porz-am-montag.jpg')
                        .build()
                )
                .setTitle('Porz am Montag')
                .build(),
            new PressReportBuilder()
                .setDate('2022-04-05')
                .setId('07567a45-f074-4244-b276-e2f066dbe2c5')
                .setImages(
                    new GalleryEntryBuilder()
                        .setId('59a1209b-f8c1-4cd0-8faa-0bc7c1055525')
                        .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.pdf')
                        .setPreviewUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/preview/preview.2022-05_roadbike.jpeg')
                        .build()
                )
                .setTitle('Roadbike')
                .build(),
        ],
    }),
})

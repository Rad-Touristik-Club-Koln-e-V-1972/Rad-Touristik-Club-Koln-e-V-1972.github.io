import { ref } from 'vue'
import { defineStore } from 'pinia'
import PressReportBuilder from 'src/models/builder/rtc-cologne/PressReportBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import PressReport from 'src/models/entities/rtc-cologne/PressReport'

export default defineStore('rtc-cologne-press-reports', () => {
  return {
    all: ref<PressReport[]>([
      new PressReportBuilder()
        .setDate('2023-05-10')
        .setId('00045bd5-14c1-49a8-8d49-055b9d9652e5')
        .setImages(
          new GalleryEntryBuilder()
            .setId('37d52527-5e35-4410-b789-3801b10aabb9')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/Rueckblick/signal-2023-05-10-105056.jpeg.avif')
            .buildGalleryEntry(),
        )
        .setTitle('Porz am Montag')
        .buildPressReport(),
      new PressReportBuilder()
        .setDate('2022-12-06')
        .setId('df7bdf29-d6ad-4b8a-9a48-aa8ff8dfe176')
        .setImages(
          new GalleryEntryBuilder()
            .setId('9ee7921e-2cd4-4a93-9a99-0fe1e1493713')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-12-06_porz-im-blick.jpg.avif')
            .buildGalleryEntry(),
        )
        .setTitle('Porz im Blick')
        .buildPressReport(),
      new PressReportBuilder()
        .setDate('2022-11-14')
        .setId('f4682fd0-7b07-4e7b-9454-9a5b2dc710af')
        .setImages(
          new GalleryEntryBuilder()
            .setId('eb1d1fd0-18a9-40a8-9d5f-9abafa7d3324')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-11-14_porz-am-montag.jpg.avif')
            .buildGalleryEntry(),
        )
        .setTitle('Porz am Montag')
        .buildPressReport(),
      new PressReportBuilder()
        .setDate('2022-04-05')
        .setId('07567a45-f074-4244-b276-e2f066dbe2c5')
        .setImages(
          new GalleryEntryBuilder()
            .setId('59a1209b-f8c1-4cd0-8faa-0bc7c1055525')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.pdf')
            .setPreviewUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.jpeg.avif')
            .buildGalleryEntry(),
        )
        .setTitle('Roadbike')
        .buildPressReport(),
    ]),
  }
})

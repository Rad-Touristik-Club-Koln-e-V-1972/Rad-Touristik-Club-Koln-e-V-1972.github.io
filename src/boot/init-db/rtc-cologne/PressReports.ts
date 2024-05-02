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
        .setImages({  imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2023/Rueckblick/signal-2023-05-10-105056.jpeg.avif').buildGalleryEntry())
        .setTitle('Porz am Montag')
        .buildPressReport(),
      new PressReportBuilder()
        .setDate('2022-12-06')
        .setImages({  imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-12-06_porz-im-blick.jpg.avif').buildGalleryEntry())
        .setTitle('Porz im Blick')
        .buildPressReport(),
      new PressReportBuilder()
        .setDate('2022-11-14')
        .setImages({  imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-11-14_porz-am-montag.jpg.avif').buildGalleryEntry())
        .setTitle('Porz am Montag')
        .buildPressReport(),
      new PressReportBuilder()
        .setDate('2022-04-05')
        .setImages(
          new GalleryEntryBuilder()
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.pdf')
            .setPreviewUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.jpeg.avif')
            .buildGalleryEntry(),
        )
        .setTitle('Roadbike')
        .buildPressReport(),
    ]),
  }
})

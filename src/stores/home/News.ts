import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import NewsEntryBuilder from 'src/models/builder/home/NewsEntryBuilder'
import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import type NewsEntry from 'src/models/entities/home/NewsEntry'
import useDateTime from 'src/utils/DateTime'

export default defineStore('news', () => {
  const dateTime = useDateTime()

  const all: Ref<NewsEntry[]> = ref([
    new NewsEntryBuilder()
      .setId('e37b168d-68cf-4dfb-bb42-4a37fe80af61')
      .setGallery(
        new GalleryBuilder()
          .setId('b29032d2-22d5-48d2-9af5-0ea050bbf7c3')
          .setImages([
            new GalleryEntryBuilder()
              .setId('5689c1aa-c353-41fe-b919-6e9455cfad5c')
              .setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/Mosel-Wochenende-August-2026.pdf')
              .setPreviewUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/Mosel-Wochenende-August-2026.pdf.jpg.avif')
              .buildGalleryEntry(),
            new GalleryEntryBuilder().setId('95fa9818-f8f9-4641-9fd1-53f315f4b95e').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_2280.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('c3052e8d-630d-4a40-b6f9-08840a6006ee').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9464.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('a3ec7a92-71f8-4c0d-beda-f430363abc9f').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9472.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('3b85f8d6-84fd-4d32-8f73-f51e658e0ec9').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9479.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('efeff67d-56e3-4475-9961-146fa62b40fb').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9486.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('9e6bd139-84aa-41fe-864c-390be784e2b2').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_6590.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('db3ddd30-fbea-4827-9cfb-c656b3e44c87').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9465.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('7a262253-681b-439d-b3e3-cf2a8f5819e8').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9473.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('830e9ec5-2c86-4321-a7f3-f743071cda23').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9480.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('e4186b5b-98e1-4260-afc2-cf65a0f6e11e').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_8653.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('29d3c033-ae58-47db-b5bc-5af880083dea').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9468.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('c785d654-e576-4481-859b-ebc8cd021ed9').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9474.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('20242d8c-ca13-4375-a839-4faf5fde44ff').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9483.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('c8beee3b-0623-405e-9f36-add8704458f6').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9459.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('ef7399db-5cae-42e1-b1dd-bc9dff0b0689').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9469.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('7589a6af-af79-43d5-9a24-70e9e3fbf387').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9477.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('04ece3f9-8d0f-45e7-a07f-16fac64bdbcd').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9484.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('d1e97c48-95b4-4a08-90ed-04fc560fbab0').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/PHOTO-2024-09-22-13-43-47.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('ae9ea45d-64c9-4f4c-80bf-0b2c76d788de').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9460.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('40561b37-e28e-4ce1-9568-077de8fb27f5').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9471.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('99b04612-a382-4c77-ab0b-f3937a263eee').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9478.jpg.avif').buildGalleryEntry(),
            new GalleryEntryBuilder().setId('3883875e-d8f1-434a-afe9-a100c8748f6d').setImageUrl('content.rtc-koeln.de/pages/news/Mosel-Tour/IMG_9485.jpg.avif').buildGalleryEntry(),
          ])
          .buildGallery(),
      )
      .setShowUntil('2026-08-15')
      .setText(
        `
📣 ANMELDUNG zur Mosel-Tour geöffnet

Hallo zusammen,

wir haben für euch alle wichtigen Informationen zusammengestellt.
Diese  findet ihr auf dem angehängten Infoblatt.
Jeder ist herzlich willkommen, der sich diese Strecke zutraut. 🤗

🚨 Bitte beachten (abweichend von den Infos in der GC Touren App):
➡️ Abfahrt: 07:30 Uhr
➡️ Die Tour startet am 15. August 2026

Kontoverbindung:
RAD-TOURISTIK-CLUB Koeln e.V. 1972
Volksbank Köln Bonn eG
IBAN: DE73 3806 0186 6601 1910 14
BIC: GENODED1BRS
Betreff: An die Mosel

Wir freuen uns auf Euch.

Euer RTC Köln e.V. 1972🧡`,
      )
      .buildNewsEntry(),
  ])

  return {
    all,
    allValid: all.value.filter((it) => {
      let ret = false

      if (it.showUntil && dateTime.todayMidnight.value > it.showUntil) console.warn(`!! NewsEntry ${it.id} is not valid anymore and will be removed from the list !!`)
      else ret = true

      return ret
    }),
  }
})

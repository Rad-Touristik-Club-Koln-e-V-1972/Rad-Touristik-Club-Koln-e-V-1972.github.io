import { ref } from 'vue'
import { defineStore } from 'pinia'
import type NewsEntry from 'src/models/entities/home/NewsEntry'
import NewsEntryBuilder from 'src/models/builder/home/NewsEntryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import useDateTime from 'src/utils/DateTime'

export default defineStore('news', () => {
  const dateTime = useDateTime()

  const all = ref<NewsEntry[]>([
    new NewsEntryBuilder()
      .setId('2a95ee4f-7eda-4b4f-a7d3-1bf158aa10a3')
      .setImage(new GalleryEntryBuilder().setId('c4654ba8-16c1-48f9-8947-dc3f1e454818').setImageUrl('content.rtc-koeln.de/pages/home/news/signal-2025-11-03-193008.jpeg.avif').buildGalleryEntry())
      .setShowUntil('2025-12-31')
      .setText(
        `🎄 Weihnachtsfeier des RTC Köln  🚴‍♀️

Am 6. Dezember 2025 feiert der RTC Köln seine traditionelle Weihnachtsfeier – wieder im stimmungsvollen Café Uferglück.
In liebevoller Atmosphäre lassen wir gemeinsam die Saison ausklingen, genießen ein festliches Menü und blicken auf viele schöne Touren, Erlebnisse und sportliche Highlights des Jahres zurück.

Wie immer steht der Abend ganz im Zeichen unserer starken Gemeinschaft – mit guten Gesprächen, viel Lachen und dem ein oder anderen Rückblick auf die Höhepunkte der Saison.

Wir freuen uns auf ein gemütliches Beisammensein mit unseren Vereinsmitgliedern, Partnerinnen und Partnern – und sagen schon jetzt:
Danke für ein tolles Jahr voller Teamgeist, Leidenschaft und Rennradliebe! ❤️🚴‍♂️`,
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

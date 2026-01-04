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
      .setId('c42771dc-b94a-4ff0-94c3-b4e518e874cd')
      .setImage(new GalleryEntryBuilder().setId('3dbb3b2b-3c8d-4874-8994-a6eff62ab39b').setImageUrl('content.rtc-koeln.de/pages/news/IMG_0102.jpg.avif').buildGalleryEntry())
      .setShowUntil('2026-01-31')
      .buildNewsEntry(),
    new NewsEntryBuilder()
      .setId('f1105474-db24-499f-97f1-bb1b4b72612e')
      .setImage(new GalleryEntryBuilder().setId('bb07de97-b2d8-4075-b2b2-337c229faebe').setImageUrl('content.rtc-koeln.de/pages/news/signal-2026-01-01-165641.jpg.avif').buildGalleryEntry())
      .setShowUntil('2026-05-31')
      .setText(
        `NEU ab 1. Januar 2026 – 3 RTC-Köln-Touren fahren & 100 €-Gutschein gewinnen!

Ein Highlight am Breitensporthimmel!

Der RTC Köln e.V. präsentiert die TRIPLE RIDE TROPHY – ein einzigartiges Rennrad-Abenteuer:
👉 Fahre unsere 2 RTC-Permanenten
👉 Starte bei der FORSBACHTOUR am 31.05.2026
👉 Belohnt werden!

So nimmst du teil:
✅ Fahre vom 1.1. bis 30.5.2026 unsere beiden Permanenten
✅ Nimm am 31.05.2026 an unserer RTF FORSBACHTOUR teil
✅ Reiche deinen Nachweis ein

Unter allen, die unsere TRIPLE RIDE TROPHY meistern, verlosen wir einen 100 €-Gutschein für ein Radsportgeschäft.

UND: Jede*r, der alle drei Touren fährt, erhält einen Preis (solange der Vorrat reicht; ohne Gewähr)

📍 Fragen?
Diana.vialon@rtc-koeln.de

#RTCköln #TRIPLERIDETROPHY #FORSBACHTOUR #RTF2026 #RennradLiebe #Permanente #BreitensportNeu`,
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

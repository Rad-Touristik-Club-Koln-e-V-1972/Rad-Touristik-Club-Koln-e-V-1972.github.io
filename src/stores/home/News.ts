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
      .setId('c49e9b3b-cbb9-461d-bd04-6d549425f24d')
      .setImage(new GalleryEntryBuilder().setId('cdd23a5c-1f5a-40fa-bb3e-5987791fe7ae').setImageUrl('content.rtc-koeln.de/pages/home/news/2025-09-09_IMG_6064.avif').buildGalleryEntry())
      .setShowUntil('2025-09-28')
      .setText(
        `🌸 Ladies-only Ride im Sahrbachtal 🌸

Lust auf Rennradfeeling, Naturgenuss und jede Menge gute Gesellschaft?

Dann ist unsere exklusive Damen-Tour genau das Richtige:
• 130 km Rennradspaß durch das idyllische Sahrbachtal mit ca. 1000 Hm
• 3 Snack-Stops dank fliegendem & fahrendem Versorgungsfahrzeug
• Begleitung durch erfahrene RTC-Fahrerinnen
• Gemeinsamer Ausklang bei einem Bierchen oder einer Limo 🍻🥤

💖 Sportlich. Gesellig. Unvergesslich.
🔹 Datum: 28.09.2025, 9.30 Uhr
🔹 Start: Unter der Rodenkirchener Brücke linksrheinisch
🔹 Das Tempo in der Ebene wird bei ca. 25-30 km/h. Bei Anstiegen fährt jede von uns so schnell wie sie kann. Am Ende des Anstiegs wird auf jede von Euch gewartet.
🔹 Begrenzte Plätze – jetzt anmelden! (Diana.vialon@rtc-koeln.de)
🔹Für die Teilnahme erheben wir einen Unkostenbeitrag von 10 € zur Deckung der Organisations- und Verpflegungskosten.

P.S: Solltest du eine Breitensportlizenz haben, kannst du im Rahmen der Tour Wertungskilometer sammeln.
Inhaberinnen einer BDR-Breitensportlizenz zahlen nur 6 € Teilnahmegebühr.

Wir freuen uns auf Euch. 🫶🚴‍♀️🚴🚴‍♂️🚴‍♀️`,
      )
      .setUrl('touren.rad-net.de/event/9975722')
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

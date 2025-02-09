import { ref } from 'vue'
import { defineStore } from 'pinia'
import type NewsEntry from 'src/models/entities/home/NewsEntry'
import NewsEntryBuilder from 'src/models/builder/home/NewsEntryBuilder'
import useDateTime from 'src/utils/DateTime'

export default defineStore('news', () => {
  const dateTime = useDateTime()

  const all = ref<NewsEntry[]>([
    new NewsEntryBuilder()
      .setId('e9a69973-0e32-4a72-98e1-1472eb2d4401')
      .setText(
        `Neu ab 2025:
die <b>KÖLN</b>CHALLENGE!

Zusammen mit unseren Partnervereinen Mistral, Rodenkirchen, Ford, Immendorf und Lövenich haben wir eine spannende neue Initiative für den Breitensport ins Leben gerufen!

Fahre bei unseren sechs Radtourenfahrten (RTF) mit, sammle Stempel auf Deiner Challenge-Karte und sichere dir die Chance auf tolle Preise – darunter ein <b>Hauptpreis im Wert von 600 €!</b>

<u>Klick auf das Logo</u> und erfahre alles, was du wissen musst.

Gemeinsam machen wir den Radsport 🚴‍♀️🚴‍♂️ in Köln noch besser. ❤️`,
      )
      .setVideoUrl('content.rtc-koeln.de/pages/home/news/signal-2025-02-07-141701_002_conv.webm')
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

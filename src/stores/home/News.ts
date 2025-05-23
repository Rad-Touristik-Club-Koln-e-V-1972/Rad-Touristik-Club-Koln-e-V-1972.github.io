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
      .setId('ce3e795c-7c6d-496e-83ba-fb71ff15df9f')
      .setImage(new GalleryEntryBuilder().setId('c223b62c-1590-4fb1-b056-b62e1925551f').setImageUrl('content.rtc-koeln.de/pages/home/news/signal-2025-05-23-125023.jpeg').buildGalleryEntry())
      .setShowUntil('2025-05-25')
      .setText(
        `Die FORSBACHTOUR 2025 fällt aus!

Es tut uns unendlich leid, aber es soll regnerisch und stürmisch werden und eure Sicherheit liegt uns am Herzen.

Euer RTC KÖLN e.V. 1972`,
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

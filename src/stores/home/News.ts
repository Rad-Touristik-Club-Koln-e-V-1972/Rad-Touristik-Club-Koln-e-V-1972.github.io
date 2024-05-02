import { ref } from 'vue'
import { defineStore } from 'pinia'
import News from 'src/models/entities/home/News'
import NewsEntryBuilder from 'src/models/builder/home/NewsEntryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import useDateTime from 'src/utils/DateTime'

export default defineStore('news', () => {
  const dateTime = useDateTime()

  const all = ref<News[]>([
    new NewsEntryBuilder()

      .setImage({ imageUrl: new URL('https://content.rtc-koeln.de/pages/home/news/Werbung_Social_Media.pdf').setPreviewUrl('content.rtc-koeln.de/pages/home/news/Werbung_Social_Media.avif').buildGalleryEntry())
      .setText(
        `Haben wir Dein Interesse geweckt?
Dann schreib uns einfach eine Mail:
➡️ pr@rtc-koeln.de

Wir freuen uns auf Dich! 🧡`,
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

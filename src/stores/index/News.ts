import { ref } from 'vue'
import { defineStore } from 'pinia'
import NewsEntry from 'src/models/entities/index/NewsEntry'
import NewsEntryBuilder from 'src/models/builder/index/NewsEntryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import useDateTime from 'src/utils/DateTime.ts'

export default defineStore('news', () => {
    const dateTime = useDateTime()

    const all = ref<NewsEntry[]>([
        new NewsEntryBuilder()
            .setId('51f3e784-346c-43e2-ad72-715503ccf5ab')
            .setImage(
                new GalleryEntryBuilder()
                    .setId('2049e110-da82-49ef-b0f1-1f167bda676d')
                    .setImageUrl('content.rtc-koeln.de/pages/index/news/Werbung_Social_Media.pdf')
                    .setPreviewUrl('content.rtc-koeln.de/pages/index/news/Werbung_Social_Media.avif')
                    .buildGalleryEntry(),
            )
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

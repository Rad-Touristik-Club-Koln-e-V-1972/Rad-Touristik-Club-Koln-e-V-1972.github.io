import { ref } from 'vue'
import { defineStore } from 'pinia'
import NewsEntryBuilder from '~/models/builder/index/NewsEntryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import NewsEntry from '~/models/entities/index/NewsEntry'

export default defineStore('news', () => {
    const all = ref<NewsEntry[]>([
        new NewsEntryBuilder()
            .setId('51f3e784-346c-43e2-ad72-715503ccf5ab')
            .setImage(
                new GalleryEntryBuilder()
                    .setId('2049e110-da82-49ef-b0f1-1f167bda676d')
                    .setImageUrl('content.rtc-koeln.de/pages/index/news/Werbung_Social_Media.pdf')
                    .setPreviewUrl('content.rtc-koeln.de/pages/index/news/preview/preview.Werbung_Social_Media.avif')
                    .build()
            )
            .setText(
                `Haben wir Dein Interesse geweckt?
Dann schreib uns einfach eine Mail:
➡️ pr@rtc-koeln.de

Wir freuen uns auf Dich! 🧡`
            )
            .build(),
    ])

    return { all }
})

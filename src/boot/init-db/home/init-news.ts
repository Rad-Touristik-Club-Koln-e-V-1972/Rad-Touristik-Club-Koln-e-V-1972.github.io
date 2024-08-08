import { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import News from 'src/models/entities/home/News'

export default (store: Pinia) =>
  useRepo(News, store).save([
    {
      galleryEntry: {
        imageUrl: new URL('https://content.rtc-koeln.de/pages/home/news/Werbung_Social_Media.pdf'),
        previewUrl: new URL('https://content.rtc-koeln.de/pages/home/news/Werbung_Social_Media.avif'),
      },
      text: `Haben wir Dein Interesse geweckt?
Dann schreib uns einfach eine Mail:
➡️ pr@rtc-koeln.de

Wir freuen uns auf Dich! 🧡`,
    },
  ])

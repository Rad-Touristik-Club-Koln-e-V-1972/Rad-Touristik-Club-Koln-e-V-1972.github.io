import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import PressReport from 'src/models/entities/rtc-cologne/PressReport'

export default (store: Pinia) =>
  useRepo(PressReport, store).save([
    {
      date: new Date('2023-05-10'),
      galleryEntries: [{ imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2023/Rueckblick/signal-2023-05-10-105056.jpeg.avif') }],
      title: 'Porz am Montag',
    },
    {
      date: new Date('2022-12-06'),
      galleryEntries: [{ imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-12-06_porz-im-blick.jpg.avif') }],
      title: 'Porz im Blick',
    },
    {
      date: new Date('2022-11-14'),
      galleryEntries: [{ imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-11-14_porz-am-montag.jpg.avif') }],
      title: 'Porz am Montag',
    },
    {
      date: new Date('2022-04-05'),
      galleryEntries: [
        {
          imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.pdf'),
          previewUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.jpeg.avif'),
        },
      ],
      title: 'Roadbike',
    },
  ])

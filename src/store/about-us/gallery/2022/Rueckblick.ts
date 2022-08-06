import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2022-12-31'))
    .location('Köln')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/Nachruf_Klaus_Napierala.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.jpeg').build(),
    ])
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/preview/preview.2022-05_roadbike.jpeg')
    .build()

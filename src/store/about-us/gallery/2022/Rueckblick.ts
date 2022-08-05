import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2022-12-31'))
    .location('Köln')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/Nachruf_Klaus_Napierala.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.jpeg').previewUrl().build())
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/preview/preview.2022-05_roadbike.jpeg')
    .build()

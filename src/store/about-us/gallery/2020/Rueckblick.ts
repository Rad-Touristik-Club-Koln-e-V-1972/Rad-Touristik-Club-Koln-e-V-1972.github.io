import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom('2020-12-31')
    .location('Köln')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-957-intro-2020.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-958-intro-2020.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-959-intro-2020.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer1-2020.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer-2020.pdf').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer2-2020.jpg').build(),
    ])
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/preview/preview.rtc-957-intro-2020.jpg')
    .build()

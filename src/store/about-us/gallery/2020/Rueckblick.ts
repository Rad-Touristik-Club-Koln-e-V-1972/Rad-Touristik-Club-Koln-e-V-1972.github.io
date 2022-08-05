import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2020-12-31'))
    .location('Köln')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-957-intro-2020.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-958-intro-2020.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-959-intro-2020.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer1-2020.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer-2020.pdf').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer2-2020.jpg').previewUrl().build())
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/preview/preview.rtc-957-intro-2020.jpg')
    .build()

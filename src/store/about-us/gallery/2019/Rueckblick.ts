import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2019-12-31'))
    .location('Köln')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2019/Rueckblick/rtc-960-intro-2019.jpg').previewUrl().build())
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2019/Rueckblick/preview/preview.rtc-960-intro-2019.jpg')
    .build()

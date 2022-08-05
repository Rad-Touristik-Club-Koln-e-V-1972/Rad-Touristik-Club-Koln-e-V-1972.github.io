import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-05-14'))
    .location('Köln-Rodenkirchen')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-01.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-02.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-03.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-04.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-05.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-06.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-07.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-08.jpg').previewUrl().build())
    .title('Köln-Rodenkirchen')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/preview/preview.rtc-rod-03.jpg')
    .build()

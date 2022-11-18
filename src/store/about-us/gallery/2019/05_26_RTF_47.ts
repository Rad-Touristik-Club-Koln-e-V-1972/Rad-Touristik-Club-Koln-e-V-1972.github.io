import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2019-05-26')
    .setLocation('Rösrath-Forsbach')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer-2019.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer1-2019.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer2-2019.jpg').build(),
    ])
    .setTitle('47. Forsbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/preview/preview.rtc-forsbach-tour-flyer-2019.jpg')
    .build()

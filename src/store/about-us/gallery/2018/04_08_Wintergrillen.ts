import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .setDate('2018-04-08')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-001int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-002int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-003int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-004int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-005int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-006int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-007int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-008int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-009int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-010int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-011int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-012int.jpg').build(),
    ])
    .setTitle('Wintergrillen')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/preview/preview.rtc-180300-wg-003int.jpg')
    .build()

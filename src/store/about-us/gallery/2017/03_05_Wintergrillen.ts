import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom('2017-03-05')
    .location('Köln')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-001int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-002int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-003int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-004int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-005int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-006int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-007int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-008int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-009int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-010int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-011int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-012int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-013int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-014int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-015int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-016int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-017int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/rtc-170305-wg-018int.jpg').build(),
    ])
    .title('Wintergrillen')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2017/03_05_Wintergrillen/preview/preview.rtc-170305-wg-004int.jpg')
    .build()

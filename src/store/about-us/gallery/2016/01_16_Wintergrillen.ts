import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .date('2016-01-16')
    .location('Poller Haus, Köln')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-001.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-002.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-003int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-004.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-005int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-006int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-007int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-008int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-009int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-010int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-011int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-012int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-013int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-014.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-015int.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-016int.jpg').build(),
    ])
    .title('Wintergrillen')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/preview/preview.rtc-20160116-wg-001.jpg')
    .build()

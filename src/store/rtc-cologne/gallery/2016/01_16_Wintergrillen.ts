import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2016-01-16')
    .setLocation('Poller Haus, Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-001.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-002.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-003int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-004.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-005int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-006int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-007int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-008int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-009int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-010int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-011int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-012int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-013int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-014.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-015int.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/rtc-20160116-wg-016int.jpg').build(),
    ])
    .setTitle('Wintergrillen')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2016/01_16_Wintergrillen/preview/preview.rtc-20160116-wg-001.jpg')
    .build()

import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTC)
    .dateFrom(new Date('2018-04-08'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-001int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-002int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-003int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-004int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-005int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-006int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-007int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-008int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-009int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-010int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-011int.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/rtc-180300-wg-012int.jpg').previewUrl().build())
    .title('Wintergrillen')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2018/04_08_Wintergrillen/preview/preview.rtc-180300-wg-003int.jpg')
    .build()

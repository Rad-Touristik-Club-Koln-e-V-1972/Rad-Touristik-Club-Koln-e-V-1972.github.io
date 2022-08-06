import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .date('2015-06-07')
    .location('Buchholz')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-001.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-002.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-003.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-004.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-005.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-006.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-007.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-008.jpg').build(),
    ])
    .title('Buchholz')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/preview/preview.rtc-20150607-buchholz-003.jpg')
    .build()

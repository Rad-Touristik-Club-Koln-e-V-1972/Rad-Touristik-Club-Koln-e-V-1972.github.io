import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2015-06-07')
    .setLocation('Buchholz')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-001.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-002.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-003.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-004.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-005.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-006.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-007.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-008.jpg').build(),
    ])
    .setTitle('Buchholz')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/preview/preview.rtc-20150607-buchholz-003.jpg')
    .build()

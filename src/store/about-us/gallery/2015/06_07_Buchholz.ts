import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2015-06-07'))
    .location('Buchholz')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-001.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-002.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-003.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-004.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-005.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-006.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-007.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-008.jpg').previewUrl().build())
    .title('Buchholz')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/preview/preview.rtc-20150607-buchholz-003.jpg')
    .build()

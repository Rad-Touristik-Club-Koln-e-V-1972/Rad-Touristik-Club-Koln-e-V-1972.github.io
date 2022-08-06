import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom('2014-05-04')
    .location('Niederkassel-Lülsdorf')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4901.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4907.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4908.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4909.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4910.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4911.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4912.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4913.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4914.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4917.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4918.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4919.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4920.JPG').build(),
    ])
    .title('Niederkassel-Lülsdorf')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/preview/preview.DSCF4901.JPG')
    .build()

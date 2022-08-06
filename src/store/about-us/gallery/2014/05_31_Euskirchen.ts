import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-05-31'))
    .location('Euskirchen')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5061.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5067.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5073.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5075.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5077.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5080.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5082.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5088.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5091.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5093.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5096.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5102.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5107.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5112.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5116.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5119.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5124.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5126.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5127.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5130.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/DSCF5132.JPG').build(),
    ])
    .title('Euskirchen')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_31_Euskirchen/preview/preview.DSCF5096.JPG')
    .build()

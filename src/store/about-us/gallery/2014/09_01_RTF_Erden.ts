import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom('2014-09-01')
    .location('Erden')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-01.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-02.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-03.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-04.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-05.JPG').build(),
    ])
    .title('RTF Erden')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/preview/preview.erden-02.JPG')
    .build()

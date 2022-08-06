import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom('2014-06-19')
    .location('Erkelenz')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00033.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00034.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00035.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00036.jpg').build(),
    ])
    .title('Erkelenz')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/preview/preview.CAM00034.jpg')
    .build()

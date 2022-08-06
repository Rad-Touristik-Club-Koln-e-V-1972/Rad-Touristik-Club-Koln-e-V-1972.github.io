import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .date('2014-07-13')
    .location('Eslohe')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00544.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00551.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00567.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00569.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00571.jpg').build(),
    ])
    .title('Eslohe')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/preview/preview.IMG-20140712-00551.jpg')
    .build()

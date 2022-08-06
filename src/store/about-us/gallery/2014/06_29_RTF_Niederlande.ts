import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .date('2014-06-29')
    .location('Niederlande')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-01.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-02.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-03.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-04.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-05.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-06.jpg').build(),
    ])
    .title('RTF Niederlande')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/preview/preview.rtc-ndl-01.jpg')
    .build()

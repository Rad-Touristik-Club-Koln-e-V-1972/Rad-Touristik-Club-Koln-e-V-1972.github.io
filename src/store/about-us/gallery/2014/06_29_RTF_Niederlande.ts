import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-06-29'))
    .location('Niederlande')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-01.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-02.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-03.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-04.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-05.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-06.jpg').previewUrl().build())
    .title('RTF Niederlande')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/preview/preview.rtc-ndl-01.jpg')
    .build()

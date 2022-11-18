import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-06-29')
    .setLocation('Niederlande')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-01.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-02.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-03.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-04.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-05.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-06.jpg').build(),
    ])
    .setTitle('RTF Niederlande')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/preview/preview.rtc-ndl-01.jpg')
    .build()

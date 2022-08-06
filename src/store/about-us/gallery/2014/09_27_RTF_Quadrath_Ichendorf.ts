import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-09-27'))
    .location('Quadrath-Ichendorf')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-01.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-02.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-03.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-04.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-05.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-06.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-07.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-08.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath/rtc-quadrath-09.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-10.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-11.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-12.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-13.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-14.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-15.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-16.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-17.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-18.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-19.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-20.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-21.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-22.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/rtc-quadrath-23.jpg').build(),
    ])
    .title('RTF Quadrath-Ichendorf')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_27_RTF_Quadrath_Ichendorf/preview/preview.rtc-quadrath-21.jpg')
    .build()

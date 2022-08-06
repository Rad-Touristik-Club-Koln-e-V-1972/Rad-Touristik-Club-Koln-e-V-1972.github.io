import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2015-12-31'))
    .location('Köln')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150308.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150418.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150506a.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150506b.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150506c.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150510.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150517.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150527.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150605a.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150605b.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150605c.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150607.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150628_Siegerehrung_Photo-Hyou-Vielz.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150804-1.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150804-2.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150804-3.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150809-1.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150809-2.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150830-1.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/150830-2.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/151003-1.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/151003-2.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/151011-1.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/151011-2.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/rtc-984-intro-2015.jpg').build(),
    ])
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2015/Rueckblick/preview/preview.150804-2.jpg')
    .build()

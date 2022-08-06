import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2014-04-03'))
    .location('Erich Fischer')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/140403b.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4836.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4837.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4838.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4839.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4841.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4842.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4843.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4848.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4849.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/ErichFischerMitRad.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/05_15_Presseartikel_95_Geburtstag.jpg').build(),
    ])
    .title('Geburtstag Erich Fischer')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/preview/preview.ErichFischerMitRad.jpg')
    .build()

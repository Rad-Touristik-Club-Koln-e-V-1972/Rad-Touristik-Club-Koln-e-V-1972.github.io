import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom('2014-04-08')
    .location('Flandern, Belgien')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (10).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (11).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (12).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (13).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (1).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (2).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (3).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (4).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (61).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (6).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (7).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (8).JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (9).JPG').build(),
    ])
    .title('Flandern')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/preview/preview.CIMG1 (6).JPG')
    .build()

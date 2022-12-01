import GalleryBuilder from '~/models/builder/about-us/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-04-08')
    .setLocation('Flandern, Belgien')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (10).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (11).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (12).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (13).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (1).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (2).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (3).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (4).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (61).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (6).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (7).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (8).JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (9).JPG').build(),
    ])
    .setTitle('Flandern')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/preview/preview.CIMG1 (6).JPG')
    .build()

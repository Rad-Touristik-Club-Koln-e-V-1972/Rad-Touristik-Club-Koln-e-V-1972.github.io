import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-09-01')
    .setLocation('Erden')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-01.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-02.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-03.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-04.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-05.JPG').build(),
    ])
    .setTitle('RTF Erden')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/preview/preview.erden-02.JPG')
    .build()

import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-06-19')
    .setLocation('Erkelenz')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00033.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00034.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00035.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00036.jpg').build(),
    ])
    .setTitle('Erkelenz')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/preview/preview.CAM00034.jpg')
    .build()

import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-27')
    .setLocation('Rösrath-Forsbach')
    .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/rtc-forsbach-tour-flyer-2018.jpg').build())
    .setTitle('46. Forsbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/preview/preview.rtc-forsbach-tour-flyer-2018.jpg')
    .build()

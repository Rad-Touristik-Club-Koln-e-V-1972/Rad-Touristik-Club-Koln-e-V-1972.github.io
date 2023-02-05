import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-27')
    .setId('91ca0564-2aeb-4094-8d8b-5fa3b943a76c')
    .setImages(
        new GalleryEntryBuilder()
            .setId('de1e9844-2c80-4a50-b5dd-b8bbfd605ed0')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/rtc-forsbach-tour-flyer-2018.jpg')
            .build()
    )
    .setLocation('Rösrath-Forsbach')
    .setTitle('46. Forsbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/preview/preview.rtc-forsbach-tour-flyer-2018.jpg')
    .build()

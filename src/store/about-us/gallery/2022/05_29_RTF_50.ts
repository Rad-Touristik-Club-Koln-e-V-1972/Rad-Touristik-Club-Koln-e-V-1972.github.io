import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'
import K1 from '~/store/about-us/gallery/2022/05_29_RTF_50/K1'
import K2 from '~/store/about-us/gallery/2022/05_29_RTF_50/K2'
import K3_K5 from '~/store/about-us/gallery/2022/05_29_RTF_50/K3_K5'
import K4 from '~/store/about-us/gallery/2022/05_29_RTF_50/K4'
import K6 from '~/store/about-us/gallery/2022/05_29_RTF_50/K6'
import StartZiel from '~/store/about-us/gallery/2022/05_29_RTF_50/Start_Ziel'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2022-05-29')
    .setLocation('Rösrath-Forsbach')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/rtc-forsbach-tour-flyer1-2022.png').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/rtc-forsbach-tour-flyer2-2022.png').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/Zugbeutel.jpeg').build(),
    ])
    .setImages(K1)
    .setImages(K2)
    .setImages(K3_K5)
    .setImages(K4)
    .setImages(K6)
    .setImages(StartZiel)
    .setTitle('50. Forsbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/preview/preview.rtc-forsbach-tour-flyer1-2022.png')
    .build()

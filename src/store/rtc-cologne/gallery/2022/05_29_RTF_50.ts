import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'
import K1 from '~/store/rtc-cologne/gallery/2022/05_29_RTF_50/K1'
import K2 from '~/store/rtc-cologne/gallery/2022/05_29_RTF_50/K2'
import K3_K5 from '~/store/rtc-cologne/gallery/2022/05_29_RTF_50/K3_K5'
import K4 from '~/store/rtc-cologne/gallery/2022/05_29_RTF_50/K4'
import K6 from '~/store/rtc-cologne/gallery/2022/05_29_RTF_50/K6'
import StartZiel from '~/store/rtc-cologne/gallery/2022/05_29_RTF_50/Start_Ziel'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2022-05-29')
    .setId('6c8d3c67-203c-4cf1-b1da-ef8c3b7dc868')
    .setImages([
        new GalleryEntryBuilder()
            .setId('dc645f0f-eca8-470c-a629-45cb5b8e04a4')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/rtc-forsbach-tour-flyer1-2022.png')
            .build(),
        new GalleryEntryBuilder()
            .setId('cfda5413-aed1-4a1b-8d10-0dec402f15b1')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/rtc-forsbach-tour-flyer2-2022.png')
            .build(),
        new GalleryEntryBuilder().setId('0b9650bd-3449-4d9d-b17f-7cdad2d78af5').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/Zugbeutel.jpeg').build(),
    ])
    .setImages(K1)
    .setImages(K2)
    .setImages(K3_K5)
    .setImages(K4)
    .setImages(K6)
    .setImages(StartZiel)
    .setLocation('Rösrath-Forsbach')
    .setTitle('50. Forsbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/preview/preview.rtc-forsbach-tour-flyer1-2022.png')
    .setYoutubeVideoIds('bx0zAC-A-fg')
    .build()

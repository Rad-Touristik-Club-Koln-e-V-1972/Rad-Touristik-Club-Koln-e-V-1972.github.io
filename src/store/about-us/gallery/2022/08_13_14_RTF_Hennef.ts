import GalleryBuilder from '~/models/builder/about-us/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2022-08-13', '2022-08-14')
    .setId('fb982b9c-abf8-457c-b1f4-10b360bf235d')
    .setLocation('Hennef')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/9b3c9cdc-bd80-49ed-b0e3-c296198ab8a4.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0116.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0119.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0125.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0139.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0149.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0150.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5026.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5028.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5033.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5040.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5041.jpg').build(),
    ])
    .setTitle('RTF Hennefer Hitzetage')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/preview/preview.IMG_0116.JPG')
    .build()

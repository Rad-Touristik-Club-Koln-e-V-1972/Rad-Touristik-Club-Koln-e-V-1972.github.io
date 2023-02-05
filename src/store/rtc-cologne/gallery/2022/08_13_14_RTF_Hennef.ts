import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2022-08-13', '2022-08-14')
    .setId('fb982b9c-abf8-457c-b1f4-10b360bf235d')
    .setImages([
        new GalleryEntryBuilder()
            .setId('15fd80e3-c0a5-4931-9273-79677731cbf2')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/9b3c9cdc-bd80-49ed-b0e3-c296198ab8a4.JPG')
            .build(),
        new GalleryEntryBuilder().setId('4b864bd8-9af3-450b-8a35-219df2aaa5bc').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0116.JPG').build(),
        new GalleryEntryBuilder().setId('5766cc68-be79-48ff-9ae2-1e698db0f3e2').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0119.JPG').build(),
        new GalleryEntryBuilder().setId('694a95bc-2ba2-4193-9407-b193a7724cab').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0125.JPG').build(),
        new GalleryEntryBuilder().setId('44187896-031c-42fe-bbc0-f7ba6f10213a').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0139.JPG').build(),
        new GalleryEntryBuilder().setId('e9624265-6c88-4ded-a34d-c578ba0e4e0f').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0149.jpg').build(),
        new GalleryEntryBuilder().setId('0c115f15-8371-4399-b105-e982784be4d9').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0150.JPG').build(),
        new GalleryEntryBuilder().setId('c7a56159-8815-41d6-a0d0-3a5f576ea13d').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5026.jpg').build(),
        new GalleryEntryBuilder().setId('19a3c27a-3418-4d6f-85a6-81593b4a2858').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5028.jpg').build(),
        new GalleryEntryBuilder().setId('c703985d-c52b-46c6-a3ab-c35931512828').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5033.jpg').build(),
        new GalleryEntryBuilder().setId('ba15228e-eee7-4228-98ce-ad7b0559489b').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5040.jpg').build(),
        new GalleryEntryBuilder().setId('d7cb8156-6bc3-40d2-82bf-a82584078b78').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5041.jpg').build(),
    ])
    .setLocation('Hennef')
    .setTitle('RTF Hennefer Hitzetage')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/preview/preview.IMG_0116.JPG')
    .build()

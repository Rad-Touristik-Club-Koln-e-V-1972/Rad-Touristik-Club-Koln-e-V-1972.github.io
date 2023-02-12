import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-02-04')
    .setId('ac7d6f63-20c4-4088-ab8e-2c7030c9fd44')
    .setImages([
        new GalleryEntryBuilder().setId('21499548-8c89-410e-b4d9-e58f9851c6f1').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_11_Jeck_Im_Dreck_CTF/image0.jpeg').build(),
        new GalleryEntryBuilder().setId('98e9a979-6901-4b01-9c32-46d04362ed76').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_11_Jeck_Im_Dreck_CTF/image1.jpeg').build(),
    ])
    .setLocation('Hennef')
    .setTitle('😃 RTC GOES CTF')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_11_Jeck_Im_Dreck_CTF/preview/preview.image0.jpeg')
    .build()

import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-01-22')
    .setId('c8136f59-6fea-468d-914d-31a828e1a184')
    .setImages([
        new GalleryEntryBuilder()
            .setId('27023a53-d3cd-4f85-8964-37ef72aa713d')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/4f7cc978-6ec6-465a-8a3a-bf007b4b085b-5591326.JPG')
            .build(),
        new GalleryEntryBuilder()
            .setId('a1f8238e-9b64-403c-9658-b21df5fa018a')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/6de5ada1-c64c-4cd7-9efb-44b45815d5c0-5591326.JPG')
            .build(),
        new GalleryEntryBuilder()
            .setId('e0f25827-c7f1-4279-bd84-194037e882d6')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/8835f4c2-9140-4ee1-a7cf-c8e84e47df16.JPG')
            .build(),
        new GalleryEntryBuilder()
            .setId('69403c3e-7fbc-4b26-83e3-9a4d084ff9cc')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/22814a2f-3c1f-4ed9-af60-46258e576083-5591326.JPG')
            .build(),
        new GalleryEntryBuilder()
            .setId('a3dbce57-aeea-40d1-8e38-40db38f32a7e')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/d6660536-2365-4f9e-b8bf-63ffdce5bd19-5591326.JPG')
            .build(),
    ])
    .setLocation('Waltrop')
    .setTitle('Sonntag, Schnee, Kälte')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/preview/preview.4f7cc978-6ec6-465a-8a3a-bf007b4b085b-5591326.JPG')
    .build()

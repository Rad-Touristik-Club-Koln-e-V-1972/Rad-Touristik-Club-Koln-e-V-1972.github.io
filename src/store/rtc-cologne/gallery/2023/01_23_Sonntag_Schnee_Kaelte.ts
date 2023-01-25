import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-01-22')
    .setId('c8136f59-6fea-468d-914d-31a828e1a184')
    .setLocation('Waltrop')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/4f7cc978-6ec6-465a-8a3a-bf007b4b085b-5591326.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/6de5ada1-c64c-4cd7-9efb-44b45815d5c0-5591326.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/8835f4c2-9140-4ee1-a7cf-c8e84e47df16.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/22814a2f-3c1f-4ed9-af60-46258e576083-5591326.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/d6660536-2365-4f9e-b8bf-63ffdce5bd19-5591326.JPG').build(),
    ])
    .setTitle('Sonntag, Schnee, Kälte')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_23_Sonntag_Schnee_Kaelte/preview/preview.4f7cc978-6ec6-465a-8a3a-bf007b4b085b-5591326.JPG')
    .build()

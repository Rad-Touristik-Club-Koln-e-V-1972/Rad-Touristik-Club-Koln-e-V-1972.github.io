import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2020-12-31')
    .setId('38ac1bef-2ff3-4783-bbe1-f599232f051a')
    .setImages([
        new GalleryEntryBuilder().setId('7650d9b2-8e5c-4ccf-9113-888bee2e28a6').setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-957-intro-2020.jpg').build(),
        new GalleryEntryBuilder().setId('2c907d3d-385c-4d13-8da2-9e7991b04e42').setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/Ostern_Coronavirus.jpg').build(),
        new GalleryEntryBuilder().setId('f82820e8-9381-409a-b007-54fafdcbbf0f').setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-958-intro-2020.jpg').build(),
        new GalleryEntryBuilder().setId('959e31f1-022b-4b7a-b032-a508e57f98dc').setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-959-intro-2020.jpg').build(),
        new GalleryEntryBuilder()
            .setId('08327ba7-abd1-49a6-8653-5eadfe7e0cbc')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer1-2020.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('c452efd6-dca6-4bbe-be76-3f2bd1829813')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer2-2020.jpg')
            .build(),
    ])
    .setLocation('Köln')
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/preview/preview.rtc-957-intro-2020.jpg')
    .build()

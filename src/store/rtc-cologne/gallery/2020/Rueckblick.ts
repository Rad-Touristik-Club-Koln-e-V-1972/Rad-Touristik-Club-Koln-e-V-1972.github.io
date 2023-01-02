import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2020-12-31')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-957-intro-2020.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/Ostern_Coronavirus.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-958-intro-2020.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-959-intro-2020.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer1-2020.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/rtc-forsbach-tour-flyer2-2020.jpg').build(),
    ])
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2020/Rueckblick/preview/preview.rtc-957-intro-2020.jpg')
    .build()

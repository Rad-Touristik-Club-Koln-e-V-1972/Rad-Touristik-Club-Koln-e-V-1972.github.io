import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .setDate('2017-12-31')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/170305.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/170311.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/170504.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/171029-1.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/171029-2.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/171217.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/180106.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/180116.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/180202a.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/180202b.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/180202c.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/191206.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/rtc-971-intro-2017.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/rtc-972-intro-2017.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/rtc-976-intro-2017.jpg').build(),
    ])
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2017/Rueckblick/preview/preview.171029-2.jpg')
    .build()

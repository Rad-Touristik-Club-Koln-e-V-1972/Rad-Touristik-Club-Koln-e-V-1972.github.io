import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .setDate('2018-12-31')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_134037_44800649975_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_134042_44800649865_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_134102_44800648825_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_134106_44800648545_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_134113_44800647875_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_140755_44989968874_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_140801_44800647415_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_140824_44989968604_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_140826_44989968534_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_141544_44800647175_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_141550_31842835598_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/20181014_141621_45714619211_o.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/rtc-966-intro-2018.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/rtc-970-intro-2018.jpg').build(),
    ])
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2018/Rueckblick/preview/preview.rtc-966-intro-2018.jpg')
    .build()

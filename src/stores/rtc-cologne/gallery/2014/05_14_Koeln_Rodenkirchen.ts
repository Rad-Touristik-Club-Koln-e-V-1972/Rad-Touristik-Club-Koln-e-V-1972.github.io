import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-05-14')
    .setId('f1cbd1ae-f497-4912-9cb0-f3c33a0b1355')
    .setImages([
        new GalleryEntryBuilder()
            .setId('8729e070-83c2-4406-9da2-7ff8d80ede76')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-01.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('1730e5de-aa2a-42c0-8760-54db0b668fad')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-02.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('be5d6d18-b108-4e7e-b8c9-7bd8462efbea')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-03.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('330f97ac-8f49-4fc2-87ce-173bb83a14f6')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-04.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('f48a74a8-0c76-46f7-b111-6bf12c6246cb')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-05.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('5cd753e8-8a20-4558-9a22-2c155012cc89')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-06.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('f1959d7c-0d6e-4961-a02a-9e7764288afd')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-07.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('4f43e3ce-883a-4ed0-9386-16bc8dbf5a8f')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-08.jpg')
            .buildGalleryEntry(),
    ])
    .setLocation('Köln-Rodenkirchen')
    .setTitle('Köln-Rodenkirchen')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/preview/preview.rtc-rod-03.jpg')
    .buildGallery()

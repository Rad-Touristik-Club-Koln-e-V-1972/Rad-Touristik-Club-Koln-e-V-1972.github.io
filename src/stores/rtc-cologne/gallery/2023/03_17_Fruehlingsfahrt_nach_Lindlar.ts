import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-03-17')
    .setId('db15854a-bfad-486d-9a6d-916946b4050b')
    .setImages([
        new GalleryEntryBuilder()
            .setId('71dda773-b0e4-4fc5-8842-316ff60b3048')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/03_17_Fruehlingsfahrt_nach_Lindlar/image0.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('d4b17242-002a-43fd-9e4a-26c804446abc')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/03_17_Fruehlingsfahrt_nach_Lindlar/image1.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('88c69e37-3c3f-4706-9906-5b2b56fcc345')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/03_17_Fruehlingsfahrt_nach_Lindlar/image2.jpeg')
            .buildGalleryEntry(),
    ])
    .setLocation('Lindlar')
    .setTitle('Frühlingsfahrt nach Lindlar')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/03_17_Fruehlingsfahrt_nach_Lindlar/preview/preview.image0.jpeg')
    .setYoutubeVideoIds('L7zfQ9t1ZM0')
    .buildGallery()

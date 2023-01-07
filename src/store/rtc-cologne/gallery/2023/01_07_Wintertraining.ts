import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-01-07')
    .setId('bd6f7533-efaa-45f9-895f-11a419363bfa')
    .setLocation('Heimerzheim')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image0.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image1.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image2.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image3.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image4.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image5.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image6.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image7.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/image8.jpeg').build(),
    ])
    .setTitle('Wintertraining 2023')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_07_Wintertraining/preview/preview.image0.jpeg')
    .build()

import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-03-03')
    .setId('1c843630-1346-4af8-ad7b-10009b1b694e')
    .setImages([
        new GalleryEntryBuilder()
            .setId('f12a10c2-fc4d-44ba-a0ff-e747226b3625')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/03_03_Generationenwechsel/IMG_6157.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('4a2f521a-0dfe-4388-80e5-8658de8a0b65')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/03_03_Generationenwechsel/IMG_6154.jpg')
            .build(),
    ])
    .setLocation('Köln')
    .setTitle('Generationenwechsel')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/03_03_Generationenwechsel/preview/preview.IMG_6157.jpg')
    .build()

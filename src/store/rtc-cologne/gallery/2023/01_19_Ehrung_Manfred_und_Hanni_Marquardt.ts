import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-01-19')
    .setId('52c09122-f041-4b5b-8ae1-a581ccf77dd4')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_19_Ehrung_Manfred_und_Hanni_Marquardt/image1.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_19_Ehrung_Manfred_und_Hanni_Marquardt/image2.jpeg').build(),
    ])
    .setTitle('Ehrung Manfred & Hanni Marquardt')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_19_Ehrung_Manfred_und_Hanni_Marquardt/preview/preview.image2.jpeg')
    .build()

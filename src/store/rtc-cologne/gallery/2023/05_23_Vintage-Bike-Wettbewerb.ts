import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-23')
    .setId('3013dff8-2924-458e-b990-dc9a8871077a')
    .setImages([
        new GalleryEntryBuilder()
            .setId('5f371ddd-582f-41fc-9530-da01bc2f0e7c')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_23_Vintage-Bike-Wettbewerb/image0.jpeg')
            .build(),
    ])
    .setLocation('Köln')
    .setTitle('Vintage-Bike-Wettbewerb')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_23_Vintage-Bike-Wettbewerb/preview/preview.image0.jpeg')
    .build()

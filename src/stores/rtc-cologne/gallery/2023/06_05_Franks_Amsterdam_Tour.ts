import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-06-05')
    .setId('4ddfb09a-bc1b-42d9-bf73-5a0bb7ff1978')
    .setImages([
        new GalleryEntryBuilder()
            .setId('23d43085-69bd-4dea-820b-3515047a2ba0')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/06_05_Franks_Amsterdam_Tour/image0.jpeg')
            .build(),
    ])
    .setLocation('Amsterdam')
    .setTitle("Frank's Amsterdam Tour")
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/06_05_Franks_Amsterdam_Tour/preview/preview.image0.jpeg')
    .build()

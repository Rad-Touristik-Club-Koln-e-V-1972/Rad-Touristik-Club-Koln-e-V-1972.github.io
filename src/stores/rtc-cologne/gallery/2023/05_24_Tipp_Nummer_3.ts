import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-24')
    .setId('e2ab13b0-d2f7-482b-864c-f5affec8863c')
    .setImages([
        new GalleryEntryBuilder()
            .setId('b0bcf209-d6bd-4521-b49e-536e8cc1a70f')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_24_Tipp_Nummer_3/signal-2023-05-14-193808_002.jpeg')
            .build(),
    ])
    .setLocation('Köln')
    .setTitle('➡️ Tipp Nummer 3')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_24_Tipp_Nummer_3/preview/preview.signal-2023-05-14-193808_002.jpeg')
    .build()

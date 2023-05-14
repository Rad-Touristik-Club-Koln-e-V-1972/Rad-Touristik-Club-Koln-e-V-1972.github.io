import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-14')
    .setId('2930ebbb-07ea-41f9-bd56-73b3425c4284')
    .setImages([
        new GalleryEntryBuilder()
            .setId('55cc6ae1-51ef-4e6a-9cbb-2b19a5cd8358')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_14_Paris-Brest-Paris_Qualifikation/image0.jpeg')
            .build(),
    ])
    .setLocation('Deutschland, Niederlande & Belgien')
    .setTitle('Paris-Brest-Paris Qualifikation')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_14_Paris-Brest-Paris_Qualifikation/preview/preview.image0.jpeg')
    .build()

import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2022-12-31')
    .setId('bf41ab6b-8ff4-492f-a501-1efe4d99ef62')
    .setImages([
        new GalleryEntryBuilder()
            .setId('597f5216-a084-4eb1-816b-319faad3de19')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/Nachruf_Klaus_Napierala.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('312ba134-7b15-40b3-bc9c-6573aa4d751e')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-05_roadbike.pdf')
            .setPreviewUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/preview/preview.2022-05_roadbike.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('c536dd11-09ad-42b7-8323-91ea4e5dae58')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-11-14_porz-am-montag.jpg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('df2be4cf-075e-48d1-bdbf-7b13a801a9a5')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/2022-12-06_porz-im-blick.jpg')
            .buildGalleryEntry(),
    ])
    .setLocation('Köln')
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/Rueckblick/preview/preview.2022-05_roadbike.jpeg')
    .buildGallery()

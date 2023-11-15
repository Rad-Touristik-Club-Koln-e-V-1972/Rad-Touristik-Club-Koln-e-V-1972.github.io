import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-22')
    .setId('91b934e0-8a3a-4934-8965-8a1bf7beae87')
    .setImages([
        new GalleryEntryBuilder()
            .setId('8f379cf7-5961-4d83-b57f-d96fe644abd2')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_22_RTCKoeln_TIPP_Nummer_2/signal-2023-05-14-193529_002.jpeg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Köln')
    .setTitle('rtckoeln 👍TIPP Nummer 2')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_22_RTCKoeln_TIPP_Nummer_2/signal-2023-05-14-193529_002.jpeg.avif')
    .buildGallery()

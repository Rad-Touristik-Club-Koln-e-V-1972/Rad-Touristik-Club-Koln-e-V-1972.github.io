import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2019-12-31')
    .setId('c896e9f3-6fba-43e0-85a0-385b06c0fa11')
    .setImages(
        new GalleryEntryBuilder()
            .setId('8f37bf18-d319-4577-9c6c-9444213c190c')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2019/Rueckblick/rtc-960-intro-2019.jpg.avif')
            .buildGalleryEntry(),
    )
    .setLocation('Köln')
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2019/Rueckblick/rtc-960-intro-2019.jpg.avif')
    .buildGallery()
